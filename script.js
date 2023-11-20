// nav bar animation
window.addEventListener("scroll", () => {
    const navBar = document.querySelector("nav");
    navBar.classList.toggle("sticky", window.scrollY > 0); 
    // show home element only when scrolled 
    const home = document.querySelector("#home");
    home.classList.toggle("show", window.scrollY > 0);
 })
 