exports = function(arg){
  console.log(arg);
  let collection = context.services.get("mongodb-atlas").db("EPD").collection("EPD");

  return collection.find({});
};
