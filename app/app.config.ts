export default defineAppConfig({
  appName: 'shigatena',
  appDescription: 'Built using Canvas. Based on Nuxt and Tailwind CSS. Made by HugoRCD.',
  profilePicture: '/assets/profile_picture.jpg',
  footerName: 'shigatena666',
  email: 'contact@shigatena.dev',
  twitterUsername: 'shigatena666',
  socials: {
    github: 'https://github.com/shigatena666',
    twitter: 'https://twitter.com/shigatena666',
    linkedin: 'https://www.linkedin.com/in/shigatena666',
    instagram: 'https://www.instagram.com/shigatena666',
  },
  ui: {
    primary: 'emerald',
    gray: 'zinc',
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    input: {
      variant: {
        none: 'bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out',
      },
    },
    textarea: {
      variant: {
        none: 'bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out',
      },
    },
  },
})
