const body = document.querySelector("body");
const loading = document.querySelector(".contact__form__loading");
const form = document.querySelector(".contact__form");

function openMenu() {
  body.classList.add("open");
}

function closeMenu() {
  body.classList.remove("open");
}

//template_zwymkza

//service_w2mdsf5

//Public Key 1IJcwBn-RqHkauQ-A

async function sendEmail(event) {
  event.preventDefault();
  // loading state
  loading.classList.remove("hidden");
  try {
    await emailjs.sendForm("service_w2mdsf5", "template_zwymkza", event.target);

    // success state
    // remote loading state and show success state
    
    form.reset();
    console.log("email has been sent");
    loading.classList.add("hidden");
    body.classList.add("success-open");

    setTimeout(() => {
      body.classList.remove("success-open");
    }, 5000);
  } catch {
    loading.classList.add("hidden");
    alert("an error has occured. please try again or contact me at leopoldhorne1@gmail.com")
  }
}
