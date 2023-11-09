import template from "./cco-cars-info-component.template.js";

export class CcoCarsInfoComponent extends HTMLElement {
    static get name() {
        return "cco-cars-info-component";
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
