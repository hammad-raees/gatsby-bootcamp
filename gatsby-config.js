module.exports = {
    siteMetadata: {
        title: 'The Innovators',
        author: 'Hammad Ahmed'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
                // spaceId: 'e2rnyl996iga',
                // accessToken: 'WJLjzN6pcAaDIkoVIJn3U-ji0iGHc-gI_eFiaVGbojM'
            }
        },
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images-contentful',
                        options: {
                            maxWidth: 750
                        }
                    }
                ]
            }
        }
    ]
}