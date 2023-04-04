import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { defaults } from '~/helpters/defaults'
import { MAIN_THEME, mainTheme, mainDarkTheme } from '~/helpters/themes'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    defaults,
    display: {
      mobileBreakpoint: 'sm',
    },
    // add theme
    theme: {
      defaultTheme: MAIN_THEME,
      themes: {
        mainTheme,
        mainDarkTheme,
      },
      // primary-darken-9 primary-lighten-9 までできるようにする
      variations: {
        colors: ['primary', 'secondary', 'accent'],
        lighten: 9,
        darken: 9,
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
