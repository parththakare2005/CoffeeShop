

const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const itemName =
            button.parentElement.querySelector("h3").textContent;

        alert(`${itemName} added to your order!`);
    });
});




document.getElementById("reserveBtn").addEventListener("click", () => {
    alert("Redirecting to Reservation Page...");
    window.location.href = "AboutPage.html";
});



document.getElementById("subscribeBtn").addEventListener("click", () => {

    const email =
        document.getElementById("newsletterEmail").value.trim();

    if (email === "") {
        alert("Please enter your email!");
        return;
    }

    alert("Thank you for subscribing!");

    document.getElementById("newsletterEmail").value = "";
});