import { html } from "lit-html";
import "./footer-info-buttons-component.js";
import { FooterInfoButtonsComponent } from "./footer-info-buttons-component.js";
import "./footer-info-buttons-component.template.js";
import "./footer-info-buttons-component.styles.js";
import "../common.css";

export default {
    title: "FooterInfoButtonsComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <footer-info-buttons-component></footer-info-buttons-component>
     `;
};

export const Default = Template.bind({});