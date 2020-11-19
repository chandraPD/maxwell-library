
function setCardBodyHeight() {
    var cardBodyHeight = document.getElementById('reason').getElementsByClassName('card-body')[0].clientHeight;
    var cardBody = document.getElementById('reason').getElementsByClassName('card-body');
    var arrHeight = [];
    var listreason = [];
    var cardtext = [];
    for (var i = 0; i < cardBody.length; i++) {
        listreason[i] = document.getElementById('reason').getElementsByClassName('list-reason')[i].clientHeight;
        cardtext[i] = document.getElementById('reason').getElementsByClassName('card-text')[i].clientHeight;
        arrHeight[i] = parseInt(listreason[i]) + parseInt(cardtext[i]);
    }
    var maxHeight = Math.max(...arrHeight) + 40;
    for (var i = 0; i < cardBody.length; i++) {
        document.getElementById('reason').getElementsByClassName("card-body")[i].style.height = maxHeight + "px";
    }
}
$(window).resize(function () {
    setTimeout(function () {
        setCardBodyHeight();
    }, 500)
});
setCardBodyHeight();