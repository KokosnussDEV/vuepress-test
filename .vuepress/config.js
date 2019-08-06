module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    displayAllHeaders: true,
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        sidebarDepth: 1,
        navbar: true,
        logo: "/img/Logo Type 1.png",
        displayAllHeaders: true,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' }
            // For use with different languages
            /* {
                text: 'Languages',
                items: [
                  { text: 'Chinese', link: '/language/chinese' },
                  { text: 'Japanese', link: '/language/japanese' }
                ]
            } */
        ],
        sidebar: {
            "/": [
                ""
            ],
            '/guide/*': [
                "",
                "MoreInformations.md"
            ]
        }   
    }
};