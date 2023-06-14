let clicked = [
    document.querySelector('.one'),
    document.querySelector('.two'),
    document.querySelector('.three'),
    document.querySelector('.four'),
    document.querySelector('.five')
]

let index = 0;
let element_start = document.querySelector('.box')
let element_finish = document.querySelector('.box-2')

let selection_number = document.querySelector('.selection-paragraph') 


for (let i = 0; i < 5; i++) { 
    clicked[i].addEventListener('click', function() {choice(i)})
}


function choice(event) {
    for (let i = 0; i < clicked.length; i++) {
        if (clicked[i].classList.contains("a-toggle")) {
            clicked[i].classList.remove("a-toggle")
        }
    }
    clicked[event].classList.toggle("a-toggle")
    index = event + 1
}

function submit() {
    element_start.style.display = 'none'
    element_finish.style.display = 'flex'

    selection_number.textContent += index + ' out of 5'
}