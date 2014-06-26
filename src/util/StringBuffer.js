var stringBuffer=function(){
    var result=new Buffer(256);
    var offset= 0;
    this.append=function(str) {
        if((typeof str)=="object")
            str=JSON.stringify(str);
        else str=''+str;
            result.write(str,offset,str.length);
        offset+=str.length;
    };
    this.toString=function(){
        return result.toString("utf-8",0,offset);
    }
}

module.exports=stringBuffer;
