<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
            <v-flex xs12>
                <Article v-for="(article, id) in articles" :key="id" :article="article"></Article>
                <br />
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Article from './Article.vue'

export default {
    data: () => ({
        articles: [
            {
                articleLink: '/articles/5bdst2jhdh2',
                show: false,
                title: 'Lorem ipsum dolor.',
                captionText: 'Suspendisse potenti. Fusce mattis suscipit justo, eu pretium nisl convallis ac. Nam.',
                articleImageSrc: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
                likes: 45,
                author: 'Me',
                profileImageSrc: 'https://randomuser.me/api/portraits/men/85.jpg'
            },
            {
                articleLink: '/articles/6bdst2jhdh2',
                show: false,
                title: 'Cras eu leo.',
                captionText: 'Sed sodales sollicitudin quam ut feugiat. Proin id magna eu sapien ultricies.',
                articleImageSrc: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
                likes: 45,
                author: 'Me',
                profileImageSrc: 'https://randomuser.me/api/portraits/women/90.jpg'
            },
            {
                articleLink: '/articles/7bdst2jhdh2',
                show: false,
                title: 'Vestibulum in vulputate quam. Integer eget.',
                captionText: 'Morbi dictum nunc mi, sit amet sollicitudin est ultricies nec. Orci varius.',
                articleImageSrc: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
                likes: 45,
                author: 'Me',
                profileImageSrc: 'https://randomuser.me/api/portraits/men/81.jpg'
            }
        ]
    }),
    components: {
        Article,
    }
};
</script>

<style lang="scss" scoped>
    
</style>
