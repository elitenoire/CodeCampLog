$(document).ready(function () {

    // An array to store all todos
    var todos = [];
    var state = '';

    //htmlstring for an empty todo
    var $empty = $(`<div class="empty"><p>No task yet.</p>
                    <hr></div>`)

    function filterByState(todo){
        if(state){//either state is active or completed
            if(state === 'completed') //completed
                return todo.completed;
            else return !todo.completed; //active
        }else return true; //default : all todos
    }
    //Display todos only if there is a task to show
    function renderTodo(todos) {

        // var todos = t===undefined?todos:t;
        // if(t){var todos = t}

        todos = todos.filter(filterByState);

        //Clear all todos before rendering
        $('.items').empty();

        if (!todos.length) { //if no todo - display 'no task yet'
            $('.items').append($empty)
        } else { //add and display todo
            for (var i = 0; i < todos.length; i++) {
                var todoItem = $(`<div id=${todos[i].id} class="todo ${(todos[i].completed)?"completed":""}">
                                <input class="item-box" type="checkbox" ${(todos[i].completed)?"checked":""}><span class="activity">${todos[i].activity}</span>
                                <i class="pull-right close">x</i>
                            </div>`)
                $('.items').append(todoItem)
            }
        }
        //display number of todos
        $('#todo-count').html(todos.length + ' Task' + (todos.length === 1 ? '' : 's'));
        //On hover, make delete button visible
        $('.todo').hover(makeVisible);
        //Mark as completed/uncompleted when checkbox is clicked
        $('.item-box').change(checkChange);
        //Delete todo when delete button is clicked
        // var $id = $(this).parent().attr('id')
        $('.close').click(deleteTodo);
        //Edit todo on double-click
        $('.activity').dblclick(editTodo);

    }
    //Make the 'x' button visible when a todo is hovered on
    function makeVisible() {
        $(this).find('.close').toggle()
    }

    //Toggle the state of a todo checkbox when clicked
    function checkChange() {
        var $id = $(this).parent().attr('id');
        todos = todos.map(todo => {
            if (todo.id === $id) {
                todo.completed = !todo.completed
            }
            return todo;
        });
        renderTodo(todos);
    }

    //Edit or make changes to a todo
    function editTodo() {
        var $id = $(this).parent().attr('id');
        console.log('id in ediTodo is ' + $id)
        var task = $(this).html();
        $(this).html(`<input class="item-box" id="newTask" value=${task} type="text">`);
        $('#newTask').keypress(e=>{
            if(e.keyCode === 13){
                // console.log($('#newTask').val())
                editOrDel($id,$('#newTask').val())}
        })
        $('#newTask').focusout(e=>editOrDel($id,$('#newTask').val()))

        //Edit todo or delete todo if editing to empty
        function editOrDel(id,value){
            console.log('value is ' + value)
            console.log('id in editordel is ' + id)
            return value?editor(id,value):del(id)
        }

        //Helper edit function to change only the todo and date created
        // Id and checked state remains unchanged
        function editor($id, $value) {
            console.log('running editor with value of: ' + $value)
            todos = todos.map(todo => {
                if (todo.id === $id) {
                    todo.activity = $value;
                    todo.created = Date();
                }
                return todo;
            })
            renderTodo(todos);
        }
        
    }
    //Delete a todo task on clicking on the 'x' button
    function deleteTodo() {        
        var $id = $(this).parent().attr('id');
        console.log('id in deleteTodo is ' + $id )//+ ' parent is ' + $(this).parent());
        del($id);
        
    }
    //Helper delete function to render without deleted item
    function del($id){
        todos = todos.filter(todo => todo.id !== $id);
        renderTodo(todos);
    }

    //Submit todo input
    $('#todo-submit').click(function () {
        $('#todo-form').submit()
    })

    //Prevent reloading for each submission, for empty input do nothing,
    //Add each todo with most current at the top,
    //Reset todo form input after submission
    //Render to display changes
    $('#todo-form').submit(function (e) {
        e.preventDefault();
        var $todoTask = $('[name=todo-task]').val();
        if (!$todoTask) return;
        todos.unshift(createTodo($todoTask));
        $('[name=todo-task]').val('');

        renderTodo(todos);
    })
    //Create a todo object using input from form
    function createTodo(task) {
        return {
            activity: task,
            id: 'x' + (todos.length + 1),
            created: Date(),
            completed: false,
        }

    }
    //render todo when DOM is ready
    renderTodo(todos);

    $('.filter .all').click(showAll);
    $('.filter .active').click(showActive);
    $('.filter .completed').click(showCompleted);

    function showAll(){
        state = ''
        renderTodo(todos);
    }
    function showCompleted(){
        state = 'completed'
        renderTodo(todos);
    }
    function showActive(){
        state = 'active'
        renderTodo(todos);
    }

})