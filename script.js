// var xhr = new XMLHttpRequest();
// xhr.addEventListener( "load", function(){
//     // console.log( this.responseText );
// });
// xhr.open("GET", "https://reqres.in/api/users", true);
// xhr.send();

// var xhr2 = new XMLHttpRequest();
// xhr2.addEventListener( "load", function(){
//     console.log( this.responseText );
// });
// xhr2.open("POST", "https://reqres.in/api/posts", true);
// xhr2.send("title=Foo&body=Bar&userId=1");


var $ = {

  ajax: function(options){
    var xhr = new XMLHttpRequest();
    var requestType = options["type"] || "GET";
    var uri = options["url"];
    var asynch = options["asynch"] || true;
    var auth = options["auth"];
    var callbacks = [];

    if(options["complete"]){
      callbacks.push(options["complete"]);
    }else{
      callbacks.push(function(){});
    };

    if(options["error"]){
      callbacks.push(options["error"]);
    }else{
      callbacks.push(function(){});
    };

    if(options["success"]){
      callbacks.push(options["success"]);
    }else{
      callbacks.push(function(){});
    };

    xhr.addEventListener("load", callbacks[0]);
    xhr.addEventListener("error", callbacks[1]);
    xhr.addEventListener("load", callbacks[2]);
    

    xhr.open(requestType, uri, asynch, auth);

    xhr.send(options["data"]);
  }
}