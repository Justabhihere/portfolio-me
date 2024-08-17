// toggle style switcher//
const styleSwitcherToggle =document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click",() => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// hide style switcher on scroll //
window.addEventListener("scroll", () =>
{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
// theme style color//
const alternateStyles =document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) =>{
        if(color=== style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}
// theme style light and dark mode//
const dayNight = document.querySelector(".day-night");

// Set default theme to dark
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("dark");
    dayNight.querySelector("i").classList.add("fa-sun");
});

dayNight.addEventListener("click", () => {
    // Toggle the dark mode
    document.body.classList.toggle("dark");
    // Toggle the icon
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
});



