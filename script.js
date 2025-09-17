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

        // --- NOVA LÓGICA PARA OPACIDADE DINÂMICA DOS RÓTULOS ---
        const labelAntes = document.querySelector('.label-antes');
        const labelDepois = document.querySelector('.label-depois');
        const afterImage = compareElement.querySelector('.viewer-image-after');

        function updateLabelOpacity() {
            if (afterImage) {
                const containerWidth = compareElement.offsetWidth;
                const afterImageWidth = afterImage.offsetWidth;

                // Calcula a posição do slider como uma fração de 0 a 1
                const sliderPosition = afterImageWidth / containerWidth;

                // Inverte a lógica para os rótulos
                // Rótulo 'Depois' aparece conforme o slider vai para a ESQUERDA (mostrando mais da imagem 'depois')
                // Rótulo 'Antes' aparece conforme o slider vai para a DIREITA (mostrando mais da imagem 'antes')
                labelDepois.style.opacity = 1 - sliderPosition;
                labelAntes.style.opacity = sliderPosition;
            }
            requestAnimationFrame(updateLabelOpacity);
        }
        requestAnimationFrame(updateLabelOpacity);
    }
});