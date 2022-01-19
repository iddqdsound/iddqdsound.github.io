---
tags:
  - REAPER Tracks
  - Mixing Tips & Workflow Improvements in REAPER
  - Hotkeys & Mouse Modifiers in REAPER
date: 2021-03-26
youtube: uprTMzSOL20
related-posts:
  - /blog/rfrt/75
---

## 25+ Hotkeys for Track Controls (Rapid-Fire REAPER tutorials Ep68)

![](/blog/rfrt/68/10.jpg)

Hey folks!  
 [In this episode](https://youtu.be/uprTMzSOL20) we will look at some hotkeys to control your tracks easily, and more importantly, without having to resize your tracks to take up a third of your screen! Here's the list of all the hotkeys discussed in the video:

![](/blog/rfrt/68/11.png)

**Track Controls**
It's understandable why REAPER doesn't have a lot of default track control hotkeys. The hotkeys are incredibly intuitive: Select any track or tracks, and click on any of the controls (Mute, Solo, Record Arm, Pan, Fader) and you can adjust those controls. However, having hotkeys is scientifically proven to make you look cool, and also, setting track control hotkeys allows me to resize my TCP to take up less of my screen real estate, which as we discussed in [Episode 67, is important](https://youtu.be/aqGtXK1EN0o)!  
 Other track controls are tucked away in the right-click menus, and some of them I want a hotkey for, and hopefully you do too, otherwise, I guess I'm just gonna look like a nitpicker!

Some extra Hotkeys that you can't change (AFAIK):  
On any Solo button(s)  
Cmd+Opt+Left Click - Exclusive Solo Track(s) - This will Unsolo everything else.  
Opt+Left Click - Solo (Ignoring routing) - Normally (Based on Prefs) soloing a track will not mute its sends. With this, you will.  
Cmd+Left Click - Unsolo All - Every Solo button will be off  
Cmd+Shift+Left Click - Solo Defeat - Places a lock on track(s) meaning that track can't be soloed and won't be muted if other tracks are soloed. Good to use in Video tracks, or on certain types of Sends & Bus Compressors.

On any Mute button(s)  
Cmd+Left Click - Unmute all - every mute button will be off.  
Cmd+Opt+Left Click - Exclusive Mute - Every mute but the select track(s) will be off.  
Opt+Left Click - Mute all others - Every track but selected track(s) will be muted. Essentially solos selected tracks (routing exceptions apply, but so defeated tracks will be muted too)

**Selecting Tracks**
REAPER's default hotkeys to navigate through and select tracks are not very useful to me, because there's already a native system built-in to almost any program on earth to select a bunch of things. Click to select any one track. Hold Command and you can add any other track to that selection. Click on any one track, Hold Shift, and click on any other track to select all the tracks between these two tracks. From there you can still hold command to add other tracks to selection, or command and shift to add a range of tracks to your selection!

**Cycle Actions**
The three cycle actions I mentioned here have all been covered in my early videos on [freezing](https://youtu.be/SwbcLZDccB0), and [Quick mixing](https://youtu.be/y2fQYIWtaTY) tracks. I didn't use to write these blog posts so here's why I do them this way:

**Freeze to Mono & Stereo:** One thing I don't like when I freeze a track in REAPER, is that I get no visual indication from a quick glance that the track is frozen. It just looks like a regular track with locked items on it. I fixed this by creating two cycle actions, one for mono and stereo each:

-Track: Freeze to mono/stereo  
-Resources - set track icon for selected tracks, slot 1  
---Step---  
-Track: Remove track icon  
-Track: Unfreeze tracks

I downloaded a snowflake icon from the REAPER Stash, and added it to [SWS Resources (I have previously shown how here](https://youtu.be/4SPfUPKZ4fE)) and this way I have a cool hotkey to use, and the track icon lets me know at a quick glance, which tracks are frozen!

**Quick Mix Selected Tracks:** With big projects that have tons of tracks on them, your Mixer can get quite hard to navigate through. I created this cycle action that allows me to select a bunch of items, and my MCP will be expanded to show only those tracks with the items I selected. Hitting the cycle action again takes me to my usual screenset and takes my MCP back to normal! Watch this video for more detail!

**Deprecated SWS Actions**
One of the hotkeys I showed you in this video (Insert multiple tracks) is a deprecated SWS actions. These actions are not always necessarily impossible to use, but they are either rendered obsolete by REAPER updates, or some of their functionality no longer works. This one for example is deprecated because you can no longer select inputs but everything else about it works!

**Archive & UnArchive Tracks**
I took both of these actions from the [SWS Manual](https://www.sws-extension.org/download/REAPERPlusSWS171.pdf). Page 44-46. I'm gonna make you go get the manual for this because it's full of useful info. You're welcome!

**Nudge Pan Action**
There are default actions that allow you Nudge any track pan, but they only nudge it 1 percent. I simply chained together 10 of these to create **Nudge track Pan 10x Left/Right** and I can quickly move my pan knobs for one or many tracks at the same time!

**Conclusion**
I won't lie, not everybody will find it worthwhile to set all these hotkeys but hopefully some of you may. I amassed all of these over time, and maybe a few of them will give you some ideas you want to implement. Another reason I have some of these like Shift+M/S/I/R is that Pro Tools had them, or I use Command+Shift+D to create parent tracks cuz Logic Pro X had that, so some of these are engrained in my muscle memory and I find it convenient to do in Pro Tools! Let me know in the comments if any of these Hotkey videos I've been doing is giving you something or not!

Here's the video:

<youtube id="uprTMzSOL20"></youtube>

If you like the work I do, [you can donate to me here](http://www.buymeacoffee.com/iddqdsound)! Every little helps, so even if you send a dollar or two my way, I’ll be eternally grateful to you!

**My Reaper Stash:** <https://stash.reaper.fm/u/IDDQDSound>

**Follow me on Instagram:** <https://www.instagram.com/iddqdmusic/>

**My Music:** [**https://Soundcloud.com/iddqdmusic**](https://soundcloud.com/iddqdmusic)

[ ](https://soundcloud.com/iddqdmusic) [**https://iddqdmusic.bandcamp.com**](https://iddqdmusic.bandcamp.com/)