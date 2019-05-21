const mongoose = require('mongoose');

module.exports.getArticles = (req, res) => {
    const Blog = mongoose.model('blog');
    Blog.find().then(items => {
        res.status(200).json({ articles: items });
    });
};
module.exports.createArticle = (req, res) => {
    //создаем новую запись блога и передаем в нее поля из формы
    const Model = mongoose.model('blog');

    let item = new Model({
        title: req.body.title,
        date: req.body.date,
        body: req.body.text
    });
    //сохраняем запись в базе
    item
        .save()
        .then(item => {
            return res.status(201).json(item);
        })
        .catch(err => {
            res.status(400).send(
                 `При добавление записи произошла ошибка:  + ${err.message}`
            );
        });
};