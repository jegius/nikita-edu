import template from "./ccw-car-top-right-component.template.js";

export class CcwCarTopRightComponent extends HTMLElement {
    static get name() {
        return "ccw-car-top-right-component";
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
