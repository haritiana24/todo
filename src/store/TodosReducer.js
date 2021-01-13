let id = 2
const initiaState = [
	{id : 1 , title : 'Apprendre react js', completed : false},
	{id : 2 , title : 'Apprendre redux dans react', completed : true}
]

export const ADD_TODO_ACTION = "ADD_TODO_ACTION"
export const UPDATE_TODO_ACTION = "UPDATE_TODO_ACTION"
export const DELETE_TODO_ACTION = "DELETE_TODO_ACTION"

export function TodosReducer(state = initiaState , action){
	switch(action.type){
	case ADD_TODO_ACTION:
            return [...state, {id : ++id , ...action.payload, completed : false}]
    case UPDATE_TODO_ACTION : 
            return state.map(todo =>{
                if(todo.id === action.payload.id){
                    return {...todo, ...action.payload}
                }else{
                    return todo
                }
            })   
    case DELETE_TODO_ACTION : 
            return state.filter(todo => todo.id !== action.payload)        
		default:
			return  state
	}
}