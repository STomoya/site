
var projects = new Vue({
    el: '#projects',
    delimiters: ["[[", "]]"],
    data: {
        lang: 'en',
        projects: [],
    },
    methods: {
        change_lang: function () {
            if (this.lang === 'en'){
                this.lang = '日本語'
            }
            else {
                this.lang = 'en'
            }
        },
    },
    mounted () {
        axios.get("https://stomoya.github.io/docs/json/projects.json").then(response => (this.projects = response.data));
    },
})