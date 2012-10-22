---
layout: page
title : Welcome to the webspace of Alexander Brevig
tagline: 
---
{% include JB/setup %}

{% for first_post in site.posts limit:3 %}
<div class="row">
  <div class="span10">
    <div class="well well-large">
      <h2><a href="{{first_post.url}}">{{first_post.title}}</a></h2>
      <h3><small>{{ first_post.tagline }}</small></h3>
      <h4>{{first_post.description}}</h4>
      <a href="{{first_post.url}}" class="btn btn-small">Read more...</a>
    </div>
  </div>
  <div class="span2">
    <h4>Published</h4>
    <div class="date"><span>{{ first_post.date | date_to_long_string }}</span></div>
    <h4>Category</h4>
    <div class="category"><a href="/categories.html#{{first_post.category}}-ref">{{first_post.category}}</a></div>
  {% unless first_post.tags == empty %}
    <h4>Tags</h4>
    <ul class="tag_box">
    {% assign tags_list = first_post.tags %}
    {% include JB/tags_list %}
    </ul>
  {% endunless %}  
  </div>
</div>
{% endfor %}

<div class="row">
  <div class="span6">
    <div id="programmerbyheart" class="well well-large">
      <h1>Programmer by heart</h1>
      <p>My favorite family of languages is the huge <a href="http://en.wikipedia.org/wiki/Category:C_programming_language_family">C family</a>, and my crush these days is with <a href="http://en.wikipedia.org/wiki/C_Sharp_(programming_language)">C#</a> and <a href="http://en.wikipedia.org/wiki/.NET_Framework">.NET</a>.
      Among my favorite frameworks and runtimes for the <a href="http://en.wikipedia.org/wiki/C_Sharp_(programming_language)">C#</a> language I should at least mention; <a href="http://en.wikipedia.org/wiki/Windows_Presentation_Foundation">WPF</a>, <a href="http://en.wikipedia.org/wiki/ASP.NET_MVC_Framework">MVC3</a> and <a href="http://en.wikipedia.org/wiki/Entity_Framework">Entity Framework</a>.
      There is only one thing that is even more interesting and lovable, and that is the <a href="http://wiring.org.co">Wiring</a> <a href="http://wiring.uniandes.edu.co/source/trunk/wiring/">Open Source</a> platform for creating interactable physical objects. It is programmable in <a href="http://en.wikipedia.org/wiki/C%2B%2B">C++</a> with a beautiful <a href="http://en.wikipedia.org/wiki/Api" title="Application Programming Interface">API</a> and a supportive community. <em>Check it out!</em>
      </p>
      <p>For an overview of what tools I use and consider <em>must have</em>, refer to the <a href="tools.php">tools</a> section.</p>
      <p>No programmer with dignity should have a website without having a showcase of the previous and current projects. So, to stay away from trouble; here is my <a href="projects.php">projects</a>.</p>
    </div>
  </div>

  <div class="span6">
    <div id="musicianinspirit" class="well well-large">
      <h1>Musician in spirit</h1>
      <p>I've pretty much been singing or making tones all my life. When I was two years old I could play the drums (at least with my hands as my feet did not reach the pedals just yet). Video will soon be posted to YouTube. When I was about six I started to play synth, and my love for melodies became evident. As a result of that, my parents got me my first six stringed electric guitar, and it was a match made somewhere really nice! I now play extended range eight string guitars, preferably with fanned/slanted frets.</p>
      <p>For a complete list of my instruments and gear visit the <a href="instruments.php">instruments</a> section.</p>
      <p>I play the guitar and sing in my progressive metal band <a href="http://immetic.com">IMMETIC</a></p>
    </div>
  </div>
</div>
