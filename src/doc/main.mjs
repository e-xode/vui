import buildApp from './app.mjs'

const { app, router } = buildApp()

router.isReady().then(() => app.mount('#app'))
