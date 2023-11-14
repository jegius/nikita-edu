import { html } from "lit-html";
import "./wcu-auto-component.js";
import { WcuAutoComponent } from "./wcu-auto-component.js";
import "./wcu-auto-component.template.js";
import "./wcu-auto-component.styles.js";
import "../common.css";

export default {
    title: "WcuAutoComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <wcu-auto-component></wcu-auto-component>
     `;
};

export const Default = Template.bind({});