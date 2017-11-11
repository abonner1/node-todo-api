const mongoose = require('mongoose');

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp')

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
})

// var anotherTodo = new Todo({
//   text: '    Edit this video     '
// }).save().then((doc) => {
//   console.log('Saved todo', doc)
// }, (err) => {
//   console.log('Unable to save todo')
// })

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
})

var user = new User({
  email: 'andrewbonner@example.com   '
}).save().then((doc) => {
  console.log('User saved', doc)
}, (err) => {
  console.log('Unable to save user', err)
})
