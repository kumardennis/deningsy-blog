export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5eefb0d9e3bd7bdb00893baf',
                  title: 'Sanity Studio',
                  name: 'deningsy-blog-studio-k2fb3xiv',
                  apiId: 'd1f7252f-1746-4612-98f9-ee9aa6910a53'
                },
                {
                  buildHookId: '5eefb0d9e3bd7b6a08893f69',
                  title: 'Blog Website',
                  name: 'deningsy-blog-web',
                  apiId: '3e43a499-b280-4569-9ab8-2a0eaedd8b7d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kumardennis/deningsy-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://deningsy-blog-web.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
