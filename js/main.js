// carousel
$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    margin: 10,
    // autoWidth: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      1200: {
        items: 1,
      },

    },
  })
  // scroll to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $(".scroll-top-btn").fadeIn();
    } else {
      $(".scroll-top-btn").fadeOut();
    }
  });

  $(".scroll-top-btn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 300);
  })

});
// Change main color
const colorList = document.querySelectorAll(".colors-list li ");
colorList.forEach(li => {
  li.addEventListener("click", (e) => {
    console.log(e.target.dataset.color)
    document.documentElement.style.setProperty("--main-color", e.target.dataset.color)
  })
})
// counter
const counters = document.querySelectorAll(".counter h3"),
  container = document.querySelector(".counter-container");

let activated = false;
window.addEventListener("scroll", () => {

  if (scrollY > container.offsetTop - container.offsetHeight - 200 && activated == false) {
    counters.forEach(counter => {
      counter.innerText = 0;
      let count = 0;

      function updateCount() {
        const target = parseInt(counter.dataset.count);

        if (target > count) {
          count++
          counter.innerText = count

          setTimeout(updateCount, 10)
        } else {
          counter.innerText = target
        }
      }
      updateCount()
      activated = true;
    })
  }
})

let navLInks = document.querySelector(" .navbar .nav-links ul");
function showMenu() {
  navLInks.classList.toggle("show")

}


