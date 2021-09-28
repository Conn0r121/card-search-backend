const app = require('express')();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`its alive on http://localhost:${PORT}`)
);

app.get('/card', (req, res) => {
    const test = req.query.id;
    res.status(200).send({
        name: 'static orb',
        id: test
    });
});