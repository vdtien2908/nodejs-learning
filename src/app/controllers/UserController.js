class UserController {
    // [GET] /user
    index(req, res) {
        res.render('pages/users/index', {
            title: 'User Page',
        });
    }

    // [GET] /user/create
    create(req, res) {
        res.render('pages/users/create');
    }
}

export default new UserController();
