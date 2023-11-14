import { html } from "lit-html";
import "./stick-component.js";
import { StickComponent } from "./stick-component.js";
import "./stick-component.template.js";
import "./stick-component.styles.js";
import "../common.css";

export default {
    title: "StickComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <stick-component></stick-component>
     `;
};

export const Default = Template.bind({});