/* ============================================
   INFORMÁTICA PARA CONCURSOS - SALES PAGE JS
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
    initModal();
    initSmoothScroll();
    initAccordion();
});

/* ============================================
   MODAL FUNCTIONALITY
   ============================================ */
function initModal() {
    const modal = document.getElementById('pdfModal');
    const previewBtn = document.getElementById('previewBtn');
    const closeModal = document.getElementById('closeModal');
    const modalOverlay = modal.querySelector('.modal-overlay');

    // Open modal
    previewBtn.addEventListener('click', () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close modal functions
    function closeModalFunction() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    closeModal.addEventListener('click', closeModalFunction);
    modalOverlay.addEventListener('click', closeModalFunction);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModalFunction();
        }
    });
}

/* ============================================
   SMOOTH SCROLL
   ============================================ */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            if (href === '#') return;

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ============================================
   ACCORDION FUNCTIONALITY
   ============================================ */
function initAccordion() {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', function () {
            const item = this.parentElement;
            const collapse = item.querySelector('.accordion-collapse');
            const isActive = item.classList.contains('active');

            // Collapse all other active items in the same container
            const container = item.closest('.accordion-container');
            if (container) {
                container.querySelectorAll('.accordion-item.active').forEach(activeItem => {
                    if (activeItem !== item) {
                        activeItem.classList.remove('active');
                        activeItem.querySelector('.accordion-collapse').style.maxHeight = null;
                    }
                });
            }

            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
                collapse.style.maxHeight = null;
            } else {
                item.classList.add('active');
                collapse.style.maxHeight = collapse.scrollHeight + "px";
            }
        });
    });
}
