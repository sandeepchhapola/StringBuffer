var stringBuffer=require('./src/util/StringBuffer');

var strBuff =new stringBuffer();
strBuff.append("hello String");
strBuff.append("when we append no strings are created, only buffer appended in memory");

strBuff.append(332); //Numbers too. append them as string

strBuff.append(true); //Boolean append as string, "true" or "false"

strBuff.append({dd:34, hh:"hello"}); //Objects will be append as JSON strings of them.

//Print
console.log(strBuff.toString()); // toString() will get us the buffer as string.

var stb=new stringBuffer();
stb.append("hello String");
stb.append("when we append no strings are created, only buffer appended in memory");

console.log(stb.toString()); // toString() will get us the buffer as string.
