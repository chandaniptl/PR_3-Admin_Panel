const express = require('express');
const app = express();
const port = 3003;

app.set("view engine", "ejs");
app.use(express.static("public"));

//  Home route
app.get("/", (req, res) => {
    res.render("index");
});

// Tables page
app.get("/tables", (req, res) => {
    res.render("pages/tables"); 
});

// Form - Basic page
app.get("/form-basic", (req, res) => {
    res.render("pages/form-basic"); 
});

// Form - Wizard page
app.get("/form-wizard", (req, res) => {
    res.render("pages/form-wizard"); 
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is running at: http://localhost:${port}`);
    }
});
