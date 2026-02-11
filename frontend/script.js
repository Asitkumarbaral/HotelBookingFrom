const form = document.getElementById("bookingForm");
const checkIn = document.getElementById("checkIn");
const checkOut = document.getElementById("checkOut");
const successMessage = document.getElementById("successMessage");


const today = new Date().toISOString().split("T")[0];
checkIn.setAttribute("min", today);


checkIn.addEventListener("change", () => {
    checkOut.value = "";
    checkOut.setAttribute("min", checkIn.value);
});

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    

    document.querySelectorAll(".error").forEach(el => el.textContent = "");
    successMessage.textContent = "";

   

    const bookingData = {
        checkInDate: checkIn.value,
        checkOutDate: checkOut.value,
        roomType: document.getElementById("roomType").value,
        adults: document.getElementById("adults").value,
        children: document.getElementById("children").value,
        specialRequests: document.getElementById("specialRequests").value
    };

    try {
        const response = await fetch("https://hotelbookingfrom-1.onrender.com/api/bookings/book", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookingData)
        });

        const data = await response.json();

        if (response.ok) {
            window.location.href = "Sucess.html";
           
        } else {
            successMessage.textContent = data.message || "Booking failed";
        }

    } catch (error) {
        successMessage.textContent = "Server error. Try again.";
    }
});
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.style.display =
        navMenu.style.display === "flex" ? "none" : "flex";
});
