const express      = require('express');
const app          = express();
const http         = require('http');
const os           = require('os');
const APP_PORT     = 3080;

const REST_HOST    =   process.env.REST_HOST
const REST_PORT    =   process.env.REST_PORT

const hostname = os.hostname();

app.set('view engine', 'ejs')
app.use(express.static('public'));

var options = {
  host: REST_HOST,
  port: REST_PORT,
  path: "/rest/cookbook",
  method: 'GET'
};

var data = [];

http.request(options, function(res) {
  console.log('Sending request with options: ' + JSON.stringify(options));

  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData);
      data = parsedData;
      console.log('Received data:');
      console.log(parsedData);
    } catch (e) {
      console.error(e.message);
    }
  });
}).end();

/**
 * @api {get} / Request Cookbook Web Page
 * @apiName GetWebPage
 * @apiGroup WebPage
 *
 */
app.get('/', function (req, res) {
    res.render('index', { hostname: hostname, data: data })
})

app.listen(APP_PORT)
app.set('view engine', 'ejs')

console.log('Web server started on port: ' + APP_PORT);
