import BaseComponent from 'scripts/core/BaseComponent';
import ComponentInitializer from 'scripts/core/ComponentInitializer';
import {coreFeaturesModalSettings} from 'scripts/components/coreFeaturesModal';
import "bootstrap";

export class ModalLayer extends BaseComponent {
    constructor(settings: any, props: any) {
        super(settings, props);

        this.initLayerComponents();
    }

    initLayerComponents() {
        new ComponentInitializer(coreFeaturesModalSettings);
    }

    openModal(name: string) {
        const modalName = `${name}-modal`;
        const modalSelector = `.${modalName}[element-id='${modalName}']`;
        const modalEl = this.settings.el.find(modalSelector);
        
        modalEl.trigger('openModal');
    }
}

export const modalLayerSettings = {
    clazz: ModalLayer,
    selector: 'modal-layer'
}