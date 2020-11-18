const url =
  'https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyB6FAKNd2luF9YqSqrcSgE4TEPfluKJXMc';

//Generate random date
function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

//API Fetching and append into HTML
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var json = data.items;
    var result = [];

    for (var i in json) {
      result.push([i, json[i]]);
    }
    var t = '';
    for (var i = 0; i < result.length; i++) {
      const someDate = randomDate(
        new Date(2020, 0, 1),
        new Date()
      ).toDateString();
      var tr = '<tr>';
      tr += `<td class="text-right py-0 align-middle">
             <div class="btn-group btn-group-sm">
                <a href="/detail.html" class="btn btn-info"
                ><i class="fas fa-eye"></i
                ></a>
                <a href="#" onclick="showModal('edit')" class="btn btn-success"
                ><i class="fas fa-pen"></i
                ></a>
                <a href="#" data-toggle="modal" data-target="#deleteModal" class="btn btn-danger"
                ><i class="fas fa-trash"></i
                ></a>
             </div>
             </td>`;
      tr += `<td class="user-info"><img src="${result[i][1].volumeInfo.imageLinks.thumbnail}" alt="buku" /></td>`;
      tr += `<td>${i}</td>`;
      tr += `<td>${result[i][1].volumeInfo.title}</td>`;
      tr += `<td>${result[i][1].volumeInfo.authors[0]}</td>`;
      tr += `<td>${result[i][1].volumeInfo.categories[0]}</td>`;
      tr += `<td>${result[i][1].volumeInfo.publisher}</td>`;
      tr += `<td><span class="badge badge-success">Available</span></td>`;
      tr += `<td>${result[i][1].volumeInfo.pageCount}</td>`;
      tr += `<td>${someDate}</td>`;
      tr += '</tr>';
      t += tr;
    }
    document.getElementById('content-book').innerHTML += t;
  })
  .catch((err) =>
    console.log('Can’t access ' + url + ' response. Blocked by browser?' + err)
  );

//Datatables
$(
  setTimeout(function () {
    $('#example1').DataTable({
      responsive: true,
      autoWidth: false,
    });
  }, 5000)
);
