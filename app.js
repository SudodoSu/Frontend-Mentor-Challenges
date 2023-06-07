const navigation = document.querySelector(".navigation");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
            if (navigation.classList.contains("nav-animation")){
                navigation.classList.remove("nav-animation");
                navigation.classList.add("nav-animation-close");
        } else {
            navigation.classList.add("nav-animation");
            navigation.classList.remove("nav-animation-close");
        }
})