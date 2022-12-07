let button = document.querySelector('.btn');
let numValue = document.querySelector('input').value;
//codepen не принимает введенное значение в value, пришлось указать в html value='2', а браузер вообще ошибку выдает :(
let textBox = document.querySelector('.text');
let imgBox = document.querySelector('.result');

console.log(numValue);
button.addEventListener('click', () => {
  if (numValue <= 1 && numValue >= 10){
    textBox.textContent=`${numValue} вне диапазона от 1 до 10`;
    console.log('ok');
  
    }else {  
     useRequest(`https://picsum.photos/v2/list/?limit=${numValue}`, displayResult);
    }
})

function displayResult(apiData) {
  let cards = '';
  // console.log('start cards', cards);
  
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });
  
  // console.log('end cards', cards);
    
  textBox.innerHTML = cards;
}


function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    xhr.onload = function() {
      if (xhr.status != 200) {
        console.log('Статус ответа: ', xhr.status);
      } else {
        const result = JSON.parse(xhr.response);
        if (callback) {
          callback(result);
        }
      }
    };
    
    xhr.onerror = function() {
      console.log('Ошибка! Статус ответа: ', xhr.status);
    };
    
    xhr.send();
  };