import { html } from "lit-html";
import "./footer-navigation-block-component.js";
import { FooterNavigationBlockComponent } from "./footer-navigation-block-component.js";
import "./footer-navigation-block-component.template.js";
import "./footer-navigation-block-component.styles.js";
import "../common.css";

export default {
    title: "FooterNavigationBlockComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <footer-navigation-block-component></footer-navigation-block-component>
     `;
};

export const Default = Template.bind({});