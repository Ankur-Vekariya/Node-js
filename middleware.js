module.exports = reqFilter = (req, res, next) => {
    if (!req.query.age) {
      res.send("pls provide age");
    } else if (req.query.age < 18) {
      res.send("you can not acces this page");
    } else {
      next();
    }
  };
  