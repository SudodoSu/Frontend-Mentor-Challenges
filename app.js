const inputs = document.querySelectorAll("input");
const form = document.querySelector("form")

const end_value_years = document.getElementById("end-value-years");
const end_value_months = document.getElementById("end-value-months");
const end_value_days = document.getElementById("end-value-days");

const error_empty = document.querySelectorAll(".err");
const err_hidden = document.querySelectorAll(".err-hidden");

inputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    })
})


form.addEventListener("submit", (event) => {
    event.preventDefault();

    let day_value = 0;
    let month_value = 0;
    let year_value = 0;
    condition = true;


    inputs.forEach((input, index) => {
        // Check error empty 
        if (input.value === '') {
            error_empty[index].classList.add("error-empty");
            condition = false;
            input.style.border = "1px solid red";
            err_hidden[index].style.display = "block";
        } else {
            error_empty[index].classList.remove("error-empty");
            condition = true;
            input.style.border = "1px solid var(--Light_grey)";
            err_hidden[index].style.display = "none";
        }

        // Get the date of birth
        if (index === 0) {
            day_value = input.value;
        } else if (index === 1){
            month_value = input.value;
        } else if (index === 2) {
            year_value = input.value;
        }
    })

    // Get current date
    let currentDate = new Date();
    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth() + 1;
    let currentYear = currentDate.getFullYear();
    // Calculate how much time passed 
    let passedYears = currentYear - year_value;
    let passedMonths = currentMonth - month_value;
    let passedDays = currentDay - day_value;
    
    if (month_value > currentMonth) {
        passedYears--;
        passedMonths += 12;
        passedDays += 30;
    }
    
    if (condition) {
        end_value_years.textContent = passedYears;
        end_value_months.textContent = passedMonths;
        end_value_days.textContent = passedDays;
    }
})































































































































