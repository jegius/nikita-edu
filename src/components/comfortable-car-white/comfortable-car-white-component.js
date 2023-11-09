import template from "./comfortable-car-white-component.template.js";

export class ComfortableCarWhiteComponent extends HTMLElement {
    static get name() {
        return "comfortable-car-white-component";
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
