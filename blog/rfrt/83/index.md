---
tags:
  - Custom Actions, Cycle Actions & Scripts in REAPER 
  - Video Editing in REAPER
  - Let’s Learn Scripting in REAPER!
date: 2021-07-22
youtube: G-uMXYFy4Xc
related-posts:
  - /blog/misc/1
  - /blog/lls/1
---

## Separate audio from a video item with one action! (Rapid fire REAPER Tutorials Ep83)

![](/blog/rfrt/83/114.jpg)

Hey folks!  
 This episode is about another Frequently Asked Questions I see on the forums: How do I separate the audio tracks from my video item?

REAPER is awesome in that it lets us import all kinds of different media and lets them mix and mingle on the same track. While most other DAWs have a dedicated Video track, REAPER just lets you put video item anywhere and in any quantity, which is awesome. The downside is, what if you want to re-design the sound for a video? What if you did a bunch of recordings and filmed it and now you don't want the sound from your camera's built-in mic.

If you mute a track with a video item on it, you lose the video too. So for all these reasons, you may want to split your file into a video and an audio item. I'll show you how to do that first, before I show you my custom action that makes the whole thing faster.

First let's look at ways of just stripping the audio track from a video item

**Method 1: Disabling Master Parent Send:** One way to not hear the audio but still see the video is to make a track dedicated to your videos on your project and simply disable its master parent send. Audio won't get to the master track, but the video will still make it there. This method is easy and quick. the downside is, you haven't actually disabled the audio. At the very least, REAPER is using a non-zero amount of resources to have a meter for the track work in real-time. By the same vain, you can also just bring the fader all the way to zero.

**Method 2: Ignore Audio:** This is a great option but it's quite well hidden and few people know about it. For starters, there's no action for it in the action list, no sign of it in the right click menus, and it is also, literally hidden two menus deep from your item.  
 You would need to go to item properties, and then from there look for the submenu 'Properties...' and open that. Yes! It's the properties for the media item properties. Somewhere in 2003 there's an Xzibit meme on this type of thing!

Alternatively you can just press **Cmd+F2** to open the elusive source media properties, and there you can tick the box called 'ignore audio'.

![](/blog/rfrt/83/115.png)

This is great, because by ignoring the audio, you are allocating no resources to it, and also the look of your item changes into a block which is good to try and identify video tracks. The downside is that, as if it wasn't hidden enough, this method can't be done via an action, can't be scripted for (AFAIK) and it's also not undoable, meaning that you can't press Cmd+Z and get your audio back once you do this. You need to open this window again and do it again. Still, it's probably the best way to do it if you are working with a single video and you do this one per project!

**Separating Audio from a video track**

Other times, you may want to separate audio and video but keep both, for example, you may be scoring a film. You would need the video visible all the time, the video also comes with some dialogue, maybe even temp music, so you don't want to toss it out, but you still need the option to mute it sometimes and you don't want the video to go away either.

So in this case there's a simple solution: Gluing.

-Duplicate the video item to a track below it.  
-Use one of the methods above to remove audio from the original.  
-Take the duplicate and glue it (Right click and select glue item, or press **cmd+shift+G**)

Done! REAPER can't glue video so if you take any video item and glue it, it'll be bounced as a wav file in your project sample rate. You'll end up with one video track and one audio track! From here, lock the items in post-production after syncing to timecode, or if you're editing videos, just group the items.

![](/blog/rfrt/83/116.png)

_Notice in this image that the grey video item is in .m4v and the purple audio item is in .wav_

So cool, it's simple enough, but still it's a few steps and a number of clicks. Let's get it down to a single click using a simple ReaScript:

**IDDQD_Separate Audio from Video Item**

My action simply does all the above in a single action. You can download this script by copying the link below to your ReaPack. Go to Extensions>Import Repositories and paste this link:

<https://github.com/iddqdsound/reaper/raw/master/index.xml> Next go to Extensions>Browse Packages and search for iddqd. You can then select some or all of my actions to install!  
I am still a beginner in scripting but this one is quite easy to do and hasn't been done before so yay!

One thing that makes scripting in REAPER relatively easy is the ability to add any action to your script at any time using the 'Main*OnCommand' function.  
EEL2: Main_OnCommand(\_int* command, _int_ flag)

There are a number of \_OnCommand functions. What comes before the underline denotes which section of the action list we want to run actions from (Main, MIDI Editor, Media Explorer, etc.).

Following that, we provide two argument, the first is the command ID for any action and then it's the flag. I have only seen flag be set to 0 in every script I've seen this function in, and I haven't been able to find anything in the API about what it actually is. Watch the [ReaScripting tutorials series](https://www.youtube.com/watch?v=p8V_rZkOTKc&list=PLjvmrOUg3J0rlHO9Clbo9WLxeN9BsSPlj) or any of our [Tuesday Scripting Livestreams for more info on this](https://youtu.be/YfTVXn730DQ). I'll ask my guru Leandro in the next stream!

So this basically allows us to run any number of native or SWS actions anywhere in our script which is super powerful and sometimes can easily eliminate hours of coding!

_Note: You can find the command ID for any command by highlighting any action, right-clicking and choosing 'Copy selected action command ID'. This only works for Native & SWS actions. For other custom scripts, there's another function which we will get to at some point soon!_

So basically, I started my script by making the custom action below:

![](/blog/rfrt/83/117.png)

This gets me 90% of the way there as far as doing all the stuff I would do manually when I separate audio from video.

Next, you can simply look each of these actions up in the action list, and copy their command ID to a script to provide as an argument to a new Main_OnCommand function!  
...  
...  
...  
Just kidding! That would take a million years! Luckily there's another godsend script to help us do this: Script: Lokasenna_Generate script from custom action.lua

