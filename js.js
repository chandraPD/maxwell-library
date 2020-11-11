  
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

includeHTML();


// slick slider
$(document).on('ready', function () {
    $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 3
    });
});


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

// Filtering Books By Categories