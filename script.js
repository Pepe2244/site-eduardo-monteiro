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

    // --- CÓDIGO CORRIGIDO PARA O SLIDER DE COMPARAÇÃO "ANTES E DEPOIS" ---
    const compareElement = document.getElementById('image-compare');
    if (compareElement) {
        const options = {
            startingPoint: 50, // O valor é em porcentagem, então 50 para o meio
            beforeLabel: '',
            afterLabel: '',
        };
        // Inicializa o comparador de imagens
        const viewer = new ImageCompare(compareElement, options).mount();

        // Seleciona os elementos que vamos manipular
        const labelAntes = document.querySelector('.label-antes');
        const labelDepois = document.querySelector('.label-depois');
        const afterImageContainer = compareElement.querySelector('.viewer-image-container.after');

        if (labelAntes && labelDepois && afterImageContainer) {

            // Função para atualizar a opacidade dos rótulos
            const updateLabelOpacity = () => {
                // A biblioteca altera a largura do container da imagem "Depois" em porcentagem.
                // Pegamos esse valor, que vai de "0%" a "100%".
                const widthPercentage = parseFloat(afterImageContainer.style.width) || 50;

                // Convertemos a porcentagem para uma fração (de 0 a 1)
                const sliderPosition = widthPercentage / 100;

                // O rótulo 'Antes' fica mais visível conforme o slider vai para a direita (revelando a imagem 'depois')
                labelAntes.style.opacity = sliderPosition;
                // O rótulo 'Depois' fica mais visível conforme o slider vai para a esquerda (revelando a imagem 'antes')
                labelDepois.style.opacity = 1 - sliderPosition;
            };

            // Criamos um "observador" que fica de olho em mudanças no elemento
            const observer = new MutationObserver(() => {
                // Toda vez que o estilo do container da imagem "Depois" mudar, chamamos nossa função
                updateLabelOpacity();
            });

            // Configuramos o observador para monitorar o atributo 'style' do container
            observer.observe(afterImageContainer, { attributes: true });

            // Chamamos a função uma vez no início para garantir que a opacidade inicial esteja correta
            updateLabelOpacity();
        }
    }
});