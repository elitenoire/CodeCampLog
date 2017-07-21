$(document).ready(function () {

    // State variable: '','completed','active'
    var state = 'all';

    //htmlstring for an empty todo
    var $empty = $(`<div class="empty"><p>No task yet.</p>
                    <hr></div>`)

    //Select either active, completed or all todos to be rendered
    function filterByState(todo) {
        if (state) { //either state is active or completed
            if (state === 'completed') //completed
                return todo.completed;
            else return !todo.completed; //active
        } else return true; //default : all todos
    }
    //Display todos only if there is a task to show
    function renderTodo(todos) {
        //Display todo based on current state
        todos = todos.filter(filterByState);

        //Clear all todos in html before rendering
        $('.items').empty();

        //Know which state you are in
        $('.onState').removeClass('onState');
        $('.'+state).addClass('onState');

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
        //Takes care of rendering
        $.get(`/toggle/${$id}`)
            .done(data => renderTodo(data.todos))
            .fail(error => console.log(error, 'Toggling Error: Id not found!'));
    }

    //Edit or make changes to a todo
    function editTodo() {
        //Get todo id and the todo
        var $id = $(this).parent().attr('id');
        var task = $(this).html();
        //Make todo editable on double-click
        $(this).replaceWith(`<input class="input-sm" id="newTask" value="${task}" type="text">`);
        //Focus on the todo to be edited and cursor placed at the last character
        $('#newTask').focus().val($('#newTask').val());
        //Edit/Delete todo when the 'ENTER' key is pressed
        $('#newTask').keypress(e => {
            if (e.keyCode === 13) {
                editOrDel($id, $('#newTask').val())
            }
        })
        //Maintain the edited value when out of focus
        $('#newTask').focusout(e => {
            editOrDel($id, $('#newTask').val());
        })
    }
    //Edit todo or delete todo if edited value is empty
    function editOrDel(id, value) {
        return value ? editor(id, value) : del(id)
    }

    //Helper edit function to change only the todo and date created
    // Id and checked state remains unchanged
    function editor($id, $value) {
        $.post('/edittodo', {$id,$value})
            .done((data) => renderTodo((data.todos)))
            .fail(() => console.log('Failed to update todo!!!!'));
    }

    //Delete a todo task on clicking on the 'x' button
    function deleteTodo() {
        var $id = $(this).parent().attr('id');
        del($id);
    }

    //Helper delete function to render without deleted item
    function del($id) {
        $.get(`/deltodo/${$id}`)
            .done(data => renderTodo(data.todos))
            .fail(error => console.log(error, 'Deleting Error: Id not found!'));
    }

    //************************STATE MANAGEMENT******************************** */
    //Filter all todos
    $('.filter .all').click(showAll);
    //Filter active todos
    $('.filter .active').click(showActive);
    //Filter completed todos
    $('.filter .completed').click(showCompleted);

    function showAll() { //Render all todos
        state = ''
        renderByState();
    }

    function showCompleted() { //Render completed todos only
        state = 'completed'
        renderByState();
    }

    function showActive() { //Render active todos only
        state = 'active'
        renderByState();
    }
    //************************************************************************ */

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
        //jQuery POST to handle submission, if handling on server need to remove prevent default
        //and causes page to reload
        $.post('/submitform', {todo: $todoTask})
            .done((data) => renderTodo((data.todos)))
            .fail(() => console.log('Failed to submit!!!!'));

        //clear form input
        $('[name=todo-task]').val('');
    })

    //Render app based on all, active or completetd state
    function renderByState(){
        $.get('/gettodos')
        .done((data) => renderTodo(data.todos))
        .fail(() => console.log('Error displaying todos!!!'))
    }
    //Initial rendering of todo app, when DOM is ready
    renderByState();

})