function hamburgerMenu() {
    var toggleButton = document.querySelector('.toggle');
    var navbar = document.querySelector('.navbar');
    var bars = document.querySelectorAll('.bar');

    toggleButton.addEventListener('click', function () {
        navbar.classList.toggle('active');

        // Toggle X shape
        bars.forEach(function (bar, index) {
            bar.classList.toggle('bar-cross-' + (index + 1));
        });
    });
}

// Call the function to set up the event listener
hamburgerMenu();
