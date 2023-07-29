const {JSDOM} = require('jsdom')
function getURLsFromHtmlBody(baseUrl , htmlBody){
    const url = [];
    const dom = new JSDOM(htmlBody);
    const linkElements = dom.window.document.querySelectorAll('a');
    for(let linkElement of linkElements){
        if(linkElement.href.slice(0,1) === '/'){
            //relatie URL
            url.push(`${baseUrl}${linkElement.href}`)
        }
        else{
            //absolute Urls
            url.push(linkElement.href)
        }
       
 
    }
    return url;
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
    getURLsFromHtmlBody
}   