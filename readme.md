## Bloggy.

![Bloggy Logo](public/images/logos/2/facebook_cover_photo_1.png)

## Content:
- [About.](#about)  
- [Acknowledgments.](#acknowledgments)  
- [Screenshots.](#screenshots)  
  - [Light Theme](#light-theme)  
  - [Dark Theme](#dark-theme)  
- [How to build.](#how-to-build)
  - [Using Docker.](#how-to-build-docker)
  - [Without using Docker.](#how-to-build-without-docker)
- [Testing.](#testing)
- [Useful Links.](#useful-links)
- [License.](#license)

## <a id="about"></a> About.
An example blog I made using Vue, Vue Router and Vuex.

## <a id="acknowledgments"></a> Acknowledgments.
- Thanks to [Katerina Limpitsouni](https://twitter.com/ninalimpi) for all the awesome illustrations. Be sure to check them out: [Undraw - Illustrations](https://undraw.co/illustrations).  

## <a id="screenshots"></a> Screenshots.
- ###  <a id="light-theme"></a> Light Theme.
![About - Bloggy Screenshot](/screenshots/about.png "About")  
![Articles - Bloggy Screenshot](/screenshots/articles.png "Articles")  
![Contact - Bloggy Screenshot](/screenshots/contact.png "Contact")  
![Login - Bloggy Screenshot](/screenshots/login.png "Login Form")  
![Post - Bloggy Screenshot](/screenshots/post.png "Post")  
![Articles in Mobile - Bloggy Screenshot](/screenshots/articles_mobile.png "Articles in Mobile")  
![Sidenav in Mobile - Bloggy Screenshot](/screenshots/sidenav_mobile.png "Sidenav in Mobile")  

- ###  <a id="dark-theme"></a> Dark Theme.
![About - Bloggy Screenshot (Dark)](/screenshots/about-dark.png "About (Dark)")  
![Articles - Bloggy Screenshot (Dark)](/screenshots/articles-dark.png "Articles (Dark)")  
![Contact - Bloggy Screenshot (Dark)](/screenshots/contact-dark.png "Contact (Dark)")  
![Login - Bloggy Screenshot (Dark)](/screenshots/login-dark.png "Login Form (Dark)")  
![Post - Bloggy Screenshot (Dark)](/screenshots/post-dark.png "Post (Dark)")  

## <a id="how-to-build"></a> How to build.

### <a id="how-to-build-docker"></a> Using Docker.  
```bash
docker build -t <your_tag_here> .
```
Then, when the build finishes, run:
```bash
docker run --name="container's name" -d -p 8080:8080 <your_tag_here> 
```
Check that the container is running in the background with: 
```bash
docker ps
```
Go to `<your_container_address>:8080`.

### <a id="how-to-build-without-docker"></a> Without using Docker.  
To install dependencies run:
```bash
npm install
```
Then, build the application:
```bash
npm run build
```
Finally, run the application on the production server:
```bash
npm run start:prod
```
Or, if you prefer, run the application in development mode:
```bash
npm run start:dev
```
Go to `localhost:8080`.

## <a id="testing"></a> Testing.
Just run: 
```bash
npm run test
```

## <a id="useful-links"></a> Useful Links.
- [Code Splitting | webpack.](https://webpack.js.org/guides/code-splitting)  
- [Production | webpack.](https://webpack.js.org/guides/production)  
- [Docker Documentation.](https://docs.docker.com/)  
- [Dockerizing a Node.js web app | Node.js.](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)  
- [Copy all images/files to a folder using copy-webpack-plugin.](https://medium.com/a-beginners-guide-for-webpack-2/copy-all-images-files-to-a-folder-using-copy-webpack-plugin-7c8cf2de7676)  

## <a id="license"></a> License.
MIT.