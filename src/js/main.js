
import 'custom-event-polyfill';
//import Swiper, { Navigation, Pagination } from 'swiper';

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

function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

let generator = generateSequence();

for (let value of generator) {
  alert(value); // 1, затем 2, затем 3
}


helper();



alert('Hello');
