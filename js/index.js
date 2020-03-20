
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
        limited_item: function () {
            if (this.news.length > this.max) {
                this.news = this.news.slice(0, this.max)
            }
        }
    },
    mounted () {
        axios.get("https://stomoya.github.io/json/news.json").then(response => (this.news = response.data))
        this.limited_item()
    },
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