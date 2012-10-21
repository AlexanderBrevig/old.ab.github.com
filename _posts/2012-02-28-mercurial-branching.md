---
layout: post
title: "Mercurial Branching"
tagline: "a case study"
description: "See a silly example on how branching works with Mercurial"
category: technology
tags: [mercurial, tools]
---
{% include JB/setup %}

<h1>Mercurial Version Control</h1>

<h2>Creating a Mercurial Repository</h2>

<p>First, create a project directory and change into that.</p>

<pre><code>c:\&gt;mkdir hgtest

c:\&gt;cd hgtest
</code></pre>

<p>Initiate the Mercurial repo, notice that the command for mercurial is hg (got to love the sense of humor, right?)</p>

<pre><code>c:\hgtest&gt;hg init

c:\hgtest&gt;hg status
</code></pre>

<h2>Add content to the repository</h2>

<p>Let's create a file with some silly content</p>

<pre><code>c:\hgtest&gt;echo "just some text" &gt;&gt; file.txt
</code></pre>

<p>Notice that the status now return a '? file.txt' which means that it detects an unversioned file called file.txt</p>

<pre><code>c:\hgtest&gt;hg status
? file.txt
</code></pre>

<p>Add that file to the repository</p>

<pre><code>c:\hgtest&gt;hg add .
adding file.txt
</code></pre>

<p>Verify that it is now Added</p>

<pre><code>c:\hgtest&gt;hg status
A file.txt
</code></pre>

<p>Commit these changes to the repository</p>

<pre><code>c:\hgtest&gt;hg commit -m "initial commit of file"
</code></pre>

<h2>Modify content and keep the history</h2>

<p>Realize that the contents of the file included "" so issue a new command to the file and echo the text without quotes</p>

<pre><code>c:\hgtest&gt;echo just some text &gt; file.txt
</code></pre>

<p>As you would expect, this is a change so the file is marked as Modified</p>

<pre><code>c:\hgtest&gt;hg status
M file.txt
</code></pre>

<p>Commit the modification to the repository</p>

<pre><code>c:\hgtest&gt;hg commit -m "change contents of file.txt"
</code></pre>

<h2>Create a new branch and use it</h2>

<p>Create a new branch, we will implement a new feature (a new line of text, but you get the idea?)</p>

<pre><code>c:\hgtest&gt;hg branch some_more_text
marked working directory as branch some_more_text
</code></pre>

<p>Modify the file further, adding a new line</p>

<pre><code>c:\hgtest&gt;echo some more text &gt;&gt; file.txt
</code></pre>

<p>Verify that the change is detected by mercurial (this step is not needed)</p>

<pre><code>c:\hgtest&gt;hg status
M file.txt
</code></pre>

<p>Commit these changes to the some_more_text branch</p>

<pre><code>c:\hgtest&gt;hg commit -m "add some more text in some_more_text branch"
</code></pre>

<p>Type the contents of that file to the screen</p>

<pre><code>c:\hgtest&gt;type file.txt
just some text
some more text
</code></pre>

<p>Change back to the default branch</p>

<pre><code>c:\hgtest&gt;hg update -C default
0 files updated, 0 files merged, 0 files removed, 0 files unresolved
</code></pre>

<p>Notice that here the file.txt contents are different</p>

<pre><code>c:\hgtest&gt;type file.txt
just some text
</code></pre>

<p>Merge in the changes we made in the some_more_text branch</p>

