Simple CRUD app which tracks personal finance expenditure. It has user authenticaton,
uses firebase as backend. Users can create an account, log in and add or delete transactions. Makes use of firebase rules and authentication to only display listed transactions for the current user.

Challenges: 

Learned a lot more about authentication. The way transactions would be displayed unique to each user
ended up requiring a different approach than I had first thought about. This was my first project with
a backend, so setting all of that up with firebase was new to me and I think the ease of use certainly
helped broaden my understanding of how that worked.

Another challenge I hadn't anticipated was while I was pleased to have gotten the transactions adding and deleting working; the way transactions were displayed seemed to be at random. To overcome this, changes made to the home functional component making use of 'desc' and the timestamp associated with each item allowed me to display them as added. I am sure there are many other ways of doing this. 

Throughout this build I broke the app an number of times. Although this was frustrating, with a few well placed console logs and general good practice of catching errors inside functions I was able to find out first what was causing the problem and then remedy it. Simple things such as trying to use a function but not actually invoking it, or an errant '{' often the culprit. It was however helpful to attempt fixing issues in a diagnostic manner e.g if this is outputting 'undefined' when it should be returning a boolean there is perhaps a problem with the function proving that output, i'll look there....

Another issue I encountered was an infinite loop of renders which was caused I believe, by putting an
array inside a dependency array. As I understand JS sees this array as different each time, causing the dependency to trigger. A way of avoiding this is making use of 'useRef' to store a reference to the 
array in a variable. 

useReducer is very interesting, although I only used a few cases in my switch I can imagine how powerful and useful this hook might be in a larger app. It took me a while to get the concepts and flow of what happens when you dispatch an action. 




// init deploy: 03/12/2022: 

Project Console: https://console.firebase.google.com/project/moneyman-99322/overview
Hosting URL: https://moneyman-99322.web.app





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
