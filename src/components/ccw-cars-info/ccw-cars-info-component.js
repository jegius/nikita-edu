import template from "./ccw-cars-info-component.template.js";

export class CcwCarsInfoComponent extends HTMLElement {
    static get name() {
        return "ccw-cars-info-component";
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.#render();
    }

    #render() {
        const templateElem = document.createElement("template");
        templateElem.innerHTML = template;
        this.shadowRoot.appendChild(templateElem.content.cloneNode(true));
    }
}
