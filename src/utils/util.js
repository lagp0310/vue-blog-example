// TODO: Remove params parameter where not required.

import axios from 'axios';

/**
 * Gets a Random Author using https://randomuser.me/api/.
 * 
 * Check out this API documentation at: https://randomuser.me/.
 * 
 * @param params - 
 */
export const getRandomAuthor = async (params = {}) => {
    try {
        const promise = await axios.get('https://randomuser.me/api/');
        return promise.data.results[0];
    } catch (error) {
        console.error(error);
        return {};
    }
};

// /**
//  * 
//  */
// export const getRandomPost = async (params = {}) => {
//     try {
//         const promise = await axios.get(
//             'https://jsonplaceholder.typicode.com/posts/'.concat(Math.floor(Math.random() * 100))
//         );
//         return promise.data;
//     } catch (error) {
//         console.error(error);
//         return {};
//     }
// };

/**
 * 
 */
export const getPostById = async (postId) => {
    try {
        const promise = await axios.get(
            'https://jsonplaceholder.typicode.com/posts/'.concat(postId)
        );
        return promise.data;
    } catch (error) {
        console.error(error);
        return {};
    }
};

/**
 * Get some random Lorem Ipsum text with Markdown syntax.
 * 
 * Check out: https://jaspervdj.be/lorem-markdownum/
 */
export const getRandomLoremIpsumMarkdown = async (params = {}) => {
    try {
        const promise = await axios.get('https://jaspervdj.be/lorem-markdownum/markdown.txt');
        return promise.data;
    } catch (error) {
        console.error(error);
        return {};
    }
};

/**
 * Get Comments for Post postId.
 * 
 * @param postId - 
 */
export const getCommentsForPost = async (postId) => {
    try {
        const promise = await axios.get(
            'https://jsonplaceholder.typicode.com/comments?postId='.concat(postId)
        );
        return promise.data;
    } catch (error) {
        console.error(error);
        return {};
    }
};

/**
 * Get author information using its id.
 */
export const getAuthorById = async (authorId) => {
    try {
        const promise = await axios.get('https://jsonplaceholder.typicode.com/users/'.concat(authorId));
        return promise.data;
    } catch (error) {
        console.error(error);
        return {};
    }
};