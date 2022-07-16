//для работы со всем списком.
class TodosColection{
    constructor(){
        this.list = []
    }
    static LIST_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos/'
    
    fetchList(){
       return fetch(TodosColection.LIST_URL)
        .then((res) => res.json())
        .then((data) => this.list = data)
    }
    togleTodo(todoId){
        let todoItem = this.list.find((el) => el.id == todoId)

        if(!todoItem){
            return console.log('eror')
        }else {
            todoItem.isDone = !todoItem.isDone;

            fetch(TodosColection.LIST_URL + todoId , {
                method: 'PUT',
                body: JSON.stringify(todoItem),
                headers: {"Content-Type": "application/json"},
            })
        }
    }
    deleteTodo(todoId){
        
        this.list = this.list.filter((el) => el.id != todoId);
        fetch(TodosColection.LIST_URL + todoId , {
            method: 'DELETE',
        });

    }
    createTodo(title){
        let obj = {}
        obj.title = title;
        obj.isDone = false;
        this.list.push(obj)
        return  fetch(TodosColection.LIST_URL , {
            method:'POST',
            body:JSON.stringify(obj),
            headers: {"Content-Type": "application/json"},
        })
        .then(()=> this.fetchList())
    }
}