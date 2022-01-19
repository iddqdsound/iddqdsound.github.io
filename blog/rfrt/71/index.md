---
tags:
  - Answering Community Questions 
  - Templates in REAPER
  - Mixing Tips & Workflow Improvements in REAPER
  - REAPER Hacks & Workarounds
date: 2021-04-27
youtube: g4-fceuW_Zo
related-posts:
  - /blog/rfrt/73
---

## Controlling your Sends Using track Faders (Rapid-fire REAPER Tutorials Ep71)

![](/blog/rfrt/71/28.jpg)

Hey folks! [In this episode](https://youtu.be/g4-fceuW_Zo) I'll try to answer a pretty commonly asked question on REAPER forums and groups, which frankly has never been a big issue for me, but hey I don't judge. A lot of people, especially ex-Pro Tools users, seem not to like REAPER's way of adjusting sends and receives via the I/O Routing window, and would like to have track fader controls instead. I'll go over two alternatives approaches for dealing with send levels to I/O.

**How Pro Tools Handles Sends Mixing**
One Pro Tools feature I really used to enjoy was the ability to create mini-mixers on the fly that allowed you to have all your sends and relevant plugins in view, and save and recall them using Pro Tools configurations ([I made a video about this ](https://www.youtube.com/watch?v=UmAtNS8jC5c)when I was making Pro Tools tutorials).

![](/blog/rfrt/71/29.png)

_A drum buss compressor send including all its receives and plugin window in Pro Tools!_

To set up something like this in REAPER takes a bit of work, but once you do that work you can obviously save it as a track template and recall whenever you want. Of course you can also just open the I/O routing window of any receive track and you'll have faders there, but some people don't like this for some reason. So here are some alternatives:

**mpl_sendfader Script**

Legendary scripter mpl has [sendfader](https://forum.cockos.com/showthread.php?t=187138), a series of scripts with a slick GUI designed to make controlling sends quite easy. Simply run the script, and you will get a small dockable window. From there, clicking on any track will show you sends for that track, and all the controls you'd need, including a fader, pan knob, Pre/post toggle, etc. You can also assign MIDI/OSC controllers to control the active send volume, which is handy. The issue with this is that it only shows you one send for the top selected track, not super useful for something like creating a mini mixer to control all your reverb sends in one window.

**Showing Sends in Mixer and TCP**

Of course, another option is to show your sends in TCP by running the action 'Options: Show sends in TCP (when size permits)' which gives you your sends as small icons with a small knob in your TCP, or you can right click on any track in MCP and tick the option to 'Show sends (when size permits' to get the same set up in your MCP. Again, this is fine if you ask me, but you still won't be able to see values at a glance. I think this is the main issue most folks have, they want precise control over send values, and they want to view them as faders. I think a very simple solution to this is right in front of our eyes, being overlooked!

![](/blog/rfrt/71/30.png)

_Left: Sends showing in Mixer Control Panel. Right: Sends shown in Track Control Panel_

**There's a simple solution!**

If you want sends to fully have the appearance and functions of a track's fader, then make a track! This approach takes longer to set up but could be attractive for a few reasons: Big faders, ability to use the same set of hotkeys and controller assignments for sends as track (Soloing, Muting, Panning) and enjoying perks like ability to show and hide them, select them from ReaConsole, and so on.

Here's how it would work:  
-Create a track and put some FX on it (Reverb, compressor, etc.)  
-Normally you should select all the tracks you want to parallel process, hold Shift and drag from their routing icon to the routing icon of the track you just created. Instead, we're gonna create additional tracks below our FX track, make them children that track, and then route each element to these children tracks.  
-Each send can be named and coloured according to the track it's receiving from. (Custom action for that below) Pre-fader sends are a good idea here, so you have independent control of the reverb from the original fader positions.

![](/blog/rfrt/71/31.png)

_Drum group: Tracks 8-14 house the audio. Tracks 17-23 are named and coloured identically to the tracks, each with a send from their corresponding track._

-(Optional) Hide these tracks from the arrange view, and you will only see them in the mixer, where you can use the faders to adjust how much each track sends to the FX track.

-(Optional) make your faders full size on the send shells to give them visual differentiation from the other tracks.

![](/blog/rfrt/71/32.png)

_Tracks 17-23 aren't shown in the arrange view, but opening the mixer will display them, and full-sized faders help us visually distinguish them from the original audio tracks!_

**Custom Action: Create Send Shells**

**-**Track: Duplicate tracks  
SWS: Delete all items on selected tracks  
SWS/S&M: Bypass all FX for selected tracks  
Script: mpl_Delete bypassed fx from selected tracks  
SWS/S&M: Remove sends from selected tracks  
SWS/S&M: Remove receives from selected tracks  
Script: Archie_Track; Set volume selected tracks to -6.0dB

![](/blog/rfrt/71/33.png)

After selecting the tracks you want to send from and running this action, you'll get empty tracks that are named and colored the same, but have no sends, fx or items on them. I also set their volume to -6 as a starting point.

You can download the custom action below. _BE WARNED that if you don't have all the scripts above, it won't work for you! So download those from ReaPack and have SWS installed._

[IDDQD Sound_Create Send Shells for Selected Tracks](/blog/rfrt/71/IDDQDSound_Create-send-shells.lua.zip)

If you need instructions on how to download and import custom actions, [watch this video](https://www.youtube.com/watch?v=LGkB9EOn3sE)!

**Routing Matrix**

The routing matrix makes quick work of creating individual sends from each track to send shells.

![](/blog/rfrt/71/34.png)

**Conclusion**
I dunno why people don't like the I/O Routing window, or if this is really that much better, or if all the work required to set it up is worth it, but I actually do like this for some applications better than I/O Routing. Could also be a great way to let musicians mix their own headphone mixes, and can be handy for certain types of parallel processing. Also having access to a full fader, allows you to fine-tune your adjustments, which is also not bad.

I also hope that mpl would update his script to allow the viewing of multiple selected tracks, cuz other than that I find the mpl send fader script to be quite amazing!

Here's the video:

<youtube id="g4-fceuW_Zo"></youtube>

[![](/blog/rfrt/71/8.png)](https://www.buymeacoffee.com/iddqdsound)

If you like the work I do, [you can donate to me here](http://www.buymeacoffee.com/iddqdsound)! Every little helps, so even if you send a dollar or two my way, I’ll be eternally grateful to you!

**My Reaper Stash:** <https://stash.reaper.fm/u/IDDQDSound>

**Follow me on Instagram:** [**www.instagram.com/iddqdmusic**](https://www.instagram.com/iddqdmusic/)

**My Music:** [**https://Soundcloud.com/iddqdmusic**](https://soundcloud.com/iddqdmusic)

[ ](https://soundcloud.com/iddqdmusic) [**https://iddqdmusic.bandcamp.com**](https://iddqdmusic.bandcamp.com/)

