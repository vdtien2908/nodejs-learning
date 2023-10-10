class HomeController {
    // [GET] /
    index(req, res) {
        res.render('pages/home/index', {
            title: 'Trang home',
            page_name: '/',
        });
    }
}

export default new HomeController();
