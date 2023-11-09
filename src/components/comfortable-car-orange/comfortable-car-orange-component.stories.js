import { html } from "lit-html";
import "./comfortable-car-orange-component.js";
import { ComfortableCarOrangeComponent } from "./comfortable-car-orange-component.js";
import "./comfortable-car-orange-component.template.js";
import "./comfortable-car-orange-component.styles.js";
import "../common.css";

export default {
    title: "ComfortableCarOrangeComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <comfortable-car-orange-component></comfortable-car-orange-component>
     `;
};

export const Default = Template.bind({});