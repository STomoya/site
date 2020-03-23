
var news = new Vue({
    el: '#news',
    delimiters: ["[[", "]]"],
    data: {
        max: 3,
        lang: 'en',
        news: []
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
        axios.get("https://stomoya.github.io/json/news.json").then(response => (this.news = response.data))
    },
    computed: {
        limited_item() {
            if (this.news.length > this.max) {
                return this.news.slice(0, this.max)
            }
            else {return this.news}
        }
    }
})

var trend = new Vue({
    el: '#trends',
    delimiters: ["[[", "]]"],
    data: {
        trends: []
    },
    mounted () {
        axios.get("https://stomoya.github.io/json/trends.json").then(response => (this.trends = response.data.trends))
    }
})

var achievement = new Vue({
    el: '#achievement',
    delimiters: ["[[", "]]"],
    data: {
        achievements: []
    },
    mounted () {
        axios.get("https://stomoya.github.io/json/achievements.json").then(response => (this.achievements = response.data))
    }
})