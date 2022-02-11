import 'i18next'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
    en : {
        translation : {
            'rook_A' : '\u2656',
            'knight_A' : '\u2658',
            'bishop_A' : '\u2657',
            'king_A' : '\u2654',
            'queen_A' : '\u2655',
            'pawn_A' : '\u2659',

            'rook_B' : '\u265C',
            'knight_B' : '\u265E',
            'bishop_B' : '\u265D',
            'queen_B' : '\u265B',
            'king_B' : '\u265A',
            'pawn_B' : '\u265F'
        }
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng : 'en',
        interpolation: {
            escapeValue: false // react already safes from xss
          }
    })

export default i18n