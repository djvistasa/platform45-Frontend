/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of component',
      default: 'Stateless Function',
      choices: () => [
        'Stateless Function',
        'React.PureComponent',
        'React.Component',
      ],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: 'wantMessages',
      default: true,
      message: 'Do you want i18n messages (i.e. will this component use text)?',
    },
    {
      type: 'confirm',
      name: 'wantStyledComp',
      default: true,
      message: 'Do you want this to be a styled component?',
    },
  ],
  actions: data => {
    // Generate index.js and index.test.js
    let componentTemplate;
    const styledComponentTemplate = './component/styledComponent.js.hbs';
    const componentStyles = './component/componentStyles.js.hbs';

    switch (data.type) {
      case 'Stateless Function': {
        componentTemplate = './component/stateless.js.hbs';
        break;
      }
      default: {
        componentTemplate = './component/class.js.hbs';
      }
    }

    const actions = [{
      type: 'add',
      path: '../../src/components/{{properCase name}}/index.js',
      templateFile: componentTemplate,
      abortOnFail: true,
    }];

    // If they want a styled component
    if (data.wantStyledComp) {
      actions.push({
        type: 'add',
        path: '../../src/components/{{properCase name}}/{{camelCase name }}Styles.js',
        templateFile: componentStyles,
        abortOnFail: true,
      })

      actions.push({
        type: 'add',
        path: '../../src/components/{{properCase name}}/styled{{ properCase name }}.js',
        templateFile: styledComponentTemplate,
        abortOnFail: true,
      });
    }

    actions.push({
      type: 'prettify',
      path: '/components/',
    });

    return actions;
  },
};
