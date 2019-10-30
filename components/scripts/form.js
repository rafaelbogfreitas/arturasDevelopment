const $ = require('jquery');

const Form = {
    toggleForm(e){
        $('.contact-form').toggleClass('hidden');
    }
}

module.exports = Form;