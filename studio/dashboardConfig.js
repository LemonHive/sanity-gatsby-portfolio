export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61c1b7ddd832f954270e8419',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-n1hgnpp5',
                  apiId: 'e5a3d329-7b05-4cb2-8eb8-0eca62a78c9d'
                },
                {
                  buildHookId: '61c1b7dd6de583821b746bc0',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-n8wz9utj',
                  apiId: 'fe81055f-c97e-4a2f-b4b0-a54802c932bd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/LemonHive/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-n8wz9utj.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
