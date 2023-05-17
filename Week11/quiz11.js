
const svg = document.getElementById("svg-canvas");
let width = 100
let height = 100

window.addEventListener("resize", resizeSvg);

function resizeSvg(){
    let bbox = svg.getBoundingClientRect();
    svg.setAttribute("viewBox", `0 0 ${bbox.width} ${bbox.height}`);
    for(let circle of svg.children){
        circle.setAttribute('r',  Math.min(bbox.width, bbox.height) * 0.1);
    }
}

function makeRGBSimple(R, G, B)
 {return `rgb(${R}, ${G}, ${B}`}

 function makeRGB(redInput, greenInput, blueInput)
  {let redOutput = redInput ?? Math.round(Math.random() * 255); 
   let greenOutput = greenInput ?? Math.round(Math.random() * 255); 
   let blueOutput = blueInput ?? Math.round(Math.random() * 255);

   return `rgb(${redOutput}, ${greenOutput}, ${blueOutput})`;}

function randomNum(lower, upper) {
    let num = lower + Math.random()*(upper-lower);
    return num;
}

function drawCircle(cx, cy, cr, r, g, b)
{  let X = `${randomNum(0, width)}%`;
   let Y = `${randomNum(0, height)}%`;
   let R = 66;
   let C = makeRGB(r, g, b);

   let circle = document. createElementNS("http://www.w3.org/2000/svg", "circle");
   console.log(circle)

   circle.setAttribute("cx", X);
   circle.setAttribute("cy", Y);
   circle.setAttribute("r", R);
   circle.setAttribute("fill", C);

svg.appendChild(circle);}

drawCircle(null,null,null,null,null,null);
drawCircle(null,null,null,null,null,null);
drawCircle(null,null,null,null,null,null);
drawCircle(null,null,null,null,null,null);
drawCircle(null,null,null,null,null,null);
drawCircle(null,null,null,null,null,null);
drawCircle(null,null,null,null,null,null);

