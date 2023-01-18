/* 1. Create form with two inputs and a submit button using jQuery
$('body').append('<form></form>')

$('form').prepend("<input type='range' id='rating' min='0' max='10' list='markers'>")
    .prepend("<input type='text' id='title' placeholder='Movie Title'>")
    .append("<button>Submit!</button>");
*/
$('body').append(`<table id='movieList'></table>`);

$('form').on('submit', function(e) {
    e.preventDefault();
    let title = $('#title').val();
    let rating = $('#rating').val();
    let newMovie = $(`
        <tr>
            <td>${title}</td>
            <td>${rating}</td>
            <td><button class="remove">X</button></td>
        </tr>
        `);
    $('#movieList').append(newMovie);
});

$('#movieList').on('click', function(e) {
    if(e.target.className === 'remove') {
        e.target.closest('tr').remove();
    }
});