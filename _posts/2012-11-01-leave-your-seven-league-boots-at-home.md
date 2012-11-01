---
layout: post
title: "Leave your seven league boots at home"
tagline: "Speed kills, or at least - acceleration does"
description: ""
category: 
tags: []
---
{% include JB/setup %}

The seven league boots are boots of a magical kind from European folklore. They enable you to move at a very high speed. I’ve done the math, and it’s about 140000 meters per second. Needless to say - that is way too fast for a human being to move! 

>Speed kills, or at least - acceleration does.

With today’s tools and development environments it is easy to throw a simple blog together in a matter of hours. It’s a rush! A question to ask ourselves; just because we can make an application in the matter of hours, does that mean we _should_? In the myriad of <span>/.*DD/</span> methodologies out there, I want to propose that we spend some time figuring out what not to drive our development as well.

##The danger of Productivity Driven Development
I’m sure we’ve all been there. You go about your day as usual, then suddenly you get a brilliant idea: _The new tool that everyone must want just as bad as you do._ A typical response to this event is to bring out some of your favorite beverage and maybe some snacks. Then you would switch off the lights, bring out your favorite keyboard and start typing away in your favorite IDE in your favorite language.

The first hour of work is amazing. You feel like a seven league booted code ninja going ~Mach 411. You get a prototype up and running, and for everything you cannot do through the UI – you take comfort in the fact that it’s easy to do in the database, or maybe in your interactive environment. *This is AWESOME!*

As the hours pass, you start getting into some dirty code as you have discovered many new aspects and requirements to your application. Maybe it’s in the behavior, or maybe it’s in the underlying domain model. Never the less, your clean slate starts to gather some spots. Not too many and not too dirty. Things are still ok – *Almost DONE!*

Then all of the sudden – presumably after some much needed food and a short break – the reality strikes: _This web application should have been a native application._ Or, it could just as easily be that: _This native application should have been a web application._ No matter what it **currently is**, and what it **should be** – it rather sucks that you did not know before right?

Armed with a new brilliant idea, you get some more of your favorite beverage and maybe some snacks. This particular version of PDD I like to call Recursive Development. It’s all good until the stack overflows.

##What about _Driven_ Development
I really like to drive my development with some framework or methodology. You do not need a red-green-refactor t-shirt or a behavior specification language as a fluent language on your CV.

_You need to find something that motivates you, and force you to take small steps; even when you are sure you know where and what you want._

Let it be said that I also enjoy TDD and BDD very much, this is not about whether or not to use those methodologies, but rather that you should have something other than productivity alone drive your development. In my full-time job I work with serious games, and the main drive is to see the game evolve.  I love watching the code spring to life.

##Don't forget to play with your seven league boots (at home)
The challenge in not bringing them to work lies in the fact that the business side of things always wants things done yesterday. You need to keep in mind that the code you write at your work is code that you have to live with for the foreseeable future. It is our responsibility to say no if we believe going through with a deployment – or a push to reach a deadline -will break the production or add too much technical debt. Speak up, as early as possible.

<div style="text-align: center; font-style: italic; margin: 1em 7em;">
Flying starts, multiple rewrites and ninja-flexing at Mach 411 are all fun and joy at home, but I pledge that I will never again bring the PDD mindset to work. Even just the smallest step made with the boots take orders of magnitude more steps to do without. Let alone, you have to do them in reverse.</div>