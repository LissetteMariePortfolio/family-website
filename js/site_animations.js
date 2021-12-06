const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

if (!!isReduced) {
   console.log("Motion has been Reduced, Do nothing!")
} else {
    


document.getElementById("parent_img1").addEventListener("mouseover", function() {
    console.log("Hi");
    document.getElementById("pm_img1").style.opacity = 0;
});
document.getElementById("parent_img1").addEventListener("mouseleave", function() {
    console.log("Bye");
    document.getElementById("pm_img1").style.opacity = 1;
});



document.getElementById("parent_img2").addEventListener("mouseover", function() {
    console.log("Hi");
    document.getElementById("pm_img2").style.opacity = 0;
});
document.getElementById("parent_img2").addEventListener("mouseleave", function() {
    console.log("Bye");
    document.getElementById("pm_img2").style.opacity = 1;
});

document.getElementById("parent_img3").addEventListener("mouseover", function() {
    console.log("Hi");
    document.getElementById("pm_img3").style.opacity = 0;
});
document.getElementById("parent_img3").addEventListener("mouseleave", function() {
    console.log("Bye");
    document.getElementById("pm_img3").style.opacity = 1;
});

document.getElementById("parent_img4").addEventListener("mouseover", function() {
    console.log("Hi");
    document.getElementById("pm_img4").style.opacity = 0;
});
document.getElementById("parent_img4").addEventListener("mouseleave", function() {
    console.log("Bye");
    document.getElementById("pm_img4").style.opacity = 1;
});

document.getElementById("parent_img5").addEventListener("mouseover", function() {
    console.log("Hi");
    document.getElementById("pm_img5").style.opacity = 0;
});
document.getElementById("parent_img5").addEventListener("mouseleave", function() {
    console.log("Bye");
    document.getElementById("pm_img5").style.opacity = 1;
});
}