const express = require("express");
app = express();

let employers = [
    {
        username: "Worker1",
        salary: 1000
    },
    {
        username: "Worker2",
        salary: 1200
    },
    {
        username: "Worker3",
        salary: 700
    }
];

app.get("/employers", (req, res) => {
    res.send(employers);
});


app.listen(3000, () => console.log("App listen port 3000"));