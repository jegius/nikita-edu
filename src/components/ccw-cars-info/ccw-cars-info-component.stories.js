import { html } from "lit-html";
import "./ccw-cars-info-component.js";
import { CcwCarsInfoComponent } from "./ccw-cars-info-component.js";
import "./ccw-cars-info-component.template.js";
import "./ccw-cars-info-component.styles.js";
import "../common.css";

export default {
    title: "CcwCarsInfoComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <ccw-cars-info-component></ccw-cars-info-component>
     `;
};

export const Default = Template.bind({});