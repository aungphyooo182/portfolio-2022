$("#ham").on("click", function () {
  console.log("clicked");
  document.getElementById("mobile-links").classList.toggle("show");
});

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

$(window).scroll(function () {
  if (isInViewport()) {
    countAnimation("counter1", 12000);
    countAnimation("counter2", 2);
    countAnimation("counter3", 1);
  }
});

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
}


function submitForm(event){
  console.log(event)
}


