import { html } from "lit-html";
import "./navigation-buttons-component.js";
import { NavigationButtonsComponent } from "./navigation-buttons-component.js";
import "./navigation-buttons-component.template.js";
import "./navigation-buttons-component.styles.js";
import "../common.css";

export default {
    title: "NavigationButtonsComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <navigation-buttons-component></navigation-buttons-component>
     `;
};

export const Default = Template.bind({});