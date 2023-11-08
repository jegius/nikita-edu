import { html } from "lit-html";
import "./navigation-list-component.js";
import { NavigationListComponent } from "./navigation-list-component.js";
import "./navigation-list-component.template.js";
import "./navigation-list-component.styles.js";
import "../common.css";

export default {
    title: "NavigationListComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <navigation-list-component></navigation-list-component>
     `;
};

export const Default = Template.bind({});