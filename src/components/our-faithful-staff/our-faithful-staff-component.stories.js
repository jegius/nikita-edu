import { html } from "lit-html";
import "./our-faithful-staff-component.js";
import { OurFaithfulStaffComponent } from "./our-faithful-staff-component.js";
import "./our-faithful-staff-component.template.js";
import "./our-faithful-staff-component.styles.js";
import "../common.css";

export default {
    title: "OurFaithfulStaffComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <our-faithful-staff-component></our-faithful-staff-component>
     `;
};

export const Default = Template.bind({});