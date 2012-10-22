---
layout: post
title: "Enabling your C# methods to be CLI callable"
tagline: "please.exe call my method"
description: "I made a library that makes it easy to enable your static functions to be called through CLI"
category: projects
tags: [projects, csharp, programming, cli]
---
{% include JB/setup %}

<p>I made a library that makes it easy to enable your static functions to be called through CLI <a href="https://github.com/AlexanderBrevig/LazyCLI">https://github.com/AlexanderBrevig/LazyCLI</a></p>

<p>Easily install with NuGet using Package Manager Console:</p>

<pre><code class="cmake">PM&gt; <span class="keyword">Install</span>-Package LazyCLI
</code></pre>

<p>Give this class:</p>

<pre><code class="vala"><span class="class">namespace <span class="title">CLI</span>
{</span>
    <span class="keyword">public</span> <span class="keyword">static</span> <span class="class"><span class="keyword">class</span> <span class="title">Hello</span>
    {</span>
        [LazyCLI]
        <span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> World(<span class="keyword">string</span> msg)
        {
            Console.WriteLine(<span class="string">"Hello World: "</span> + msg);
        }
    }
}
</code></pre>

<p>You can call the World method using:</p>

<pre><code class="avrasm">LazyCLI<span class="preprocessor">.CLI</span><span class="preprocessor">.HandleArgs</span>(new string[] { <span class="string">"CLI"</span>, <span class="string">"Hello"</span>, <span class="string">"World"</span>, <span class="string">"This is pretty handy"</span> })<span class="comment">;</span>
</code></pre>

<p>Will print:</p>

<pre><code class="actionscript">Hello World: This <span class="keyword">is</span> pretty handy
</code></pre>
