const app = Vue.createApp({
    data() {
        return {
            bannerImgList: [
                "img/01.webp",
                "img/02.webp",
                "img/03.webp",
                "img/04.webp",
                "img/05.webp",

            ],

            onClick: null
        }


    },

    methods: {
        thumbClickEvent(currentImgIndex) {

            this.onClick = currentImgIndex
        },

        prevClickEvent() {
            this.onClick--
        },
        
        nextClickEvent() {
            this.onClick++
        }


    }
})

app.mount("#app")