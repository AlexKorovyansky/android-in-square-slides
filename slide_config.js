var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: 'Android in Square',
    subtitle: 'How you can be magicaly effective in 2013',
    eventInfo: {
      title: 'GDG DevFest Omsk',
      date: '02/11/2013'
    },
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: true, // Default: true
    enableSlideAreas: true, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: true, // Default: true. If touch support should enabled. Note: the device must support touch.
    //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
    favIcon: 'images/gdg_logo_tiny.png',
    fonts: [
      'Open Sans:regular,semibold,italic,italicsemibold',
      'Source Code Pro'
    ],
    theme: ['devfest'], // Add your own custom themes or styles in /theme/css. Leave off the .css extension.
  },

  // Author information
  presenters: [{
    name: 'Alex Korovyansky',
    company: '<br/>Founder GDG Omsk & Mb-Lock Project',
    gplus: 'https://gplus.to/korovyansk',
    twitter: '@korovyansk',
    www: 'http://alexkorovyansky.com',
    github: 'https://github.com/korovyansk'
  }, /*{
    name: 'Second Name',
    company: 'Job Title, Google',
    gplus: 'http://plus.google.com/1234567890',
    twitter: '@yourhandle',
    www: 'http://www.you.com',
    github: 'http://github.com/you'
  }*/]
};

