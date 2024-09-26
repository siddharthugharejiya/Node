const express = require('express');
const path = require('path');
const app = express();
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let todo = [];


app.get("/", (req, res) => {
    res.render("todo", { todo });
});


app.get("/add", (req, res) => {
    res.render("add");
});

app.post("/add", (req, res) => {
    const { task } = req.body;
    todo.push({ id: todo.length + 1, task, completed: false });
    res.redirect("/");
});


app.post("/complete/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const t = todo.find(el => el.id === id);
    if (t) {
        t.completed = !t.completed;
    }
    res.redirect("/");
});


app.post("/delete/:id", (req, res) => {
    const id = parseInt(req.params.id);
    todo = todo.filter(el => el.id !== id);
    res.redirect("/");
});


app.get("/edit/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const Edit = todo.find(el => el.id === id);
    if (Edit) {
        res.render("edit", { task: Edit });
    } else {
        res.redirect("/");
    }
});

// Route to handle the form submission for editing a task
app.post("/edit/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { task } = req.body;
    const t = todo.find(el => el.id === id);
    if (t) {
        t.task = task;
    }
    res.redirect("/");
});

app.listen(9595, () => {
    console.log("Server is running on http://localhost:9595");
});
