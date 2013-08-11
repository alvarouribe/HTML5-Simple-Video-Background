# HTML5 Simple Video Background

## About

HTML5 Simple Video Background lets you use an HTML5 video as a centered, full-page background. It uses CSS and Javascript (with jQuery) to reposition the video on page load and window resize events.

### Code

 HTML5 Simple Video Background is written with SCSS and jQuery. You can find the project files in `~/html5-simple-video-background/`.

### Compatibility

If a browser can run HTML5 video, it should be able to run this plugin. If a viewer does not have Javascript enabled, the background video will fill the page, but will not be centered.

Please report any compatibility issues.

## Basic Instructions

* Create an element with `class="video-background"` in your page `body`. `<figure>` is preferrable if the background video is relevant to the page's content. Otherwise a generic `<div>` will work here.
* Place your video element inside this.
* Include `<link rel="stylesheet" media="screen" href="YOUR-PATH/video-background.css" /> ` in your page `head`.
* Include jQuery in your page `head`. You can use a local version or `<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>`.
* Include `<script type="text/javascript" src="YOUR-PATH/video-background.js"></script>` in your page `head`.

### Example Document

````html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" media="screen" href="html5-simple-video-background/video-background.css" /> 
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script type="text/javascript" src="html5-simple-video-background/video-background.js"></script>
        <title>Video Background Example</title>
    </head>
    <body>
        <h1>Video Background Example</h1>
        <figure class="video-background">
            <video autoplay="autoplay" muted="muted">
                <source src="example.mp4" type="video/mp4" />
            </video> 
        </figure>
    </body>
</html>

````
