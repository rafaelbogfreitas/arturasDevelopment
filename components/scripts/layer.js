const $ = require('jquery');

const Layer = {

    imageLayer(e) {
        console.log(e);
        if(e.target.nodeName === 'IMG'){
            // $('.layer-closed').addClass('layer').removeClass('layer-closed');
            $('.layer').toggleClass('hidden');
            $('.layer').html('<img class="large-image"/><div class="left-arrow"><i class="fas fa-chevron-left"></i></div><div class="right-arrow"><i class="fas fa-chevron-right"></i></div><div class="close-btn">X</div>');
            
            document.querySelector('.large-image').src = e.target.src;
            
            $('.layer .close-btn').on('click', function(){
                // $('.layer').addClass('layer-closed').removeClass('layer');
                $('.layer').toggleClass('hidden');
                $('.layer-closed .close-btn').remove();
                $('.large-image').remove();

            });
        }
    }

};

module.exports = Layer;