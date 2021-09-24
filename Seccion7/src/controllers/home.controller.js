const path = require('path');

const render = (file, res) => {
    return res.sendFile(path.join(__dirname + `../../src/views/${file}.html`));
}

class HomeController {
    async index(req, res) {
        return render('home', res);
    }

    async about(req, res) {
        return render('about', res);
    }
}

module.export = new HomeController();