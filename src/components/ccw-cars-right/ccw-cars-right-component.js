import template from "./ccw-cars-right-component.template.js";

export class CcwCarsRightComponent extends HTMLElement {
    static get name() {
        return "ccw-cars-right-component";
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
