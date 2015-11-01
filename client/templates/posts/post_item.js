/**
 * Created by Sy on 10/28/2015.
 */
Template.postItem.helpers({
  ownPost: function () {
    return this.userId === Meteor.userId();
  },
  domain: function () {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
});