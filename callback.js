const fs = require('fs');

module.exports = {
    requestListener: (req, res) => {

        if (req.url == '/') {
            req.url = "index.html"
        }

        fs.readFile('./static/' + req.url, 'utf-8', (err, data) => {

            if (err) {
                res.writeHead(200, { "content-type": "text/html" });
                res.write(`${err}`);
                res.end();
            } else {

                if (req.url == "index.html") {
                    res.writeHead(200, { "content-type": "text/html" });
                }

                if (req.url == 'stylesheet.css') {
                    res.writeHead(200, { "content-type": "text/css" });
                }

                res.write(data);
                res.end();
            }

        });
    }
}