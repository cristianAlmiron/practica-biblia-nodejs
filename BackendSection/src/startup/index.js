const express = require('express');

let _express = null;
let _config = null;

class Server {
    constructor({ config, router }) {
        _config = config,
            _express = express.use(router)
    }

    start() {
        return new Promise(resolve => {
            _express.listen(_config.PORT, () => {
                console.log('config: ', _config.APPLICATION_NAME + "API running in the port " + _config.PORT);
            })

            resolve()

        })
    }
}

module.exports = Server;