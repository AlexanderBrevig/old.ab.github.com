---
layout: post
title: "nRF52 gnu toolchain on Windows!"
tagline: "A simple step-by-step guide"
description: "Compile for the new nRF52 from Windows"
category: technology
tags: [nordic semiconductor, cpp, nrf52, BLE, NFC, gnu, toolchain]
---
{% include JB/setup %}

# Let's just get on with it!

<iframe width="560" height="315" src="https://www.youtube.com/embed/1qgyn1Fbe-w" frameborder="0" allowfullscreen></iframe>

* download sdk from (developer.nordicsemi.com)[https://developer.nordicsemi.com/nRF52_SDK/] for me it was this (nRF52_SDK_0.9.2.zip)[https://developer.nordicsemi.com/nRF52_SDK/nRF52_SDK_v0.x.x/nRF52_SDK_0.9.2_dbc28c9.zip] and unzip to somewhere. For me it was `D:/nordicsemi`.
* download (make)[http://sourceforge.net/projects/gnuwin32/files/make/3.81/make-3.81.exe/download?use_mirror=kent&download=] and install
* download http://www.mingw.org/wiki/msys and add to path (should do it by itself)
* download https://launchpad.net/gcc-arm-embedded to somewhere, for me it was `D:/gnu/5.2 2015q4`
* update `Makefile.windows` found in `nRF52_SDK_INSTALL\components\toolchain\gcc`

## You should be ready to go! Let's try it now
Locate the blinky example, and find the folder that holds the makefile, for me this is `D:\nordicsemi\nRF52_SDK_0.9.2_dbc28c9\examples\peripheral\blinky\pca10036\blank\armgcc`.
From here, execute `make nrf52832_xxaa`.

The next steps are as follows:

* Open nRFgo Studio
* Click Segger XXXXX entry in the Device Manager
* Make sure Program Application is chosen in the tabs to the right in the program
* Browse to find the newly created .hex file
* Click 'program' and stand by to watch the board come to life!

I always spend way too much time setting up this, so this is a reference to myself.
Feel free to use it for your own benefit.