//Create a new collection.
use('sifat_shop')
db.createCollection("users");


//remove collaction
use('sifat_shop')
db.users.drop();

//add single document
use('sifat_shop')
db.users.insertOne({
"name":"sifat",
"age":20,
"phone":"+8801826414795",
"level":"beginner"
});


//delete single document
use('sifat_shop')
db.users.deleteOne({
    "_id": ObjectId("6517d30437f645901aeca652")
})