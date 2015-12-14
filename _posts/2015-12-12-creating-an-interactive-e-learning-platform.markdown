---
layout: post
title:  "Creating an interactive E-learning Platform"
date:   2015-12-12 23:01:44 -0300
categories: update elearning
description: Learn how to create an interactive e-learnig Codeschool-like platform 
comments: true
---

Creating an interactive e-learnig platform like CodeSchool, Codeacademy or Treehouse shouldn't be that difficult using the MEAN stack. 
Nowadays LMS platforms are kind of a big bussines, I believe at some point this will be a very common tool (like a blog or a cms) and the only differentiator would be the quality of the content you generate. 

Let's go ahead and setup some goals for the platform:

- Should be able to reproduce videos along with presentations
- Should trigger automated actions from a timeline of events, changing states between lecturing and evaluating
- Should present code excercises and real time auto-correction
- Should be able to evaluate unsafe backend code submmitted by the student

And the visual specs:

![LMS]({{ site.url }}/assets/lms/lms-mockup.png)

## Setup

Let's start a new project using `anyandgo`, that is just another MEAN framework using Express basic and some cool conventions. You'll need to install `nodejs`, `mongodb`, `grunt` and `anyandgo-cli`
{% highlight bash %}
$ [sudo] npm install -g anyandgo-cli
{% endhighlight %}

Once you have it, just create a new project:
{% highlight bash %}
$ anyandgo init lms
{% endhighlight %}

This will create a new folder called `lms`, to finish setup just do:
{% highlight bash %}
$ cd lms && npm install && grunt
{% endhighlight %}

And we are ready to work!

![Starting with anyandgo]({{ site.url }}/assets/lms/starting-with-anyandgo.png)

## Classroom

The classroom is where the student is going to spend most of the time, so it should be flexible and dinamic. We begin defining its components and doing some assumptions:

- Video: we can take advantage from YouTUBE API, to host, embed and have a timeline.
- Presentation: we can include some HTML5 slides made with reveal.js
- Code Editor: we can use ace.js which is a very mature editor
- Notifications: we can show toastr notifications in order to inform the student

`anyandgo` offers support for `jade` templates, so inside the `views` folder we are going to search for a file called `index.jade`, and start modifying it a little bit:

{% highlight jade %}
extend layout

block content
  .row(style="margin-top:80px")
    .col-sm-4
      .video-container Video Here
      .challenge-container Display useful info
    .col-sm-8
      .tabs-container
        .presentation-container HTML5 Presentation
        .webeditor-container Code Editor

block footer
{% endhighlight %}

If you are new to `jade` you'll soon realize that is very simple to write and read, you will also notice that for our responsive skeleton we are using `bootstrap` that came pre-installed with `anyandgo` default template.

Ok, now let's go shopping and search some components [bower.io/search](http://bower.io/search/)

- [angular-youtube-mb](https://github.com/brandly/angular-youtube-embed) utility to manage YouTUBE API and embed videos
- [angular-ui-ace](https://github.com/angular-ui/ui-ace) this directive allows you to add ACE editor elements
- [jbrowser](https://github.com/cortezcristian/jbrowser) it will help us to embed the HTML5 presentation

Let's install the modules and include their dependencies, in our root folder `./lms`:

{% highlight bash %}
$ bower install --save angular-youtube-mb angular-ui-ace jbrowser
$ grunt wiredep:site
{% endhighlight %}

In that way we download and add all dependencies. In case some bower is unable to find a suitable version for angular, just choose `6) angular#* ` and enter `6!` to persist.
