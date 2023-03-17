let array = [
  {
    number: "1",
    id: "1",
  },
  {
    number: "2",
    id: "2",
  },
  {
    number: "3",
    id: "3",
  },
];

const getTodo=(req, res) => {
  res.send(array);
}
const createTodo=(req, res) => {
  const todo = {
    number: req.body.value,
    id: array.length + 1,
  };
  array.push(todo);
  res.status(200).json(array);
}

const deleteTodo=(req, res) => {
  array.splice(req.body.id,1);
  res.status(200).json(array);
}
module.exports={getTodo,createTodo,deleteTodo}
