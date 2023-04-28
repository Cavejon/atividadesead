$(document).ready(function() {
  $('.card-preview').click(function() {
    $(this).closest('.card-atividades').toggleClass('active');
  });
});