import { html } from "lit-html";
import "./wcu-auto-header-component.js";
import { WcuAutoHeaderComponent } from "./wcu-auto-header-component.js";
import "./wcu-auto-header-component.template.js";
import "./wcu-auto-header-component.styles.js";
import "../common.css";

export default {
    title: "WcuAutoHeaderComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <wcu-auto-header-component></wcu-auto-header-component>
     `;
};

export const Default = Template.bind({});