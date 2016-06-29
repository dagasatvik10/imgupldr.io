$(function(){
  $('#post-comment').hide();

  $('#btn-comment').on('click', function(e) {
    e.preventDefault();
    $('#post-comment').show();
  });

  $('#btn-like').on('click', function(e) {
    e.preventDefault();

    var imgId = $(this).data('id');

    $.post('/images/' + imgId + '/like').done(function(data) {
      $('.likes-count').text(data.likes);
    });
  });

    $('#btn-delete').on('click', function(e) {
      e.preventDefault();
      var $this = $(this);

      var remove = confirm('Are you sure you want to delete this image?');
      if(remove){
        var imgId = $(this).data('id'),
        myurl = '/images/' + imgId;

        $.ajax({
          url: myurl,
          type: 'DELETE'
        }).done(function(result) {
          if(result){
            $this.removeClass('btn-danger').addClass('btn-success');
            $this.find('i').removeClass('fa-remove').addClass('fa-check');
            $this.append('<span>Deleted!</span>');
          }
        });
      }
  });
})
