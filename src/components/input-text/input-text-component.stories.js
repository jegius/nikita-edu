import { html } from "lit-html";
import "./input-text-component.js";
import { InputTextComponent } from "./input-text-component.js";
import "./input-text-component.template.js";
import "./input-text-component.styles.js";
import "../common.css";

export default {
    title: "InputTextComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <input-text-component></input-text-component>
     `;
};

export const Default = Template.bind({});