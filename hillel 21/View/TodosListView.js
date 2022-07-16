class TodosListView{
    static createItemTemplate(todo){
        return $(TodosListView.List_ITEM_TEMPLATE
        .replace('{{title}}' , todo.title)
        .replace('{{isDone}}' , todo.isDone ? TodosListView.TASK_ISDONE : '')
        .replace('{{id}}' , todo.id))
    }
    static DEL_SELECTOR = '.delBtn'
    static  LIST_TEMPLATE = '<ul id="list"></ul>'
    static List_ITEM_TEMPLATE =        ` <div class="block {{isDone}}" id="{{id}}">
    
                {{title}}
        <div class="delImg">
            <img src="img/crosslinear_106242.svg" class="delBtn"> 
        </div>
    </div>`

    static TASK_ISDONE = 'done'
    static ITEM_SELECTOR = '.block'


    constructor(config){
        this.$list = $(TodosListView.LIST_TEMPLATE)
        .on('click' ,TodosListView.ITEM_SELECTOR, (e) => config.onToggle(e.target.id))
        .on('click' ,TodosListView.DEL_SELECTOR, (e) => {
            e.stopPropagation()
            config.onDelete(e.target.closest('.block').id)
        })

    }
    renderList(list){
        this.$list.empty();
        this.$list.append(list.map(TodosListView.createItemTemplate))
    }
}