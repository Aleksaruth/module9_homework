let btn = document.querySelector('.btn');
let widthValue = +document.querySelector('.width').value;
let heightValue = +document.querySelector('.height').value;
//codepen не принимает введенное значение в value, пришлось указать в html, а браузер вообще ошибку выдает :(
let textBox = document.querySelector('.text');
let imgBox = document.querySelector('.result');

function displayResult(srcImg) {
  let img = '';
  const imgBlock = `<div>
    <img src="${srcImg}"/>
    </div>`;
img += imgBlock;
imgBox.innerHTML = img;
        }  

//console.log('Размер картинки будет '+ widthValue + 'x' + heightValue + ' px');

btn.addEventListener('click', () => {
  if ( widthValue < 100 || widthValue > 300 || heightValue < 100 || heightValue > 300){
    textBox.textContent='Упс! Одно из чисел вне диапазона от 100 до 300';
    //console.log('not okey');
   } 
  else if  ((isNaN(widthValue)) || (isNaN(heightValue))){
    textBox.textContent='Введите число!';
     //console.log('not okey');
   } 
  
  else {
    textBox.textContent='Размер картинки '+ widthValue + 'x' + heightValue + ' px';
    fetch(`https://picsum.photos/${widthValue}/${heightValue}`)
                .then((response) => {
                    let url = response.url;
                    displayResult(url);
                })
                .catch(() => { console.log('error') });
    //console.log('okey')
    }
  
});