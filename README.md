# Getting Started with React Amplify App

## TechStack

### Node.js
### JavaScript
### React
### GraphQL
### DynamoDB
### AWS Amplify
### AWS AppSync
### AWS Cognito
### AWS S3

# Quick Start

To quick start the app, run ( IDE: VS Code recommended):
`npm i`
`npm run start`

This will open the app in your browser.

# Project Setup
Description how the Project was set up and can be build from scratch

### Latest node.js
[https://nodejs.org/en/](https://nodejs.org/en/)

Check version in terminal ( for windows ) with node-v ( and npm-v)

### Create React App `npx create-react-app appName`

### Install Amplify React-UI `npm install aws-amplify @aws-amplify/ui-react`

## AWS Amplify

### Install Amplify CLI and configure Amplify `npm install -g @aws-amplify/cli`
To configure amplify, you need an AWS Account with an IAM User created.
`amplify configure`

[https://docs.amplify.aws/cli/start/install/](https://docs.amplify.aws/cli/start/install/)

Basic Tutorial for React App in Amplify for further instructions:
[https://docs.amplify.aws/start/q/integration/react/](https://docs.amplify.aws/start/q/integration/react/)

### Amplify add Auth `amplify add auth`
To add auth with AWS Cognito and Cognito User Pool you can use `amplify add auth` or `amplify import auth` to add Authentication.
[https://docs.amplify.aws/cli/auth/import/](https://docs.amplify.aws/cli/auth/import/)

It is required to configure amplify in the project as well ( see index.js ).

### Amplify add Auth `amplify add api`
To add an API you can use `amplify add api` to add e.g. a REST or GraphQL API.

[https://docs.amplify.aws/lib/graphqlapi/getting-started/q/platform/js/](https://docs.amplify.aws/lib/graphqlapi/getting-started/q/platform/js/)

If you use annotations like @model on GraphQL-API Objects, these objects are defined as DynamoDB-Tables, when creating the API. With @auth annotation you can also directly address, who has access to these resources. Remember to also configure the API in the project (amplify.configure).

[https://docs.amplify.aws/lib/client-configuration/configuring-amplify-categories/q/platform/js/](https://docs.amplify.aws/lib/client-configuration/configuring-amplify-categories/q/platform/js/)

### AWS Security

It is highly recommended to follow AWS Security, as hosting in the cloud with Amplify, AppSync, Cognito, S3, DynamoDB is highly scalable and therefore needs to be monitored and secured due to attacks. Please consider setting up a Firewall with AWS WAF, especially regarding ddos-attacks or XXS-Scripting-attacks.
[https://aws.amazon.com/de/waf/](https://aws.amazon.com/de/waf/)

# React Components: Class VS Functional

The projects includes both: There are class components ( 'old style' ) and functional components with react hooks ( 'new style' ) included as well.
To learn more about the difference, see:
[https://www.telerik.com/blogs/react-class-component-vs-functional-component-how-choose-whats-difference](https://www.telerik.com/blogs/react-class-component-vs-functional-component-how-choose-whats-difference)

# Available Scripts

### `npm install`

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# GitHub History
GitHub History has been deleted
