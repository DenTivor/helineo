import BaseComponent from 'scripts/core/BaseComponent';

export default class ModalComponent extends BaseComponent {
    constructor(settings: any, props: any) {
        super(settings, props);

        this.bindActions();
    }

    bindActions() {
        super.bindSelfAction('onOpenModal', 'openModal');
    }

    onOpenModal() {
        const bsModalContainer = this.settings.el.find(".modal");
        bsModalContainer.modal('show');
    }
}