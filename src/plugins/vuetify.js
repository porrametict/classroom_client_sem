import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify);
const light_theme = {
    c_sky: '#8BC9EB',
    c_success: '#6FCF97',
    c_red: '#EB5757',
    c_grey : '#E0E0E0'


}


const dark_theme = {
    c_sky: '#8BC9EB',
    c_success: '#6FCF97',
    c_red: '#EB5757',
    c_grey : '#E0E0E0'

}


export default new Vuetify({
    theme: {
        themes: {
            light: light_theme,
            dark: dark_theme,
        },
    }
});