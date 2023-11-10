import template from "./ofs-info-contact-component.template.js";

export class OfsInfoContactComponent extends HTMLElement {
    static get name() {
        return "ofs-info-contact-component";
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
