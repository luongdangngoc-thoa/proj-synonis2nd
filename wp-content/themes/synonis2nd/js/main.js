
// Open/close menu sidebar
function openNav() {
  document.getElementById("js_sidenav").style.width = "220px";
}
function closeNav() {
  document.getElementById("js_sidenav").style.width = "0";
}
// Open/close menu sidebar---end



// Q&A colaspe
  const questionHeaders = document.querySelectorAll(".question-wrapper");
  questionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      header.parentElement.classList.toggle("active");
    });
  });


