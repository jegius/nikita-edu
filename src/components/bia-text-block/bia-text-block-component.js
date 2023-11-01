import template from "./bia-text-block-component.template.js";

export class BiaTextBlockComponent extends HTMLElement {
    static get name() {
        return "bia-text-block-component";
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
