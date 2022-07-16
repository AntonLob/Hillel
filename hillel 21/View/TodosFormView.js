class TodosFormView{
    static FORM_TEMPLATE = ` <div class="form">
    <input type="text" id="inp">
      <button id="btn" class="addBtn">click</button>
</div>
<div id="eror"></div>`;
static FORM_BTN_SELECTOR = '.addBtn'
static TASK_NAME_SELECTOR = '#inp'
    constructor(config){
        this.$form = $(TodosFormView.FORM_TEMPLATE)
        .on('click' , TodosFormView.FORM_BTN_SELECTOR,(e) => {
           let title = this.getInfo();
           this.cleanInput()
            config.onBtnClick(title);
        } )
    }
    getInfo(){
      return this.$form.find(TodosFormView.TASK_NAME_SELECTOR).val()
    }
    cleanInput(){
      this.$form.find(TodosFormView.TASK_NAME_SELECTOR).val('')
    }
}