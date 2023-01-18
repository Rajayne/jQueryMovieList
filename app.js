/* 
1. Create form with two inputs and a submit button using jQuery
2. When the form is submitted, capture the values for each input
 and append to the DOM along with a button to remove from the DOM.
3. When the remove button is clicked, remove each title and rating.

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