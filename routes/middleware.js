
//throw error

exports.error = function(req, res, next){
  var err = new Error("MyNameIsError");
  next(err);
};