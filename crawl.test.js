    const {normalizeURLs} =  require('./crawl')
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
    
    test("normalizeURLs get urls from html body" , () => {
        const inputHtmlBody = `
        <html>
        <body>
        <a href ='https://blog.boot.dev'> 
         boot.dev Blog  
        </a>
        </body>
        </html>
        `;
        const baseUrlInput = 'https://blog.boot.dev'
        const actual = normalizeURLs(baseUrlInput , inputHtmlBody);
        const expected = ['https://blog.boot.dev']
        expect(actual).toEqual(expected);

    })
    
   
