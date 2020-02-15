
var news = new Vue({
    el: '#news',
    data: {
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
        }
    },
    mounted () {
        axios.get("https://stomoya.github.io/json/news.json").then(response => (this.news = response.data))
    }
})

var trend = new Vue({
    el: '#trends',
    data: {
        trends: []
    },
    mounted () {
        axios.get("https://stomoya.github.io/json/trends.json").then(response => (this.trends = response.data.trends))
    }
})

var achievement = new Vue({
    el: '#achievement',
    data: {
        achievements: []
    },
    mounted () {
        axios.get("https://stomoya.github.io/json/achievements.json").then(response => (this.achievements = response.data))
    }
})