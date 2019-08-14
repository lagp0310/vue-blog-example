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

import { getRandomAuthor, getPostById } from '../utils/util.js';

export default {
    components: {
        Article
    },
    mounted() {
        this.articles.forEach((element, index) => {
            getRandomAuthor().then((author) => {
                element.author = author;
                element.loading = false;
            });

            getPostById(index + 1).then((post) => {
                element.title = post.title;
            });
        });
    },
    data: () => ({
        // TODO: Auto-load older posts (infinite scrolling).
        articles: [
            {
                articleLink: '/posts/1',
                title: null,
                articleImageSrc: 'https://picsum.photos/500/',
                author: null,
                loading: true
            },
            {
                articleLink: '/posts/2',
                title: null,
                articleImageSrc: 'https://picsum.photos/500/',
                author: null,
                loading: true
            },
            {
                articleLink: '/posts/3',
                title: null,
                articleImageSrc: 'https://picsum.photos/500/',
                author: null,
                loading: true
            },
            {
                articleLink: '/posts/4',
                title: null,
                articleImageSrc: 'https://picsum.photos/500/',
                author: null,
                loading: true
            },
            {
                articleLink: '/posts/5',
                title: null,
                articleImageSrc: 'https://picsum.photos/500/',
                author: null,
                loading: true
            },
            {
                articleLink: '/posts/6',
                title: null,
                articleImageSrc: 'https://picsum.photos/500/',
                author: null,
                loading: true
            }
        ]
    })
};
</script>

<style lang="scss" scoped>
    
</style>
