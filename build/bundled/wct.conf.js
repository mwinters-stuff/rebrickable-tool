var path=require("path"),ret={suites:["test"],webserver:{pathMappings:[]},plugins:{local:{browsers:["chrome"]}}},mapping={},rootPath=__dirname.split(path.sep).slice(-1)[0];mapping["/components/"+rootPath+"/bower_components"]="bower_components",ret.webserver.pathMappings.push(mapping),module.exports=ret;