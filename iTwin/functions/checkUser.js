exports = async function(arg){
  /*
    Accessing application's values:
    var x = context.values.get("value_name");

    Accessing a mongodb service:
    var collection = context.services.get("mongodb-atlas").db("dbname").collection("coll_name");
    collection.findOne({ owner_id: context.user.id }).then((doc) => {
      // do something with doc
    });

    To call other named functions:
    var result = context.functions.execute("function_name", arg1, arg2);

    Try running in the console below.
  */
  console.log("Validating ", arg)
  var collection = context.services.get("mongodb-atlas").db("iTwin").collection("Users");
  findRole = async (arg) => {
    doc = await collection.findOne({"email" : arg})
    if (doc) {
      role = doc.role
      return role;
    }
    else
      return "undefined";
      
  }
  return await findRole(arg);
};