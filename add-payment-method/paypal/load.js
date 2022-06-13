var chargify = new Chargify();

//**********
//AVAILABLE STYLES
//https://developer.chargify.com/content/chargify-js/configurations.html#styles
//**********

chargify.load({
  publicKey: 'PUBLICKEY',
  serverHost: 'https://SUBDOMAIN.chargify.com',
  type: 'pay_pal',
  selectorForPayPalButton: '#pay-pal',
  selector: '#chargify-form',
  style: {
        field: {
            maxWidth: '100%',
            backgroundColor: null,
            paddingTop: null,
            paddingBottom: null,
            borderRadius: '.25rem',
            color: null,
            border: null,
            fontSize: null,
            fontWeight: null
        },
        input: {
            maxWidth: '100%',
            backgroundColor: null,
            paddingTop: null,
            paddingBottom: null,
            borderRadius: '.25rem',
            color: null,
            border: '1px solid #ced4da',
            fontSize: '16px',
            fontWeight: null
        },
        label: {
            maxWidth: null,
            backgroundColor: '#ffffff',
            paddingTop: '2px',
            paddingBottom: '1px',
            borderRadius: null,
            color: null,
            border: null,
            fontSize: '16px',
            fontWeight: '400'
        },
        message: { 
            maxWidth: null,
            backgroundColor: null,
            paddingTop: '2px', 
            paddingBottom: '1px',
            borderRadius: null,
            color: null,
            border: null,
            fontSize: null,
            fontWeight: null 
        }
    },
    fields: {
        firstName: {
            selector: '#first_name',
            label: 'First Name on Paypal Account',
            placeholder: 'John',
            required: true,
            message: 'Invalid First Name',
            maxlength: '30'
        },
        lastName: {
            selector: '#last_name',
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