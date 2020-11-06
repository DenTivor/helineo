import BaseComponent from 'scripts/core/BaseComponent';
import {Loader, LoaderOptions} from 'google-maps';
import forEach from "lodash/forEach";

export class FactoryMap extends BaseComponent {
    constructor(settings: any, props: any) {
        super(settings, props);

        this.initMap();
    }

    async initMap() {
        const options: LoaderOptions = {/* todo */};
        const loader = new Loader('AIzaSyDFQHxhvx21w8VnOv99GBtmqTREwZFEp5c', options);
        const locations = [
            {
                position: [56.8687809, 35.8466233],
                id: 1,
                title: "ОАО Тверской вагоностроительный завод",
            },
            {
                position: [56.8463937,35.9359441],
                id: 2,
                title: "Химволокно",
            },
            {
                position: [56.8920468,35.8401752],
                id: 2,
                title: "Стеклопластик",
            } 
        ]
        const google = await loader.load();
        const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
            center: {lat: 56.8595547, lng: 35.9},
            zoom: 12,
        });

        forEach(locations, (location) => {
            const marker = new google.maps.Marker({
                position: new google.maps.LatLng(location.position[0], location.position[1]),
                map: map
            });
            google.maps.event.addListener(marker, 'click', this.onClickHandler(location, marker, map));
        })
    }

    onClickHandler = (location: any, marker: any, map: any) => () => {
        const infowindow = new google.maps.InfoWindow(); 
        const content = `<span class="info-header">${location.title}</span>`

        infowindow.setContent(content);
        infowindow.open(map, marker);
    }
}

export const factoryMapSettings = {
    clazz: FactoryMap,
    selector: 'factory-map',
    mapSelector: '#map'
}