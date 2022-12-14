$('h2').css({color: '#FFAF43'})

$('h3').css({color: '#FFAF43'})

$('<input/>').attr({ type: 'text', id: 'test', name: 'test'}).appendTo('#form');

$('#test').focus(function(e) {
    alert('Focus');
});