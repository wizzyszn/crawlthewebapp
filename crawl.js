const {JSDOM} = require('jsdom')

function getUrlsFromHtmlBody(baseUrl , htmlBody){

    const url = [];
    const dom = new JSDOM(htmlBody);
    const linkElements = dom.window.document.querySelectorAll('a');
    for(let linkElement of linkElements){
       console.log(linkElement.href);

     }
 return url

}

function normalizeURLs(urlString){
    const urlObj = new URL(urlString);
    const hostpath =  `${urlObj.hostname}${urlObj.pathname}`;
    if(hostpath.length > 0 && hostpath.slice(-1) === "/"){
        return hostpath.slice(0 , -1);

    }
    else{
        return hostpath
    }
}

module.exports ={
    normalizeURLs,
}   