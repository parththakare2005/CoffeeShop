

document.getElementById("exploreBtn").addEventListener("click", () => {
    document.querySelector(".hero-buttons").scrollIntoView({
        behavior: "smooth"
    });
});

document.querySelector(".btn2").addEventListener("click", () => {
    alert("Your table booking request has been received!");
});


const btn = document.querySelectorAll(".order-btn");
btn.forEach(button=>
{
    button.addEventListener("click",()=>
    {
        alert("Item added to your order");
    })
}
)

document.querySelector(".sent-btn").addEventListener("click", () => {
    alert("Successfully Message Submitted");
});

document.getElementById("subscribeBtn").addEventListener("click", () => {

    const email = document.getElementById("newsletterEmail").value;

    if (email === "") {
        alert("Please enter your email!");
    } else {
        alert("Thank you for subscribing!");
        document.getElementById("newsletterEmail").value = "";
    }

});