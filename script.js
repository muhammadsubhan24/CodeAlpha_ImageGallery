// Tamam images ke URLs ko array mein store kar liya
const images = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800"
];

let currentIndex = 0;
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// Lightbox Open karne ke liye
function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = images[currentIndex];
    lightbox.style.display = 'flex';
}

// Lightbox Close karne ke liye
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Next Image par janey ke liye
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex];
}

// Previous Image par janey ke liye
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex];
}

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});