/**
 * @file
 * A JavaScript file for Webform Auto Address.
 */

(function ($, Drupal, window, document, undefined) {

  $(document).ready(function(){

    // if you have defined a coupled postcode field (wrapper gets class postcode-coupled)
    // keep that one in sync with the automcomplete postcode field
      if($('.postcode-coupled input').length) {
        $('.postcode-coupled input').on('change',function(){
          var coupledPC = $(this).val();
          if(coupledPC) {
            $('#edit-submitted-adres-postal-code').val(coupledPC);
          }
        });
        $('#edit-submitted-adres-postal-code').on('change',function(){
          var coupledPC = $(this).val();
          if(coupledPC) {
            $('.postcode-coupled input').val(coupledPC);
          }
        });
      }
      $('input.toggle-pcc').on('change', function(){
        if ($('input.toggle-pcc').prop('checked')) {
          $('.postcode-coupled').hide();
        } else {
          $('.postcode-coupled').show();
        }
      });
  });

    $.fn.SPwebformAutoAddressInject = function (arguments) {
      // Parse the JSON argument.
      var data = JSON.parse(arguments);

      // Set the street name when the user hasn't filled in anything yet. To
      // prevent the user adding to the text field, lose its (possible) focus.
      $("input.ajax-callback-street-name--" + data.formKey).blur();
      $("input.ajax-callback-street-name--" + data.formKey).val(data.street);

      // Set the city when the user hasn't filled in anything yet. To
      // prevent the user adding to the text field, lose its (possible) focus.
      $("input.ajax-callback-city--" + data.formKey).blur();
      $("input.ajax-callback-city--" + data.formKey).val(data.city);
    };
})(jQuery, Drupal, this, this.document);
