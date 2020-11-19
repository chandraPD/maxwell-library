$('.book-list').simpleLoadMore({
    item: '.book-content',
    count: 3,
    itemsToLoad: 3,
    btnHTML: '<button type="button" id="loadMore" class="btn btn-block bg-gradient-secondary btn-lg">LoadMore</button>'
  });