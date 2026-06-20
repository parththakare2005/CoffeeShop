document.getElementById("subscribeBtn").addEventListener("click", () => {
    const email = document.getElementById("newsletterEmail").value.trim();

    
    if (email === "") {
        alert("Please enter your email!");
        return;
    }
    
    alert("Thank you for subscribing!");
    document.getElementById("newsletterEmail").value = "";
    
    
    });
    
    // Social Media Icons
    document.querySelector(".fa-facebook-f").addEventListener("click", () => {
    alert("Opening Facebook Page...");
    });
    
    document.querySelector(".fa-instagram").addEventListener("click", () => {
    alert("Opening Instagram Page...");
    });
    
    document.querySelector(".fa-tiktok").addEventListener("click", () => {
    alert("Opening TikTok Page...");
    });
    
    // FAQ Section
    const faqItems = document.querySelectorAll(".faq-item");
    
    faqItems.forEach((item) => {
    item.addEventListener("click", () => {
    const question = item.querySelector("span").textContent;
    alert(question);
    });
    });
    
    // Reservation Form
    document.getElementById("reserveBtn").addEventListener("click", (e) => {
    e.preventDefault();
    
    
    const inputs = document.querySelectorAll(".booking-card input");
    
    const name = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const phone = inputs[2].value.trim();
    const date = inputs[3].value;
    
    if (name === "") {
        alert("Please enter your name.");
        return;
    }
    
    if (email === "") {
        alert("Please enter your email.");
        return;
    }
    
    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }
    
    if (phone === "") {
        alert("Please enter your phone number.");
        return;
    }
    
    if (phone.length < 10) {
        alert("Phone number must be at least 10 digits.");
        return;
    }
    
    if (date === "") {
        alert("Please select a reservation date.");
        return;
    }
    
    alert("Reservation Submitted Successfully!");
    
    // Clear form fields
    inputs.forEach(input => input.value = "");
    document.querySelector(".booking-card textarea").value = "";
    
    
    });
    