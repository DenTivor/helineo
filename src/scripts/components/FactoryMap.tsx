import BaseComponent from 'scripts/core/BaseComponent';

export class FactoryMap extends BaseComponent {
    constructor(settings: any, props: any) {
        super(settings, props);

        this.bindActions();
    }

    bindActions() {
        // super.bindAction('actionButtonElSelector', 'onActionButtonClick')
    }
}

export const factoryMapSettings = {
    clazz: FactoryMap,
    selector: 'factory-map',
    // actionButtonElSelector: '[action-button]'
}