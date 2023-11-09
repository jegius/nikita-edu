import { html } from "lit-html";
import "./ccw-cars-right-component.js";
import { CcwCarsRightComponent } from "./ccw-cars-right-component.js";
import "./ccw-cars-right-component.template.js";
import "./ccw-cars-right-component.styles.js";
import "../common.css";

export default {
    title: "CcwCarsRightComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <ccw-cars-right-component></ccw-cars-right-component>
     `;
};

export const Default = Template.bind({});