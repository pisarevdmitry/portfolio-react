module.exports = (req, res, next) => {
    // если в сессии текущего пользователя есть пометка о том, что он является
    // администратором
    console.log(req.session.isAdmin);
    if (req.session.isAdmin) {
        //то всё хорошо :)
        return next();
    }
    //если нет, то перебросить пользователя на главную страницу сайта
    res.redirect('/');
};