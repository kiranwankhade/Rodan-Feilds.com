let cartData = JSON.parse(localStorage.getItem("bestSellCart")) || [];
console.log("cart",cartData);
cartDisplay(cartData)

let disBackground = document.getElementById("body__overlay")

let bag = document.querySelector("#cart-count")
bag.innerText = cartData.length;
let bag2 = document.querySelector("#cartBag");
bag2.addEventListener("mouseover",function(){
bag.style.cursor = "pointer";
})
bag2.addEventListener("click",function(e){
    e.stopPropagation();
    document.getElementById("mySidebar").style.width = "350px";
    disBackground.style.display = "block";
    window.location.reload();
})

let nav = document.querySelector("#nav-count")
if(cartData.length == 0){
    nav.innerText = "";
}else{
    nav.innerText = cartData.length;
}

let navP = document.querySelector("#navBag");
navP.addEventListener("mouseover",function(){
navP.style.cursor = "pointer";
})
navP.addEventListener("click",function(e){
    e.stopPropagation();
    document.getElementById("mySidebar").style.width = "350px";
    disBackground.style.display = "block";
})

function cartDisplay(cartData){
   
    let cartItemprice = cartData.reduce(function(acc,el){
        return acc+el.price;
    },0);

    document.querySelector("#bottomSideDiv>div>#totalPrice").innerText = "$"+ cartItemprice
    cartData.forEach(function(el,index){
        // document.querySelector("#sideContainer").innerHTML = ""
        let count = 1;
        let card1 = document.createElement("div")

        let img = document.createElement("img")
        img.src = el.img;

        let card2 = document.createElement("div");

        let prodName = document.createElement("p");
        prodName.innerText = el.name;

        let card3 = document.createElement("div")

        let quantity = document.createElement("p");
        if(el.name === cartData[index].name){
            // count = count+1;
           quantity.innerText = "Qty:"+""+(count++);
        }else{
            quantity.innerText = "Qty:"+""+(count);
        }

        let price = document.createElement("p");
        price.innerText = "$"+""+el.price;

       

        card3.append(quantity,price);
        card2.append(prodName,card3);
        card1.append(img,card2);
        
        document.querySelector("#sideContainer").append(card1);
        localStorage.setItem("bestSellCart",JSON.stringify(cartData))
        let hr = document.createElement("hr")
        document.querySelector("#sideContainer").append(hr);
    })
}


document.body.onclick = function () {
    // Close Nav here
    closeNav();
    disBackground.style.display = "none";

}

function closeNav(e) {
    // e.stopPropagation();
    document.getElementById("mySidebar").style.width = "0";
    disBackground.style.display = "none";
    
}

document.body.onclick = closeNav;