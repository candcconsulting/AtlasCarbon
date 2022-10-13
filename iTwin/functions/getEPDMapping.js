exports = function(arg){
  console.log(arg);
  let collection = context.services.get("mongodb-atlas").db("iTwin").collection("EPDMapping");
  if (arg === "") {
    arg="default"
  }
  return collection.findOne({ iModelId: arg });
};
