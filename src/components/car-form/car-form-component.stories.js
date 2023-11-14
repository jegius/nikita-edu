import { html } from "lit-html";
import "./car-form-component.js";
import { CarFormComponent } from "./car-form-component.js";
import "./car-form-component.template.js";
import "./car-form-component.styles.js";
import "../common.css";

export default {
    title: "CarFormComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <car-form-component></car-form-component>
     `;
};

export const Default = Template.bind({});