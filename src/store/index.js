import { combineReducers, createStore } from 'redux';
import { filterReducer } from './filterReducer';
import { TodosReducer } from './TodosReducer';


 const store = createStore(combineReducers({
	todos : TodosReducer,
	filter : filterReducer
}))

export default store;
