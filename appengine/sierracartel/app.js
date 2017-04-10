var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

app.get('/',function(req,res){
  res.sendFile('public/index.html');
});

app.get('/offices',function(req,res){
  res.sendFile(path.join(__dirname, 'public', 'offices.html'));
});
app.get('/trainings',function(req,res){
  res.sendFile(path.join(__dirname,'public','training.html'));
})

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
