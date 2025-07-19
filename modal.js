// modal.js - Handles opening and closing of booking modal

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('booking-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const bookBtns = document.querySelectorAll('.book-btn');
    const serviceInput = document.getElementById('service');

    // Open modal and set service name
    bookBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            if (serviceInput) {
                serviceInput.value = btn.getAttribute('data-service') || '';
            }
            modal.style.display = 'flex';
        });
    });

    // Close modal
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function () {
            modal.style.display = 'none';
        });
    }

    // Close modal on outside click
    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
