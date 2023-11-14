import template from "./ofs-mans-blocks-component.template.js";

export class OfsMansBlocksComponent extends HTMLElement {
    static get name() {
        return "ofs-mans-blocks-component";
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
