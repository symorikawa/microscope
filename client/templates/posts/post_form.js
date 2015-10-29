
Template.postForm.events({

  // handle the form submission
  'submit form': function(event, template) {

    // stop the form from submitting
    event.preventDefault();
    var newPost= {
      title: event.target.title.value,
      url: event.target.url.value
    };

    Meteor.call('addPost', newPost);
    template.find("form").reset();
  }

});