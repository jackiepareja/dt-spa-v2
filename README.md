
# Dog Tales Pack Website MVP
![StackShare](https://img.shields.io/badge/REACT-BUILD-blue)
![StackShare](https://img.shields.io/badge/Windows%20OS-Not%20Compatible-red)

![Imgur](https://i.imgur.com/tYeCFU8.png)

> A company website that has generated leads to grow a small, San Francisco-based pet services company to a leading competitor in the SF pet industry. Dog Tales has a steady 30% annual growth since 2017 within its six-figure annual revenue. The website design is based on [@JonasSchmedtmann](https://codingheroes.io/)'s Udemy course, [Advanced CSS and SASS](https://www.udemy.com/course/advanced-css-and-sass/). To add a bit of a challenge, I built my version with React. Moreover, instead of using the dev dependencies that Jonas has used (post-cli etc.), I have simply used node-sass and wrote my own scripts for compiling. A caveat is the incompatibility with using Windows OS. Read more below for a work-around!
## Contents

- Tech Stack
- Setup
- Future Features
- Contact


### :hammer_and_wrench: Tech Stack
- React
- React Router
- Node
- SASS

### :hammer_and_wrench: Setup
1. Clone or download the git repository and install the essential node packages using this command:
```
$ npm install
```
- If you are using Windows as your OS, the node-sass package will become incompatible and will run into errors when compiling SASS. Skip step number 1, and start with step number 2.

2. Clone or download the git repository and delete the package.json file. You will need to initialize npm again and manually download the dependencies. Thankfully, there are only two (for now)!
```
$ npm init
$ npm i -D node-sass nodemon
```
3. In our package.json file, copy these scripts in our scripts code block.
```
"build-css": "node-sass --include-path scss public/sass/main.scss public/css/main.css",
"watch-css": "nodemon -e scss -x \"npm run build-css\""
```
- "build-css" will compile our main.scss file located in public/sass folders and build our css file to our main.css, located in our public/css folders.
- "watch-css" will watch and compile our sass files automatically with nodemon.


4. To run the application, navigate to the project folder using your terminal and type the command below:
```
$ npm run start
```


### :hammer_and_wrench: Future Features
> I've decided to build this web application using React to scale it into a mobile application using React Native. Dog Tales will also soon have an admin console to manage their clients and contractors, scheduling, payment systems and more!

### :pushpin: pareja.jackie@gmail.com | www.jackiepareja.com
