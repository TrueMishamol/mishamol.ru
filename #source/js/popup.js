// Get all buttons with the data-popup attribute
const buttons = document.querySelectorAll('.popup_button');

buttons.forEach(button => {
	button.addEventListener('click', function () {
		const popupType = this.getAttribute('data-popup'); // Get the value of data-popup
		const popup = document.querySelector(`.popup[data-popup="${popupType}"]`); // Find the related popup
		if (popup) {
			// popup.style.display = 'block'; // Display popup
			popup.classList.add('show'); // Add the show class to display popup
		}
	});
});

// Close button
document.querySelectorAll('.popup_close').forEach(button => {
	button.addEventListener('click', function () {
		const popup = this.closest('.popup'); // Finding a popup

		// Begin Hiiding
		popup.classList.add('hiding');
		popup.classList.remove('show');

		// On Transitionend
		popup.addEventListener('transitionend', function () {
			popup.classList.remove('hiding'); // End Hiding. Completely Hide element 

		}, { once: true }); // Remove the handler after the first trigger
	});
});
