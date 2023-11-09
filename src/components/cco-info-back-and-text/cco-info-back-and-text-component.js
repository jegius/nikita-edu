import template from "./cco-info-back-and-text-component.template.js";

export class CcoInfoBackAndTextComponent extends HTMLElement {
    static get name() {
        return "cco-info-back-and-text-component";
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
