import { html } from "lit-html";
import "./footer-item-component.js";
import { FooterItemComponent } from "./footer-item-component.js";
import "./footer-item-component.template.js";
import "./footer-item-component.styles.js";
import "../common.css";

export default {
    title: "FooterItemComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <footer-item-component></footer-item-component>
     `;
};

export const Default = Template.bind({});