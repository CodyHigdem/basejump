/**
* MASTER LAYOUT
**/
Router.configure({
  layoutTemplate: 'MasterLayout',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading',
});

Router.route('/', {
  name: 'home'
});

Router.route('/about', {
  name: 'aboutPage'
});
