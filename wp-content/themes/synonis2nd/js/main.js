
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

// Active title when click on
$(window).on("load", function () {
  var pageSlug = document.getElementById("js_category_slug");
  if (pageSlug == null) {
    var pageSlugText = "all";
  } else {
    pageSlugText = document.getElementById("js_category_slug").innerText.trim();
  }

  activeItems = document.querySelectorAll(".page-nav-item a h2");
  for (let i = 0; i < activeItems.length; i++) {
    activeText = activeItems[i].innerText
      .toLowerCase()
      .replace(" ", "-")
      .trim();
    if (activeText === pageSlugText) {
      activeItems[i].classList.add("nav_active");
    }
  }
});

// Active title when click on---end

// Show sidebar when scroll
$(function () {
  if ($("#sidebar").length) {
    var top =
      $("#sidebar").offset().top -
      parseFloat($("#sidebar").css("marginTop").replace(/auto/, 0));
    var footTop =
      $("#footer").offset().top -
      parseFloat($("#footer").css("marginTop").replace(/auto/, 0));

    var maxY = footTop - $("#sidebar").outerHeight();

    $(window).scroll(function (evt) {
      var y = $(this).scrollTop();
      if (y > top) {
        if (y < maxY) {
          $("#sidebar").addClass("fixed").removeAttr("style");
        } else {
          $("#sidebar");
          //   .removeClass("fixed")
          //   .css({
          //     position: "absolute",
          //     top: maxY - top + "px",
          //   });
        }
      } else {
        $("#sidebar").removeClass("fixed");
      }
    });
  } else {
    return;
  }
});
// Show sidebar when scroll---end

// Sticky Sidebar on scroll
window.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (entry.intersectionRatio === 1) {
          const activeE = document.querySelector(`ul li a[href="#${id}"] h2`);
          if (activeE) {
            activeE.classList.add("nav_active");
          } else {
            return;
          }
        } else {
          const unActiveE = document.querySelector(`ul li a[href="#${id}"] h2`);
          if (unActiveE) {
            unActiveE.classList.remove("nav_active");
          } else {
            return;
          }
        }
      });
    },
    {
      threshold: 1,
    }
  );
  // Track all sections that have an `id` applied
  document.querySelectorAll("section[id]").forEach((section) => {
    observer.observe(section);
  });
});
// Sticky Sidebar on scroll---end

// Button show more
let viewMoreBtn = document.querySelector("#view-more");
let currentItem = 6;
let post_container = [
  ...document.querySelectorAll(
    ".page_content_inner .news_post_list .post_container"
  ),
];

if (viewMoreBtn) {
  if (post_container.length < 6) {
    viewMoreBtn.style.display = "none";
  }
  viewMoreBtn.onclick = () => {
    for (var i = currentItem; i < currentItem + 3; i++) {
      if (post_container[i]) {
        post_container[i].style.display = "inline-block";
      }
    }
    currentItem += 3;

    if (currentItem >= post_container.length) {
      viewMoreBtn.style.display = "none";
    }
  };
}
// Button show more----end

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
