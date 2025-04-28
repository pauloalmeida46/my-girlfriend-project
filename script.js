//varal de fotos
document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('gallery-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const itemWidth = 256; // Largura de cada item (w-64 = 16rem = 256px)

    nextBtn.addEventListener('click', () => {
        container.scrollBy({ left: itemWidth, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        container.scrollBy({ left: -itemWidth, behavior: 'smooth' });
    });
});









//cursor animado
