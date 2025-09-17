window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 1500,
    reset: false
});

sr.reveal('#sobre .container', { delay: 200 });
sr.reveal('#projetos .container', { delay: 200 });
sr.reveal('#servicos .container', { delay: 200 });
sr.reveal('#depoimentos .container', { delay: 200 });
sr.reveal('#contato .container', { delay: 200 });


document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('project-modal');
    const modalImg = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const closeButton = document.querySelector('.close-button');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const title = item.querySelector('.overlay');

            modalImg.src = img.src;
            modalImg.alt = img.alt;
            modalTitle.textContent = title.textContent;
            modal.classList.add('active');
        });
    });

    function closeModal() {
        modal.classList.remove('active');
    }

    closeButton.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });
});
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 1500,
    reset: false
});

sr.reveal('#sobre .container', { delay: 200 });
sr.reveal('#projetos .container', { delay: 200 });
sr.reveal('#servicos .container', { delay: 200 });
sr.reveal('#depoimentos .container', { delay: 200 });
sr.reveal('#contato .container', { delay: 200 });
sr.reveal('#transformacoes .container', { delay: 200 }); // Adicionado para a nova seção


document.addEventListener('DOMContentLoaded', () => {
    // --- Código do Modal (existente) ---
    const modal = document.getElementById('project-modal');
    const modalImg = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const closeButton = document.querySelector('.close-button');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const title = item.querySelector('.overlay');

            modalImg.src = img.src;
            modalImg.alt = img.alt;
            modalTitle.textContent = title.textContent;
            modal.classList.add('active');
        });
    });

    function closeModal() {
        modal.classList.remove('active');
    }

    closeButton.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });

    // --- NOVO CÓDIGO PARA O SLIDER DE COMPARAÇÃO ---
    const compareElement = document.getElementById('image-compare');
    if (compareElement) {
        // Opções de configuração (opcional)
        const options = {
            // Valor inicial do slider (0 a 1, onde 0.5 é o meio)
            startingPoint: 0.5,
            // Texto das etiquetas
            beforeLabel: 'Antes',
            afterLabel: 'Depois',
        };

        // Inicializa o visualizador
        new ImageCompare(compareElement, options).mount();
    }
});