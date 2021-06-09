function unixEpochTime(){
    var d = new Date()
    return d.getTime();
  }
  
  var testAlpha = unixEpochTime();
  var testBeta = unixEpochTime;

  console.log(testAlpha);
  console.log(testBeta);