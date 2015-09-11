# super-simple-redux
the simplest example of [redux](http://rackt.github.io/redux/) possible

## Requirements

* node.js

## Install

``` bash
$ npm install
```

## Run

``` bash
$ npm start
```

## Architecture

<img src="http://i.imgur.com/0unhtNQ.jpg" width="100%" />

thing

[[Action](https://github.com/Dakuan/super-simple-redux/blob/master/src/actions.js)]-------------[[Reducer](https://github.com/Dakuan/super-simple-redux/blob/master/src/reducer.js)]

    |                     |
    |                     |
 [[View](https://github.com/Dakuan/super-simple-redux/blob/master/src/view.js)]-----------------[[Store](https://github.com/Dakuan/super-simple-redux/blob/master/src/store.js)]
 
