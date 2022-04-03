var getdata = JSON.parse(localStorage.getItem("movetocart"))

console.log(getdata)

var array = JSON.parse(localStorage.getItem("finalcart")) || [];

getdata.map(function (elem){
    var div1 = document.createElement("div");
    div1.setAttribute("class","div1")
    var image = document.createElement("img");
    image.src=elem.imgurl;
    image.setAttribute("class","mainimg")
    div1.append(image)
    
    var div2 = document.createElement("div");
    div2.setAttribute("class","div2")

    var div2a = document.createElement("div");
    div2a.setAttribute("class","div2a")
    var sname = document.createElement("h1");
    sname.innerText=elem.h3;
    sname.setAttribute("class","sname")

    var fname = document.createElement("h1");
    fname.innerText=elem.h3;
    fname.setAttribute("class","fname");

    var span = document.createElement("span");
    span.innerText=elem.p;
    span.setAttribute("class","span");

    var pricediv = document.createElement("div");
    pricediv.setAttribute("class","pricediv");

    var price = document.createElement("span");
    price.innerText=elem.price;
    price.setAttribute("class","price");
    var offprice = document.createElement("span");
    offprice.innerText=elem.span;
    offprice.setAttribute("class","offprice");

    var extratext = document.createElement("span");
    extratext.innerText="Is our price too high?";
    extratext.setAttribute("class","extratext");

    var extratext1 = document.createElement("p");
    extratext1.innerText="Or pay ₹ 141/month through EMI (UPI/Debit/Credit Cards)";
    extratext1.setAttribute("class","extratext1");

    var extratext2 = document.createElement("p");
    extratext2.innerText="Includes GST of ₹ 457";
    extratext2.setAttribute("class","extratext2");

    pricediv.append(price,offprice,extratext)
    div2a.append(sname,fname,span,pricediv,extratext1,extratext2)

    var div2b = document.createElement("div");
    div2b.setAttribute("class","div2b")
    var colortext = document.createElement("p");
    colortext.innerText="Color: Black"
    colortext.setAttribute("class","colortext")

    var div2ba = document.createElement("div");
    div2ba.setAttribute("class","div2ba");

    var img01 = document.createElement("img");
    img01.src=elem.imgurl
    img01.setAttribute("class","img01");

    var img00 = document.createElement("img");
    img00.src=elem.imgurl
    img00.setAttribute("class","img00");
    div2ba.append(img01,img00)

    var mictext = document.createElement("p");
    mictext.innerText="Type: With Mic"
    mictext.setAttribute("class","mictext")

    var btn = document.createElement("button");
    btn.innerText="With Mic"
    btn.setAttribute("class","btn")

    var button = document.createElement("button");
    button.addEventListener("click", function(){
        movetocart(elem)
        window.location.href = "checkout.html";
    })
    button.innerText="ADD TO CART"
    button.setAttribute("class","button")

    div2b.append(colortext,div2ba,mictext,btn,button)

    var div2c = document.createElement("div");
    var confusebtn = document.createElement("button");
    confusebtn.innerText="CONFUSED? TALK TO A HEADPHONE GURU"
    confusebtn.setAttribute("class","confusebtn")

    var div2ca = document.createElement("div");
    div2ca.setAttribute("class","div2ca")

    var div2ca1 = document.createElement("div");
    var inputtext = document.createElement("p");
    inputtext.innerText="DELIEVERY & SHOPPING"
    inputtext.setAttribute("class","inputtext");
    var input = document.createElement("input");
    var place = input.placeholder="Enter Pincode Here";
    
    input.setAttribute("class","input")
    div2ca1.append(inputtext,input)

    var div2ca2 = document.createElement("div");
    var div21 = document.createElement("div");
    var deliverys = document.createElement("p");
    deliverys.innerText="Delivery by"
    deliverys.setAttribute("class","deliverys")

    var div22 = document.createElement("div");
    var deliveryend = document.createElement("p");
    deliveryend.innerText="Mon, Apr 4th - Tue, Apr 5th"
    deliveryend.setAttribute("class","deliveryend");

    div21.append(deliverys)
    div22.append(deliveryend)
    div2ca2.append(div21,div22);

    var div2ca3 = document.createElement("div");
    var div61 = document.createElement("div");
    var shiptext = document.createElement("p");
    shiptext.innerText="Ships in "
    shiptext.setAttribute("class","shiptext")

    var div62 = document.createElement("div");
    var shiptextend = document.createElement("p");
    shiptextend.innerText="24 Hours"
    shiptextend.setAttribute("class","shiptextend");

    div61.append(shiptext)
    div62.append(shiptextend)
    div2ca3.append(div61,div62);

    var div2ca4 = document.createElement("div");
    var div71 = document.createElement("div");
    var cod = document.createElement("p");
    cod.innerText="Cash on "
    cod.setAttribute("class","cod")

    var div72 = document.createElement("div");
    var codend = document.createElement("p");
    codend.innerText="Delivery"
    codend.setAttribute("class","codend");

    div71.append(cod)
    div72.append(codend)
    div2ca4.append(div71,div72);

    
    

    div2ca.append(div2ca1,div2ca2,div2ca3,div2ca4,)

    var div2cb = document.createElement("div");
    div2cb.setAttribute("class","div2cb")
    var div2cb1 = document.createElement("div");
    var div31 = document.createElement("div");
    var retn = document.createElement("p");
    retn.innerText="RETURNS &"
    retn.setAttribute("class","retn")

    var div32 = document.createElement("div");
    var retnend = document.createElement("p");
    retnend.innerText="WARRANTY"
    retnend.setAttribute("class","retnend");

    div31.append(retn)
    div32.append(retnend)
    div2cb1.append(div31,div32);

    var div2cb2 = document.createElement("div");
    var div33 = document.createElement("div");
    var ex = document.createElement("p");
    ex.innerText="7 Day"
    ex.setAttribute("class","ex")

    var div34 = document.createElement("div");
    var exend = document.createElement("p");
    exend.innerText="Easy Exchange"
    exend.setAttribute("class","exend");

    div33.append(ex)
    div34.append(exend)
    div2cb2.append(div33,div34);

    var div2cb3 = document.createElement("div");
    var div35 = document.createElement("div");
    var replace = document.createElement("p");
    replace.innerText="7 Day Replacement"
    replace.setAttribute("class","replace")

    var div36 = document.createElement("div");
    var replaceend = document.createElement("p");
    replaceend.innerText="Guarantee"
    replaceend.setAttribute("class","replaceend");

    div35.append(replace)
    div36.append(replaceend)
    div2cb3.append(div35,div36);

    var div2cb4 = document.createElement("div");
    var div37 = document.createElement("div");
    var warnty = document.createElement("p");
    warnty.innerText="1 Year"
    warnty.setAttribute("class","warnty")

    var div38 = document.createElement("div");
    var warntyeend = document.createElement("p");
    warntyeend.innerText="Warranty"
    warntyeend.setAttribute("class","warntyeend");

    div37.append(warnty)
    div38.append(warntyeend)
    div2cb4.append(div37,div38);
    div2cb.append(div2cb1,div2cb2,div2cb3,div2cb4)
    
    var div2cc = document.createElement("div");
    div2cc.setAttribute("class","div2cc")
    var div2cc1 = document.createElement("div");
    var div39= document.createElement("div");
    var bpl = document.createElement("p");
    bpl.innerText="BUY NOW, PAY"
    bpl.setAttribute("class","bpl")

    var div40 = document.createElement("div");
    var bplend = document.createElement("p");
    bplend.innerText="LATER"
    bplend.setAttribute("class","bplend");

    div39.append(bpl)
    div40.append(bplend)
    div2cc1.append(div39,div40);

    var div2cc2 = document.createElement("div");
    var img51 = document.createElement("img");
    img51.src="https://cdn.shopify.com/s/files/1/0153/8863/files/Payment-Gateway-Simpl.svg?v=1642506768";
    div2cc2.append(img51)
    img51.setAttribute("class","img51");
    var div2cc3 = document.createElement("div");
    var img02 = document.createElement("img");
    img02.src="https://cdn.shopify.com/s/files/1/0153/8863/files/Payment-Gateway-walnut-369-walnut-369.svg?v=1645254133";
    div2cc3.append(img02)
    img02.setAttribute("class","img02");
    var div2cc4 = document.createElement("div");
    var img03 = document.createElement("img");
    img03.src="https://cdn.shopify.com/s/files/1/0153/8863/files/Payment-Gateway-snapmint-1.svg?v=1647860891";
    div2cc4.append(img03)
    img03.setAttribute("class","img03");
    var div2cc5 = document.createElement("div");
    var img04 = document.createElement("img");
    img04.src="https://cdn.shopify.com/s/files/1/0153/8863/files/Payment-Gateway-Zest.svg?v=1642506768";
    div2cc5.append(img04)
    img04.setAttribute("class","img04");
    div2cc.append(div2cc1,div2cc2,div2cc3,div2cc4,div2cc5)

    var div2cd = document.createElement("div");
    div2cd.setAttribute("class","div2cd");
    var div2cd1 = document.createElement("div");
    var img52 = document.createElement("img");
    img52.src="https://cdn.shopify.com/s/files/1/0153/8863/files/headphone-zone-club-audiophile_41ada3b7-6ea7-4479-a878-98e5bdb3aaad.svg?v=1642505547";
    img52.setAttribute("class","img52");
    div2cd1.append(img52)
    
    var div2cd2 = document.createElement("div");
    var text01 = document.createElement("p");
    text01.innerText="Club Audiophile members earn 2999 loyalty points worth ₹150"
    text01.setAttribute("class","text01");
    div2cd2.append(text01)
   
    div2cd.append(div2cd1,div2cd2)
   
    div2c.append(confusebtn,div2ca,div2cb,div2cc,div2cd)

    
    

    div2.append(div2a,div2b,div2c)






    document.querySelector("#container").append(div1,div2)
    
})

function movetocart(elem){
    array.push(elem)
    localStorage.setItem("finalcart",JSON.stringify(array))
}