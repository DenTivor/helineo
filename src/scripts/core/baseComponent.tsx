import bind from "lodash/bind";

export default class BaseComponent {
    settings: any;
    props: any;
    appLayer: any;

    constructor(settings: any, props: any) {
        this.settings = settings;
        this.props = props;

        if (this.settings.appLayer) {
            this.appLayer = this.settings.appLayer;
        }

        this.serviceMessage();
    }

    serviceMessage() {
        console.log(this);
    }

    getInnerEl(selector: string) {
        const elSelector = this.settings[selector];
        const {settings: {el}} = this;

        return el.find(elSelector);
    }

    bindAction(selectorName: string, funcName: string, actionName: string = 'click') {
        const el = this.getInnerEl(selectorName);

        el.off(actionName).on(actionName, bind(this[funcName], this));
    }

    bindSelfAction(funcName: string, actionName: string = 'click') {
        const el = this.settings.el;

        el.off(actionName).on(actionName, bind(this[funcName], this));
    }


}