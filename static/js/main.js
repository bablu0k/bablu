
document.querySelector('.centered-image').addEventListener('click', function() {
    // Trigger the animation by adding a class
    this.classList.add('shutter-effect');

    // Remove the class after the animation ends to reset it
    setTimeout(() => {
        this.classList.remove('shutter-effect');
    }, 1000); // Matches the duration of the animation (1 second)
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("centered-image").addEventListener("dblclick", function () {
        window.location.href = "static/html/me.html"; 
    });
});

