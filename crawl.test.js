    const {normalizeURLs , getURLsFromHtmlBody} =  require('./crawl')
    const {test , expect} =  require('@jest/globals')

    test("normalizeURLs strip protocol" , () => {
        const input = "https://blog.boot.dev/path";
        const actual = normalizeURLs(input);
        const expected = "blog.boot.dev/path";
        expect(actual).toEqual(expected);

    })
    test("normalizeURLs strip trailing slash" , () => {
        const input = "https://blog.boot.dev/path/";
        const actual = normalizeURLs(input);
        const expected = "blog.boot.dev/path";
        expect(actual).toEqual(expected);

    })
    
    test("normalizeURLs strip capitals" , () => {
        const input = "https://BLOG.boot.dev/path";
        const actual = normalizeURLs(input);
        const expected = "blog.boot.dev/path";
        expect(actual).toEqual(expected);

    })
    
    
    
    
   test( "get urls from the html body", () => {
    const baseURls = `blog.boot.dev/path`;
    const inputUrls = `
    <html>
    <body>
    <a href = "https://blog.boot.dev/path" > boot.dev Blog </a>
    </body>
    </html>
    `
    const actual = getURLsFromHtmlBody(baseURls , inputUrls)
    const expected = ["https://blog.boot.dev/path"]
    expect(actual).toEqual(expected)
   })

   test( "getURLsFromHTML relative", () => {
    const baseURls = `https://blog.boot.dev`;
    const inputUrls = `
    <html>
    <body>
    <a href = "/path/" > boot.dev Blog </a>
    </body>
    </html>
    `
    const actual = getURLsFromHtmlBody(baseURls , inputUrls)
    const expected = ["https://blog.boot.dev/path/"]
    expect(actual).toEqual(expected)
   })