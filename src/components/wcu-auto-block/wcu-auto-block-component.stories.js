import { html } from "lit-html";
import "./wcu-auto-block-component.js";
import { WcuAutoBlockComponent } from "./wcu-auto-block-component.js";
import "./wcu-auto-block-component.template.js";
import "./wcu-auto-block-component.styles.js";
import "../common.css";

export default {
    title: "WcuAutoBlockComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <wcu-auto-block-component></wcu-auto-block-component>
     `;
};

export const Default = Template.bind({});