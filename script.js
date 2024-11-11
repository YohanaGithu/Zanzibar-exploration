// Placeholder for future interactive elements, such as a gallery or dynamic content
console.log("Welcome to Explore Zanzibar!");
// Image Popup
const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        const popup = document.createElement("div");
        popup.classList.add("popup");
        const popupImage = document.createElement("img");
        popupImage.src = img.src;
        popup.appendChild(popupImage);
        document.body.appendChild(popup);

        popup.addEventListener("click", () => {
            document.body.removeChild(popup);
        });
    });
});
// Scroll animations
const sections = document.querySelectorAll("section");

const revealSection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(revealSection, {
    threshold: 0.2
});

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});