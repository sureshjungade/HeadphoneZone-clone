var finalCartData = JSON.parse(localStorage.getItem("finalcart"));

var x = document.getElementById("myTable").rows.length;
console.log(x)

// console.log(finalCartData);
var toTal = finalCartData.reduce(function (sum,ele){
return sum+Number(ele.price);
},0)
console.log(toTal);
var checkTotal=document.createElement("div");
checkTotal.setAttribute("id","checkTotal")
      checkTotal.innerText=toTal;
      document.querySelector("#rptotal").append(checkTotal);

      var count;
    
    if(localStorage.getItem("counterNumber") == null){
        count = 0;
    }
    else{
        count = localStorage.getItem("counterNumber")
    }
    
    var time = 0;
finalCartData.map(function (ele){
  time++;
  console.log(time)
    console.log(ele);
        var tr=document.createElement("tr");
    
        var td1=document.createElement("td");
       
        var div1 = document.createElement("div");
        div1.setAttribute("id","product");

        var p_image = document.createElement("img");
        p_image.setAttribute("class","p_img")
        p_image.src=ele.imgurl;

        var div2 = document.createElement("div");
        div2.setAttribute("id","productDetail");

        var divmain = document.createElement("div");
        divmain.setAttribute("id","maindiv");

        var series = document.createElement("p");
        series.setAttribute("id","series");
        series.innerText=ele.h3;

        var name = document.createElement("p");
        name.setAttribute("id","pname");
        name.innerText=ele.p;

        var price = document.createElement("p");
        price.setAttribute("id","prc");
        price.innerText=ele.price;

        var strprice = document.createElement("p");
        strprice.setAttribute("id","sop");
        price.innerText=ele.price;
        strprice.innerText=ele.span;
        
        var div_img = document.createElement("div");
        div_img.setAttribute("class","divImg")
    
        div_img.append(p_image);
        div1.append(div_img);
        div2.append(series,name,price)
        divmain.append(div1,div2);
        
        td1.append(divmain);
        tr.append(td1);

        var td2 =document.createElement("td");
        
      var counter = document.createElement("div");
      counter.setAttribute("id","counter");
      var countPlus = document.createElement("button");
      countPlus.setAttribute("id","add");
      countPlus.innerText="+";

      var count = 1;
      var countDis = document.createElement("div");
      countDis.setAttribute("id","countDis");
      countDis.innerText=count;

      countPlus.addEventListener("click", myFn);
       function myFn(){

        count++;
        localStorage.setItem("counterNumber", count);
        console.log(count)

        countDis.innerText=count;
        
        price.innerText=Number(ele.price)*count;
        strprice.innerText=ele.span+ele.span;
        console.log(price)
        mTotal.innerText=Number(ele.price)*count;
        sTotal.innerText=Number(ele.span)*count;
        checkTotal.innerText=toTal+Number(price.innerText)/Number(countDis.innerText);
        console.log(countDis.innerText)
       }
      var countMinus = document.createElement("button");
      countMinus.setAttribute("id","minus");
      countMinus.innerText="-";
      
      countMinus.addEventListener("click", mysecFn);
       function mysecFn(){
        count--;
        localStorage.setItem("counterNumber", count);
        console.log(count)

        countDis.innerText=count;
        console.log(countDis)
        price.innerText=Number(price.innerText)-ele.price;
        strprice.innerText=Number(strprice.innerText)-ele.span;
        console.log(price)
        mTotal.innerText=Number(mTotal.innerText)-ele.price;
        sTotal.innerText=Number(sTotal.innerText)-ele.span;
        checkTotal.innerText=(Number(price.innerText)*time)-toTal;
       }

      
       var sub=0;
      var reMove = document.createElement("button");
      reMove.setAttribute("id","reMove");
      reMove.innerText="Remove";
      reMove.addEventListener("click",my3rdFn);
       function my3rdFn(){
        time--;
        td1.innerText="";
        td2.innerText="";
        td3.innerText="";
        checkTotal.innerText=Number(price.innerText)*time;
        sub++;
        
        if(time==0){
          checkTotal.innerText=0;
        }
        console.log(time)
       }
      counter.append(countMinus,countDis,countPlus)
      td2.append(counter,reMove);
      tr.append(td2);

      var td3 =document.createElement("td");

      var pTotal = document.createElement("div");
      pTotal.setAttribute("id","pTotal");
      var mTotal = document.createElement("p");
      mTotal.setAttribute("id","mTotal");
      mTotal.innerText="₹"
      var sTotal = document.createElement("strike");
      sTotal.setAttribute("id","sTotal");
      mTotal.innerText=ele.price;
      sTotal.innerText=ele.span;
      pTotal.append(mTotal,sTotal);
      td3.append( pTotal);
      tr.append(td3);

      
      

        document.querySelector("#body").append(tr);
    })