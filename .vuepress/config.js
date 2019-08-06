module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    displayAllHeaders: true,
    markdown: {
        lineNumbers: true
    },
    locales: {
        '/guide/': {
            lang: 'en-US',
            title: 'VuePress',
            description: 'Vue-powered Static Site Generator'
        }
    },
    serviceWorker: true,
    themeConfig: {
        sidebarDepth: 2,
        navbar: true,
        logo: "/img/Logo Type 1.png",
        displayAllHeaders: true,
        locales: {
            '/guide/': {
                label: 'English',
                selectText: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                nav: [{
                        text: 'Guide',
                        link: '/guide/',
                    },
                    {
                        text: 'Config Reference',
                        link: '/config/'
                    },
                    {
                        text: 'Default Theme Config',
                        link: '/default-theme-config/'
                    },
                    {
                        text: 'Changelog',
                        link: 'https://github.com/vuejs/vuepress/blob/0.x/CHANGELOG.md'
                    },
                    {
                        text: '1.x',
                        link: 'https://v1.vuepress.vuejs.org/'
                    },
                ],
                sidebar: {
                    '/guide/': genSidebarConfig('Guide')
                }
            }
        }
    }
};




function genSidebarConfig(title) {
    return [{
        title,
        collapsable: false,
        children: [
            '',
            'MoreInformations'
        ]
    }]
}