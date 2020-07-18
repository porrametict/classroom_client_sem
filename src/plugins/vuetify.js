import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify);
const light_theme = {
    sky: colors.blue.lighten3,
}



const dark_theme = {
    sky: colors.blue.lighten3,
}



export default new Vuetify({
    theme: {
        themes: {
            light: light_theme,
            dark: dark_theme,
        },
    }
});