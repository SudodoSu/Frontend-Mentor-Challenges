const form = document.querySelector("form");
const inputs = document.querySelectorAll('input');

const errorMess = document.querySelectorAll(".error-mess")

const RegExps = [/^[0-9a-zA-Z]{3,15}$/, 
                /^[0-9a-zA-Z]{3,15}$/,                                              
                /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/,           
                /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})/,                              
            ]

form.addEventListener('submit', (event) => {
    event.preventDefault();

    inputs.forEach((input, index) => {

        const currentRegExp = RegExps[index]

        if (!input.value) {
            input.classList.add('invalid-input');
            errorMess[index].style.display = 'block';
        } else {
            input.classList.remove('invalid-input');
            errorMess[index].style.display = 'none';
        }

        input.addEventListener('keyup', (e)=> {
            
            const inputText = e.target.value;

            if (currentRegExp.test(inputText)) {
                e.target.classList.remove("invalid-input")
                errorMess[index].style.display = 'none';
            } else {
                e.target.classList.add("invalid-input")
            }
        })
    });
});