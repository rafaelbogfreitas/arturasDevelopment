const $ = require('jquery');

const Layer = {

    imageLayer(e) {
        //takes the event target and checks if it is an image
        if(e.target.nodeName === 'IMG'){
            //if image, removes class hidden to reveal the layer with the img clicked
            $('.layer').toggleClass('hidden');
            $('.layer').html('<img class="large-image animated fadeIn"/><div class="left-arrow"><i class="fas fa-chevron-left"></i></div><div class="right-arrow"><i class="fas fa-chevron-right"></i></div><div class="close-btn">X</div>');
            
            //uses the source of the image clicked
            let imgSrc = e.target.src;
            document.querySelector('.large-image').src = imgSrc; 
            
            //left arrow click event to change pics
            if($('.left-arrow')){
                $('.left-arrow').on('click', function(){
                    let imgArr = document.querySelectorAll('#images-container img');
                    for(let i = 0; i < imgArr.length; i++){
                        if(imgArr[i].src === imgSrc && i !== 0 ){
                            imgSrc = imgArr[i-1].src;
                            $('.large-image').remove()
                            $('.layer').prepend('<img class="large-image animated fadeIn"/>');
                            document.querySelector('.large-image').src = imgSrc; 
                        } else if (imgArr[i].src === imgSrc && i === 0) {
                            imgSrc = imgArr[imgArr.length - 1].src;
                            $('.large-image').remove()
                            $('.layer').prepend('<img class="large-image animated fadeIn"/>');
                            document.querySelector('.large-image').src = imgSrc;
                        };
                    }
                });
            }
            
            //right arrow click event listener to change pics
            if($('.right-arrow')){
                $('.right-arrow').on('click', function(){
                    let imgArr = document.querySelectorAll('#images-container img');
                    for(let i = 0; i < imgArr.length; i++){
                        if(imgArr[i].src === imgSrc && i !== imgArr.length - 1){
                            imgSrc = imgArr[i+1].src;
                            $('.large-image').remove()
                            $('.layer').prepend('<img class="large-image animated fadeIn"/>');
                            return document.querySelector('.large-image').src = imgSrc; 
                        } else if (imgArr[i].src === imgSrc && i === imgArr.length - 1) {
                            imgSrc = imgArr[0].src;
                            $('.large-image').remove()
                            $('.layer').prepend('<img class="large-image animated fadeIn"/>');
                            return document.querySelector('.large-image').src = imgSrc;
                        }
                    }
                });
            };

            $('.layer .close-btn').on('click', function(){
                $('.layer').toggleClass('hidden');
                $('.layer-closed .close-btn').remove();
                $('.large-image').remove();
                $('.left-arrow').off('click');
                $('.right-arrow').off('click');
            });
        }
    }

};

module.exports = Layer;