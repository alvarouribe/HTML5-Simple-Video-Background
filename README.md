# HTML5 Simple Video Background

## About

HTML5 Simple Video Background lets you use an HTML5 video as a centered, full-page background. It uses CSS and Javascript (with jQuery) to reposition the video on page load and window resize events.

### Code

 HTML5 Simple Video Background is written with SCSS and jQuery. You can find the project files in `~/html5-simple-video-background/`.

### Compatibility

If a browser can run HTML5 video, it should be able to run this plugin. If a viewer does not have Javascript enabled, the background video will fill the page, but will be anchored to the top left corner instead of being centered.

**Please report any compatibility issues.**

## Basic Instructions

### Get Files

* Copy the directory `video-backgound` to a location within your website project.

### Your `head`

* Include `<link rel="stylesheet" media="screen" href="YOUR-PATH/video-background/video-background.css" /> `.
* Include jQuery. You can use a local version, but I'm linking to a hosted copy in my example document.
* Include `<script type="text/javascript" src="YOUR-PATH/video-background/video-background.js"></script>`.

### Your `body`

* Create an element with `class="video-background"`. `<figure>` is preferrable if the background video is relevant to the page's content. Otherwise a generic `<div>` will work here.
* Place your `<video>` inside this.

### Example Document

````html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" media="screen" href="video-background/video-background.css" /> 
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script src="video-background/video-background.js"></script>
        <title>Full Page Video Background Example</title>
    </head>
    <body>
        <h1>Full Page Video Background Example</h1>
        <p>You&rsquo;ll need to include all appropriate formats of your own video. I haven&rsquo;t included an example video in this project.</p>
        <figure class="video-background">
            <video autoplay="autoplay" muted="muted">
                <source src="example.mp4" type="video/mp4" />
            </video> 
        </figure>
    </body>
</html>

````
