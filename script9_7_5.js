let myKey = localStorage.getItem('imgKey');
let btn = document.querySelector('.btn');
let textBox = document.querySelector('.text');
let imgBox = document.querySelector('.result');

function CreateView(piclist) {
	let toShow = '';

	for (var key in piclist) {
		const imgUrl = piclist[key].download_url;
		const imgAuthor = piclist[key].author;
		const picHTML = `<div class="card"><a href="${piclist[key].url}"><img src="${piclist[key].url}" class="card-image"/></a><p>${imgAuthor}</p></div>`;
		// firefox блокирует встроенное содержимое у меня, поэтому добавила ссылку на сами картинки для проверки
		toShow = toShow + picHTML;
	}
	imgBox.innerHTML = toShow;
}

const useRequest = () => {
	return fetch(`https://picsum.photos/v2/list?page=${pageValue}&limit=${limitValue}`)
		.then((response) => {
			return response.json();
		})
		.then((json) => {
			return json;
		})
		.catch(() => {
			console.log('Возникла ошибка')
		});
};


btn.addEventListener('click', async () => {
  
  let pageValue = +document.querySelector('.page').value;
  let limitValue = +document.querySelector('.limit').value;
  //codepen не принимает введенное значение в value, пришлось указать в html, а браузер вообще ошибку выдает :(
  
    if ( ( pageValue < 1 || pageValue > 10 || isNaN(pageValue) ) && ( limitValue < 1 || limitValue > 10 || isNaN(limitValue) ) ) {
    textBox.textContent='Упс! Лимит и номер страницы вне диапазона от 1 до 10';
    
    } else if ( limitValue < 1 || limitValue > 10 || isNaN(limitValue) ) {
    textBox.textContent='Упс! Лимит вне диапазона от 1 до 10';

    } else if ( pageValue < 1 || pageValue > 10 || isNaN(pageValue) ) {
    textBox.textContent='Упс! Номер страницы вне диапазона от 1 до 10';

  } else {
    if (myKey !== null) {
      CreateView(JSON.parse(myKey));
    } else {
      const requestResult = await useRequest();
      CreateView(requestResult);
      localStorage.setItem('imgKey', JSON.stringify(requestResult));
	  }
  }

});
