//sets user variable for pug files
async function checkSessionAuth(req, res, next) {
    if (!req.session.user) {
      console.log("you need to login");
      return res.redirect("/login");
    }
    next();
  }
  
  module.exports = checkSessionAuth;
  