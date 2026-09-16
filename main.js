// =================== SCROLL UP BUTTON ===================
let scrollBtn = document.getElementById("scrollUp");

if (scrollBtn) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });
}

function upper() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// =================== FOOD DATA (DETAILS PAGE) ===================
const foodData = {
    philadelphia: {
        title: "Philadelphia Roll",
        price: "$12",
        ingredients: ["Salmon", "Cream cheese", "Avocado", "Rice", "Crab"]
    },
    fried: {
        title: "Fried Sushi",
        price: "$10",
        ingredients: ["Crab", "Rice", "Oil", "Special sauce"]
    },
    shrimp: {
        title: "Shrimp Roll",
        price: "$11",
        ingredients: ["Shrimp", "Rice", "Avocado"]
    },
    spider: {
        title: "Spider Roll",
        price: "$11",
        ingredients: ["Shrimp", "Rice", "Avocado"]
    },
    cheeder: {
        title: "Cheeder Roll",
        price: "$11",
        ingredients: ["Crab", "Rice", "Cheeder Cheese"]
    },
    tuna: {
        title: "Tuna Roll",
        price: "$11",
        ingredients: ["Crab", "Rice", "Tuna"]
    }
};

const params = new URLSearchParams(window.location.search);
const item = params.get("item");
const detailsContainer = document.querySelector(".details-container");

// حماية الكود عشان ما يضربش في الصفحة الرئيسية اللي مفيهاش details-container
if (detailsContainer && foodData[item]) {
    detailsContainer.innerHTML = `
        <h2>${foodData[item].title}</h2>
        <p>Ingredients: ${foodData[item].ingredients.join(", ")}</p>
    `;
}


// =================== BOOKING FORM VALIDATION ===================
const myForm = document.getElementById('bookingForm');

if (myForm) {
    console.log("Form element found in HTML! 🎉");
    
    myForm.addEventListener('submit', function(e) {
        console.log("Submit button clicked! Form is processing...");
        e.preventDefault();

        const fullName = document.getElementById('fullName');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const guests = document.getElementById('guests');
        const successMessage = document.getElementById('successMessage');

        let isValid = true;

        // التحقق من الاسم
        if (fullName.value.trim().length < 3) {
            fullName.parentElement.classList.add('invalid');
            isValid = false;
        } else {
            fullName.parentElement.classList.remove('invalid');
        }

        // التحقق من الإيميل
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            email.parentElement.classList.add('invalid');
            isValid = false;
        } else {
            email.parentElement.classList.remove('invalid');
        }

        // التحقق من رقم التليفون (شبكات مصر)
        const phoneRegex = /^01[0125][0-9]{8}$/;
        if (!phoneRegex.test(phone.value.trim())) {
            phone.parentElement.classList.add('invalid');
            isValid = false;
        } else {
            phone.parentElement.classList.remove('invalid');
        }

        // التحقق من عدد الأفراد
        const guestsValue = parseInt(guests.value);
        if (isNaN(guestsValue) || guestsValue < 1 || guestsValue > 20) {
            guests.parentElement.classList.add('invalid');
            isValid = false;
        } else {
            guests.parentElement.classList.remove('invalid');
        }

        if (isValid) {
            this.classList.add('hidden');
            successMessage.classList.remove('hidden');
            this.reset();
            console.log("Form submitted successfully! Everything is valid.");
        }
    });
} else {
    console.log("Form element not found on this page (which is totally fine if you are on the details page!).");
}