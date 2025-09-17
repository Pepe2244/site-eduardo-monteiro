document.addEventListener('DOMContentLoaded', () => {

    // --- EFEITO DO MENU AO ROLAR A PÁGINA ---
    window.addEventListener('scroll', function () {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // --- ANIMAÇÕES DE SCROLL REVEAL ---
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '50px',
        duration: 1500,
        reset: false
    });

    sr.reveal('#sobre .container', { delay: 200 });
    sr.reveal('#projetos .container', { delay: 200 });
    sr.reveal('#transformacoes .container', { delay: 200 });
    sr.reveal('#servicos .container', { delay: 200 });
    sr.reveal('#depoimentos .container', { delay: 200 });
    sr.reveal('#contato .container', { delay: 200 });

    // --- CÓDIGO DO MODAL DE PROJETOS ---
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
        if (event.target === modal) {
            closeModal();
        }
    });

    // --- CÓDIGO PARA O SLIDER DE COMPARAÇÃO "ANTES E DEPOIS" ---
    const compareElement = document.getElementById('image-compare');
    if (compareElement) {
        const options = {
            startingPoint: 0.5,
            beforeLabel: '',
            afterLabel: '',
        };
        new ImageCompare(compareElement, options).mount();
    }
});