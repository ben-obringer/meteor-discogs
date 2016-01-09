const DisconnectDiscogs = Npm.require('disconnect').Client;
const DisconnectDiscogsDatabase = new DisconnectDiscogs({
  consumerKey: Meteor.settings.discogs.consumerKey,
  consumerSecret: Meteor.settings.discogs.consumerSecret
}).database();

Discogs = class Discogs {
  constructor() {}

  artist(artistId) {
    return this._wrapAsyncDisconnectFunction('artist')(artistId);
  }

  label(labelId) {
    return this._wrapAsyncDisconnectFunction('label')(labelId);
  }

  masterRelease(masterId) {
    return this._wrapAsyncDisconnectFunction('master')(masterId);
  }

  release(releaseId) {
    return this._wrapAsyncDisconnectFunction('release')(releaseId);
  }



  _wrapAsyncDisconnectFunction(disconnectFunction) {
    return Meteor.wrapAsync(DisconnectDiscogsDatabase[disconnectFunction], DisconnectDiscogsDatabase);
  }
};
