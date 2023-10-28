/** @type { import('@storybook/web-components').Preview } */
import { ButtonComponent } from '../src/components/button/button-component.js'
import { LogoComponent } from '../src/components/logo/logo-component.js'
import { NavigationButtonsComponent } from '../src/components/navigation-buttons/navigation-buttons-component.js';
import { NotificationComponent } from '../src/components/notification/notification-component.js';

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

[
  ButtonComponent,
  LogoComponent,
  NotificationComponent,
  NavigationButtonsComponent,
].map((component) => customElements.define(component.name, component));

export default preview;
