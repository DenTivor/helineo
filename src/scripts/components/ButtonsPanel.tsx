import BaseComponent from 'scripts/core/BaseComponent';

export class ButtonsPanel extends BaseComponent {
    constructor(settings: any, props: any) {
        super(settings, props);

        this.bindActions();
    }

    bindActions() {
        super.bindAction('actionButtonElSelector', 'onActionButtonClick')
    }

    onActionButtonClick() {
        this.appLayer.openModal('core-features');
    }
}

export const buttonsPanelSettings = {
    clazz: ButtonsPanel,
    selector: 'buttons-panel',
    actionButtonElSelector: '[action-button]'
}