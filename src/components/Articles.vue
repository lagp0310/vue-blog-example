<template>
    <v-container 
        grid-list-md 
        text-xs-center
    >
        <v-layout 
            row 
            wrap
        >
            <v-flex xs12>
                <Article 
                    v-for="(article, id) in articles" 
                    :key="id" 
                    :article="article" 
                />
                <br />
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Article from './Article.vue'

export default {
    components: {
        Article
    },
    data: () => ({
        articles: [
            {
                articleLink: '/posts/1',
                show: false,
                title: 'Lorem ipsum dolor.',
                articleImageSrc: 'https://picsum.photos/500/?image=0',
                likes: 45,
                author: 'Me',
                profileImageSrc: 'https://randomuser.me/api/portraits/men/86.jpg'
            },
            {
                articleLink: '/posts/2',
                show: false,
                title: 'Cras eu leo.',
                articleImageSrc: 'https://picsum.photos/500/?image=1',
                likes: 45,
                author: 'Me',
                profileImageSrc: 'https://randomuser.me/api/portraits/women/90.jpg'
            },
            {
                articleLink: '/posts/3',
                show: false,
                title: 'Vestibulum in vulputate quam. Integer eget.',
                articleImageSrc: 'https://picsum.photos/500/?image=2',
                likes: 45,
                author: 'Me',
                profileImageSrc: 'https://randomuser.me/api/portraits/men/81.jpg'
            },
            {
                articleLink: '/posts/4',
                show: false,
                title: 'Vestibulum in vulputate quam. Integer eget.',
                articleImageSrc: 'https://picsum.photos/500/?image=3',
                likes: 45,
                author: 'Me',
                profileImageSrc: 'https://randomuser.me/api/portraits/men/8.jpg'
            },
            {
                articleLink: '/posts/5',
                show: false,
                title: 'Vestibulum in vulputate quam. Integer eget.',
                articleImageSrc: 'https://picsum.photos/500/?image=4',
                likes: 45,
                author: 'Me',
                profileImageSrc: 'https://randomuser.me/api/portraits/women/81.jpg'
            },
            {
                articleLink: '/posts/6',
                show: false,
                title: 'Vestibulum in vulputate quam. Integer eget.',
                articleImageSrc: 'https://picsum.photos/500/?image=5',
                likes: 45,
                author: 'Me',
                profileImageSrc: 'https://randomuser.me/api/portraits/men/15.jpg'
            }
        ]
    })
};
</script>

<style lang="scss" scoped>
    
</style>
