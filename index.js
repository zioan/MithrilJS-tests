const App = () => {
  let inputState = '';

  const clickHandler = () => {
    console.log(inputState);
  };

  return {
    view: () => {
      return [
        m('h1', 'Test'),
        m(
          'input',
          { value: inputState, onchange: (e) => (inputState = e.target.value) },
          'test'
        ),
        m('button', { onclick: clickHandler }, 'Click Me'),
        m('p', inputState),
      ];
    },
  };
};

m.mount(document.getElementById('root'), App);
