const text = document.getElementById('text');
const h2Btn = document.getElementById('btn');

h2Btn.addEventListener('click', ()=> {

  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  
  }, 2000);

});

