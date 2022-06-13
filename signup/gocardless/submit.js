document.querySelector('#chargify-form').addEventListener('submit', function() {
  var form = this;

  event.preventDefault();

  chargify.token(
      form,

      function success(token) {
          // host will write token in hidden input
          document.querySelector('#chargify-token').value = token;

          // uncomment to initiate form submission
          // form.submit();
      },
      function error(err) {

        //define error message (occurs before token generation attempt)
        if (err.message === undefined) { var message = ""; }
        else { var message = err.message; }

        //define actual error message (occurs after token generation attempt)
        if (err.errors === undefined) { var chargify_errors = ""; }
        else { var chargify_errors = err.errors; }

        //construct error message to display
        $("#chargify-error-message").show().text(message + " " + chargify_errors);
      
      }
  );
});