
const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});

function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from(".nav",{
        y : '-10',
        opacity : 0,
        ease : Expo.easeInOut,
        duration : 1.5,
    })

    .to(".boundingelem",{
        y : 0,
        ease : Expo.easeInOut,
        duration : 2,
        delay : -1,
        stagger : .2
    })


    
    .from(".herofooter",{
        y : -10,
        opacity : 0,
        ease : Expo.easeInOut,
        duration : 1.5,
        delay : -1,
    })
    
}

var timeout;

function mouseSkew(){
var Xscale = 1;
var Yscale = 1;

var Xprevious = 0;
var Yprevious = 0;
    window.addEventListener("mousemove",function(dets){
        Xscale= gsap.utils.clamp(.8,1.2,dets.clientX -Xprevious);
        Yscale =  gsap.utils.clamp(.8,1.2,dets.clientY -Yprevious);

    Xprevious = dets.clientX;
    Yprevious = dets.clientY;


    circleMouseFollower(Xscale,Yscale);
    clearTimeout(timeout);
   timeout = setTimeout(function(){
        document.querySelector(".minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)  scale(1,1)`;
    },100);
// console.log(xdiff,ydiff)
    });
}
mouseSkew();
function circleMouseFollower(Xscale,Yscale){
    window.addEventListener("mousemove",function(dets){
// console.log(dets.clientX,dets.clientY);
document.querySelector(".minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)  scale(${Xscale},${Yscale})`;
    })
}
mouseSkew();
circleMouseFollower();
firstPageAnim();


// document.querySelectorAll(".elem").forEach(function(elem){
// elem.addEventListener("mousemove",function(details){
// gsap.to(elem.querySelector("img"),{
//     x : 300,
//     opacity : 1 ,
//     ease : Power1
// })
// });
// });
