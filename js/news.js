
var news = new Vue({
    el: '#news',
    delimiters: ["[[", "]]"],
    data: {
        lang: 'en',
        news: [],
        selectedDay: null,
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
        dayClicked(day) {
            this.selectedDay = day;
        },
    },
    mounted () {
        axios.get("https://stomoya.github.io/json/news.json").then(response => (this.news = response.data));
    },
    computed: {
        attributes() {
            return this.news.map(n => ({
                key: `news`,
                dot: true,
                dates: new Date(n.year, n.month-1, n.day),
                customData: n,
            }));
        },
    },
})