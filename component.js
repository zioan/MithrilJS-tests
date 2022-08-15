export const Component = () => {
  return {
    view: ({ attrs }) => {
      return m(
        'p',
        `View test component toggled ${attrs.counter} ${
          attrs.counter <= 1 ? 'time' : 'times'
        }`
      );
    },
  };
};
