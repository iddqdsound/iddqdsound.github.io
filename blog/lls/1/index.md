---
tags:
  - Let's Learn Scripting in REAPER
date: 2022-01-17

related-posts:
  - /blog/lls/2/
---

## Let's Learn Scripting in REAPER: Ep00 & Ep01 Notes

![](/blog/lls/1/82.png)

Hey folks!

Very excited to be getting into ReaScripts in this brand-new series. Just to clarify something outright, I am an Absolute n00b of scripting in REAPER. I know Max/MSP, an object-based audio programming language, and a basic amount of Python, but I consider myself an absolute beginner. I will NOT be teaching this series. I'll be the student, and I'll try to embark on this journey to learn to code, and every month, bring to you all the stuff I learned in condensed form. I will pour through resources, get help from the pros in the field (like this episode's Guest Leandro Facchinetti) and hopefully through my trails, failures and tribulations, you will learn a few things as well!

You, my viewers, in turn, will be my motivation. I have tried to learn scripting with varying degrees of success in the past, but I always got distracted midway and didn't keep going. By promising you to work on my scripting monthly, I will hopefully get a boost of motivation when I inevitably get lazy or start facing hurdles as we get into more pro territory!

With the caveat out of the way, let's begin the series with an overview. On the first Monday of Every month, I will release a new episode, and document some of the stuff I learned. Every video will come with a blog post, where I will post additional info cut for time, links to external resources and tutorials, and feature guest coders to go over everything from the basic to more advanced stuff.

Here's Episode 00:

<youtube id="be.com/playlist?list=PLjvmrOUg3J0qUO8LLIbJTYD7j0l9VUsJ3"></youtube>

**What are ReaScripts and what are their benefits?**

ReaScripts come in two forms:  
**Custom scripts:** These are bits of code that we import into REAPER as an action. They work like any other action. They can be assigned to a hotkey, or put on a toolbar, or ran from the Action list.  
**JSFX:** These are custom plug-ins that can process Audio/MIDI/Video in real-time\*

_\*videos can't be ingested in real-time by REAPER, but Video processors process video on your timeline as you play. So it's not exactly real-time in that case._

In both case, there are already thousands of scripts that you can download from the REAPER stash, or using ReaPack. Most are donation-ware, so you can download them from free, but make sure to donate to the creators who make your life easier!

**Benefits of Custom Scripts:**

Custom scripts are easier to distribute than custom actions between users. Sometimes when you lovely folks download my custom actions from the [Rapid-Fire REAPER tutorials](https://www.youtube.com/playlist?list=PLjvmrOUg3J0qUO8LLIbJTYD7j0l9VUsJ3), I've received emails that they didn't work, because the viewer didn't have SWS installed or even specific custom scripts I may have used in my custom actions. With a custom script, everything they need to run the action is in the code.

They are also more customizable. The range of what you can do with custom actions is still limited, especially if your custom actions requires some steps in the middle of the process to get any kind of input or selection from the user.

**Choice of programming languages:** You can write scripts for REAPER with 4 languages. Below are the pros and cons of each one. Also check out the [REAPER documentation on these here](https://www.reaper.fm/sdk/reascript/reascript.php).

**1. EEL2:** An open-source programming language designed by [Cockos.](http://Cockos.It)  
✓Easy to learn   
✓JSFX and Video Processors are written in EEL2  
✓Basic UI (User Interface) Design features  
✓Comes standard with REAPER and requires no additional installs  
✗ Relative to the other languages, very little study materials available

Admiral Bumblebee is one of the best educators for EEL2. [I highly recommend exploring his website](https://www.admiralbumblebee.com/), and we will do it together in the future.

**2. Lua:** Popular language used by many video games, adobe products, OBS. This is the language we will begin with in this series. Most custom scripts are written in Lua.  
✓Simple yet powerful language  
✓Code-Assembly\* is easy with lua   
✓Lots of resources available  
✓Can bridge other programs with REAPER  
✓Comes standard with REAPER and requires no additional installs✗ Only very basic UI Design

_\*Using the REAPER API, we can assemble codes we want to script with, rather than having to write much base-level code._

**3. Python:** The most popular of the languages we have so far. Python doesn't come installed with REAPER, but does come with a huge code library of amazing functionality not possible using EEL2/LUA, including Machine learning AI features!  
✓Lots of resources available  
✓Rich Code library full of very advanced functions  
✗ Requires additional installs & set-up to write and distribute

**4. C/C++:** Scripts with this language work a bit differently than the rest. Even their documentation is in a [different place on the REAPER website](https://www.reaper.fm/sdk/plugin/plugin.php).  
✓The most powerful and advanced of all (SWS [scripts are in C++](https://github.com/reaper-oss/sws))  
✓Lots of resources available  
✓Rich Code library full of very advanced functions  
✗ More difficult to debug  
✗ Not very suitable for beginners to scripting.

**The REAPER API**
The [REAPER API](https://www.reaper.fm/sdk/reascript/reascripthelp.html) (Advanced programming interface) is a searchable database of functions for ReaScripts. It can be accessed from REAPER by clicking on API Help in the ReaScript Development Window.

![](/blog/lls/1/83.jpg)

_To access this window go to Window>ReaScript Documentation_

This is where you find bits of code that you can assemble into your scripts, not unlike what we do with custom actions.

Here's Episode 01:

<youtube id="be.com/playlist?list=PLjvmrOUg3J0qUO8LLIbJTYD7j0l9VUsJ3"></youtube>

**API/ReaScript Development Window Tips**

The ReaScript Development Window can be accessed for any custom script you may have downloaded. Simply highlight the script, choose **Edit Action** and the window will open revealing the code, which you can study.

Hovering the mouse over any of the functions (color-coded in Yellow) will reveal additional information on the function. Pressing F1 will open the documentation for that action in the API.

Pressing **Cmd+K (Ctrl+K for PC)** will reveal all the arguments and outputs for functions in the blue pane at the bottom of the window.

**Cmd+Mousewheel (Ctrl+Mousewheel for PC)** Will zoom in and out, resizing the font.

**leafac_iddqd_Search REAPER Mania tutorial**

For the [50th episode of Rapid-Fire REAPER Tutorials](https://www.youtube.com/watch?v=y6_r9SQKUHA), we created an action to look up a Kenny Gioia tutorial. Watch that video for more on that. That action pretty much just open Kenny Gioia's page. This custom script opens a dialog box right in REAPER, where you can search for any video. In Episode 1 we showed you how to modify it to perform any internet search right from REAPER, which is pretty powerful if you ask me.

You can download the action from [Leandro's Github](https://github.com/leafac). Simply copy this link, and go to Extensions>Reapack>Import [Repositories... https://github.com/leafac/reaper/raw/master/index.xml ](https://github.com/leafac/reaper/raw/master/index.xml)Paste the link there, hit okay and then you can go to Extensions>Reapack>Browse Packages, and search for leafac. Select all and right click>Install.

**Resources:**

<li id="viewer-8j373" class="\_1atvN \_2TTR5 \_1BJwx public-DraftStyleDefault-unorderedListItem public-DraftStyleDefault-depth1 public-DraftStyleDefault-list-ltr public-DraftStyleDefault-reset \_2QAo- \_25MYV \_2WrB- \_1atvN">

**Beginners**

<li id="viewer-82e6v" class="\_1atvN \_2TTR5 \_1BJwx public-DraftStyleDefault-unorderedListItem public-DraftStyleDefault-depth2 public-DraftStyleDefault-list-ltr public-DraftStyleDefault-reset \_2QAo- \_25MYV \_2WrB- \_1atvN">

Leandro Facchinetti’s channel: <https://www.youtube.com/channel/UC_R-6HcHW5V9_FlZe30tnGA> / <https://github.com/leafac/reaper>  
Leandro creates REAPER scripts under the name leafac, livestreams many weekly coding sessions, and does a lot of tutorials on scripting and other REAPER goodies!

<li id="viewer-3na8q" class="\_1atvN \_2TTR5 \_1BJwx public-DraftStyleDefault-unorderedListItem public-DraftStyleDefault-depth2 public-DraftStyleDefault-list-ltr \_2QAo- \_25MYV \_2WrB- \_1atvN">

ReaTeam ReaScripts Templates: <https://github.com/ReaTeam/ReaScripts-Templates>  
A collection of template scripts from ReaTeam, each with very thoroughly-explained documentation.

<li id="viewer-dpds4" class="\_1atvN \_2TTR5 \_1BJwx public-DraftStyleDefault-unorderedListItem public-DraftStyleDefault-depth2 public-DraftStyleDefault-list-ltr \_2QAo- \_25MYV \_2WrB- \_1atvN">

X-Raym: <https://www.extremraym.com/>  
X-Raym makes some of the best scripts for REAPER, and is one of the best educators of lua scripting for REAPER as well. Check out the next link for an awesome tutorial series for lua. It's in French but with great English subtitles and a great course overall!

<li id="viewer-ap7dg" class="\_1atvN \_2TTR5 \_1BJwx public-DraftStyleDefault-unorderedListItem public-DraftStyleDefault-depth2 public-DraftStyleDefault-list-ltr \_2QAo- \_25MYV \_2WrB- \_1atvN">

X-Raym Video tutorials: <https://www.youtube.com/watch?v=0Dwonn3Pe2Q&list=PL7M70tQL6s1IOYycGilaHLs5G4vOcyLF8>

<li id="viewer-6h348" class="\_1atvN \_2TTR5 \_1BJwx public-DraftStyleDefault-unorderedListItem public-DraftStyleDefault-depth1 public-DraftStyleDefault-list-ltr \_2QAo- \_25MYV \_2WrB- \_1atvN">

**Programmers**

<li id="viewer-5q017" class="\_1atvN \_2TTR5 \_1BJwx public-DraftStyleDefault-unorderedListItem public-DraftStyleDefault-depth2 public-DraftStyleDefault-list-ltr public-DraftStyleDefault-reset \_2QAo- \_25MYV \_2WrB- \_1atvN">

Learn X in Y minutes (Where X=Lua): [https://learnxinyminutes.com/docs/lua/ This](https://learnxinyminutes.com/docs/lua/) series is more geared towards advanced coders, who may be fluent in other programming languages, and gives them a 2-3 hour crash course! For beginners this may be a bit heavy but if you are feeling adventurous, give it a go!

<li id="viewer-abcr3" class="\_1atvN \_2TTR5 \_1BJwx public-DraftStyleDefault-unorderedListItem public-DraftStyleDefault-depth2 public-DraftStyleDefault-list-ltr \_2QAo- \_25MYV \_2WrB- \_1atvN">

Programming in Lua: <https://www.lua.org/pil/>  
This is obviously a wonderful and comprehensive resource for Lua in general, which covers more than just REAPER-based scripts, but also, it's very long and quite hard to self-teach (at least for me!) but as far as textbooks go, this is THE book on lua.

<li id="viewer-471kq" class="\_1atvN \_2TTR5 \_1BJwx public-DraftStyleDefault-unorderedListItem public-DraftStyleDefault-depth0 public-DraftStyleDefault-list-ltr public-DraftStyleDefault-reset \_2QAo- \_25MYV \_2WrB- \_1atvN">

**Downloads**

<li id="viewer-c4feq" class="\_1atvN \_2TTR5 \_1BJwx public-DraftStyleDefault-unorderedListItem public-DraftStyleDefault-depth2 public-DraftStyleDefault-list-ltr public-DraftStyleDefault-reset \_2QAo- \_25MYV \_2WrB- \_1atvN">

Leandro's Repository: <https://github.com/leafac>  
Download Leandros' awesome actions here!

<li id="viewer-ihng" class="\_1atvN \_2TTR5 \_1BJwx public-DraftStyleDefault-unorderedListItem public-DraftStyleDefault-depth0 public-DraftStyleDefault-list-ltr \_2QAo- \_25MYV \_2WrB- \_1atvN">

**More videos**

<li id="viewer-r414" class="\_1atvN \_2TTR5 \_1BJwx public-DraftStyleDefault-unorderedListItem public-DraftStyleDefault-depth2 public-DraftStyleDefault-list-ltr public-DraftStyleDefault-reset \_2QAo- \_25MYV \_2WrB- \_1atvN">

Our Livestream Coding session: <https://www.youtube.com/watch?v=y6f2nqiVSrk>  
Watch how Leandro coded the Search script

