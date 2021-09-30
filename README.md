

# Uselab Happiness Slider

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

## Assignment

Create a happiness slider component in Vue.
The visitor should be able to select a mood using the happiness slider and submit the value.
When the value is sent successfully the visitor proceeds to the final screen showing a specific text for each mood.

The value should be send to the following API endpoint:

	POST: https://automation.uselab.com/api/fe-test/mood

Post body:

	response: {data: {mood: 1, text: "You grumpy old bastard!"}}

API response:

	{mood: 1, text: "You grumpy old bastard!"}

A brief explanation, screens, and assets are available from the Invision project below:
[https://invis.io/QN10W76EEJWG](https://invis.io/QN10W76EEJWG)

It isn't all set in stone, so please fill it in to your liking. Just make sure the component is fun to use!
Please send the completed version back to: [werk@uselab.com](mailto:werk@uselab.com) (please exclude the ‘node_modules’ folder).
Good luck!