import express from 'express';

var app = express();
var port = 3000;

app.get('/', function(req, res) {
    var today = new Date();
    var day = today.getDay();
    if (day === 0 || day === 6)
    {
        res.render("index.ejs", {
            weekend: true,
        })
    }
    else
    {
        res.render("index.ejs", {
            weekend: false,
        })
    }
});

app.listen(port, () => {
    console.log('listening on port');
});