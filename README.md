# Flexhire Technical Test - Frontend

<p>Job Position: Full Stack Software Engineer</p>
<p>Candidate: Juan David Giraldo</p>

[Offer Link](https://flexhire.com/flexhire/full-stack-software-engineer)

## Quick start

```bash
# clone repo
$ git clone https://github.com/JuandGirald/flexhire-web

# change directory to cloned app
$ cd flexhire-web

# install project dependencies with yarn
$ npm install

# start development server
$ npm start
```

go to [http://localhost:3000](http://localhost:3000) in your prefered browser.

## Environment Variables

To run this app localy an `.env ` file on project root is required with following variables

```bash

REACT_APP_API_URL=http://localhost:4001/graphql
REACT_APP_CABLE_URL=ws://localhost:4001/cable

```

## Flexhire API Key

When you open the webapp on your browser a modal is displayed requesting your Flexhire API key, once you provide it, a first fetch to API will be done, and cable subscription as well.

> In order to modify the API key you can open that model again using the `Authorize` button on top right corner of the app or just reloading the page
