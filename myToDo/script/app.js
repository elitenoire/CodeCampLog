$(document).ready(function(){
    $('#todo-submit').click(function(){
        $('#todo-form').submit()
    })

    $('#todo-form').submit(function(e){
        e.preventDefault();
    })

    $('.todo').hover(function(){
        $(this).find('.close').toggle()
    })
})