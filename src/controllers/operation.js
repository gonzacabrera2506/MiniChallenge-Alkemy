const controllerOperation = {};

controllerOperation.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM operation', (err, operations) => {
            if (err) {
                res.json(err);
            }
            console.log(operations);
            res.json(operations);
        });
    });
};

controllerOperation.save = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO operation set ?', [data], (err, operation) => {
            if (err) {
                res.json(err);
            }
            console.log(operation);
            res.json(operation);
        });
    });
};

controllerOperation.entryList = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT amount, concept, type FROM operation WHERE type = 'entry'", (err, operations) => {
            if (err) {
                res.json(err);
            }
            console.log(operations);
            res.json(operations);
        });
    });
};

controllerOperation.exitList = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT amount, concept, type FROM operation WHERE type = 'exit'", (err, operations) => {
            if (err) {
                res.json(err);
            }
            console.log(operations);
            res.json(operations);
        });
    });
};

module.exports = controllerOperation;