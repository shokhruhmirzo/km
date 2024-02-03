var inp = document.querySelector('.inp');
var text1 = document.querySelector('.h4-text-1');
var text2 = document.querySelector('.h4-text-2');
var text3 = document.querySelector('.h4-text-3');
var text4 = document.querySelector('.h4-text-4');

function bt(){
    var val = inp.value
    var result;

    result = val / 4;
    text1.textContent = result + " soat"

    result = val / 20
    text2.textContent = result + " soat"

    result = val / 100
    text3.textContent = result + " soat"

    result = val / 800
    text4.textContent = result.toFixed(2) + " soat"

    if(val <= 0 ){
        text1.textContent = "tog'ri kirit"
        text2.textContent = "tog'ri kirit"
        text3.textContent = "tog'ri kirit"
        text4.textContent = "tog'ri kirit"
    }
}

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("Kod ni ko'chirish mumkinmas !!!");
});
