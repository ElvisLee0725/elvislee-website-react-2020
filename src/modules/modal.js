class Modal {
    constructor() {
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.escapeKeyCloseModal = this.escapeKeyCloseModal.bind(this);
        this.openModalBtn = document.querySelector('#openModal');
        this.closeModalBtn = document.querySelector('.resume-modal__close');
        this.modal = document.querySelector('.resume-modal');
        this.events();
    }

    events() {
        this.openModalBtn.addEventListener('click', this.openModal);
        this.closeModalBtn.addEventListener('click', this.closeModal);
        window.addEventListener('keyup', this.escapeKeyCloseModal);
    }

    openModal() {
        this.modal.classList.add('resume-modal--is-visible');
        document.body.classList.add('body-no-scroll');
    }

    closeModal() {
        this.modal.classList.remove('resume-modal--is-visible');
        document.body.classList.remove('body-no-scroll');
    }

    escapeKeyCloseModal(e) {
        if(e.keyCode === 27) {
            this.closeModal();
        }
    }
}

export default Modal;