document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize EmailJS using your Public Key
    // REPLACE "YOUR_PUBLIC_KEY" with your real key from EmailJS
    emailjs.init("R3UuwYlJAKMp78FFR");

    const form = document.getElementById('queryForm');
    const formLayer = document.getElementById('formLayer');
    const thanksLayer = document.getElementById('thanksLayer');
    const submitBtn = document.getElementById('submitBtn');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            // Change button state to show it's sending
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span>SENDING...</span> <i class="fas fa-spinner fa-spin"></i>`;

            // 2. Send the form data directly via EmailJS
            // REPLACE "YOUR_SERVICE_ID" and "YOUR_TEMPLATE_ID" with yours
            emailjs.sendForm(
    'service_50dbe0g',
    'template_z26tf2w',
    this
)
.then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
    formLayer.style.display = 'none';
    thanksLayer.style.display = 'block';
})
.catch(function(error) {
    console.log('FAILED...', error);
    alert(JSON.stringify(error));
});
        });
    }
});