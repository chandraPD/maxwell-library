function addRow(){
    var addRow = '<div class="return-book-list-item"> <div class="form-group row"> <label class="col-3 col-form-label">Book</label> <div class="col"> <select name="book_id[]" class="form-control" onchange="setDetail(this)" > <option value="">Choose Book</option> <option value="001">Dilan 1991</option> <option value="002">Dilan 1992</option> <option value="003">Dilan 1993</option> </select> </div><div class="col-3 "> <button type="button" class="btn bg-gradient-danger" value="delete" onclick="deleteRow(this)" >Delete</button> </div></div><div class="return-book-list-detail"> </div></div>';
    $('div.return-book-list').append(addRow);
}

function setDetail(x){
    var i = $('select').index(x);
    var detail = '<div class="form-group row"><div class="form-group col-sm-4"><span class="info">Book Title</span><input type="text" class="form-control" name="book_title[]" value="Dilan 1990" readonly></div><div class="form-group col-sm-4"><span>Borrowed On</span><input type="text" class="form-control" name="borrow_date[]" value="17 Nov 2020" readonly></div><div class="form-group col-sm-4"><span>Due On</span><input type="text" class="form-control" name="due_on[]" value="20 Nov 2020" readonly></div></div><div class="form-group row"><div class="form-group col-sm-4"><span class="info">Date Of Return</span><input type="text" class="form-control" name="return_date[]" value="21 Nov 2020" readonly></div><div class="form-group col-sm-4"><span>Late By (Days)</span><input type="text" class="form-control" name="late_by[]" value="1" readonly></div><div class="form-group col-sm-4"><span>Fine</span><input type="text" class="form-control" name="fine[]" value="5000" readonly></div></div>';
    $('div.return-book-list-detail').eq(i).html(detail);
}

function deleteRow(x){
    var i = $('[value="delete"]').index(x);
    $('div.return-book-list-item').eq(i).remove();            
}

function saveReturn(){
    Swal.fire('Saved!', "Waiting for the librarian's response", 'success')
}