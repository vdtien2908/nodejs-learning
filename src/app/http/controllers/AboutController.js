class AboutController {
    // [GET] /about
    async index(req, res) {
        res.render('pages/about', {
            title: 'Giới thiệu',
            page_name: 'about',
        });
    }
}

export default new AboutController();
