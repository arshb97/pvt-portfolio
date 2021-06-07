module.exports = {
    // Autoload the site metadata.
    siteMetadata: {
        title: 'Ashley Browne | Embedded Systems & Full Stack Developer',
        description:
            'Developer, Designer & tech enthusiast from Vancouver',
        author: 'Ashley Browne',
        image: '/favicon.jpg',
    },

    // Gatsby plugins
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/img`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'Ashley Bhullar',
                short_name: 'AB',
                start_url: '/',
                background_color: '#FFFFFF',
                theme_color: '#FFFFFF',
                display: 'minimal-ui',
                icon: 'src/img/logo.jpg' // This path is relative to the root of the site.
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-169758466-1',
                head: false
            }
        }
    ]
};
