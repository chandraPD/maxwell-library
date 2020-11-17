const url = 'https://dummyapi.io/data/api/user?limit=100';

//Generate random date
function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

//API Fetching and append into HTML
fetch(url, {
  method: 'GET',
  headers: {
    'app-id': '5fb34a83ea9b56971e58ca12',
  },
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var json = data.data;
    var result = [];

    for (var i in json) {
      result.push([i, json[i]]);
    }
    var t = '';
    for (var i = 0; i < result.length; i++) {
      let status = '';
      let level = '';
      let anotherlevel = '';
      const someDate = randomDate(
        new Date(2020, 0, 1),
        new Date()
      ).toDateString();
      if (result[i][1].title == 'mr') {
        status = '<span class="badge badge-danger">Inactive</span>';
        level = 'User';
        anotherlevel = 'Librarian';
      } else {
        status = '<span class="badge badge-success">Active</span>';
        level = 'Librarian';
        anotherlevel = 'User';
      }

      var tr = '<tr>';
      tr += `<td class="user-info">
              <img src="${result[i][1].picture}" alt="" />
             </td>`;
      tr += `<td>${i + 1}</td>`;
      tr += `<td>${result[i][1].firstName} ${result[i][1].lastName}</td>`;
      tr += `<td>${result[i][1].email}</td>`;
      tr += `<td>${status}</td>`;
      tr += `<td>${someDate}</td>`;
      tr += `<td><div class="input-group-prepend">
      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
        User
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Librarian</a>
        <a class="dropdown-item" href="#">Superadmin</a>
      </div>
    </div></td>`;
      tr += '</tr>';
      t += tr;
    }
    document.getElementById('content-user').innerHTML += t;
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
  }, 2000)
);
