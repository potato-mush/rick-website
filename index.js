document.addEventListener("DOMContentLoaded", function () {

  const inputField = document.getElementById("inputField");
  const label = document.querySelector('label[for="inputField"]');

  //back to top btn show when scroll
  window.addEventListener("scroll", function () {
    var backToTop = document.getElementById("back-to-top");
    if (window.scrollY > 300) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  inputField.addEventListener("focus", () => {
    label.style.top = "-8px";
    label.style.fontSize = "12px";
    label.style.color = "#030720";
    label.style.backgroundColor = "#f9f9f9";
    label.style.padding = "0 4px";
  });

  inputField.addEventListener("blur", () => {
    if (inputField.value === "") {
      label.style.top = "24px";
      label.style.fontSize = "18px";
      label.style.color = "#cacaca";
      label.style.backgroundColor = "transparent";
      label.style.padding = "0";
    }
  });

  document.getElementById("back-to-top").addEventListener("click", function () {
    var Home = document.getElementById("home");
    var yOffset = Home.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: yOffset,
      behavior: "smooth",
    });
  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true, // Add this line to enable the loop
  });
});