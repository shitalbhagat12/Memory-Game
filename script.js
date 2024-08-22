document.getElementById('play-button').addEventListener('click', function (event) {
    event.preventDefault(); 
    var sound = document.getElementById('click-sound');
    var brainImage = document.getElementById('brain-image');

    sound.play(); // Play the sound effect
    brainImage.classList.add('bounce'); // Add the bounce animation class

    
    setTimeout(function () {
        window.location.href = "index1.html";
    }, 1000); 
});
