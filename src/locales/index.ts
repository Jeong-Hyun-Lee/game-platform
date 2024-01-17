import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

function loadLocaleMessages() {
  // json 파일을 읽어들이기 위한 function
  const requireLang = require.context('@/locales', true, /\.json$/)
  const messages = {}
  // json file read
  for (const file of requireLang.keys()) {
    if (file === './index.js') continue // index.js 파일 제외
    const path: any[] = file.replace(/(\.\/|\.json$)/g, '').split('/')
    path.reduce((o, s, i) => {
      if (o[s]) return o[s]
      o[s] = i + 1 === path.length ? requireLang(file) : {}
      return o[s]
    }, messages)
  }
  return messages
}

const i18n = new VueI18n({
  locale: navigator.language, // set locale
  fallbackLocale: 'ko',
  messages: loadLocaleMessages(),
  silentTranslationWarn: true,
})

export default i18n
