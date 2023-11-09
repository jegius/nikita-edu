import { html } from "lit-html";
import "./ccw-cars-text-component.js";
import { CcwCarsTextComponent } from "./ccw-cars-text-component.js";
import "./ccw-cars-text-component.template.js";
import "./ccw-cars-text-component.styles.js";
import "../common.css";

export default {
    title: "CcwCarsTextComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <ccw-cars-text-component></ccw-cars-text-component>
     `;
};

export const Default = Template.bind({});