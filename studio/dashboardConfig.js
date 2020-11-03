export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5fa12765e5581083a597318c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-y11fszxo',
                  apiId: 'e1acc97c-6e49-48ac-b8ac-34333ec8a485'
                },
                {
                  buildHookId: '5fa12765236856879b0409ff',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-e2aroc47',
                  apiId: 'a8ff690f-2063-40e7-bec5-8469d5ba73e0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mshYat/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-e2aroc47.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
