# WebApp

## Prerequisites

* Install node modules:  
`$ npm install`

* Create .env file and add the variables:
    >To use the fetch functions in the WebApp add this  
    >`REACT_APP_PORT=http://localhost:3001`
    >
    > This variable is url used for all the fetchs in the app


    > To be able to use the custom Tile Layer that I added you need to create an account at [MapBox](https://www.mapbox.com/) and add the public Token to this variable
    >
    > `REACT_APP_MAPBOX_TOKEN=[MAPBOX PUBLIC TOKEN]`
    >
    > I used a different image to display the map using [MapBox TileLayer styles](https://docs.mapbox.com/api/#styles) 

## Done

> * Added Calendar  to display events using [FullCalendar](https://fullcalendar.io/) and added a feature to create events by selecting a day/multiple days and being able to click on the events that are shown it so you can learn about it's details.
> 
> * Created A event detail Card to display the info of the clicked event with more info button to be taken to `EventInfoPage` and see a more detailed info of the event.
> * Used (Leafletjs)[https://leafletjs.com/] to display a static location

## Not done:

> *  Create Event didn't get implemented.
>   
> *  Displaying event Location didn't get implemented and used a custom location in `EventDetailsCard` and `EventInfoPage`.
> * Didn't create modals for adding image and adding location while creating an event in ChainedCreateModal
> * Not Responsive

---
---
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
