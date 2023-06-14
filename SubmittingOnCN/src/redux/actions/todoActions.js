
// actions
const ADD_TODO = "ADD_TODO"
const TOGGLE_TODO = "TOGGLE_TODO"


// actions Creators
const addTodo = (text) =>({text,type:ADD_TODO})
const toggleTodo = (index) =>({index,type:TOGGLE_TODO})
