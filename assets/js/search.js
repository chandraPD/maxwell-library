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
    var countSuccess = 0;
    Array.from(books).forEach(function(book){
        const title = book.textContent;

        if(title.toLowerCase().indexOf(term) != -1){
            book.parentElement.parentElement.style.display = 'block';
            countSuccess++;
        }else{
            book.parentElement.parentElement.style.display = 'none';
        }
    })
    if(countSuccess == 0){
        document.querySelector('.books-nf').style.display = 'block';
    }else{
        document.querySelector('.books-nf').style.display = 'none';
    }
},500));
