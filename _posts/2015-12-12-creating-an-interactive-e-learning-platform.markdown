---
layout: post
title:  "Creating an Interactive E-learning Platform"
date:   2015-12-12 23:01:44 -0300
categories: jekyll update elearning
description: Learn how to create an interactive e-learnig Codeschool-like platform 
comments: true
---

Creating an interactive e-learnig platform like CodeSchool, Codeacademy or Treehouse shouldn't be that difficult. 
Nowadays LMS platforms are kind of a big bussines, I believe at some point this will be a very common tool like a blog or a cms and the only differentiator should be the quality of the content you generate. 

Let's go ahead and setup some goals for the platform:

- Should be able to reproduce videos along with presentations
- Should present code excercises and real time auto-correction

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

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
