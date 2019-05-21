const mongoose = require('mongoose');

module.exports.getSkills = (req, res) => {
    const Skill = mongoose.model('skill');
    Skill.find().then(items => {
        res.status(200).json({items});
    });
};
module.exports.createSkill = (req, res) => {

    //создаем новую запись блога и передаем в нее поля из формы
    const Model = mongoose.model('skill');
  //  console.log(req.body);
    let item = new Model({
        name: req.body.name,
        percents: req.body.percents,
        category: req.body.category
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
module.exports.updateSkills = (req, res) => {
    const data = req.body;
    const Model = mongoose.model('skill');
   new Promise(resolved =>{
       for(let i =0;i<data.length;i++ ) {
           let id = data[i]._id;
           let newDate={
               name:data[i].name,
               percents:data[i].percents,
               type:data[i].type
           };
            Model.findByIdAndUpdate(id,{$set:newDate})
                .catch(err => {
                   res.status(400).json({
                       message: `При обновлении записи произошла ошибка:  + ${err.message}`
                   });
               });
       }
       resolved()
   }).then(() =>{
       res.status(200).send( 'Запись успешно добавлена' )
   })
};







module.exports.deleteSkill = (req, res) => {
    console.log(req.params.id);
    const id = req.params.id;
    const Model = mongoose.model('skill');

    Model.findByIdAndRemove(id)
        .then(item => {
            if (!!item) {
                res.status(200).send( 'Запись успешно удалена' );
            } else {
                res.status(404).send( 'Запись в БД не обнаружена' );
            }
        })
        .catch(err => {
            res.status(400).send(`При удалении записи произошла ошибка: ' + ${err.message}`);
        });
};