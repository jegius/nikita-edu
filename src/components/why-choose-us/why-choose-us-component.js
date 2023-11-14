import template from "./why-choose-us-component.template.js";

export class WhyChooseUsComponent extends HTMLElement {
    static get name() {
        return "why-choose-us-component";
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