You can download this also from ReaPack, and this script will generate a script from any custom action. Simply copy command ID of your custom action, paste it on the Lokasenna script, and bob's your uncle! You'll get a script with all of that in there! Awesome!

![](/blog/rfrt/83/118.png)

The script gets us 90% of the way there, but the keen observers among you will have noticed that we still haven't done all of the stuff from above.

Once I had my custom action, I made some modifications. First of all, I thought not to disable master parent send, cuz maybe users will have video on a track housing other items, and then they may get confused as to why they don't get audio out of it suddenly!

I also decided against grouping or locking them, because well, let's leave that up to the user! From there I literally wrote two lines of code:

VideoItem = reaper.GetSelectedMediaItem(0,0)  
reaper.SetMediaItemInfo_Value(VideoItem,"D_VOL',0)

and that's it! The rest comes from Lokasenna's action!  
We've explained the first line in [Episode 2 of our scripting tutorial series](https://youtu.be/hgx0btZuAas), and the function after that is used when setting values for an item mute, lock, volume, pan, width, etc. One of the more complex functions in REAPER. The API says:

**EEL2:** _**bool**_ **SetMediaItemInfo_Value(** _**MediaItem**_ **item, "parmname", newvalue)**  
Set media item numerical-value attributes.

B_MUTE : bool \* : muted (item solo overrides). setting this value will clear C_MUTE_SOLO.

B_MUTE_ACTUAL : bool \* : muted (ignores solo). setting this value will not affect C_MUTE_SOLO.

C_MUTE_SOLO : char \* : solo override (-1=soloed, 0=no override, 1=unsoloed). note that this API does not automatically unsolo other items when soloing (nor clear the unsolos when clearing the last soloed item), it must be done by the caller via action or via this API.

B_LOOPSRC : bool \* : loop source

B_ALLTAKESPLAY : bool \* : all takes play

B_UISEL : bool \* : selected in arrange view

C_BEATATTACHMODE : char \* : item timebase, -1=track or project default, 1=beats (position, length, rate), 2=beats (position only). for auto-stretch timebase: C_BEATATTACHMODE=1, C_AUTOSTRETCH=1

C_AUTOSTRETCH: : char \* : auto-stretch at project tempo changes, 1=enabled, requires C_BEATATTACHMODE=1

C_LOCK : char \* : locked, &1=locked

**D_VOL : double \* : item volume, 0=-inf, 0.5=-6dB, 1=+0dB, 2=+6dB, etc**

D_POSITION : double \* : item position in seconds

D_LENGTH : double \* : item length in seconds

D_SNAPOFFSET : double \* : item snap offset in seconds

D_FADEINLEN : double \* : item manual fadein length in seconds

D_FADEOUTLEN : double \* : item manual fadeout length in seconds

D_FADEINDIR : double \* : item fadein curvature, -1..1

D_FADEOUTDIR : double \* : item fadeout curvature, -1..1

D_FADEINLEN_AUTO : double \* : item auto-fadein length in seconds, -1=no auto-fadein

D_FADEOUTLEN_AUTO : double \* : item auto-fadeout length in seconds, -1=no auto-fadeout

C_FADEINSHAPE : int \* : fadein shape, 0..6, 0=linear

C_FADEOUTSHAPE : int \* : fadeout shape, 0..6, 0=linear

I_GROUPID : int \* : group ID, 0=no group

I_LASTY : int \* : Y-position of track in pixels (read-only)

I_LASTH : int \* : height in track in pixels (read-only)

I_CUSTOMCOLOR : int \* : custom color, OS dependent color|0x100000 (i.e. ColorToNative(r,g,b)|0x100000). If you do not |0x100000, then it will not be used, but will store the color

I_CURTAKE : int \* : active take number

IP_ITEMNUMBER : int, item number on this track (read-only, returns the item number directly)

F_FREEMODE_Y : float \* : free item positioning Y-position, 0=top of track, 1=bottom of track (will never be 1)

F_FREEMODE_H : float \* : free item positioning height, 0=no height, 1=full height of track (will never be 0)

Only the two bold lines are relevant to us, so we can see that our little bit of code will simply select "D_VOL" to specify we're setting the item volume, and gives it a value of 0 which stands for -inf. That's it!

The command will now separate our audio from a video item, and turn down the video to -inf.

![](/blog/rfrt/83/119.gif)

**Conclusion**

I am perhaps 5% fluent in sripting for REAPER, and already it has truly enriched my life, and honestly it's not that hard. It's my current life mission to get more people to look under the hood of REAPER, and the more you dig the more you see beauty and intricacy everywhere, and you will find new better ways of doing clerical tasks and saving time! And now thanks to scripting, I can quite easily share my actions with all of you too! Exciting times!

Here's the video:

<youtube id="G-uMXYFy4Xc"></youtube>

![](/blog/rfrt/83/8.png)

If you like the work I do, [you can donate to me here](http://www.buymeacoffee.com/iddqdsound)! Every little helps, so even if you send a dollar or two my way, I’ll be eternally grateful to you!

**My Reaper Stash:** <https://stash.reaper.fm/u/IDDQDSound>  
**My Reaper Repository:** <https://github.com/iddqdsound/reaper/raw/main/index.xml>

**Follow me on Instagram:** <https://www.instagram.com/iddqdmusic/>

**My Music:** [**https://Soundcloud.com/iddqdmusic**](https://soundcloud.com/iddqdmusic)

[ ](https://soundcloud.com/iddqdmusic) [**https://iddqdmusic.bandcamp.com**](https://iddqdmusic.bandcamp.com/)

