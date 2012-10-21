---
layout: post
title: "Blogging with Git &amp; Jekyll"
tagline: "Lean blogging from the console"
description: "What's this?"
category: technology
tags: [misc]
---
{% include JB/setup %}

#My blogging adventure this far
Like most of us I started out with Wordpress. 
After a few posts I was so annoyed by the UI, so I did what any developer would:
I rolled my own blogging engine. Actually, I made two blog engines. One in PHP and one in Ruby on Rails.

The latter I learned in the process of writing the blog engine.
I loved railes, and everything is fine with the current setup.

##Why change platform _again_? 
Simply because I love the notion of writing blog posts in markdown, and publish via git.
It's a wonderful and suitingly nerdy way to maintain my blog.

##The process of posting with jekyll
Let's create the post:

    rake post title="Hello World"

Open the new file in an editor, and provide 

