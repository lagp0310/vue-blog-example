## Bloggy.

![Bloggy Logo](public/images/logos/2/facebook_cover_photo_1.png)

## Content:
- [About.](#about)
- [Screenshots.](#screenshots)
- [How to build.](#how-to-build)
  - [Using Docker.](#how-to-build-docker)
  - [Without using Docker.](#how-to-build-without-docker)
- [Testing.](#testing)
- [Useful Links.](#useful-links)
- [License.](#license)

## <a id="about"></a> About.
An example blog I made using Vue, Vue Router and Vuex.

## <a id="screenshots"></a> Screenshots.
- ### Desktop.
![About - Bloggy Screenshot](/screenshots/about.png "About")  
![Articles - Bloggy Screenshot](/screenshots/articles.png "Articles")  
![Contact - Bloggy Screenshot](/screenshots/contact.png "Contact")  
![Signup - Bloggy Screenshot](/screenshots/signup_1.png "Signup - Fist Form")  
![Signup - Bloggy Screenshot](/screenshots/signup_3.png "Signup - Third Form")  
![Signup - Bloggy Screenshot](/screenshots/signup_4.png "Signup - Fourth Form")  
![Login - Bloggy Screenshot](/screenshots/login.png "Login Form")  
![Post - Bloggy Screenshot](/screenshots/post.png "Post")  
![Editing Post - Bloggy Screenshot](/screenshots/post_edit.png "Editing Post")  
![Sharing Post - Bloggy Screenshot](/screenshots/post_share.png "Sharing Post")  

- ### Mobile.
![Articles in Mobile - Bloggy Screenshot](/screenshots/articles_mobile.png "Articles in Mobile")  
![Sidenav in Mobile - Bloggy Screenshot](/screenshots/sidenav_mobile.png "Sidenav in Mobile")  
![Login in Mobile - Bloggy Screenshot](/screenshots/login_mobile.png "Login in Mobile")  

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
Go to ```<your_container_address>:8080```.

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
Go to ```localhost:8080```.

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