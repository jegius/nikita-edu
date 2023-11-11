import template from "./review-header-bot-text-component.template.js";

export class ReviewHeaderBotTextComponent extends HTMLElement {
    static get name() {
        return "review-header-bot-text-component";
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
