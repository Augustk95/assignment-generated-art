// let mijnbutton = document.getElementById("btn");
// console.log(mijnbutton);
// mijnbutton.onclick = optelsom;

//    alert("Hello world!!")


// function optelsom(){
//     let getal1 = 6;
//     let getal2 = 1;
//     let result = getal1+getal2;
//     console.log(result);
// }

// function berekening(a,b,c){
//     let result = a*b+c;
//     console.log(b);
//     return result;

// }

// let uitkomst =  berekening(3,6,9);
// console.log(uitkomst);
// //optelsom();

// let mijndiv = document.createElement("div");

// let btn = document.createElement("button")
// btn.innerText = "Klik mij";
// btn.setAttribute = ("class", "btn");
// mijndiv.appendChild(btn);

// let a = document.createElement("a");
// a.setAttribute("href", "http://www.google.nl");
// document.body.appendChild(a);



// mijnbutton.onclick = optelsom;

// document.body.appendChild(mijndiv);

// ------------------------------------------------------------

// let arr = [3,6,3,7,9,5,3,6,5,9]
// let willekeuriggetal = (Math.round (Math.random() *10) + 20);
// console.log(willekeuriggetal);

// arr[arr.length-1] = 100;
// arr[0]=q0;

// if(true){
//     //als het waar is
// } else {

// }

// for (let i=0;i<arr.length;i++){
//     let result =arr[i]
//     console.log(result)

// }

// --------------------------------------------------------------------

// let fruit = ['banana','apple'];
// console.log(fruit.length);
// let first = fruit[0];
// console.log(first);
// let last = fruit[fruit.length-1];
// console.log(last);
// fruit.forEach(function(item, index, array){
// console.log(item, index)
// });

// fruit.push("kiwi");
// console.log(fruit);

// fruit.pop();
// console.log(fruit);

// fruit.shift();
// console.log(fruit);

// fruit.unshift("strawberry");
// console.log(fruit);

// let index = fruit.indexOf("apple")
// console.log(index);

// fruit.splice(1);
// console.log(fruit);


// let numbers = [3,5,8,12,8,5,3,-1,0,5];
// numbers.reverse();
// console.log(numbers);

// ------------------------------------------------------------

// getallen = [5,9,2,11,3]

// let sum = 0;
//   for (let i = 0; i < getallen.length; i++){
//       sum += getallen[i];
//   }
//   let uitkomst = sum / getallen.length;

// let mijndiv = document.createElement("div");
// mijndiv.innerHTML = uitkomst


// document.body.appendChild(mijndiv);


// ---------------------------------------------------------------
let xmlns = "http://www.w3.org/2000/svg";
let svg = document.createElementNS(xmlns, "svg");
svg.setAttribute("width", 5000);
svg.setAttribute("height", 5000);



function createCircle(x,y,r){
    let circle = document.createElementNS(xmlns, "circle") //NS is voor alle aspecten die een namespace nodig hebben, voorbeeld voor SVG
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", r);
    circle.setAttribute("fill", '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6))
    circle.setAttribute("stroke", "black")
    svg.appendChild(circle);
}

for (let i = 0; i <50; i++){
    let r1 = Math.random()*200;
    let r2 = Math.random()*200;
    let r3 = Math.random()*50;
    createCircle(r1,r2,r3);
}

document.body.appendChild(svg); 