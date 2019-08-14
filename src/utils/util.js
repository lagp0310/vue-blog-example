import axios from 'axios';

/**
 * Gets a Random Author using https://randomuser.me/api/.
 * 
 * Check out this API documentation at: https://randomuser.me/.
 * 
 * @param params - 
 */
export const getRandomAuthor = async () => {
    try {
        const promise = await axios.get('https://randomuser.me/api/');
        return promise.data.results[0];
    } catch (error) {
        console.error(error);
        return {};
    }
};

/**
 * Get a Post by its ID.
 */
export const getPostById = async (postId) => {
    try {
        const promise = await axios.get(
            'https://jsonplaceholder.typicode.com/posts/'.concat(postId)
        );
        return promise.data;
    } catch (error) {
        // Show te ViewNotFound component in this case (404 Error from the API).
        if(error.toString().includes('404')) {
            location.href = '#/not-found';
        }

        return {};
    }
};

/**
 * Get some random Lorem Ipsum text with Markdown syntax.
 * 
 * Check out: https://jaspervdj.be/lorem-markdownum/
 */
export const getRandomLoremIpsumMarkdown = async () => {
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