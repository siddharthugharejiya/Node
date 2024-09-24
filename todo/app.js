const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

let todo = [];

app.get('/', (req, res) => {
    res.render("todo", { todo });
});

app.get("/add", (req, res) => {
    res.render("add");
});

app.post("/add", (req, res) => {
    const { task } = req.body;
    todo.push({ id: todo.length + 1, task });
    res.redirect('/');
});

app.get("/edit/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const taskToEdit = todo.find(el => el.id === id);
    res.render("edit", { taskToEdit });
});

app.post("/edit/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const updatedTask = req.body.task;
    todo = todo.map(el => el.id === id ? { id: el.id, task: updatedTask } : el);
    res.redirect('/');
});

app.post("/delete/:id", (req, res) => {
    const id = parseInt(req.params.id);
    todo = todo.filter(el => el.id !== id);
    res.redirect('/');
});

app.listen(9595, () => {
    console.log("server is running on port 9595");
});
