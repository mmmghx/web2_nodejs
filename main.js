var http = require('http');
var fs = require('fs');
var url = require('url');  //url 모듈 쓰겠다
var app = http.createServer(function(request,response){
    var _url = request.url;  //위에 url모듈과 변수이름 구분
    var queryData = url.parse(_url, true).query; //파싱
    var title = queryData.id;
    console.log(title); //정보확인
    if(_url == '/'){
      title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      response.writeHead(404);
      response.end();
      return;
    }
    response.writeHead(200);

    fs.readFile(`/data/${title}`, 'utf-8', function(err, description){
        console.log(description);
        var template = `<!doctype html>
        <html>
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1><a href="/">WEB</a></h1>
          <ol>
            <li><a href="/?id=HTML">HTML</a></li>
            <li><a href="/?id=CSS">CSS</a></li>
            <li><a href="/?id=JavaScript">JavaScript</a></li>
          </ol>
          <h2>${title}</h2>
          <p>${description}</p>
        </body>
        </html>
        `;
    })

});
app.listen(3000);
