//ES5 class
function iPhone(){

    
}

iPhone.prototype.faceID = function(){

  console.log("faceID guy")
    
}


iPhone.prototype.video = function() {

  console.log("video person")    
}

let testPhone = new iPhone()

testPhone.faceID()
testPhone.video()


//ES6
class android{

  faceID(){ console.log("Android faceID")}
    
}

let nexus = new android()
nexus.faceID()
