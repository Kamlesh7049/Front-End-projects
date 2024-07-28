// var a=document.querySelector('h1')
// console.log(a)

// var b=document.querySelector("h1")
// b.innerHTML="changed HTML"

// var c=document.querySelector('h1')
// c.style.color="red"
// c.style.backgroundColor="black"

// var d=document.querySelector('h1')
// d.innerHTML="kaise ho app log"
// d.style.color="yellow"
// d.style.backgroundColor="black"

// d.addEventListener("click",function(){
// console.log("How are you")
// d.innerHTML="<u>changed html</u>"

// d.innerText="i am fine"

//     d.style.color="yellow"
//     d.style.background="#000"
// })

// var bulb = document.querySelector("#bulb");
// var btn = document.querySelector("button");
// var flag = 0;
// btn.addEventListener("click", function () {
//   if (flag == 0) {
//     bulb.style.backgroundColor = "yellow";
//     console.log("Clicked")
//     flag=1
//   } else {
//     bulb.style.backgroundColor = "transparent";
//     console.log("Again click")
//     flag=0   
//   }
// });


// var h=document.querySelectorAll('h1')
// // console.log(h)
// h.forEach(function(e) {
//     console.log(e)
    
// })



// function run(){
//     console.log("chal gya");
// }


function changeimg(){
        let output=document.getElementById('img1');
        output.src="./Randomimg.jpg"


}
function previousimg(){   
        let output=document.getElementById('img1');
        output.src="./img2.jpg"

}