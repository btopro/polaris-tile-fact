import { html } from 'lit';
import '../src/polaris-tile-fact.js';

export default {
  title: 'PolarisTileFact',
  component: 'polaris-tile-fact',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <polaris-tile-fact
      style="--polaris-tile-fact-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </polaris-tile-fact>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