<pre><code>c:\hgtest&gt;hg merge some_more_text
1 files updated, 0 files merged, 0 files removed, 0 files unresolved
(branch merge, don't forget to commit)
</code></pre>

<p>Verify that the new content has been added, we now see <em>some more text</em></p>

<pre><code>c:\hgtest&gt;type file.txt
just some text
some more text
</code></pre>

<p>This is important to remember; the change was commited in the some_more_text branch, but ut is considered a <em>change</em> in the default branch.
As such, we will need to commit it before it's stored in the repository for the default branch.</p>

<pre><code>c:\hgtest&gt;hg status
M file.txt

c:\hgtest&gt;hg commit -m "merge with some_more_text"
</code></pre>

<p>Take a while and review the following log:</p>

<pre><code>c:\hgtest&gt;hg log
changeset:   3:3fb4fccd0bf6
tag:         tip
parent:      1:2fe7608e6738
parent:      2:d7bd27dc951e
date:        Alexander Brevig &lt;alexanderbrevig@gmail.com&gt;
date:        Tue Feb 14 12:28:46 2012 +0100
summary:     merge with some_more_text

changeset:   2:d7bd27dc951e
branch:      some_more_text
date:        Alexander Brevig &lt;alexanderbrevig@gmail.com&gt;
date:        Tue Feb 14 12:15:54 2012 +0100
summary:     add some more text in some_more_text branch

changeset:   1:2fe7608e6738
date:        Alexander Brevig &lt;alexanderbrevig@gmail.com&gt;
date:        Tue Feb 14 12:14:14 2012 +0100
summary:     change contents of file.txt

changeset:   0:6d1abbe729c2
date:        Alexander Brevig &lt;alexanderbrevig@gmail.com&gt;
date:        Tue Feb 14 12:11:53 2012 +0100
summary:     initial commit of file
</code></pre>

<p>You can see that all your commit issues has been kept</p>

<h2>Branches can modify the same files</h2>

<pre><code>c:\hgtest&gt;hg branch change_some_text
marked working directory as branch change_some_text
</code></pre>

<p>Reset the file to contain</p>

<pre><code>just some text
some other text
</code></pre>

<p>Here are the commands to do that from the command line, you could of course edit these files from a text editor</p>

<pre><code>c:\hgtest&gt;echo just some text &gt; file.txt

c:\hgtest&gt;echo some other text &gt;&gt; file.txt

c:\hgtest&gt;type file.txt
just some text
some other text

c:\hgtest&gt;hg status
M file.txt

c:\hgtest&gt;hg commit -m "some other text"

c:\hgtest&gt;hg status
</code></pre>

<p>Change back to the default branch</p>

<pre><code>c:\hgtest&gt;hg update -C default
1 files updated, 0 files merged, 0 files removed, 0 files unresolved

c:\hgtest&gt;type file.txt
just some text
some more text
</code></pre>

<p>Make some changes here as well</p>

<pre><code>c:\hgtest&gt;echo even more text &gt;&gt; file.txt

c:\hgtest&gt;type file.txt
just some text
some more text
even more text

c:\hgtest&gt;hg status
M file.txt

c:\hgtest&gt;hg commit -m "even more text"
</code></pre>

<p>Now it's time to merge in the 'some other text' sentence from the change_some_text branch, but we want to keep our 'even more text' sentence.</p>

<pre><code>c:\hgtest&gt;hg merge change_some_text
merging file.txt
0 files updated, 1 files merged, 0 files removed, 0 files unresolved
(branch merge, don't forget to commit)

c:\hgtest&gt;type file.txt
just some text
some other text
even more text

c:\hgtest&gt;hg status
M file.txt

c:\hgtest&gt;hg commit -m "merge with change_some_text"
</code></pre>

<h2>The resulting complete log</h2>

<pre><code>c:\hgtest&gt;hg log
changeset:   6:6df21f71a5f7
tag:         tip
parent:      5:de632a6d32f1
parent:      4:e95ac861d415
date:        Alexander Brevig &lt;alexanderbrevig@gmail.com&gt;
date:        Tue Feb 14 12:49:07 2012 +0100
summary:     merge with change_some_text

changeset:   5:de632a6d32f1
parent:      3:3fb4fccd0bf6
date:        Alexander Brevig &lt;alexanderbrevig@gmail.com&gt;
date:        Tue Feb 14 12:48:44 2012 +0100
summary:     even more text

changeset:   4:e95ac861d415
branch:      change_some_text
date:        Alexander Brevig &lt;alexanderbrevig@gmail.com&gt;
date:        Tue Feb 14 12:47:41 2012 +0100
summary:     some other text

changeset:   3:3fb4fccd0bf6
parent:      1:2fe7608e6738
parent:      2:d7bd27dc951e
date:        Alexander Brevig &lt;alexanderbrevig@gmail.com&gt;
date:        Tue Feb 14 12:28:46 2012 +0100
summary:     merge with some_more_text

changeset:   2:d7bd27dc951e
branch:      some_more_text
date:        Alexander Brevig &lt;alexanderbrevig@gmail.com&gt;
date:        Tue Feb 14 12:15:54 2012 +0100
summary:     add some more text in some_more_text branch

changeset:   1:2fe7608e6738
date:        Alexander Brevig &lt;alexanderbrevig@gmail.com&gt;
date:        Tue Feb 14 12:14:14 2012 +0100
summary:     change contents of file.txt

changeset:   0:6d1abbe729c2
date:        Alexander Brevig &lt;alexanderbrevig@gmail.com&gt;
date:        Tue Feb 14 12:11:53 2012 +0100
summary:     initial commit of file
</code></pre>