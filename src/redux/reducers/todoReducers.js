

import {ADD_TODO, TOGGLE_TODO} from '../actions/todoActions'

const initialState = {
    todos:[
        {"text":"Go to gym",completed:false},
        {"text":"Meet at 10pm",completed:true}
    ],
}

export function todoReducer(state= initialState,action){

    switch(action.type){
        case ADD_TODO:
            return{
                ...state,
                todos:[
                    ...state.todos,
                    {
                        text:action.text,
                        completed : false,
                    }
                ]
            }
        case TOGGLE_TODO:
            return{
                ...state,
                todos:state.todos.map((todo,index)=>{
                    if(index === action.index){
                        todo.completed = !todo.completed
                    }
                    return todo;
                })
            }
        default:
            return state;
    }
}