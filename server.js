const express = require('express');

const { INSTANCE_ID } = process.env;

if (!INSTANCE_ID) throw new Error('INSTANCE_ID missing');

const app = express();
app.get('*', function(req, res) {
  res.send({
    instance: INSTANCE_ID,
    host_header: req.headers.host,
  });
});
app.listen(80);
