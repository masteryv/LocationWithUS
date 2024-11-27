const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}

// Initialize EmailJS
(function () {
  emailjs.init("zdG-FzSJ9K5IIIljl"); // Replace with your EmailJS user ID
})();

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission
  console.log("Form submitted");

  const serviceID = 'service_rg5ctvj';
  const templateID = 'template_mcvrjoj';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      console.log("Email sent successfully!");
      alert('Email sent successfully!');
    }, (err) => {
      console.error("Failed to send email:", err);
      alert('Failed to send email: ' + JSON.stringify(err));
    });
});





function scrollToTop() {
  window.scrollTo(0, 0);
}