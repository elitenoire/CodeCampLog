$(document).ready(function () {
    // Format of a todo object
    // var todo1 = {
    //     activity: 'Gimme a task',
    //     id: '001',
    //     created: Date(),
    //     completed: true,
    // };

    // var todo2 = {
    //     activity: 'Create UI for App',
    //     id: '002',
    //     created: Date(),
    //     completed: false,
    // };
    // An array to store all todos
    // var todos = [todo1, todo2];
    var todos = [];

    //htmlstring for an empty todo
    var $empty = $(`<p>No task yet.</p>
                    <hr>`)

    //Display todos only if there is a task to show
    function renderTodo() {
        //Clear all todos before rendering
        $('.empty').empty();
        $('.items').empty();

        if (!todos.length) {
            $('.empty').append($empty)
        } else {
            for (var i = 0; i < todos.length; i++) {
                var $todoItem = $(`<div id=${todos[i].id} class="todo ${(todos[i].completed)?"completed":""}">
                                <input class="item-box" type="checkbox" ${(todos[i].completed)?"checked":""}><span>${todos[i].activity}</span>
                                <i class="pull-right close">x</i>
                            </div>`)
                $('.items').append($todoItem)
            }
        }
        $('#todo-count').html(todos.length + ' Task' + (todos.length === 1 ? '' : 's'));
        // addHoverToDOM();
        $('.todo').hover(makeVisible);
        $('.item-box').change(checkChange);
        $('.close').click(deleteTodo);

    }

    function makeVisible() {
        $(this).find('.close').toggle()
    }

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

    function deleteTodo() {
        var $id = $(this).parent().attr('id');
        todos = todos.filter(todo => todo.id !== $id);
        renderTodo();
    }

    $('#todo-submit').click(function () {
        $('#todo-form').submit()
    })

    $('#todo-form').submit(function (e) {
        e.preventDefault();
        var $todoTask = $('[name=todo-task]').val();
        if (!$todoTask) return;
        todos.unshift(createTodo($todoTask));
        $('[name=todo-task]').val('');

        renderTodo();
    })

    function createTodo(task) {
        return {
            activity: task,
            id: 'x' + (todos.length + 1),
            created: Date(),
            completed: false,
        }

    }

    renderTodo();

})