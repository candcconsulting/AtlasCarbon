exports = function putGWP(gwpItem) {
  console.log(JSON.stringify(gwpItem));
  console.log(JSON.stringify(context.user))
  let role = context.functions.execute("checkUser", context.user.data.email);
  // role.resolve();
  if (role === "author") {
    if (gwpItem) {
      let collection = context.services.get("mongodb-atlas").db("iTwin").collection("GWP");
      collection.insertOne(gwpItem)
        .then(result => {
          console.log("success");
          console.log(JSON.stringify(result));
          return "success";
        })
        .catch(err => {
          console.log("fail");
          console.log(err);
          return ("fail " + err)
        })
    } else {
      return ("fail no input");
    }
  } else {
    return "not authorised";
  }
}