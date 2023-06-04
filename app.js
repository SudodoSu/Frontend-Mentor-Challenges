const inputs = document.querySelectorAll("input");
const form = document.querySelector("form")
const end_value_years = document.getElementById("end-value-years");
const end_value_months = document.getElementById("end-value-months");
const end_value_days = document.getElementById("end-value-days");
const error_empty = document.querySelectorAll(".err");
const err_hidden = document.querySelectorAll(".err-hidden");

// Each month values
const months_values = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

// Text input accept only numbers 
inputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    })
})

// Get current date
let currentDate = new Date();
let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth() + 1;
let currentYear = currentDate.getFullYear();

// On Form Submit
form.addEventListener("submit", (event) => {
    
    event.preventDefault();

    let day_value = 0;
    let month_value = 0;
    let year_value = 0;
    let condition = true;

    inputs.forEach((input, index) => {

        let value = input.value;
        let find = parseInt(inputs[1].value) - 1;
        let max_days = months_values[find];
        // Check for errors

        //  Day
        if (index === 0 && !value){
            error_empty[0].classList.add("error-empty");
            input.style.border = "1px solid red";
            err_hidden[0].style.display = "block";
            err_hidden[0].textContent = "This field is required";
            condition = false;
        }
        else if (index === 0 && inputs[0].value > max_days) {
            error_empty[0].classList.add("error-empty");
            input.style.border = "1px solid red";
            err_hidden[0].textContent = "Must be a valid date";
            err_hidden[0].style.display = "block";
            condition = false;
        } 
        else if (index === 0 && (value < 1 || value > 31)) {
            error_empty[0].classList.add("error-empty");
            input.style.border = "1px solid red";
            err_hidden[0].textContent = "Must be a valid day";
            err_hidden[0].style.display = "block";
            condition = false;
        }
        else if (index === 0){
            error_empty[0].classList.remove("error-empty");
            input.style.border = "1px solid var(--Light_grey)";
        }

         // Month
        if (index === 1 && !value){
            error_empty[1].classList.add("error-empty");
            input.style.border = "1px solid red";
            err_hidden[1].style.display = "block";
            err_hidden[1].textContent = "This field is required";
            condition = false;
        } 
        else if (index === 1 && (value < 1 || value > 12)) {
            error_empty[1].classList.add("error-empty");
            input.style.border = "1px solid red";
            err_hidden[1].textContent = "Must be a valid month";
            err_hidden[1].style.display = "block";
            condition = false;
        } 
        else if (index === 1 && (value > 0 || value < 13)){
            error_empty[1].classList.remove("error-empty");
            input.style.border = "1px solid var(--Light_grey)";
        }

         // Year
        if (index === 2 && !value){
            error_empty[2].classList.add("error-empty");
            input.style.border = "1px solid red";
            err_hidden[2].style.display = "block";
            err_hidden[2].textContent = "This field is required"
            condition = false;
        } 
        else if (index === 2 && value > currentYear) {
            error_empty[2].classList.add("error-empty");
            input.style.border = "1px solid red";
            err_hidden[2].textContent = "Must be in the past";
            err_hidden[2].style.display = "block";
            condition = false;
        } 
        else if (index === 2 && (value > 0 || value < currentYear)){
            error_empty[2].classList.remove("error-empty");
            input.style.border = "1px solid var(--Light_grey)";
        }
 
        input.addEventListener("input", () => {
            if (index === 0 && (value > 0 || value < 32)) {
                error_empty[0].classList.add("error-empty");
                input.style.border = "1px solid red";
                err_hidden[0].style.display = "none";
                currect_value = false;
            } else if (index === 1 && (value > 0 || value < 13)) {
                error_empty[1].classList.add("error-empty");
                input.style.border = "1px solid red";
                err_hidden[1].style.display = "none";
                currect_value = false;
            } else if (index === 2 && (value > 0 || value < currentYear)) {
                error_empty[2].classList.add("error-empty");
                input.style.border = "1px solid red";
                err_hidden[2].style.display = "none";
                currect_value = false;
            }
        })

        // Get values
        if (index === 0) {
            day_value = input.value;
        } else if (index === 1){
            month_value = input.value;
        } else if (index === 2) {
            year_value = input.value;
        }
    })

    // Calculate passed time


    let passedYears = currentYear - year_value;
    let passedMonths = currentMonth - month_value;
    let passedDays = currentDay - day_value;
    
    if (passedDays < 0) {
        passedMonths--;
        passedDays += 31;
    }
    if (passedMonths < 0) {
        passedYears--;
        passedMonths += 12;
    }

    // Show values
    if (condition) {
        end_value_years.textContent = passedYears;
        end_value_months.textContent = passedMonths;
        end_value_days.textContent = passedDays;
    } else {
        end_value_years.textContent = '- -';
        end_value_months.textContent = '- -';
        end_value_days.textContent = '- -';
    }

    condition = true;
})






