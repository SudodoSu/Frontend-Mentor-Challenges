const header_active = document.querySelector(".header-box");
const navigation_mobile = document.querySelector(".navigation");
const hamburger = document.querySelector(".hamburger");


// Header on Scroll
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header_active.classList.add("active-header");
    } else {
        header_active.classList.remove("active-header");
    }
};

// Navigation Hamburger

hamburger.addEventListener("click", () => {
    if (navigation_mobile.style.display === "block") {
        navigation_mobile.style.display = "none";
    } else {
        navigation_mobile.style.display = "block";
    }
})
