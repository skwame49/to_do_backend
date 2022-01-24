const { response } = require("express");
const{Todo}= require("../models/todo");
//importing todo model to controller

// function functionName(){} old way of naming functions

// const functionName =() =>{
    
// }; new way of naming functions


const getAllTodos = (req, res) => {
    Todo.find()
    .then((response) => {
        res.status(200).send(response);
    })
    .catch((err) =>{
        res.status(500).send("an error occured");
    })
    // res.send("Get all todos");
}

const getTodoById =(req,res) => {
    const id = req.params.id
    Todo.findById(id).then(response => {
        res.status(200).send(response);
    }).catch(err => {
        res.status(500).send("an error occured");
    });
};

const createTodo =(req,res) => {
    const todo = new Todo(req.body);
    todo.save().then(response =>{
        res.status(201).send(response)
    }).catch(err => {
        console.log(err);
        res.status(500).send("an error occured",err);
    })
}


const deleteTodo =(req,res)=>{
    const id = req.params.id;

    Todo.findByIdAndDelete(id)
    .then((response) =>{
        res.status(200).send("Todo with specified ID deleted");
    }).catch((err) =>{
        res.status(500).send("an error occured");
    });
};

const updateTodo =(req,res) =>{
    const id = req.params.id;

    Todo.findByIdAndUpdate({_id: id} , req.body)
    .then((response) => {
        res.status(200).send("Todo with specified ID updated");
    }).catch((err) =>{
        res.status(500).send("an error occured while updating todo");
    });
};

module.exports={
    getAllTodos,
    getTodoById,
    createTodo,
    deleteTodo,
    updateTodo,
}