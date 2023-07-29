const { crawlThePage} = require('./crawl')
function main(){
    if(process.argv.length < 3){
        console.log(" no website provide");
        process.exit(1);
    }
    else if(process.argv.length > 3){
        console.log("parameters exceeded limit")
        process.exit(1)

    }
    else{
        const baseUrl = process.argv[2];
        console.log(`crawl the web ${baseUrl}`)
        crawlThePage(baseUrl)
    }
}

main();