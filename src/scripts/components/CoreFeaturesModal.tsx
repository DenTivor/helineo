import ModalComponent from 'scripts/core/ModalComponent';

export class CoreFeaturesModal extends ModalComponent {
    constructor(settings: any, props: any) {
        super(settings, props);
    }
}

export const coreFeaturesModalSettings = {
    clazz: CoreFeaturesModal,
    selector: 'core-features-modal'
}