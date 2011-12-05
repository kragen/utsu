var text = process.argv[2];
var content = '"{"http://regexadvice.com/forums/thread/65663.aspx":"{\"url\":\"http://regexadvice.com/forums/thread/65663.aspx\",\"content\":\"Test\",\"date\":\"Mon Dec 05 2011 15:12:32 GMT-0300 (ART)\"}","chrome://settings/extensionSettings#":"{\"url\":\"chrome://settings/extensionSettings#\",\"content\":\"Hola. Todo bien?e\",\"date\":\"Mon Dec 05 2011 14:49:33 GMT-0300 (ART)\"}"}"';

// var pattern = "\s*(\{[^\{]*"+text+"[^\}]*\})";
var pattern = "\s*(\{[^\{]*"+text+"[^\}]*\})";
var regexp = new RegExp(pattern, 'gi');
var results = content.match(regexp);
var e;
var results;
if(Array.isArray(results)) {
    try {
        results = JSON.parse('[' + results.join(',') + ']');
    } catch(e) {
        console.warn('Something wrong in search, but still');
    }
    
    console.dir(results);
}