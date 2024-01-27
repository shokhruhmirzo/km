var inp = document.querySelector('.inp');
var text1 = document.querySelector('.h4-text-1');
var text2 = document.querySelector('.h4-text-2');
var text3 = document.querySelector('.h4-text-3');
var text4 = document.querySelector('.h4-text-4');

function bt(){
    var val = inp.value
    var result ;

    result = val / 5;
    text1.textContent = result + " soat"

    result = val / 20
    text2.textContent = result + " soat"

    result = val / 40
    text3.textContent = result + " soat"

    result = val / 800
    text4.textContent = result + " soat"
    
}

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("Kod ni ko'chirish taqiqlanadi !!!");
});
