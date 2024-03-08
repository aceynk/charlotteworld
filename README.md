# CHARLOTTEWORLD webring
This is a webring for the CHARLOTTEWORLD discord server. Instructions on how to use are below.

## How to request to join
To request joining the webring, please [fork](https://github.com/login?return_to=%2Faceynk%2Fcharlotteworld) the github repository and in ``users.json`` add your name and url to the end. Here is how to do this:

First, add a comma to the entry right before yours. The end of the file might look like this:

```
...
	"crouton": "https://crouton.net"
}
```

And you should add a comma to the end so that it looks like this:

```
...
	"crouton": "https://crouton.net",
}
```

However, you can't submit it like this. You need to add your name (can be anything) and your website's link. In the end, the file ending should look like:

```
...
	"crouton": "https://crouton.net",
	"my name": "https://example.com"
}
```

Create a pull request to merge this into main on the github repository. You will have to wait for the pull request to be accepted.

Requirements:
* Just have a functioning site and be a part of the CHARLOTTEWORLD discord server, and you'll be good!

## How to add the navigator to your page
To add the navigator to your page, first you'll want to place the following html into your `<head></head>` tag at the start of your document.

```HTML
<link href="https://cdn.jsdelivr.net/gh/aceynk/charlotteworld/style.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/gh/aceynk/charlotteworld/main.js"></script>
```

Once that is finished, place the following html wherever you'd like the navigator to be!

Normal:
```HTML
<div id="nav-container">
    <a id="prev-link">
        <img id="prev-arrow" src="https://cdn.jsdelivr.net/gh/aceynk/charlotteworld/assets/leftarrow.png" alt="prev">
    </a>
    <div id="ch-main">
        CHARLOTTEWORLD Webring!
    </div>
    <a id="next-link">
        <img id="next-arrow" src="https://cdn.jsdelivr.net/gh/aceynk/charlotteworld/assets/rightarrow.png" alt="next">
    </a>
</div>
```

Compressed:
```HTML
<div id="nav-container"><a id="prev-link"><img id="prev-arrow" src="https://cdn.jsdelivr.net/gh/aceynk/charlotteworld/assets/leftarrow.png" alt="prev"></a><div id="ch-main">CHARLOTTEWORLD Webring!</div><a id="next-link"><img id="next-arrow" src="https://cdn.jsdelivr.net/gh/aceynk/charlotteworld/assets/rightarrow.png" alt="next"></a></div>
```

Once you are done with that, it should work just fine! Please dm @aceynk on discord or create a [github issue](https://github.com/aceynk/charlotteworld/issues) if you run into any problems. Thank you, and enjoy!