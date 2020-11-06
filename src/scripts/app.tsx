import ComponentInitializer from 'scripts/core/ComponentInitializer';
import ApplicationLayer from 'scripts/layers/ApplicationLayer';

import {buttonsPanelSettings} from 'scripts/components/ButtonsPanel';

/**
 * Application Layer
 */
const appLayer = new ComponentInitializer({
    clazz: ApplicationLayer,
    selector: 'application-layer',
});

/**
 * Component layer
 * 
 * appLayer - an entity of common application class. Used for cross-components actions  
 */
new ComponentInitializer(
    {
        ...buttonsPanelSettings,
        appLayer: appLayer.elNodeEntity
    }
);

