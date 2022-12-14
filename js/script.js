$('h2').css({color: '#FFAF43'})

$('h3').css({color: '#FFAF43'})

$('input').css({margin:'20px 10px 20px 300px', width:'250px', height: '40px'})


$(document).ready(function(){
    $('#button').click(
        function(){
            var input = $('input[name=skills]').val();
            $('ul').append('<li>'+ input + '</li>');
        }
    )
    $(document).on('click', 'li',function(){
        $(this).toggleClass('strike').fadeOut(50)
    })
    $('input').focus(function(){
     $(this).val(' ');
    })


})