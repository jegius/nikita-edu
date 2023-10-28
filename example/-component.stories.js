import { html } from "lit-html";
import "./-component.js";
import { Component } from "./-component.js";
import "./-component.template.js";
import "./-component.styles.js";
import "../common.css";

export default {
    title: "Component",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <-component></-component>
     `;
};

export const Default = Template.bind({});