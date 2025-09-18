document.addEventListener('DOMContentLoaded', () => {

    // --- CÓDIGO DO MENU HAMBÚRGUER ---
    const hamburgerButton = document.getElementById('hamburger-button');
    const navLinks = document.getElementById('nav-links');
    const navLinksAnchors = navLinks.querySelectorAll('a');

    hamburgerButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburgerButton.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um link (para navegação na mesma página)
    navLinksAnchors.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburgerButton.classList.remove('active');
            }
        });
    });

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

    // --- CÓDIGO FINAL E CORRIGIDO PARA O SLIDER "ANTES E DEPOIS" ---
    const compareElement = document.getElementById('image-compare');
    if (compareElement) {
        const options = {
            startingPoint: 50,
            beforeLabel: '',
            afterLabel: '',
        };
        new ImageCompare(compareElement, options).mount();

        const slider = compareElement.querySelector('.viewer-slider');
        const labelAntes = document.querySelector('.label-antes');
        const labelDepois = document.querySelector('.label-depois');

        if (slider && labelAntes && labelDepois) {

            const updateLabelOpacity = () => {
                const sliderPosition = slider.value / 100;

                labelAntes.style.opacity = sliderPosition;
                labelDepois.style.opacity = 1 - sliderPosition;
            };

            ['input', 'mousemove', 'touchmove'].forEach(evt => {
                slider.addEventListener(evt, updateLabelOpacity, { passive: true });
            });

            updateLabelOpacity();
        }
    }
});