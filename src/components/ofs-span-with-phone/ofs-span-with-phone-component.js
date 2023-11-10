import template from "./ofs-span-with-phone-component.template.js";

export class OfsSpanWithPhoneComponent extends HTMLElement {
    static get name() {
        return "ofs-span-with-phone-component";
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
