export default defineAppConfig({
  appName: 'shigatena.dev',
  appDescription: 'Personal website of @shigatena666',
  profilePicture: '/assets/profile_picture.jpg',
  footerName: 'shigatena666',
  email: 'contact@shigatena.dev',
  socials: {
    github: 'https://github.com/shigatena666',
    linkedin: 'https://www.linkedin.com/in/shigatena666',
    instagram: 'https://www.instagram.com/shigatena666',
  },
  ui: {
    primary: 'emerald',
    gray: 'zinc',
    notifications: {
      // Show toasts at the top right of the screen
      position: 'top-0 bottom-0'
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
