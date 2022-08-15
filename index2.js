import { Component } from './component.js';

const root = document.getElementById('root');

const App = () => {
  let togglerComponent = false;
  let counter = 0;

  const toggleHandler = () => {
    togglerComponent = !togglerComponent;
    if (togglerComponent) counter++;
  };

  return {
    view: () => {
      return [
        m('h1', 'hello'),
        m(
          'button',
          {
            style: { color: 'red' },
            onclick: () => toggleHandler(),
          },
          'Toggle me!'
        ),
        togglerComponent && m(Component, { counter: counter }),
      ];
    },
  };
};

m.mount(root, App);
