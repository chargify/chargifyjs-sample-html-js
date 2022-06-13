var chargify = new Chargify();

//
//**BANK
//
chargify.load({
    publicKey: 'chjs_znbnmvzv9sr9hj2w6fvr3d8m',
    serverHost: 'https://chargify-implementation-samples.chargify.com',
    type: 'bank',
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
            selector: '#bank_first_name',
            label: 'First Name on Account',
            placeholder: 'John',
            message: 'Invalid First Name',
            maxlength: '30',
            required: true
        },
        lastName: {
            selector: '#bank_last_name',
            label: 'Last Name on Account',
            placeholder: 'Smith',
            message: 'Invalid Last Name',
            maxlength: '30',
            required: true
        },
        bankName: { selector: '#bank_name' },
        routingNumber: { selector: '#bank_routing_number' },
        accountNumber: { selector: '#bank_account_number' },
        accountType: { selector: '#bank_account_type' },
        accountHolderType: { selector: '#bank_account_holder_type' },
        address: {
            selector: '#bank_billing_address',
            label: 'Address',
            placeholder: '1234 Hill St',
            required: true,
            message: 'Invalid Address',
            maxlength: '70'
        },
        address2: {
            selector: '#bank_billing_address2',
            label: 'Address 2',
            placeholder: '1234 Hill St',
            required: false,
            message: 'Invalid Address 2',
            maxlength: '70'
        },
        city: {
            selector: '#bank_billing_city',
            label: 'City',
            placeholder: 'Austin',
            required: true,
            message: 'Invalid City',
            maxlength: '30'
        },
        zip: {
            selector: '#bank_billing_zip',
            label: 'Zip Code',
            placeholder: '10001',
            required: true,
            message: 'Invalid Zip',
            maxlength: '5'
        },
        country: {
            selector: '#bank_billing_country',
            label: 'Country',
            placeholder: 'Select...',
            required: true,
            message: 'Invalid Country',
            maxlength: '2'
        },
        state: {
            selector: '#bank_billing_state',
            label: 'State or Province',
            placeholder: 'Select...',
            required: true,
            message: 'Invalid State',
            maxlength: '2'
        }
    }
});