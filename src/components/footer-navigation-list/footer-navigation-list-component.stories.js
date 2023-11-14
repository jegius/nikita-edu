import { html } from "lit-html";
import "./footer-navigation-list-component.js";
import { FooterNavigationListComponent } from "./footer-navigation-list-component.js";
import "./footer-navigation-list-component.template.js";
import "./footer-navigation-list-component.styles.js";
import "../common.css";

export default {
    title: "FooterNavigationListComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <footer-navigation-list-component></footer-navigation-list-component>
     `;
};

export const Default = Template.bind({});