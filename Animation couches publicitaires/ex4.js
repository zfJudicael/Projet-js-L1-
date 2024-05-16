var myImage = document.images;
var i = 0;

function changeImages(){
    if(i >= myImage.length){

        myImage[i-1].style.zIndex="0";
        myImage[i-2].style.zIndex="0";
        myImage[i-3].style.zIndex="0";
        myImage[i-4].style.zIndex="0";
        i = 0;
    };
    
    myImage[i].style.zIndex="2";
    i++;
};

setInterval(changeImages, 3000);
