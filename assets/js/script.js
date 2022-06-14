$("#ham").on("click", function () {
  console.log("clicked");
  document.getElementById("mobile-links").classList.toggle("show");
});

var isCounting = false;

function isInViewport() {
  var bounding = $("#portfolio")[0].getBoundingClientRect();
  if (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth) &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight)
  ) {
    console.log("In the viewport! :)");
    return true;
  } else {
    console.log("Not in the viewport. :(");
    return false;
  }
}

function isInViewportMobile() {
  var bounding = $("#portfolio")[0].getBoundingClientRect();
  // -404.15380859375 0 414 654.84619140625
  if (
    bounding.top >= -404 
  ) {
    console.log("In the viewport! :)");
    return true;
  } else {
    console.log("Not in the viewport. :(");
    return false;
  }
}

$(document.body).on('touchmove', onTouchMove); // for mobile
$(window).on('scroll', onScroll); 

function onScroll () {
  if (isInViewport() && !isCounting) {
    countAnimation("counter1", 12);
    countAnimation("counter2", 2);
    countAnimation("counter3", 1);
  }
}

function onTouchMove () {
  if (isInViewportMobile() && !isCounting) {
    countAnimation("counter1", 12);
    countAnimation("counter2", 2);
    countAnimation("counter3", 1);
  }
}

function countAnimation(element, end) {
  let counts = setInterval(updated);
  let upto = 0;
  function updated() {
    var count = document.getElementById(element);
    count.innerHTML = ++upto;
    if (upto === end) {
      clearInterval(counts);
    }
  }
  isCounting = true;
}


function submitForm(event){
  console.log(event)
}


