let icon = document.querySelector(".filter-icon");
let main_content = document.querySelector(".main__content-form");
const menuIcon = document.querySelector('.nav__menu');
const sidebar = document.querySelector('.sidebar');
let sectionCards = document.querySelector(".section__card-list-item")
let sectionCardCategory = document.querySelector(".category-container")
let sectionCardCompanies = document.querySelector(".section__card-list-slider")

let main__content_UL = document.querySelectorAll(".main__content-form>form>label>ul")


$('.job-cards').slick({
     dots: true,
     infinite: true,
     slidesToShow: 4,
     responsive: [
          {
               breakpoint: 666,
               settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
               }
          },
          {
               breakpoint: 992,
               settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
               }
          }
     ]
});


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







function getURL() {
     let url = new URLSearchParams(window.location.search)
     let pathName = window.location.pathname.split("/").pop();

     return {
          path: pathName
     }

}

let params = getURL()




let BASE_URL = "http://localhost:3000/";


function getFetch(endpoint, func) {
     fetch(`${BASE_URL}${endpoint}`)
          .then(res => res.json())
          .then(data => {
               func(data);
          })
}

getFetch("vakansiya_data", getIndexData);


function getIndexData(data) {
     let empthyData = '<h2>Vakansiyalar</h2>'
     data.map(cards => {

          let cardInfoHtml = cards.card_info.map(info => `<h4>${info}</h4>`).join("");

          empthyData += `
                    <li class="section__card-item">
                                   <div class="section__card-content flex__space-between">
                                        <a href="#" class="section__card-link">
                                             <div class="section__card-img flex__center">
                                                  <span class="section__card-icon"><i
                                                            class="fa-solid fa-briefcase"></i></span>
                                                  <h3 class="card__work-name">${cards.card_name}</h3>
                                             </div>
                                        </a>
                                        <div class="section__card-main-time">
                                             <p class="section__card-main-time-title">${cards.card_time}</p>
                                             <p class="section__card-main-time-salary">${cards.card_salary}<span
                                                       class="section__card-main-time-month">${cards.card_month}</span>
                                             </p>
                                        </div>
                                        <div class="section__card-main-location">
                                             <p class="section__card-main-location-title">${cards.card_location}</p>
                                             <div class="flex__center section__card-main-location-text">
                                             ${cardInfoHtml}
                                             </div>
                                        </div>
                                        <div class="section__card-main-apply">
                                             <a href="#" class="section__card-main-share"><i
                                                       class="fa-regular fa-bookmark"></i></a>
                                             <a href="#" class="section__card-main-btn">Apply</a>
                                        </div>
                                   </div>
                              </li>
                    `
     })


     sectionCards.innerHTML = empthyData;

}

function getIndexCatData(data) {
     data.map(item => {
          sectionCardCategory.innerHTML += `
           <a href="">
                    <div class="category-card">
                    <i class="fas fa-dollar-sign category-icon"></i>
                    <h3>${item.name}</h3>
                    <p>${item.count} Vakansiya</p>
               </div>
          </a>
          `
     })

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
}

function getIndexCompanieData(data) {
     data.map(item => {
          sectionCardCompanies.innerHTML += `
          <li class="section__card-item section__card-item-company">
                    <a href="#" class="section__card-link slider__card-link">
                         <div class="company-description">
                              <span><i class="fa-solid fa-briefcase"></i></span>
                              <h4>${item.name}</h4>
                         </div>
                    </a>
               <div class="company-footer">
                    <a href="">${item.count} Vakansiya</a>
               </div>
          </li>
          `
     })

     $('.section__card-list-slider').slick({
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
}


if (params.path == "index.html") {
     getFetch("vakansiya_data", getIndexData)
     getFetch("work_category", getIndexCatData)
     getFetch("companies", getIndexCompanieData)
}



