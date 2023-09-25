class UserController {
    // [GET] /user
    index(req, res) {
        res.render('pages/users/index');
    }

    // [GET] /user/create
    create(req, res) {
        res.render('pages/users/create');
    }
}

export default new UserController();
