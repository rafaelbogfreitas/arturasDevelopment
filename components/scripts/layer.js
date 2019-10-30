const $ = require('jquery');

const Layer = {

    imageLayer(e) {
        console.log(e);
        if(e.target.nodeName === 'IMG'){
            $('.layer-closed').addClass('layer').removeClass('layer-closed');
            $('.layer').html('<img class="large-image"/><div class="close-btn">X</div>');

            document.querySelector('.large-image').src = e.target.src;

            if($('.large-image').width() > $(window).width()) {
                let ratio = $('.large-image').width - $(window).width();
            } else if ($('.large-image').height() == $('.large-image').height()) {
                console.log('aia');
            }

            
    
            $('.close-btn').on('click', function(){
                $('.layer').addClass('layer-closed').removeClass('layer');
                $('.close-btn').remove();
                $('.large-image').remove();

            });
        }
    }

};

module.exports = Layer;