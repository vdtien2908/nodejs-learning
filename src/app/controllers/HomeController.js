class HomeController {
    // [GET] /
    index(req, res) {
        res.render('pages/home/index');
    }
}

export default new HomeController();
