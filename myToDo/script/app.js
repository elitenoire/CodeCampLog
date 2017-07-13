$(document).ready(function () {

    // An array to store all todos
    var todos = [];

    //htmlstring for an empty todo
    var $empty = $(`<div class="empty"><p>No task yet.</p>
                    <hr></div>`)

    //Display todos only if there is a task to show
    function renderTodo() {
        //Clear all todos before rendering
        $('.items').empty();

        if (!todos.length) {//if no todo - display 'no task yet'
            $('.items').append($empty)
        } else {//add and display todo
            for (var i = 0; i < todos.length; i++) {
                var todoItem = $(`<div id=${todos[i].id} class="todo ${(todos[i].completed)?"completed":""}">
                                <input class="item-box" type="checkbox" ${(todos[i].completed)?"checked":""}><span>${todos[i].activity}</span>
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
        renderTodo();
    }
    //Delete a todo task on clicking on the 'x' button
    function deleteTodo() {
        var $id = $(this).parent().attr('id');
        todos = todos.filter(todo => todo.id !== $id);
        renderTodo();
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

        renderTodo();
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
    renderTodo();

})