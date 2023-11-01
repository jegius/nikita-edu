import { html } from "lit-html";
import "./bia-second-row-component.js";
import { BiaSecondRowComponent } from "./bia-second-row-component.js";
import "./bia-second-row-component.template.js";
import "./bia-second-row-component.styles.js";
import "../common.css";

export default {
    title: "BiaSecondRowComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <bia-second-row-component></bia-second-row-component>
     `;
};

export const Default = Template.bind({});