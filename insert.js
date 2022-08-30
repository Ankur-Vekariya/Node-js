const dbConnect = require("./mongodb");

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insert([
    { name: "s10", brand: "sam", price: 320, category: "mobile" },
    { name: "note 10", brand: "vivo", price: 32044, category: "mobile" },
  ]);
  if (result.acknowledged) {
    console.log("data inserted");
  }
};
insert();
