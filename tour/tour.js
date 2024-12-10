const mapContainer = document.querySelector('.map-container');
const img = mapContainer.querySelector('img')

mapContainer.addEventListener('click', (event) => {
    const clickedArea = event.target.closest('area');

   

    if (clickedArea) {
        const rect = img.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;

        img.style.transformOrigin = `${x}% ${y}%`;
        mapContainer.classList.toggle('zoomed');
    }
 
    if (clickedArea) {
        event.preventDefault();
        const href = clickedArea.getAttribute('href');
        if (href) {
            setTimeout(() => {
                window.location.href = href;
            }, 1000);
        }
    }
});