---
layout: post
title: "ESP8266 Programming!"
tagline: "WiFi for < $4"
description: "A simple schematic and my breadboard for getting up and running"
category: personal
tags: [professional, job, iot, wice, esp8266]
---
{% include JB/setup %}

#ESP8266 Quick Reference

I'm lazy, so I suggest you read this [ITeadStudio wiki post](http://wiki.iteadstudio.com/ESP8266_Serial_WIFI_Module) and of cource visit [esp8266.com](http://www.esp8266.com/).

Also, here's a pinout for the cheapest module:
![playground.boxtec.ch](http://playground.boxtec.ch/lib/exe/fetch.php/wireless/esp8266-pinout_etch_copper_top.png?w=300)
Credit: playground.boxtec.ch

#Schematic for programming

The most important aspect of getting an ESP8266 programmed (besides the [toolchain](https://github.com/esp8266/esp8266-wiki/wiki/Toolchain)) is pulling GPIO-00 to ground. I've opted to do this with a switch.

Here it is:
![schematic](http://i.imgur.com/jai0gnI.png)

The breadboard:
![breadboard](http://i.imgur.com/yLlfS2I.jpg)