var buttonRight = document.querySelector('#slideright');
var buttonLeft = document.querySelector('#slideleft');


buttonRight.onclick = function () {
  document.querySelector('#timeline').scrollLeft += 1000;
};
buttonLeft.onclick = function () {
  document.querySelector('#timeline').scrollLeft -= 1000;
  
};

var btnRight = document.querySelector('#btn1');
var btnLeft = document.querySelector('#btn2');


btnRight.onclick = function () {
  document.querySelector('#reviews').scrollLeft += 1000;
};
btnLeft.onclick = function () {
  document.querySelector('#reviews').scrollLeft -= 1000;
  
};


// js by suresh

var slider_img = document.querySelector('.setupimg');
    var images = ['https://cdn.shopify.com/s/files/1/0153/8863/files/DSC03503_1400x.jpg?v=1645189799', 'https://cdn.shopify.com/s/files/1/0153/8863/files/HeadphoneZone-HifimanHE400SE-HipDAC2-HeadphoneZoneCable_Desktop_1400x.jpg?v=1643108117', 'https://cdn.shopify.com/s/files/1/0153/8863/files/HeadphoneZone-Beyer-DT990-Topping-L30_Desktop_1400x.jpg?v=1643105524'];
    
    
    var i = 0;

    function prev(){
        if(i <= 0) i = images.length;	
        i--;
        document.querySelector(".imgno").innerText=(i+1)+"/3";
        return setImg();			 
    }

    function next(){
        if(i >= images.length-1) i = -1;
        i++;
        document.querySelector(".imgno").innerText=(i+1)+"/3";
        return setImg();	

    }

    function setImg(){
        return slider_img.setAttribute('src', images[i]);
    }


    var buttonAbove = document.getElementById('btnabove');
    var buttonBelow = document.getElementById('btnbelow');

    buttonAbove.onclick = function () {
        document.getElementById('newlaunches').scrollLeft += 210;
    };
    buttonBelow.onclick = function () {
        document.getElementById('newlaunches').scrollLeft -= 210;
    };

    
    var productbuttonRight = document.getElementById('pleftbtn');
    var productbuttonLeft = document.getElementById('prightbtn');

    productbuttonRight.onclick = function () {
        document.getElementById('products').scrollLeft += 250;
    };
    productbuttonLeft.onclick = function () {
        document.getElementById('products').scrollLeft -= 250;
    };


    var backimg = ["https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-oBarvo-Cupid-3_300x.jpg?v=1586847506","https://cdn.shopify.com/s/files/1/0153/8863/products/Meze-12-Classics-V2-02_300x.jpg?v=1612869168","https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-HiFiMAN-Sundara-1160-1160-2_300x.jpg?v=1592332661","https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Audio-technica-m50x-1160-1160-Black_300x.jpg?v=1590592477","https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Sony-WH-1000XM4-Black-1160-1160-1_300x.jpg?v=1597991359","https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Sony-WH-1000XM4-Black-1160-1160-1_300x.jpg?v=1597991359","https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Sony-WH-1000XM4-Black-1160-1160-1_300x.jpg?v=1597991359"];

    var frontimg = ["https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-oBarvo-Cupid-1_300x.jpg?v=1586847505", "https://cdn.shopify.com/s/files/1/0153/8863/products/Meze-12-Classics-V2-01_300x.jpg?v=1612869168","https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-HiFiMAN-Sundara-1160-1160-1_300x.jpg?v=1592332660","https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Audio-technica-m50x-1160-1160-Black_61b891f0-d385-464a-8dfb-a40bc89d0516_300x.jpg?v=1590592479","https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Sony-WH-1000XM4-Black-1160-1160_300x.jpg?v=1600158377"];

    
        
        
        function setNewImg(){
            document.querySelector("#childimg").src=backimg[3];
            console.log(backimg[1])
        } 

        function setOldImg(){
            document.querySelector("#childimg").src=frontimg[2];
        }