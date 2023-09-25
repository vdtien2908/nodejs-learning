class AboutController {
    // [GET] /about
    index(req, res) {
        res.render('pages/about');
    }
}

export default new AboutController();
