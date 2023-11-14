import { html } from "lit-html";
import "./notification-component.js";
import { NotificationComponent } from "./notification-component.js";
import "./notification-component.template.js";
import "./notification-component.styles.js";
import "../common.css";

export default {
    title: "NotificationComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <notification-component></notification-component>
     `;
};

export const Default = Template.bind({});