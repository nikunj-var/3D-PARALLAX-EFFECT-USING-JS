
// queryselector  stores all the parallax elements and store it in the form of lists.
const parallax_el = document.querySelectorAll(".parallax");
const main = document.querySelector("main");
let xValue=0,yValue=0;
let rotatedegree = 0;

function update(cursorPosition){
    parallax_el.forEach(el => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotatespeed = el.dataset.rotation;

        let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth/2 ? 1 : -1; 
        let zValue = (cursorPosition - parseFloat(getComputedStyle(el).left))*isInLeft*0.1;
        el.style.transform = `perspective(2300px) translateZ(${zValue * speedz}px) rotateY(${rotatedegree * rotatespeed}deg) translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px)) `;
    });
}
update(0);
// event object - when an event occurs , it calls its associated and it also passes a single argument to that function that is a reference to the event object to get to those access elements we need to give here in ()
window.addEventListener("mousemove",(e)=>{

    // to allocate (0,0) in the center
    xValue = e.clientX - window.innerWidth/2;
    yValue = e.clientY - window.innerWidth/2;

    rotatedegree = xValue / (window.innerWidth/2) * 20;
    update(e.clientX);

});
if(window.innerWidth >= 725){
    main.style.maxHeight = `${window.innerWidth * 0.6}px`;
}else{
    main.style.maxHeight = `${window.innerWidth * 1.6}px`;
}

// animation
// let timeline = gsap.timeline();
// parallax_el.forEach(el => {
//     timeline.from(
//         el,
//         {
//             top:`${el.offsetHeight/2 + el.dataset.distance}px`,
//             duration:1,
    
    
//     },"1");
// })
