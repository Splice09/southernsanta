var connect = require("connect"),
my_http = require("http"),
path = require("path"),
url = require("url"),
fileSys = require("fs"),
//bodyParser = require("body-parser"),
app = connect(),
port = process.env.PORT || 5000,
stats,
htmlPath = "index.html";
//app.use(bodyParser.urlencoded({extended: false}));

//This function uses the connect middleware to handle GET and POST HTTP requests
app.use('/public/', function(request, response){
    console.log("you are in the first app.use() function");
   // console.log("=======================your REQ is: " + request.method);
    var my_path = url.parse(request.url).pathname;
    console.log(path.join(url.parse(request.url).pathname, "This is the requested path"));
    console.log("The full path is ---");
    var fullPath = path.join(process.cwd(), my_path);
    console.log(fullPath);

    //check for request method for either a GET or a POST
    if(request.method == 'POST'){
        console.log("*****************************" + request.body.page_name);
        //Check the value of page_name to determine where the post request came from
        //-- this forks which table gets queried.
        /*
        if(request.body.page_name == "pastProjects"){
            try{
                pastProjectsQuery(response);
            }
            catch (e){
                console.log("SOMETHING IS UP WITH YOUR pastProjects POST.");
            }
        }
        else{
            try{
                currentWorkQuery(response);
            }
            catch (e){
                console.log("SOMETHING IS UP WITH YOUR currentWork POST.");
            }
        }
        */
    }
    else{
        try{
            stats = fileSys.lstatSync(fullPath);
            if(stats.isDirectory()){
                response.writeHeader(404, {"Content-Type": "text/plain"});
                response.write("404 Not Found\n");
                response.end();
            }
            else{
                fileSys.readFile(fullPath, "binary", function(err, file){
                    if(err){
                        response.writeHeader(500, {"Content-Type": "text/plain"});
                        response.write(err + "\n");
                        response.end();
                    }
                    else{
                        if(fullPath == "/app/pages/about.html"){
                            response.writeHeader(200);
                            response.write(file, "binary");
                            response.end();
                            console.log("YOUR PAGE HAS BEEN SERVED.");
                        }
                        else if(fullPath == "/app/pages/contact.html"){
                            response.writeHeader(200);
                            response.write(file, "binary");
                            response.end();
                        }
                        else if(fullPath == "/app/pages/photos.html"){
                            response.writeHeader(200);
                            response.write(file, "binary");
                            response.end();
                        }
                        else if(fullPath == "/app/css/desktopStyle.css"){
                            response.writeHeader(200, {"Content-Type": "text/css"});
                            response.write(file, "binary");
                            response.end();
                        }
                        else if(fullPath =="/app/assets/StyleSheets/myStyleSmall.css"){
                            response.writeHeader(200, {"Content-Type": "text/css"});
                            response.write(file, "binary");
                            response.end();
                        }
                        else if(fullPath =="/app/assets/StyleSheets/landscapeMobile.css"){
                            response.writeHeader(200, {"Content-Type": "text/css"});
                            response.write(file, "binary");
                            response.end();
                        }
                        else{
                            fullPath = path.join(process.cwd(), htmlPath);
                            fileSys.readFile(fullPath, "binary", function(err, file){
                                if(err){
                                    response.writeHeader(500, {"Content-Type": "text/plain"});
                                    response.write(err + "\n");
                                    response.end();
                                }
                                else{
                                    response.writeHeader(200);
                                    response.write(file, "binary");
                                    response.end();
                                }
                            });
                        }
                    }
                });
            }
        }
        catch (e){
            console.log("Something is horribly wrong!");
        }
    }
});

//This use function uses the connect middleware to fetch the requested index.html file
app.use('/', function(request, response){
    console.log("you are in the second app.use() function");
    console.log("=======================your REQ is: " + request.method);
    var fullPath = path.join(process.cwd(), htmlPath);
    console.log("The full path is:");
    console.log(fullPath);
    try{
        stats = fileSys.lstatSync(fullPath);
        if(stats.isDirectory()){
            response.writeHeader(404, {"Content-Type": "text/plain"});
            response.write("404 Not Found\n");
            response.end();
        }
        else{
            fileSys.readFile(fullPath, "binary", function(err, file){
                if(err){
                    response.writeHeader(500, {"Content-Type": "text/plain"});
                    response.write(err + "\n");
                    response.end();
                }
                else{
                    response.writeHeader(200);
                    response.write(file, "binary");
                    response.end();
                }
            });
        }
    }
    catch (e){
        console.log("If you are reading this, you have bigger problems.");
    }
});
my_http.createServer(app).listen(port);
console.log('Connected via port ' + port);