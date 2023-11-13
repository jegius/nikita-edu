import { html } from "lit-html";
import "./footer-info-navigation-component.js";
import { FooterInfoNavigationComponent } from "./footer-info-navigation-component.js";
import "./footer-info-navigation-component.template.js";
import "./footer-info-navigation-component.styles.js";
import "../common.css";

export default {
    title: "FooterInfoNavigationComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <footer-info-navigation-component></footer-info-navigation-component>
     `;
};

export const Default = Template.bind({});