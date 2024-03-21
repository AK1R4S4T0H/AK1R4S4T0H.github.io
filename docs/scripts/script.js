
function moveImage(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const laggingImage = document.getElementById('lagging-image');

    const offset = 0; // Adjust this value to control the distance from the mouse

    // Update the image position
    laggingImage.style.transition = 'transform 0.1s ease-in-out'; // Smooth transition
    laggingImage.style.transform = `translate(${mouseX - offset}px, ${mouseY - offset - 570}px)`;
}

document.addEventListener('mousemove', moveImage);