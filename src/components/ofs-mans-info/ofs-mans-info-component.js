import template from "./ofs-mans-info-component.template.js";

export class OfsMansInfoComponent extends HTMLElement {
    static get name() {
        return "ofs-mans-info-component";
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
