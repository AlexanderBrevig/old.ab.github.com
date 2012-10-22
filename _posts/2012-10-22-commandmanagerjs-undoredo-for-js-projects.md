---
layout: post
title: "CommandManager.js, undo/redo for JS projects"
tagline: "tag"
description: "Simply enable undo/redo in you JS applications by this small object"
category: projects
tags: [projects, javascript]
---
{% include JB/setup %}

<p><a href="http://coderwall.com/p/rdzera">Coderwall post</a></p>
<p>Ever wanted to support undo/redo in your JS app?</p>

<p>I did, so I wrote a <a href="https://github.com/AlexanderBrevig/CommandManager.js">CommandManager</a> that supports execution, unexecution and reexecution of commands.</p>

<p>Try the demo: <a href="http://alexanderbrevig.github.com/CommandManager.js/examples/">http://alexanderbrevig.github.com/CommandManager.js/examples/</a></p>

<pre><code class="javascript">CommandManager.execute({
  execute: <span class="function"><span class="keyword">function</span><span class="params">()</span>{</span>
    <span class="comment">// do something</span>
  },
  unexecute: <span class="function"><span class="keyword">function</span><span class="params">()</span>{</span>
    <span class="comment">// undo something</span>
  }
});

<span class="comment">//call unexecute of prev. command</span>
CommandManager.undo(); 
<span class="comment">//call execute of prev. command</span>
CommandManager.redo(); 
</code></pre>