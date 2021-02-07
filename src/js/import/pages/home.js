import Swiper, { Navigation, Pagination } from 'swiper';

var array = Array.of(1, 2, 3);
var set = new Set([1, 2, 3]);

console.log(array)

async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("готово!"), 1000)
  });

  let result = await promise; // будет ждать, пока промис не выполнится (*)

  alert(result); // "готово!"
}

f().then(()=> {
  console.log('finish')
});

Swiper.use([Navigation, Pagination]);

// init Swiper:
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})