let x = document.getElementById("root");
let count = 0;
let s = document.getElementById('save');


function plusFunction() {
    count+=1;
    x.innerText = count;
}

function minusFunction() {
    count-=1;
    x.innerText = count;
}

function save() {
    s.textContent= s.textContent + count + ' - ';
    x.innerText = 0;
    count = 0;
}