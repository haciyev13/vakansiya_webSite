let icon = document.querySelector(".filter-icon");
let main_content = document.querySelector(".main__content-form");
const menuIcon = document.querySelector('.nav__menu');
const sidebar = document.querySelector('.sidebar');

let slider = document.querySelector(".section__card-list-slider");

let main__content_UL = document.querySelectorAll(".main__content-form>form>label>ul")


main__content_UL.forEach(item => {
     item.classList.add("d__none");
})


let favIcon = document.querySelectorAll('.fa-caret-up');

favIcon.forEach(function (icon) {
     icon.onclick = () => icon.nextElementSibling.classList.toggle("d__none");
     icon.classList.toggle("rotate");
});


menuIcon.addEventListener('click', () => {
     sidebar.classList.toggle('sidebar-open');
});

icon.addEventListener("click", function (e) {
     e.preventDefault()
     main_content.classList.toggle("d__active");
})


$('.section__card-list-slider').slick({
     slidesToShow: 5,
     slidesToScroll: 1,
});
$('.category-container').slick({
     slidesToShow: 5,
     slidesToScroll: 1,
     responsive: [
          {
               breakpoint: 666,
               settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
               }
          }
     ]
});