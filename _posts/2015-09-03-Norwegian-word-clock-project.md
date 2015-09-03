---
layout: post
title: "Norwegian word clock project!"
tagline: "Lessons learned TL;DR Use ICs"
description: "28 cm square black anodized aluminum beauty"
category: projects
tags: [electronics, workstation, clock]
---
{% include JB/setup %}

# The tried and true 'artsy' project is well along it's path to completion!

*NB: Click images to zoom*

I sat out to make a word clock. This will be the first project I complete at my [new workbench](http://alexanderbrevig.github.io/projects/2015/08/18/Workbench-project-complete/) and as such I though I'd do it properly.

That is why the word clock will spec with the following:

* 28cm * 28cm black anodized aluminum cover, with milled slots for letters
* 28cm * 28cm black PCB with 70 RGB LEDs and an ATMEGA328
* Some few hundred lines of code
* Three buttons; minutes/hours increment decrement


Let's take a look at the design I sent to the aluminum front plate service:

![Clockface design](/assets/images/wordclock/clockface.jpg)

For the LEDs I chose to go for the promising [APA102C](http://www.adafruit.com/datasheets/APA102.pdf). It uses a simple [I2C](https://en.wikipedia.org/wiki/I%C2%B2C) like bus for communication, and it's easily cascadeable.

## Lets start at the initial idea

In the beginning the design was that `Klokken er` and the final `.` would light up in the same color through RGBs. The rest of the clock face would be white.

My initial thought was to drive each word as LED strings that I'd control with a FET.
Let's look at the word 'kvart' (which means quarter by the way). It has 5 letters and thus 5 LEDs.
The supply I had chosen at the time was 12 volts and the forward voltage of the LED was 3 volts (and the current was 20mA).
This means that I did not want to run more than 3 (3*3v = 9) in series. So, for driving 5 LEDs I'd take a string of 3 in 'parallel' with a string of two to get five. These five LEDs would then be switched on and off by a power mosfet. Here's the schematic I had at the time:

![transistor controlling paralleled strings of LEDs](/assets/images/wordclock/transistor_parallel_strings.png)

If we want to calculate `R3` and `R2` we can do that as follows:

    Rled = (Vsupply - Vdrop) / Iled
    R3 = (12v - (3 * 3v)) / (3 * 0.02) = 3 / 0,06 = 50R
    R2 = (12v - (2 * 3v)) / (2 * 0.02) = 6 / 0,04 = 150R

Now, if we count the words (except Klokken er .) I need 18 control lines. Add to that the three pins I need to control RGB [PWM](https://en.wikipedia.org/wiki/Pulse-width_modulation) and we got 21. Additionally I needed to read the state of three buttons.

For the buttons I did this:

![analogread switches](/assets/images/wordclock/analogswitch.png)

Then placed it on the ADC7 pin on the TQFP package.

When all is said and done, I am _one_, yes *one* pin short! This annoying truth led me to a somewhat crazy place trying to fix it by using two pins to control three LED strings like this:

![Failed transistor logic](/assets/images/wordclock/transistor_logic.png)

And due to my lack of experience, I designed something that *WILL PROBABLY OR CERTAINLY NOT WORK*!
Again, back to the drawing board, and this time I designed something with shift registers. Oh my the over engineering that went into this one... Have a look:

![Shift registers, buffers and mosfets](/assets/images/wordclock/shift_buff_mosfet.jpg)

So, that is one 8bit serial-in/parallel-out shift register. That latch feeds a buffer that protects the shiftreg from the 12v and drives the PFET.
I planned on having 3 shift registers, 3 hex buffers and 20 power mosfets...

Not cost efficient. Not good.
Simply bad.
Really really bad.
I'm bad, I'm bad.
I'm really really ba... You get the idea.

## Finally, it (got) dawned on me - let's use ICs!

A huge thanks to [Brett Hagman](http://www.loftypremises.com/) for steering me to the ever better solution. Also a few KiCAD tips. Thanks!

### Constant current driver IC

Here's a version with a constant current PWM driver chip [TC62D723FNG](http://www.mouser.com/ds/2/408/Toshiba_TC62D723FNG_datasheet-340777.pdf) from Toshiba. Cool:

![constant current IC](/assets/images/wordclock/constantcurrentdriver.png)

Then, at about 3 AM - the lightning struck. Why not RGB every letter using the excellent [APA102C](http://www.adafruit.com/datasheets/APA102.pdf)!?

![APA102C](/assets/images/wordclock/apa102c.jpg)

This is it!

### The final* design with 70 RGB LEDs on board

*VICTORY*

* not really final, I'll update a new post when the design is 100% done.

Here's the schematic:
![APA102C schematic](/assets/images/wordclock/apa102c_board.png)

Here's the board:
![APA102C ](/assets/images/wordclock/apa102c_schem.png)


<script>
$(function(){
  $("img").css("width", "50%").click(function(img){
    var width = $(this).css("width");
    if (parseInt(width) < 400){
      $(this).css("width", "100%");
    } else {
      $(this).css("width", "50%");
    }
  });
});
</script>
