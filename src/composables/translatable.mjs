import { useI18n } from 'vue-i18n'

const translatable  = (messages) => {
    const i18n = useI18n()
    Object.keys(messages).forEach((lang) => {
        i18n.mergeLocaleMessage(lang, messages[lang])
    })
    return i18n
}

export {
    translatable
}
