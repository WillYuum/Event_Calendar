# MobileApp

## Prerequisites

* Install node modules:  
`$ npm install`

* Create .env file and add the port variable for backend:  
  `BACKEND_URL=[IP ADDRESS]:3001`

  This variable is url used for all the fetchs in the app.

## Done:

  > * Listed the events in the `EventsScreen`.
  > * Added Nivigation using `createMaterialBottomTabNavigator` and `createMaterialBottomTabNavigator`.
  > * Clicking on event will display a more detailed info about the event.

## Not done:

>* Didn't list a specifin user's attending list.

## Note:

in case of this error:

```
`error Invalid regular expression: /(.*\\__fixtures__\\.*|node_modules[\\\]react[\\\]dist[\\\].*|website\\node_modules\\.*|heapCapture\\bundle\.js|.*\\__tests__\\.*)$/: Unterminated character class. Run CLI with --verbose flag for more details.`
```

there is an invalid regular expression that needed changed. I changed the first expression under sharedBlacklist from:

```
var sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```

to:

````
var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];```
````
