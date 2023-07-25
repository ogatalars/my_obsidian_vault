Scraping should be about [extracting content from HTML](https://www.zenrows.com/blog/mastering-web-scraping-in-python-from-zero-to-hero?utm_source=medium.com&utm_medium=social&utm_campaign=republishing). It sounds simple but has many obstacles. The first one is to obtain the said HTML. For that, we’ll use **Python to avoid detection**.

That might require bypassing anti-bot systems. Web scraping without getting blocked using Python, or any other tool, isn’t a walk in the park.

Websites tend to protect their data and access. Defensive systems could take many possible actions. Stay with us to learn how to mitigate their impact **or directly bypass bot detection using** [**Requests**](https://requests.readthedocs.io/en/latest/) **or** [**Playwright**](https://github.com/microsoft/playwright).

**Note:** when testing at scale, never use your home IP directly. A small mistake or slip, and you will get banned.

Also, this is for information purposes, and make sure you use it on an authorized website or platform.

[![](https://res.cloudinary.com/practicaldev/image/fetch/s--pRoZkjMm--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://miro.medium.com/v2/resize:fit:700/1%2ATIT84bxhasTWgbwfvm1pXg.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--pRoZkjMm--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://miro.medium.com/v2/resize:fit:700/1%2ATIT84bxhasTWgbwfvm1pXg.png)

## **Prerequisites**

For the code to work, you’ll need [Python 3 installed](https://www.python.org/downloads/). Some systems have it pre-installed. After that, install all the necessary libraries by running pip install.

    pip install requests playwright 
    npx playwright install

## **IP Rate Limit**

The most basic security system is to ban or throttle requests from the same IP. It means a regular user wouldn’t request a hundred pages in a few seconds, so that connection will be tagged as dangerous.

    import requests 
    
    response = requests.get('http://httpbin.org/ip') 
    print(response.json()['origin']) 
    # xyz.84.7.83

IP rate limits work similarly to API rate limits, but there is usually no public information about them. We can’t know for sure how many requests we can make safely.

Our Internet Service Provider assigns us our IP, which we can’t affect or mask. The solution is to change it. We can’t modify a machine’s IP, but we can use different machines. Datacenters might have different IPs, although that isn’t a real solution.

Proxies are. They take an incoming request and relay it to the final destination. It does no processing there. But that is enough to mask our IP and bypass the block since the target website will see the proxy’s IP.

### **Rotating Proxies**

There are [free proxies](https://free-proxy-list.net/), even though we don’t recommend them. They might work for testing but aren’t reliable. We can use some of those for testing, as seen in some examples.

Now we have a different IP, and our home connection is safe and sound. Good. But what if they block the proxy’s IP? We’re back to the initial position.

We won’t go into detail about free proxies. Just use [the next one on the list](https://free-proxy-list.net/). Change them frequently since their lifespan is usually short.

**Paid proxy services, on the other hand, offer IP rotation**. Our service would work similarly, but the website would see a different IP. In some cases, they **rotate for every request or every few minutes**. In any case, they’re much harder to ban. And when it happens, we’ll get a new IP quickly.

    import requests 
    
    proxies = {'http': 'http://190.64.18.177:80'} 
    response = requests.get('http://httpbin.org/ip', proxies=proxies) 
    print(response.json()['origin']) # 190.64.18.162

We know about these; it means bot detection services also know about them. Some big companies will block traffic from known proxy IPs or datacenters. For those cases, there is a higher proxy level: residential.

Residential proxies are more expensive and sometimes bandwidth-limited, but they offer us IPs used by regular people. That implies that our mobile provider could assign us that IP tomorrow. Or a friend had it yesterday. They’re indistinguishable from actual final users.

We can scrape whatever we want, right? The cheaper ones by default, the expensive ones when necessary. No, not there yet. We only passed the first hurdle, with some more to come. We must look like legitimate users to avoid being tagged as a bot or scraper.

### **User-Agent Header**

The next step would be to check our request headers. The most known one is [User-Agent](https://en.wikipedia.org/wiki/User_agent) (UA for short), but there are many more. UA follows a format we’ll see later, and many software tools, for example, GoogleBot, have their own.

Here is what the target website will receive if we use Python Requests or cURL directly.

    import requests 
    
     
    
    response = requests.get('http://httpbin.org/headers') 
    
    print(response.json()['headers']['User-Agent']) 
    
    # python-requests/2.25.1
    
    curl http://httpbin.org/headers # { ... "User-Agent": "curl/7.74.0" ... }

Many sites won’t check UA, but this is a huge red flag for the ones that do this. We’ll have to fake it. Luckily, most libraries allow custom headers. Following the example using Requests:

    import requests 
    
     
    
    headers = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36"} 
    
    response = requests.get('http://httpbin.org/headers', headers=headers) 
    
    print(response.json()['headers']['User-Agent']) # Mozilla/5.0 ...

To get your current user agent, visit [httpbin](https://httpbin.org/headers) just as the code snippet is doing and copy it. **Requesting all the URLs with the same UA might also trigger some alerts**, making the solution a bit more complicated.

Ideally, we would have all the current possible User-Agents and rotate them as we did with the IPs. Since that is nearly impossible, we can at least have a few. There are [lists of User-Agents](https://developers.whatismybrowser.com/useragents/explore/) available for us to choose from.

    import requests 
    
    import random 
    
     
    
    user_agents = [ 
    
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36', 
    
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36', 
    
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', 
    
            'Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148', 
    
            'Mozilla/5.0 (Linux; Android 11; SM-G960U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.72 Mobile Safari/537.36' 
    
    ] 
    
    user_agent = random.choice(user_agents) 
    
    headers = {'User-Agent': user_agent} 
    
    response = requests.get('https://httpbin.org/headers', headers=headers) 
    
    print(response.json()['headers']['User-Agent']) 
    
    # Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) ...

Keep in mind that browsers change versions quite often, and this list can be obsolete in a few months. If we’re to use User-Agent rotation, a reliable source is essential. We can do it by hand or use a service provider.

We are a step closer, but there is still one flaw in the headers: anti-bot systems also know this trick and check other headers along with the User-Agent.

### **Full Set of Headers**

**Each browser, or even version, sends different headers**. Check Chrome and Firefox in action:

    { 
    
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9", 
    
            "Accept-Encoding": "gzip, deflate, br", 
    
            "Accept-Language": "en-US,en;q=0.9", 
    
            "Host": "httpbin.org", 
    
            "Sec-Ch-Ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"", 
    
            "Sec-Ch-Ua-Mobile": "?0", 
    
            "Sec-Fetch-Dest": "document", 
    
            "Sec-Fetch-Mode": "navigate", 
    
            "Sec-Fetch-Site": "none", 
    
            "Sec-Fetch-User": "?1", 
            "Upgrade-Insecure-Requests": "1", 
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36" 
    
    }
    
    { 
    
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8", 
            "Accept-Encoding": "gzip, deflate, br", 
            "Accept-Language": "en-US,en;q=0.5", 
            "Host": "httpbin.org", 
            "Sec-Fetch-Dest": "document", 
            "Sec-Fetch-Mode": "navigate", 
            "Sec-Fetch-Site": "none", 
            "Sec-Fetch-User": "?1", 
            "Upgrade-Insecure-Requests": "1", 
            "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:90.0) Gecko/20100101 Firefox/90.0" 
    }

It means what you think it means. The previous array with five User-Agents is incomplete. We need an array with a complete set of headers per User-Agent. For brevity, we’ll show a list with one item. It’s already long enough.

In this case, copying the result from httpbin isn’t enough. The ideal would be to copy it directly from the source. The easiest way to do it’s from Firefox, Chrome DevTools, or your browser's equivalent.

Go to the Network tab, visit the target website, right-click on the request and “Copy as cURL”. Then [convert the cURL syntax to Python](https://curl.trillworks.com/#python) and paste the headers into the list.

    import requests 
    
    import random 
    
     
    
    headers_list = [{ 
    
            'authority': 'httpbin.org', 
    
            'cache-control': 'max-age=0', 
    
            'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"', 
    
            'sec-ch-ua-mobile': '?0', 
    
            'upgrade-insecure-requests': '1', 
    
            'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36', 
    
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9', 
    
            'sec-fetch-site': 'none', 
    
            'sec-fetch-mode': 'navigate', 
    
            'sec-fetch-user': '?1', 
    
            'sec-fetch-dest': 'document', 
    
            'accept-language': 'en-US,en;q=0.9', 
    
    } # , {...} 
    
    ] 
    
    headers = random.choice(headers_list) 
    
    response = requests.get('https://httpbin.org/headers', headers=headers) 
    
    print(response.json()['headers'])

We could add a Referer header for extra security, such as Google or an internal page from the same website. It would mask the fact that we always request URLs directly without interaction.

But be careful since adding a referrer would change more headers. You don’t want your Python Request script blocked by mistakes like that.

### **Cookies**

We ignored the [cookies](https://en.wikipedia.org/wiki/HTTP_cookie) above since they deserve a separate section. **Cookies can help you bypass some anti-bots or get your requests blocked.** They’re a powerful tool that we need to understand correctly.

For example, cookies can **track a user session and remember that user after login**. Websites assign each new user a cookie session. There are many ways to do it, but we’ll try to simplify. Then the user’s browser will send that cookie in each request, tracking the user’s activity.

How is that a problem? We use rotating proxies, so each request might have a different IP from different regions or countries. Anti-bots can see and block that pattern since it’s not a natural way for users to browse.

On the other hand, once you bypass the anti-bot solution, it’ll send valuable cookies. Defensive systems won’t check twice if the session looks legit. Check out [how to bypass Cloudflare](https://www.zenrows.com/blog/bypass-cloudflare?utm_source=medium.com&utm_medium=social&utm_campaign=republishing) for more information.

Will cookies help our Python Requests scripts to avoid bot detection? Or will they hurt us and get us blocked? The answer lies in our implementation.

For simple cases, not sending cookies might work best. There is no need to maintain a session.

For more advanced cases and anti-bot software, session cookies might be the only way to reach and scrape the final content. Always taking into account that the session requests and the IP must match.

The same happens if we want content generated in the browser after XHR calls. We’ll need to use a headless browser. After the initial load, the JavaScript will try to get some content using an XHR call. We can’t do that call without cookies on a protected site.

How will we use headless browsers, specifically Playwright, to avoid detection? Keep on reading!

### **Headless Browsers**

Some anti-bot systems will only show the content after the browser solves a JavaScript challenge. And we can’t use Python Requests to simulate browser behavior like that. We need a browser with JavaScript execution to run and pass the challenge.

[Selenium](https://www.selenium.dev/), [Puppeteer](https://github.com/puppeteer/puppeteer), and Playwright are the most used and known libraries. Avoiding them for performance reasons would be preferable, and they’ll make scraping slower. But sometimes, there is no alternative.

We’ll see how to run Playwright. The snippet below shows a simple script visiting a page that prints the sent headers. The output only shows the User-Agent, but since it’s a real browser, the headers will include the entire set (Accept, Accept-Encoding, etc.).

    import json 
    
    from playwright.sync_api import sync_playwright 
    
    with sync_playwright() as p: 
    
            for browser_type in [p.chromium, p.firefox, p.webkit]: 
    
                    browser = browser_type.launch() 
                    page = browser.new_page() 
                    page.goto('https://httpbin.org/headers') 
                    jsonContent = json.loads(page.inner_text('pre')) 
                    print(jsonContent['headers']['User-Agent']) 
                    browser.close() 
    
    # Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/93.0.4576.0 Safari/537.36 
    
    # Mozilla/5.0 (X11; Linux x86_64; rv:90.0) Gecko/20100101 Firefox/90.0 
    
    # Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Safari/605.1.15

This approach comes with its own problem: take a look at the User-Agents. The Chromium one includes _Headless Chrome_, which will tell the target website that it’s a headless browser. They might act upon that.

Back to the headers section: we can add custom headers that will overwrite the default ones. Replace the line in the previous snippet with this one and paste a valid User-Agent:

[`browser.new`](http://browser.new/)`_page(extra_http_headers={'User-Agent': '...'})`

That is just entry-level with headless browsers. Headless detection is a field in itself, and many people are working on it. Some to detect it, some to avoid being blocked. As an example, you can visit [Pixelscan](https://pixelscan.net/) with an actual browser and a headless one. To be deemed “consistent,” you’ll need to work hard.

Look at the screenshot below, taken when visiting Pixelscan with Playwright. See the UA? The one we fake is all right, but they can detect that we’re lying by checking the navigator JavaScript API.

[![](https://res.cloudinary.com/practicaldev/image/fetch/s--PG7r3uSa--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://miro.medium.com/v2/resize:fit:641/0%2Arxh_v8QlJVNVh3hB.jpg)](https://res.cloudinary.com/practicaldev/image/fetch/s--PG7r3uSa--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://miro.medium.com/v2/resize:fit:641/0%2Arxh_v8QlJVNVh3hB.jpg)

We can pass user\_agent, and Playwright will set the User-Agent in JavaScript and the header for us. Nice!

`page =` [`browser.new`](http://browser.new/)`_page(user_agent='...')`

You can easily add [Playwright stealth](https://pypi.org/project/playwright-stealth/) to your scripts for more advanced cases, making detection harder. It handles inconsistencies between headers and browser JavaScript APIs, among other things.

In summary, having 100% coverage is complex, but you won’t need it most of the time. Sites can always do more complex checks: WebGL, touch events, or battery status.

You won’t need those extra features unless you are trying to scrape a website that requires [bypassing an anti-bot solution, like Akamai](https://www.zenrows.com/blog/bypass-cloudflare?utm_source=medium.com&utm_medium=social&utm_campaign=republishing). And for those cases, that extra effort will be mandatory. And demanding, to be honest.

## **Geographic Limits or Geo-Blocking**

Have you ever tried to watch CNN from outside the US?

[![](https://res.cloudinary.com/practicaldev/image/fetch/s--IRhuJHSu--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://miro.medium.com/v2/resize:fit:700/1%2AjKChZc8tXuxtEt8TDcR2Ew.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--IRhuJHSu--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://miro.medium.com/v2/resize:fit:700/1%2AjKChZc8tXuxtEt8TDcR2Ew.png)

That’s called [geo-blocking](https://en.wikipedia.org/wiki/Geo-blocking). Only connections from inside the US can watch CNN live. We could bypass that using a [Virtual Private Network (VPN)](https://en.wikipedia.org/wiki/Virtual_private_network). We can then browse as usual, but the website will see a local IP, thanks to the VPN.

The same can happen when scraping websites with geo-blocking. There is an equivalent for proxies: **geolocated proxies**. Some proxy providers allow us to choose from a list of countries. With that activated, we’ll only get local IPs from the US.

### **Behavioral Patterns**

Blocking IPs and User-Agents isn’t enough these days. They become unmanageable and stale in hours if not minutes. We are mainly safe if we perform requests with clean IPs and real-world User-Agents.

There are more factors involved, but most requests should be valid.

However, most modern anti-bot software uses machine learning and behavioral patterns, not just static markers (IP, UA, geolocation). That means **we would be detected if we always performed the same actions in the same order**.

1.  Go to the homepage.
2.  Click on the “Shop” button.
3.  Scroll down.
4.  Go to page 2.

After a few days, launching the same script could result in every request being blocked. Many people can perform those same actions, but bots have something that makes them obvious: speed.

With software, we would execute every step sequentially, while an actual user would take a second, then click, scroll down slowly using the mouse wheel, move the mouse to the link, and click.

Maybe there is no need to fake all that, but be aware of the possible problems and know how to face them.

We have to think about what we want. Maybe we don’t need that first request since we only require the second page. We could use that as an entry point, not the homepage.

And save one request. It can scale to hundreds of URLs per domain. No need to visit every page in order; scroll down, click on the next page, and start again.

To scrape search results, once we recognize the URL pattern for pagination, we only need two data points: the number of items and items per page. And most of the time, that info is present on the first page or request.

    import requests 
    from bs4 import BeautifulSoup 
    
    response = requests.get('https://scrapeme.live/shop/') 
    soup = BeautifulSoup(response.content, 'html.parser') 
    pages = soup.select('.woocommerce-pagination a.page-numbers:not(.next)') 
    print(pages[0].get('href')) # https://scrapeme.live/shop/page/2/ 
    print(pages[-1].get('href')) # https://scrapeme.live/shop/page/48/

One request shows us that there are 48 pages. We can now queue them. Mixing with the other techniques, we would scrape the content from this page and add the remaining 47. To scrape them by bypassing anti-bot systems, we could:

-   Shuffle the page order to avoid pattern detection.
-   Use different IPs and User-Agents, so each request looks new.
-   Add delays between some of the calls.
-   Use Google as a referrer randomly.

We could write some snippets mixing all these, but the best option in real life is to use a tool with it all, like [Scrapy](https://docs.scrapy.org/en/latest/), [pyspider](http://docs.pyspider.org/en/latest/), [node-crawler](https://github.com/bda-research/node-crawler) (Node.js), or [Colly](https://github.com/gocolly/colly) (Go).

The idea being the snippets is to understand each problem on its own. But handling everything independently would be too complicated for large-scale, real-life projects.

### **CAPTCHA**

Even the best-prepared request can get caught and shown a [CAPTCHA](https://en.wikipedia.org/wiki/CAPTCHA). Nowadays, **solving CAPTCHAS is achievable** with solutions like Anti Captcha and 2Captcha but a waste of time and money. **The best solution is to avoid them.** The second best is to forget about that request and retry.

The exception is obvious: sites that always show a CAPTCHA on the first visit. We have to solve it if there is no way to bypass it.

And then, **use the session cookies to avoid being challenged again**.

It might sound counterintuitive, but waiting for a second and retrying the same request with a different IP and set of headers will be faster than solving a CAPTCHA. Try it yourself and tell us about the experience.

### **Be a Good Internet Citizen**

We can use several websites for testing, but be careful when doing the same at scale. Try to be a good internet citizen and don’t cause DDoS. Limit your interactions per domain. Amazon can handle thousands of requests per second, but not all target sites will.

We’re always talking about “read-only” browsing mode. Access a page and read its contents. Never submit a form or perform active actions with malicious intent.

If we take a more active approach, several other factors would matter: writing speed, mouse movement, navigation without clicking, browsing many pages simultaneously, etc. Bot prevention software is specifically aggressive with active actions. As it should for security reasons.

We won’t discuss this part, but these actions will give them new reasons to block requests. Again, good citizens don’t try massive logins. We’re talking about scraping, not malicious activities.

Sometimes websites make data collection harder, maybe not on purpose. But with modern frontend tools, CSS classes could change daily, ruining thoroughly prepared scripts. For more details, read our previous entry on [how to scrape data in Python](https://www.zenrows.com/blog/mastering-web-scraping-in-python-from-zero-to-hero?utm_source=medium.com&utm_medium=social&utm_campaign=republishing).

### **Conclusion**

We’d like you to remember the low-hanging fruits:

1.  IP rotating proxies.
2.  Residential proxies for challenging targets.
3.  Full set headers, including User-Agent.
4.  Bypass bot detection with Playwright when JavaScript challenge is required, maybe adding the stealth module.
5.  Avoid patterns that might tag you as a bot. There are many more, and probably more we didn’t cover. But with these techniques, you should be able to crawl and scrape at scale. After all, web scraping without getting blocked with Python is possible if you know how.

If you find this post exciting, find more exciting posts on [Learnhub Blog](http://blog.learnhub.africa/); we write everything tech from [Cloud computing](https://blog.learnhub.africa/category/cloud-computing/) to [Frontend Dev](https://blog.learnhub.africa/category/frontend/), [Cybersecurity](https://blog.learnhub.africa/category/security/), [AI](https://blog.learnhub.africa/category/data-science/), and [Blockchain](https://blog.learnhub.africa/category/blockchain/).

This was written by [ZenRows](https://medium.com/@zenrows?source=post_page-----69bf688aba9a--------------------------------) and Edited by [Leaernhub Blog](http://blog.learnhub.africa/).

### Resources

-   [20 Essential Python Extensions for Visual Studio Code](https://blog.learnhub.africa/2023/05/26/20-essential-python-extensions-for-visual-studio-code/)
-   [Using Python for Web Scraping and Data Extraction](https://blog.learnhub.africa/2023/04/27/using-python-for-web-scraping-and-data-extraction/)
-   [13 Powerful Python Snippets To Automate Tasks](https://blog.learnhub.africa/2023/06/06/13-powerful-python-snippets-to-automate-tasks/)
-   [Getting Started with Python](https://www.python.org/about/gettingstarted/)