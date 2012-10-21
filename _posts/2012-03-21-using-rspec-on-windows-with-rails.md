---
layout: post
title: "Using RSpec On Windows With Rails"
description: "I've had some problems with this before, finally I got it to work"
category: technology
tags: [programming, testing]
---
{% include JB/setup %}

<h1>The magic that has to be placed in the Gemfile</h1>
<p>I've had some problems with this before, finally I got it to work</p>

<pre><code>group :development do
  gem 'autotest'
  gem 'rspec-rails', '2.4.1'
end

group :test do
  gem 'rspec', '2.4.0'
  gem 'webrat', '0.7.1'
end
</code></pre>

<p>After that a simple</p>

<pre><code>bundle install
</code></pre>

<p>Will do the trick!</p>