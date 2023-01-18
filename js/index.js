var interest = new Vue({
    el: '#interest',
    data: {
        topics: [
            "GANs", "Anime", "Illustration", "Image Generation", "Image-to-Image Translation", "Self-Supervised"
        ]
    }
})

var project = new Vue({
    el: '#projects',
    data: {
        projects: [
            {
                name: "animeface",
                description: "Training deep models with anime, illustrated images.",
                links: [
                    {name: "github", url: "https://github.com/STomoya/animeface"},
                    {name: "project page", url: "https://stomoya.github.io/animeface"}
                ]
            },
            {
                name: "stutil",
                description: "Python UTILities for STomoya.",
                links: [
                    { name: "github", url: "https://github.com/STomoya/stutil"},
                ]
            },
            {
                name: "storh",
                description: "PyTORCH utilities for STomoya.",
                links: [
                    { name: "github", url: "https://github.com/STomoya/storch"},
                ]
            }
        ]
    }
})
