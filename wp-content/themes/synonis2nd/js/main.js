
// Open/close menu sidebar
function openNav() {
  document.getElementById("js_sidenav").style.width = "220px";
}
function closeNav() {
  document.getElementById("js_sidenav").style.width = "0";
}
// Open/close menu sidebar---end

// Active title when click on
$("#page-nav-list").on("click", function (e) {
  var item = e.target;
  var itemClass = e.target.className;
  if (itemClass.includes("nav_active")) {
    return;
  } else {
    document
      .getElementsByClassName("nav_active")[0]
      .classList.remove("nav_active");
    item.classList.add("nav_active");
  }
});



// reveal animations when scrolling
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  var productReveals = document.querySelectorAll(".products_item.reveal");
  var newsReveals = document.querySelectorAll(".post_container.reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }

  for (var i = 0; i < productReveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = productReveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible || i === 0) {
      productReveals[i].classList.add("active");
    } else {
      productReveals[i].classList.remove("active");
    }
  }

  for (var i = 0; i < newsReveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = newsReveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible || i <= 2) {
      newsReveals[i].classList.add("active");
    } else {
      newsReveals[i].classList.remove("active");
    }
  }
}

// reveal animations when scrolling---end


  const questionHeaders = document.querySelectorAll(".question-wrapper");
  questionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      header.parentElement.classList.toggle("active");
    });
  });