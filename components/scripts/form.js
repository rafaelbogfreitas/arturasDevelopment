const $ = require('jquery');

const Form = {
    toggleForm(e){
        $('.contact-form').toggleClass('hidden');
    },
    
    submit(e) {
        // e.preventDefault();
        $('.contact-form').toggleClass('hidden');
    },
    
    closeForm(){
        $('.contact-form').toggleClass('hidden');
    }
}

module.exports = Form;