import $ from 'jquery';
import each from 'lodash/each';
import mapKeys from 'lodash/mapKeys';
import {toCamel} from 'scripts/utils/utils';

export default class ComponentInitializer {
    settings: any;
    elNodeEntity: any;

    constructor(settings: any) {
        this.settings = settings;

        this.init()
    }

    init() {
        let els, props, targetSelector: any;
        const {clazz, selector} = this.settings;

        if (selector && clazz) {
            targetSelector = `.${selector}[element-id='${selector}']`;
            els = $(targetSelector);
            
            each(els, (element) => {
                let el = $(element);
                props = this.getObjectSettings(el);
                this.settings['el'] = el;

                this.elNodeEntity = new clazz(this.settings, props);
            })
        }
    }

    getObjectSettings(el: any) {
        let attrs = this.getElementAttributes(el);
        let result = {};
        let newKey;
        mapKeys(attrs, (value: any, key: any) => {
            newKey = toCamel(key);
            return result[newKey] = value;
        });
        
        return result;
    }

    getElementAttributes(el: any) {
        let attributes: any[] = []

        if (el.length) {
            $.each(el[0].attributes, function (index, attr) {
                attributes[attr.name] = attr.value;
            });
        }

        return attributes;
    }

}