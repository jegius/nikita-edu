import { html } from "lit-html";
import "./footer-logo-block-component.js";
import { FooterLogoBlockComponent } from "./footer-logo-block-component.js";
import "./footer-logo-block-component.template.js";
import "./footer-logo-block-component.styles.js";
import "../common.css";

export default {
    title: "FooterLogoBlockComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <footer-logo-block-component></footer-logo-block-component>
     `;
};

export const Default = Template.bind({});