import template from "./our-faithful-staff-component.template.js";

export class OurFaithfulStaffComponent extends HTMLElement {
    static get name() {
        return "our-faithful-staff-component";
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
