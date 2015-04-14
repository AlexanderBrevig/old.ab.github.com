---
layout: post
title: "Remote passive XLR summer"
tagline: "Sum 8 XLRs to 1 with remote control!"
description: "An ongoing project that I'm doing. Here I introduce you to it."
category: projects
tags: [audio, xlr, audio engineering, pcb, schematic]
---
{% include JB/setup %}

#What's the idea?
I run a side business as an audio engineer, and my current setup uses two multi-cable stage boxes. One of my recurring clients is a choir, with handheld microphones (that's close to 30 mics on stage!). Though, my current setup works, it is a pain because I need two mixers at the front of house in order to mix everything (my SI Compact only has 22 preamps).

For context, this is my typical setup:
![typical setup](https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-9/561634_709085155770621_1301991704_n.jpg?oh=bb0495a177a788de8e8e812b56dd7178&oe=55BBA9F4&__gda__=1441021952_9ee5d9c7c432745ffcdf4e50d54c7fd4)

The goal is to get rid of the analog Soundcraft mixer, and sum the chior into sections (bass, tenor, alto, soprano) and mix the balance of those with the Si Compact.

#The summing box
The boxes are controlled by Atmega168s using the [Wiring Framework](http://wiring.org.co/) <small>what Arduino is based on</small>. These boxes will in turn be controlled by another component that will simply be an [Espruino](http://espruino.com) with an [ESP8266](http://alexanderbrevig.github.io/projects/2015/04/13/ESP8266-programming/) running as an Access Point with a protocol for controlling the summing boxes.

One or more boxes can be controlled through a serial interface, and they can be chained together, going from Slave in/out to the next Master in/out.

Here's a current version of the board:
![3d view second pass](http://i.imgur.com/WrWYZSZ.png/)

Also, here's the schematic:
![schematic](http://i.imgur.com/SEQwRDY.png)

