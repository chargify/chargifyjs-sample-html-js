var chargify = new Chargify();

//
//**GOCARDLESS
//
chargify.load({
    publicKey: 'chjs_cw9n84x9gvn37dj3z6dtf79z',
    serverHost: 'https://demo-direct-debit.chargify.com',
    type: 'direct_debit',
    selectorForGoCardlessHeader: '#gocardless-header',
    selectorForGoCardlessFooter: '#gocardless-footer',
    selectorForToggleIbanOrLocalDetails: '#gocardless-toggle-iban',
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
                selector: '#gocardless_first_name',
                label: 'First Name on Card',
                placeholder: 'John',
                required: true,
                message: 'Invalid First Name',
                maxlength: '30'
            },
            lastName: {
                selector: '#gocardless_last_name',
                label: 'Last Name on Card',
                placeholder: 'Smith',
                required: true,
                message: 'Invalid Last Name',
                maxlength: '30'
            },
            bankName: { selector: '#gocardless_bank_name' },
            bankIban: { selector: '#gocardless_bank_iban' },
            branchCode: { selector: '#gocardless_branch_code' },
            routingNumber: { selector: '#gocardless_routing_number' },
            accountNumber: { selector: '#gocardless_account_number' },
            accountHolderType: { selector: '#gocardless_account_holder_type' },
            address: {
                selector: '#gocardless_billing_address',
                label: 'Address',
                placeholder: '1234 Hill St',
                message: 'Invalid Address',
                maxlength: '70',
                required: true
            },
            address2: {
                selector: '#gocardless_billing_address2',
                label: 'Address 2',
                placeholder: '1234 Hill St',
                message: 'Invalid Address 2',
                maxlength: '70',
                required: false
            },
            city: {
                selector: '#gocardless_billing_city',
                label: 'City',
                placeholder: 'Austin',
                required: true,
                message: 'Invalid City',
                maxlength: '30',
                required: true
            },
            zip: {
                selector: '#gocardless_billing_zip',
                label: 'Zip Code',
                placeholder: '10001',
                message: 'Invalid Zip',
                maxlength: '5',
                required: true
            },
            country: {
                selector: '#gocardless_billing_country',
                label: 'Country',
                placeholder: 'Select...',
                message: 'Invalid Country',
                maxlength: '2',
                required: true
            },
            state: {
                selector: '#gocardless_billing_state',
                label: 'State or Province',
                placeholder: 'Select...',
                message: 'Invalid State',
                maxlength: '2',
                required: true
            }
        }
});