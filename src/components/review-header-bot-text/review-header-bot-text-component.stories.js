import { html } from "lit-html";
import "./review-header-bot-text-component.js";
import { ReviewHeaderBotTextComponent } from "./review-header-bot-text-component.js";
import "./review-header-bot-text-component.template.js";
import "./review-header-bot-text-component.styles.js";
import "../common.css";

export default {
    title: "ReviewHeaderBotTextComponent",
    tags: ["autodocs"],
};

const Template = () => {
    return html`
       <review-header-bot-text-component></review-header-bot-text-component>
     `;
};

export const Default = Template.bind({});