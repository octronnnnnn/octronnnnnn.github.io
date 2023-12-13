// nav bar animation
window.addEventListener("scroll", () => {
    const navBar = document.querySelector("nav");
    navBar.classList.toggle("sticky", window.scrollY > 0); 
})