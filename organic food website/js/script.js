document.addEventListener("DOMContentLoaded", function () {
    const paymentForm = document.getElementById("payment-form");
    const submitButton = document.getElementById("submit-payment");

    paymentForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // Add your payment processing logic here.
        // This is a simplified example and does not handle actual payments.
        alert("Payment submitted. Thank you!");
        paymentForm.reset(); // Reset the form after submission.
    });
});


