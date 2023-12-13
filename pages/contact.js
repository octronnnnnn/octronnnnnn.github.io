//copy email to clipboard
const email = document.querySelector("#email").innerHTML;
const copyContent = async () => {
    try {
        await navigator.clipboard.writeText(email);
        let copyBtn = document.querySelector("#copyBtn");
        console.log("Content copied to clipboard");
        copyBtn.textContent = "Kopiert!";
    } catch (error) {
        console.log("Failed to copy: ", error);
    }
}

document.getElementById("copyBtn").addEventListener("click", copyContent);