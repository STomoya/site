
var news = new Vue({
    el: '#news',
    data: {
        lang: 'en',
        news: [],
        year: 0,
        month: 0,
        months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
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
        axios.get("https://stomoya.github.io/source/json/news.json").then(response => (this.news = response.data));
        var today = new Date();
        this.year = today.getFullYear();
        this.month = today.getMonth() + 1;
    },
    computed: {
        years: function () {
            var years = [];
            for (index in this.news) {
                if (!years.includes(this.news[index].year)) {
                    years.push(this.news[index].year);
                }
            }
            return years
        },
        shows: function () {
            var shows = [];
            for (index in this.news) {
                if (this.news[index].year == this.year && this.news[index].month == this.month) {
                    shows.push(this.news[index])
                }
            }
            return shows;
        }
    },
})