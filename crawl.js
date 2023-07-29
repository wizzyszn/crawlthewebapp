const {JSDOM} = require('jsdom')

async function crawlThePage(currentUrl){
    try{
        const resp = await fetch(currentUrl);
        console.log(await resp.text())
        if (resp.status > 399){
            console.log(`error in fetch ${resp.status} on page ${currentUrl}`)
            return
        }
        const contentType = resp.headers.get("content-type");
        if(!contentType.includes("text/html")){
            console.log(`error in fetch ${contentType} on page ${currentUrl}`)
        }
    }catch(err){
        console.log(`error in fetch : ${err.message}, on page ${currentUrl}`)
    }

}




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
    getURLsFromHtmlBody,
    crawlThePage
}   