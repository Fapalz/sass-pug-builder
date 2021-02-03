
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