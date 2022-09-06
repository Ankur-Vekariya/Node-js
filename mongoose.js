const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/e-comm");

  const ProductSch = new mongoose.Schema({
    name: String,
  });
  
  const ProductsModal = mongoose.model("product", ProductSch);
  let data = new ProductsModal({ name: "m8" });
  let result = await data.save();
  console.log(result);
};
main()