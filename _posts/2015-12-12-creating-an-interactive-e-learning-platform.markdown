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
- Should present code excercises and real time auto-correction

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

## Classroom Components

The classroom is where the student is going to spend most of the time, so it should be flexible and dinamic. We begin defining its components and doing some assumptions:

- Video: we can take advantage from YouTUBE API, to host, embed and have a timeline.
- Presentation: we can include some HTML5 slides made with reveal.js
- Code Editor: we can use ace.js which is a very mature editor

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: http://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
