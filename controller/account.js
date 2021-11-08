exports.user = (req, res, next) => {
    const user = req.user;

    if (!user) res.redirect('/');

    res.render('account', {user: user});
};