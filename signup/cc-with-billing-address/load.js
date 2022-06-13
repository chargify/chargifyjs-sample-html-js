var chargify = new Chargify();

//
//**CARD
//
chargify.load({
    publicKey: 'chjs_znbnmvzv9sr9hj2w6fvr3d8m',
    serverHost: 'https://chargify-implementation-samples.chargify.com',
    type: 'card',
    hideCardImage: false,
    optionalLabel: ' ',
    requiredLabel: '*',
    addressDropdowns: true,
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
                selector: '#cc_first_name',
                label: 'First Name on Card',
                placeholder: 'John',
                required: true,
                message: 'Invalid First Name',
                maxlength: '30'
            },
            lastName: {
                selector: '#cc_last_name',
                label: 'Last Name on Card',
                placeholder: 'Smith',
                required: true,
                message: 'Invalid Last Name',
                maxlength: '30'
            },
            number: {
                selector: '#cc_number',
                label: 'Card Number',
                placeholder: 'Card Number',
                message: 'Invalid Card',
                required: true,
                style: {
                  input: {
                    padding: '8px 48px'
                  }
                }
            },
            month: {
                selector: '#cc_month',
                label: '',
                placeholder: 'MM',
                message: 'Invalid Month',
                required: true
            },
            year: {
                selector: '#cc_year',
                label: '',
                placeholder: 'YYYY',
                message: 'Invalid Year',
                required: true
            },
            cvv: {
                selector: '#cc_cvv',
                label: 'CVC',
                placeholder: 'CVC',
                required: false,
                message: 'Invalid CVC',
                required: true
            },
            address: {
                selector: '#cc_billing_address',
                label: 'Address',
                placeholder: '1234 Hill St',
                required: true,
                message: 'Invalid Address',
                maxlength: '70'
            },
            address2: {
                selector: '#cc_billing_address2',
                label: 'Address 2',
                placeholder: '1234 Hill St',
                required: false,
                message: 'Invalid Address 2',
                maxlength: '70'
            },
            city: {
                selector: '#cc_billing_city',
                label: 'City',
                placeholder: 'Austin',
                required: true,
                message: 'Invalid City',
                maxlength: '30'
            },
            zip: {
                selector: '#cc_billing_zip',
                label: 'Zip Code',
                placeholder: '10001',
                required: true,
                message: 'Invalid Zip',
                maxlength: '5'
            },
            country: {
                selector: '#cc_billing_country',
                label: 'Country',
                placeholder: 'Select...',
                required: true,
                message: 'Invalid Country',
                maxlength: '2'
            },
            state: {
                selector: '#cc_billing_state',
                label: 'State or Province',
                placeholder: 'Select...',
                required: true,
                message: 'Invalid State',
                maxlength: '2'
            }
        }
});