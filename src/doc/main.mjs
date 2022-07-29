import buildApp from './app.mjs'

const { app, router, store } = buildApp()
const state = window.INITIAL_DATA

if (state) {
    // store.commit('user/replace', state.user)
}

router.isReady().then(() => app.mount('#app'))
