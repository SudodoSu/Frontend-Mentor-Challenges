let answers = [
    document.querySelector(".one"),
    document.querySelector(".two"),
    document.querySelector(".three"),
    document.querySelector(".four"),
    document.querySelector(".five")
]

let questions = [
    document.querySelector(".q-one"),
    document.querySelector(".q-two"),
    document.querySelector(".q-three"),
    document.querySelector(".q-four"),
    document.querySelector(".q-five")
]

let arrow = [
    document.querySelector(".arrow-one"),
    document.querySelector(".arrow-two"),
    document.querySelector(".arrow-three"),
    document.querySelector(".arrow-four"),
    document.querySelector(".arrow-five")
]

let box_animation = document.querySelector(".box")
let question_hover = document.querySelector(".padding-faq")

question_hover.addEventListener('mouseover', () => {
    box_animation.classList.add('animate')
})
question_hover.addEventListener('mouseout', () => {
    box_animation.classList.remove('animate')
})

answers[0].classList.add("display-block")

for (let i = 0; i < 5; i++) {
    questions[i].addEventListener('click', function name() {
        for (let j = 0; j < 5; j++) {
            if (answers[j].classList.contains("display-block")) {
                answers[j].classList.remove("display-block")
                questions[j].style.fontWeight = 'var(--weight_one)'
                arrow[j].style.transform = "none"
            }
        }
        answers[i].classList.add("display-block")
        questions[i].style.fontWeight = 'bold'
        arrow[i].style.transform = "rotate(180deg)"
    })
}