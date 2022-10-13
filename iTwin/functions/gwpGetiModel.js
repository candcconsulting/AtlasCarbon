exports = function(arg){
  console.log(arg);
  let collection = context.services.get("mongodb-atlas").db("iTwin").collection("GWP");
  return collection.find({ iModelId: arg });
};