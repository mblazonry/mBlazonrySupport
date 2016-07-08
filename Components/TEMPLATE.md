# Template Component#

Originally posted [here](https://community.skuid.com/skuid/topics/template-component-with-action-framework) on the :octopus: skuid community. 

----------

This one started off as a simple task I had to do, and ended up being rather complicated.

I had to make icons placed on a skuid page redirect, when clicked, to another page.

Simple enough right? Well I would have liked to use an image component, and run Action Framework actions when the image was clicked, however the image component can't currently do that. I suppose I could have given the images a special class and jQueried an event handler onto them, but that would have been messy...

So I did it initially with a stock Template component, with the "Allow HTML" option checked, adding a href around my img tag pointing to my page's URL. I was satisfied to some extent with that. There was quite a bit of HTML clutter in the template though, and despite the href giving me the nice mouse-over indicator in chrome like so: 

![URL onHover indicator](https://d2r1vs3d9006ap.cloudfront.net/s3_images/1444731/RackMultipart20160705-100966-3xgmey-URL_Hover.jpg)

(bottom left of browser window when you hover over a link), the whole thing wasn't very declarative, and still didn't accommodate Action Framework Events.

So, simply, I made an Action Framework-able Template Component!

It assumes that if you are firing Action Framework Events with a mouseClick that you want the resulting template to have the `cursor: pointer; ` CSS set to make it look clickable.

Please note that this is written strictly for Skuid 7.x (Banzai) and newer. 

## DEMOS: ##

(YouTube video) Part 1: the builder!

[![Part 1: the runtime!](https://img.youtube.com/vi/r3XOb7GEnuQ/maxresdefault.jpg)](https://youtu.be/r3XOb7GEnuQ "Timer component - runtime demo!")

(YouTube video) Part 2: the runtime!

[![Part 1: the runtime!](https://img.youtube.com/vi/d6pzaAtZ04w/maxresdefault.jpg)](https://youtu.be/d6pzaAtZ04w "Timer component - builder demo!")


> ### [Setup Instructions Here](INSTALLATION.md) ###

## SEE ALSO: ##

Originally posted [here](https://community.skuid.com/skuid/topics/action-runner-component) on the :octopus: skuid community

(YouTube video) Using the template as an "Action Runner" component

[![Part 1: the runtime!](https://img.youtube.com/vi/RhZLTzzXn6g/maxresdefault.jpg)](https://youtu.be/RhZLTzzXn6g "Another use for mB Template w/ Action Framework - Call Action Framework from anywhere on page!")