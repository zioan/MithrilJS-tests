import { Home } from './root/home.js';
import { About } from './root/about.js';

const root = document.getElementById('root');
const layout = document.getElementById('layout');

const Menu = () => {
  const navItem = {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'blue',
  };

  const getPath = () => {
    const path = m.route.get();
    if (path === '/') {
      console.log('home');
    } else if (path === '/about') {
      console.log('about');
    } else {
      console.log('another path');
    }
  };

  return {
    view: () => {
      return [
        m('nav', { style: { display: 'flex', gap: '2rem' } }, [
          m(
            m.route.Link,
            { href: '/', style: navItem, onclick: () => getPath() },
            'Home'
          ),
          m(
            m.route.Link,
            { href: '/about', style: navItem, onclick: () => getPath() },
            'About'
          ),
        ]),
      ];
    },
  };
};

m.mount(root, Menu);

m.route(layout, '/', {
  '/': Home,
  '/about': About,
});
