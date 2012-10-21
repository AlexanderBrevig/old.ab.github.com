---
layout: post
title: "Batch Convert .Wav To .Ogg Or .Mp3"
tagline: "no need to download converter crap, use the codex"
description: ""
category: technology
tags: [tools]
---
{% include JB/setup %}

<p>I am <strong>so tired</strong> of all those converter applications that look and behave as freeware, but are not. Here I present a method converting wav files to another format if you have the codec.</p>

<p>Download the <a href="http://www.vorbis.com/files/1.0.1/windows/vorbis-tools-1.0.1-win32.zip">Ogg Vorbis Tools (windows 32)</a> and/or the <a href="http://www.rarewares.org/mp3-lame-bundle.php">mp3 codec</a>.</p>

<p>Proceed by placing the exes in C:\windows\system32 and run this command in the console (run cmd):</p>

<p><img src="/assets/images/screencaps/oggenc_lame.png" alt="Run OggEnc" /></p>

<p>Verify that you get the appropriate response when running either the <strong>oggenc</strong> or the <strong>lame</strong> command.
If that's all set continue to (replace BITRATE with any number that suits your needs) execute:</p>

<pre><code>cd path/to/your/folder/of/wav/files/to/convert
for /F %v IN ('dir /b *.wav') DO oggenc -m BITRATE %v
for /F %v IN ('dir /b *.wav') DO lame -b BITRATE %v
</code></pre>

<p>When it's complete you should have wav, ogg and mp3 files in your folder!</p>
