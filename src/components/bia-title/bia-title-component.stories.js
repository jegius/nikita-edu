import { html } from "lit-html";
import "./bia-title-component.js";
import { BiaTitleComponent } from "./bia-title-component.js";
import "./bia-title-component.template.js";
import "./bia-title-component.styles.js";
import "../common.css";

export default {
    title: "BiaTitleComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <bia-title-component></bia-title-component>
     `;
};

export const Default = Template.bind({});