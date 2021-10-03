import { storageKeys, getItem, setItem } from '~/util/storage';

export default {
  namespaced : true,
  state(){
    return {
      todos : []
    };
  },
  mutations : {
    getTodos(state){
      state.todos = getItem(storageKeys.todos, []);

    }, 
    setTodos(state){
      setItem(storageKeys.todos, state.todos);
    },
    addTodo(state, text){
      state.todos.push({ 
        id : Date.now() + Math.random(),
        text,
        isCompleted : false
      });
    },
    toggleTodo(state, id ){
      const idx = state.todos.findIndex(todo => todo.id === id);
      state.todos[idx].isCompleted = !state.todos[idx].isCompleted;
    },
    deleteTodo(state, id){
      console.log('deleteTodo');
      state.todos = state.todos.filter(todo => todo.id !== id);
    }
  }
};

