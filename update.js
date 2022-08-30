const dbConnect = require("./mongodb");

const uodateData = async () => {
  let data = await dbConnect();
  let result = data.updatOne({ name: "s10" }, { $set: { name: "s20" } });
  console.log(data);
}

uodateData();
