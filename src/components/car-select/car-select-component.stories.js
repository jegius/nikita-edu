import { html } from "lit-html";
import "./car-select-component.js";
import { CarSelectComponent } from "./car-select-component.js";
import "./car-select-component.template.js";
import "./car-select-component.styles.js";
import "../common.css";

export default {
    title: "CarSelectComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <car-select-component></car-select-component>
     `;
};

export const Default = Template.bind({});