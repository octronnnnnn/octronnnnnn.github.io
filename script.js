// nav bar animation
window.addEventListener("scroll", () => {
    const navBar = document.querySelector("nav");
    navBar.classList.toggle("sticky", window.scrollY > 0); 
    // show home element only when scrolled 
    const home = document.querySelector("#home");
    home.classList.toggle("show", window.scrollY > 0);


    const navUl = document.querySelector("#navUl");
    navUl.classList.toggle("sticky", window.scrollY > 0);
 })

//copy email to clipboard
const email = document.querySelector("#email").innerHTML;
const copyContent = async () => {
    try {
        await navigator.clipboard.writeText(email);
        let copyBtn = document.querySelector("#copyBtn");
        console.log("Content copied to clipboard");
        copyBtn.textContent = "Copied!";
    } catch (error) {
        console.log("Failed to copy: ", error);
    }
}

document.getElementById("copyBtn").addEventListener("click", copyContent);