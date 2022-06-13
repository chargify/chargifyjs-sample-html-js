var chargify = new Chargify();

//
//PAYPAL
//
chargify.load({
  publicKey: 'chjs_2fftvv4sbjbdwfnhmrcnn9fw',
  serverHost: 'https://chargify-sandbox-chargifyjs-paypal.chargify.com',
  type: 'pay_pal',
  selectorForPayPalButton: '#pay-pal',
  selector: '#chargify-form',
  style: {
        input: {
            fontSize: '1rem',
            border: '1px solid #ced4da',
            padding: '.375rem 0.75rem',
            lineHeight: '1.5'
        },
        label: {
            backgroundColor: 'transparent',
            paddingTop: '0px',
            paddingBottom: '1px',
            fontSize: '16px',
            fontWeight: '400'
        }
    },
    fields: {
        firstName: {
            selector: '#paypal_first_name',
            label: 'First Name on Paypal Account',
            placeholder: 'John',
            required: true,
            message: 'Invalid First Name',
            maxlength: '30'
        },
        lastName: {
            selector: '#paypal_last_name',
            label: 'Last Name on Paypal Account',
            placeholder: 'Smith',
            required: true,
            message: 'Invalid Last Name',
            maxlength: '30'
        }
    }
}, 
{
  onPayPalAuthorized: function() {
    chargify.token(
      document.querySelector('#chargify-form'),
      function success(token, message) {
        // host will write token in hidden input
        document.querySelector('#chargify-token').value = token;
      },
      function error(err) {
        //console.log('{host} token ERROR - err: ', err);

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
  }
});