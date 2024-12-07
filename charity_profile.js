const volunteerButton = document.getElementById('volunteer-now');

function showVolunteerForm() {
    if (!document.getElementById('volunteer-form')) {
        const form = document.createElement('form');
        form.id = 'volunteer-form';

        form.innerHTML = `
            <h3>Volunteer Sign-Up</h3>
            <label for="volunteer-name">Name:</label>
            <input type="text" id="volunteer-name" name="name" required>
            <br>
            <label for="volunteer-email">Email:</label>
            <input type="email" id="volunteer-email" name="email" required>
            <br>
            <button type="submit">Submit</button>
        `;

        document.body.appendChild(form);

        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Stop the page from reloading
            alert('Thank you for signing up!'); // Show a confirmation message
            form.remove(); // Remove the form after submission
        });
    }
}

volunteerButton.addEventListener('click', showVolunteerForm);


// Extra interactivity

const charityDetails = document.getElementById('charity-details');
const extraInfo = document.getElementById('extra-info');

charityDetails.addEventListener('mouseover', function () {
    extraInfo.style.display = 'block'; // Show hidden info
});

charityDetails.addEventListener('mouseout', function () {
    extraInfo.style.display = 'none'; // Hide hidden info
});
