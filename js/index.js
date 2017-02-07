var url = $('.link').val();
var jdata = [];
$(document).ready(function() {
  $('.convert').on('click', function(){
    alert('wrks!');
      $.ajax({
        type: 'GET',
        url: url + .json,
        dataType: 'json',
        success: function(data) { jdata = data;},
        async = false
      })

      alert(jdata.id);
  });
});
