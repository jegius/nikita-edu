import { html } from "lit-html";
import "./bia-first-row-component.js";
import { BiaFirstRowComponent } from "./bia-first-row-component.js";
import "./bia-first-row-component.template.js";
import "./bia-first-row-component.styles.js";
import "../common.css";

export default {
    title: "BiaFirstRowComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <bia-first-row-component></bia-first-row-component>
     `;
};

export const Default = Template.bind({});