const images = {
    image1: ['Image/1.jpg', 'Image/2.jpg', 'Image/3.jpg', 'Image/4.jpg'],
    image2: ['img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg']
};

let indices = { image1: 0, image2: 0 };

function fadeOutSlide() {
    ['image1', 'image2'].forEach(id => {
        const img = document.querySelector(`#${id} img`);
        img.classList.add('hidden');

        setTimeout(() => {
            indices[id] = (indices[id] + 1) % images[id].length;
            img.src = images[id][indices[id]];
            img.classList.remove('hidden');
        }, 1000); // Match with the CSS transition duration
    });
}

setInterval(fadeOutSlide, 3000); // Change images every 3 seconds
