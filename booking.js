// booking.js - Simulate booking form submission

document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.getElementById('booking-form');
    const modal = document.getElementById('booking-modal');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = bookingForm.name.value;
            const vehicle = bookingForm.vehicle.value;
            const service = bookingForm.service.value;
            const date = bookingForm.date.value;
            const time = bookingForm.time.value;
            const contact = bookingForm.contact.value;
            alert(`Booking Confirmed!\n\nName: ${name}\nVehicle: ${vehicle}\nService: ${service}\nDate: ${date}\nTime: ${time}\nContact: ${contact}`);
            bookingForm.reset();
            if (modal) modal.style.display = 'none';
        });
    }
});
