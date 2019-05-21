const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const config = require("../../config/config.json");

module.exports.getWork = (req, res) => {
  const work = mongoose.model("work");
  work.find().then(items => {
    res.status(200).json({ slides: items });
  });
};

module.exports.createWork = (req, res) => {
  //создаем новую запись блога и передаем в нее поля из формы
  const Model = mongoose.model("work");

  let item = new Model({
    title: req.body.title,
    tech: req.body.tech,
    link: req.body.link,
    file: req.file
  });
  //сохраняем запись в базе
  item
    .save()
    .then(item => {
      return res.status(201).json(item);
    })
    .catch(err => {
      res
        .status(400)
        .send(`При добавление записи произошла ошибка:  + ${err.message}`);
    });
};
module.exports.sendEmail = (req, res, next) => {
  if (!req.body.name || !req.body.email || !req.body.text) {
    //если что-либо не указано - сообщаем об этом
    return res.send("Все поля нужно заполнить!");
  }
  const transporter = nodemailer.createTransport(config.mail.smtp);
  const mailOptions = {
    from: `"${req.body.name}" <${req.body.email}>`,
    to: config.mail.smtp.auth.user,
    subject: config.mail.subject,
    text:
      req.body.text.trim().slice(0, 500) +
      `\n Отправлено с: <${req.body.email}>`
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      return res.send("При отправке письма произошла ошибка: " + error.message);
    }
    res.send("Письмо успешно отправлено");
  });
};
