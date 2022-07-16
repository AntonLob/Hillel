class TodosControler{
    constructor($container){
        this.todosListModel = new TodosColection();

        this.todosListView = new TodosListView({
            onToggle: (id) => this.updateTodo(id),
            onDelete: (id) => this.deleteTodo(id)
        });
        $container.append(this.todosListView.$list);

        this.todosListModel.fetchList()
        .then(()=>this.todosListView.renderList(this.todosListModel.list))

        this.todosFormView = new TodosFormView({
            onBtnClick: (title) =>  this.createTodo(title)
            
        });
        $container.append(this.todosFormView.$form);

    }
    updateTodo(id){
        this.todosListModel.togleTodo(id);
        this.todosListView.renderList(this.todosListModel.list)
    }
    deleteTodo(id){
        this.todosListModel.deleteTodo(id);
        this.todosListView.renderList(this.todosListModel.list)
    }
    createTodo(title){
        this.todosListModel.createTodo(title)
        .then(()=>{this.todosListView.renderList(this.todosListModel.list)})
            
    }
}