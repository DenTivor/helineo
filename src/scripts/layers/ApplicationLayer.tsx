import BaseComponent from 'scripts/core/BaseComponent';
import ComponentInitializer from 'scripts/core/ComponentInitializer';
import {modalLayerSettings} from 'scripts/layers/ModalLayer';

export default class ApplicationLayer extends BaseComponent {
    modalLayer: any;
    factoryMap: any;

    constructor(settings: any, props: any) {
        super(settings, props);

        this.initLayers()
    }

    initLayers() {
        const modalLayer = new ComponentInitializer(modalLayerSettings)
        this.modalLayer = modalLayer.elNodeEntity
    }

    openModal(name: string) {
        this.modalLayer.openModal(name);
    }
}