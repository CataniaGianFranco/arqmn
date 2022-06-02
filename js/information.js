let hideText__btn = document.getElementById('hideText__btn');
let hideText = document.getElementById('hideText');

hideText__btn.addEventListener('click', toggleText);

function toggleText() {
    hideText.classList.toggle('showText');
    
    if(hideText.classList.contains('showText')) {
        hideText__btn.innerHTML = 'MENOS INFORMACIÓN'
    }
    else {
        hideText__btn.innerHTML = 'MÁS INFORMACIÓN'
    }
}