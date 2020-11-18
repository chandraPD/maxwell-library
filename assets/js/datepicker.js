
$(function () {
    $('#datetimepicker4').datetimepicker({
        format: 'L'
        
    });
});

$(function () {
    $('#datetimepicker5').datetimepicker({
        format: 'L',
        maxDate : new Date(),
        minDate: new Date()
    });
});

$(function () {
    $('#datetimepicker6').datetimepicker({        
        format: 'L',        
        minDate: new Date()        
    });
});