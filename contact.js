document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    const jsonString = JSON.stringify(formData);
    console.log("Form Data as JSON:", jsonString);

});
