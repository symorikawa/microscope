/**
 * Created by Sy on 10/28/2015.
 */
Posts = new Mongo.Collection('posts');

Meteor.methods({
  addPost: function (newPost) {

    Posts.insert(newPost);
  }
});