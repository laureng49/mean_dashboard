myApp.factory('userFactory', ['$http', function($http){
var factory = {}
factory.getusers = function(callback){
  $http.get('/').then(function(returned_data){
    callback(returned_data.data)
  })
}

factory.adduser = function(user, callback){
  $http.post('/create', user).then(function(returned_data){
    callback(returned_data.data);
  })
}

factory.loginuser = function(user, callback){
  $http.post('/login', user).then(function(returned_data){
    callback(returned_data.data);
  })
}

factory.home = function(callback){
  $http.get('/dashboard').then(function(data){
    callback(data.data);
  })
}
factory.show = function( userId, callback){
  $http.get('/user/'+userId).then(function(returned_data){
    console.log(returned_data);
    callback(returned_data.data);
  })
}
factory.showtopics = function(topicId, callback){
  $http.get('/topics/'+topicId).then(function(returned_data){
    console.log('showtopics method')

    console.log(returned_data.data)
    callback(returned_data.data)
  })
}

factory.addtopic = function(topic, callback){
  $http.post('/addtopic', topic).then(function(returned_data){
    callback(returned_data.data);
    console.log(returned_data.data);
  })
}
factory.getTopics = function(callback){
  $http.get('/topics').then(function(returned_data){
    callback(returned_data.data);
  })
}
factory.getanswers= function(topicId, callback){
  $http.get('/topics/'+topicId).then(function(returned_data){
    console.log(returned_data.data)
    callback(returned_data.data);
  })
}
factory.addanswer = function(topicId, answer, callback){
  console.log('howdy')
  console.log(topicId)
  console.log(answer);
  $http.post('/topics/'+topicId, answer).then(function(returned_data){
    console.log(returned_data.data);
    callback(returned_data.data);
  })
}

factory.addComment = function(comment, messageId, callback){
  $http.post('/message/'+messageId+'/comments', comment).then(function(returned_data){
    callback(returned_data.data);
  })
}


factory.logout=function(user, callback){
  $http.post('/logout', user).then(function(returned_data){
    callback(returned_data.data);
  })
}

return factory;
}]);
