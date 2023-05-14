let x = document.getElementById('root');
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
     s.innerText = s.innerText + ' ' + count + ' -';
}