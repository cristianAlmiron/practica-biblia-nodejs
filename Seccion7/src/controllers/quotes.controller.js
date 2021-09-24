const path = require('path');
const DB_PATH = path.join(__dirname + '../data/db.json');
let db = require(DB_PATH);
const fs = require('fs');

const render = (file, res) => {
    return res.sendFile(path.join(__dirname + `../../src/views/${file}.html`));
}

class QuotesController {
    async index(req, res) {
        return render('quotes', res);
    }

    async get(req, res) {
        return res.send(db);
    }

    async add(req, res) {
        const { body: quotes } = req;
        const lastQuote = db[db.length - 1];
        const { id } = lastQuote;
        quotes.id = id + 1;
        db.push(quote);
        fs.writeFileSync(DB_PATH, JSON.stringify(db));
        return res.status(201).send();
    }
}

module.export = new QuotesController();