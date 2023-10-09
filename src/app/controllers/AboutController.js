class AboutController {
    // [GET] /about
    async index(req, res) {
        res.render('pages/about');
    }
}

export default new AboutController();
