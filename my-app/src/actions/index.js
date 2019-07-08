export const addTodo =(text)=>{
    return {type:"ADD_TODO",text:text}
}
export const toogleTodo =(index)=>{
    return{type:'TOGGLE_TODO',index:index}
}