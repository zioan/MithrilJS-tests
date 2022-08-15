import { Home } from './root/home.js';
import { About } from './root/about.js';

const root = document.getElementById('root');

const Menu = () => {
  const navItem = {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'blue',
  };

  return {
    view: () => {
      return [
        m('nav', { style: { display: 'flex', gap: '2rem' } }, [
          m(m.route.Link, { href: '/', style: navItem }, 'Home'),
          m(m.route.Link, { href: '/about', style: navItem }, 'About'),
        ]),
      ];
    },
  };
};

m.mount(root, Menu);
// m.route(root, '/', {
//   '/': () => m(Home),
//   '/about': () => m(About),
// });
