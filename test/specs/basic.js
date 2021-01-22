describe('capture events', () => {
    it('capture the events from browser', () => {
        browser.url('https://test.myjobscorner.com/');
        browser.setupInterceptor(); // This will start the intercept service    and will capture the events for the   actions performed in website
        $(".jss19").click();
        browser.pause(2000)
        // $("//button[@onclick='throwReferenceError()']").click();
        browser.waitUntil(() => {
            var request = browser.getRequests();
            console.log(request);    // All the events will get        stored in a list format
            console.log(request[0].body);
            return true
        }, 1000);  // This will print the body of the        first event captured
    })
})