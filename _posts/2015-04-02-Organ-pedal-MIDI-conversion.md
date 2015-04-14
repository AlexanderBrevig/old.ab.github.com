---
layout: post
title: "Organ pedal MIDI conversion"
tagline: "Enabling my dad to reherse organ sheet music at home"
description: "Custom made PCB and a lot of hacks"
category: projects
tags: [audio, midi, audio engineering, pcb, schematic]
---
{% include JB/setup %}

#What's the idea?

My dad works as an organist (amongst other things) and currently he needs to visit a church for when he wants to rehearse because of the way organ pedals are laid out. Luckily he has saved a set of pedals from an organ that was torn down a while back.

He was surprised to find out that I could help him bring the pedals back to life, and so the project started.
I prototyped the setup quickly using my [Wiring S](http://www.roguerobotics.com/products/electronics/wiring/wirings) and got things working. Then (because I wanted to) I designed a through hole PCB for the project (using parts from my parts bin) and this is it:

![organ pcb](http://i.imgur.com/I0OfH81.jpg)

My dad retrofitted some switches on the pedals and this is their current state:

![pedals](http://i.imgur.com/w45CYVP.jpg)

Next up is to wire everything in a project box.

The end result will have:

<ul>
	<li>40 MIDI enabled switches</li>
	<li>Two octaves</li>
	<li>MIDI channel up/down</li>
	<li>Octave up/down</li>
	<li>MIDI velocity up/down</li>
	<li>LCD screen with info about channel, octave and velocity</li>
</ul>

More posts on the project to come :)