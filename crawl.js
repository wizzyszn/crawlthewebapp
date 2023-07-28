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
    normalizeURLs
}   