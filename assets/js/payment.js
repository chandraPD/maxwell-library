$('#selector').on('change',function()
{
   var divClass = $(this).val();
   $(".detail").hide();
   $("."+divClass).slideDown('medium');
});