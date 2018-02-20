const express             = require('express');
const app                 = express();
const bodyParser          = require("body-parser");
const router              = express.Router();
const cookbookController  = require("./controllers/CookbookController");
const APP_PORT            = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  "extended": false
}));

router.route("/")
  .get(cookbookController.getCookbook)
  .delete(cookbookController.deleteCookbook)
  .post(cookbookController.postRecipe);

router.route("/:id")
  .get(cookbookController.getRecipe)
  .delete(cookbookController.deleteRecipe);

app.use('/rest/cookbook', router);

app.listen(APP_PORT)

console.log('RESTful API server started on: ' + APP_PORT);
