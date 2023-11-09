import { html } from "lit-html";
import "./ccw-car-top-right-component.js";
import { CcwCarTopRightComponent } from "./ccw-car-top-right-component.js";
import "./ccw-car-top-right-component.template.js";
import "./ccw-car-top-right-component.styles.js";
import "../common.css";

export default {
    title: "CcwCarTopRightComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <ccw-car-top-right-component></ccw-car-top-right-component>
     `;
};

export const Default = Template.bind({});