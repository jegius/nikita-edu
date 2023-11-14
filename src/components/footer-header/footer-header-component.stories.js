import { html } from "lit-html";
import "./footer-header-component.js";
import { FooterHeaderComponent } from "./footer-header-component.js";
import "./footer-header-component.template.js";
import "./footer-header-component.styles.js";
import "../common.css";

export default {
    title: "FooterHeaderComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <footer-header-component></footer-header-component>
     `;
};

export const Default = Template.bind({});