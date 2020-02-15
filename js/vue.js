
var news = new Vue({
    el: '#news',
    data: {
        lang: 'en',
        news: [
            {
                year: 2020,
                month: 02,
                day: 12,
                jtext: '卒業論文を提出しました.',
                etext: 'I have submitted my graduation thesis.'
            },
            {
                year: 2020,
                month: 01,
                day: 24,
                jtext: 'IEEE ICCASP 2020 に論文が採択されました.',
                etext: 'My paper was accepted at IEEE ICASSP 2020.'
            }
        ]
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
    }
})

var trend = new Vue({
    el: '#trends',
    data: {
        trends: [
            'ICASSP 2020',
            'machine learning',
            'docker',
            'docker-compose',
            'nvidia-docker',
            'python',
            'pytorch',
            'Rust',
        ]
    }
})

var achievement = new Vue({
    el: '#achievement',
    data: {
        achievements: [
            {
                year: 2020,
                month: 01,
                text: 'T. Sawada, M. Katsurai, "A Deep Multimodal Approach for Map Image Classification", in proceeding of 45th International Conference on Acoustics, Speech, and Signal Processing (ICASSP), (accepted for publication)'
            }
        ]
    }
})