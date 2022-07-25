export default {
    title: 'Wayru Network Docs',
    description: 'Wayru Network Docs',
    base: "/WayruNetwork-docs/",
    themeConfig: {
        sidebar: [
            {
                text: 'Guide',
                items: [
                    { text: 'Intro', link: '/introduction' },
                    { text: 'Getting Started', link: '/getting-started' },
            ]
            }
        ],
        nav: [
            { text: 'Changelog', link: 'https://github.com/Wayru-Network/WayruNetwork-docs/commits/master' }
        ],
        logo: '../assets/logo.svg',
        socialLinks: [
            { icon: 'github', link: 'https://github.com/Wayru-Network/' },
            { icon: 'twitter', link: 'https://twitter.com/WayruNetwork' },
            // You can also add custom icons by passing SVG as string:
            {
              icon: {
                svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
              },
              link: '...'
            }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © Wayru'
        },
        editLink: {
            pattern: 'https://github.com/Wayru-Network/WayruNetwork-docs/'
        }
    },
    head : [ 
        ["script", {src : "https://cdn.auth0.com/js/auth0-spa-js/1.13/auth0-spa-js.production.js"}]
    ],
    markdown: {
        config: (md) => {
          const { demoBlockPlugin } = require('vitepress-theme-demoblock')
          md.use(demoBlockPlugin)
        }
    }
}