# Meteor-Discogs
*obringer20:meteor-discogs*

Retrieves artists, labels, master releases, and releases from [Discogs](http://www.discogs.com/developers/). Built on top of [disconnect](https://www.npmjs.com/package/disconnect), a Node.js client library.

## Table of Contents
- [Installation](#installation)
- [Setup](#setup)
- [Usage](#usage)
- [Testing](#testing)

### Installation
```
$ meteor add obringer20:meteor-discogs
```

### Setup
Add to your settings.json file:
```
"discogs": {
  "consumerKey": "yourConsumerKey",
  "consumerSecret": "yourConsumerSecret"
}
```

### Usage
```
// Instantiation
const discogs = new Discogs();

// Retrieving an artist
const artist = discogs.artist(123);

// Retrieving a label
const label = discogs.label(123);

// Retrieving a master release
const masterRelease = discogs.masterRelease(123);

// Retrieving a release
const release = discogs.release(123);
```

### Testing
```
VELOCITY_TEST_PACKAGES=1 meteor test-packages --driver-package velocity:html-reporter ./ --settings settings.json
```
