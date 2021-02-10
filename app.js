const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const port = process.env.PORT || "8000";

app.get("/", (req, res) => {
    res.status(200).send("CWiCCS: Hello from Sys-Admin!");
});

app.get("/test-get", (req, res) => {
    res.status(200).send("TEST-GET: OK");
});

app.post("/test-post", (req, res) => {
    res.status(200).send("TEST-POST: OK");
    // console.log(JSON.stringify(req.body));
    console.log(req.body);
    console.log(req.headers);
});


app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});


//
// curl -X POST -H "Content-Type: application/json" \                                                                                                                                                                                17 ms
// -d '{"username":"abc","password":"abc"}' -X POST http://localhost:8000/test-post
