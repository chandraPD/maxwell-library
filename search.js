
function delay(callback, ms) {
    var timer = 0;
    return function() {
    var context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
        callback.apply(context, args);
    }, ms || 0);
    };
}
// search Books by Title
const books = document.querySelectorAll('.title-book');
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', delay(function(e){
    const term = e.target.value.toLowerCase();
    Array.from(books).forEach(function(book){
        const title = book.textContent;

        if(title.toLowerCase().indexOf(term) != -1){
            book.parentElement.parentElement.style.display = 'block';
        }else{
            book.parentElement.parentElement.style.display = 'none';
        }
    })
},500));
