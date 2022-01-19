---
tags:
  - Advanced REAPER Tutorials 
  - Recreating Ableton Live features in REAPER
date: 2021-06-25
youtube: FWhJqK2XKW0
related-posts:
  - /blog/rfrt/99
---

## How to Route Audio & MIDI Between Any two DAWs & Sync them! (Rapid-fire REAPER Tutorials Ep80/81)

![](/blog/rfrt/80/66.jpg)

Hey folks!

[Today we're looking at my alternative to ReWire](https://youtu.be/FWhJqK2XKW0) for Routing Audio/MIDI between REAPER and other DAWs. [ReWire, as we saw last episode](https://www.youtube.com/watch?v=9wpndk1v75Q), is quick and easy but unfortunately it's no longer supported, and while someone showed me a way to enable it for Ableton 11, it's still something we're gonna have to learn to live without, so we might as well get to it!

The alternative(s) I'm gonna show you today take longer to setup, but they work for any DAW, not just ReWire-compatible ones, and both the audio and MIDI parts of it work both ways, and even for more than 2 DAWs and applications. If you ever wondered how to use Logic Pro X Scripter to output MIDI to Ableton, capture it in REAPER all while streaming to OBS, this video will give you all the tools to do that!

**Downloads**

For this set-up we need a **Virtual MIDI Bus** and a **Virtual Audio Interface.** Mac users only need the latter because Apple has the built-in **IAC Driver** for MIDI routing, while PC users only the need the former, as their install of REAPER comes with [ReaRoute](https://www.soundonsound.com/techniques/route-master), which takes care of the Audio Routing.

**Mac Set-up**
**MIDI:**
**-**From Spotlight, go to **Audio MIDI Setup.**

![](/blog/rfrt/80/67.png)

**-**Go to **Window>Show MIDI Studio** or press **Cmd+2**.

-You will see all your MIDI devices here, and a red Icon (that may be greyed out) named **IAC Driver**. Double-Click in and the new window, make sure that **Device is Online** is ticked.

-(Optional) Create additional MIDI Busses in the new window by clicking on the **+** sign.

![](/blog/rfrt/80/68.png)

I like to create one bus per DAW that I want to send MIDI out from, but you can make as many as you need and name them!

-in REAPER, go to **Preferences>Audio>MIDI Devices** and in the output section, locate your MIDI bus, right click and select **Enable Output.**

-in your Destination DAW, go to where you would normally assign MIDI devices and find the same MIDI bus, this time enabling it only as an input.

**Audio:**  
-Download [Soundflower](https://soundflower.en.softonic.com/mac) or a similar Virtual Audio Interface.  
-Once Installed, go to your Destination DAW, and in its Audio settings, choose Soundflowe (64ch) as your output device.  
-From Spotlight, go to **Audio MIDI Setup.**
-Go to **Window>Show Audio Devices** or press **Cmd+1**.  
-In the window below, click on the **+** sign near the bottom left corner and select **Create Aggregate Device...**

![](/blog/rfrt/80/69.png)

-Tick the box next to your Audio Interface first, and then select Soundflower. This will create an aggregate device with a total I/O count of your interface + the 64 channels from Soundflower, but 1/2 remains to be your main interface out. Hit Okay and close this window.

-In REAPER, set your Audio Device as this new Aggregate Device.

**PC Set-Up**
**MIDI:**
**-**Download & Install [loopMIDI](https://www.tobias-erichsen.de/software/loopmidi.html) or a similar Virtual MIDI bus.  
-Open REAPER, and go to **Preferences>Audio>MIDI Devices.**
-Find loopMIDI in the output section of the window, right-click and **Enable Output.**
-In your destination DAW, go to MIDI preferences and enable it like you would do any MIDI Controller for input.  
-I apologize if the install is more complex than this, but I don't own a PC and can't test this. Forums seems to be endorsing this.

**Audio:**
**-**Make sure you have ReaRoute installed.  
-In your destination DAW, Select it as the audio output device  
-In REAPER, Select it as the audio input device, keeping the output device whatever it used to be.

**Sending MIDI out from REAPER**

REAPER can send MIDI data to external DAWs and hardware synths using MIDI Hardware outputs.  
-Create tracks, and set their input to your MIDI Controller, or manually edit MIDI events on the timeline.  
-Click on the Routing button on each track, and in the top right corner Click on add in the dropdown menu below **MIDI Hardware Output.**

-Select your MIDI Bus and set it to the next available MIDI Channel/  
-In your destination DAW, create MIDI tracks and set their inputs to the corresponding Bus and channel number as the tracks in REAPER.

**Receiving Audio in REAPER**
REAPER can then receive the audio back from external DAWs the same way you would out of a hardware synth, by plugging it into your interface. Only this time, the cables and ports are all virtual.  
-In Your Destination DAW, set your output audio device to your virtual audio interface.  
-You can simply send all the audio from your destination DAW to output 1/2 and receive it in REAPER, or you can assign tracks to channel 3-64 on your Virtual Audio Bus.  
-In REAPER, set your input device to the Virtual Audio Bus (PC) or Aggregate Device (Mac).  
-Create as many tracks as needed, setting their inputs sequentially to the as many channels as you wish to receive. (The fastest way to do this is to select them all, right-click on the record-arm button, and choose **Set inputs sequentially> n Stereo Pairs** and select the first channel number from the next dropdown menu.  
-Record-arm the tracks, set record to input, and enable monitoring if you wish to hear them out of your monitoring system.

**What's missing from this set-up?**

If you've used ReWire before, you know that ReWire, other than sending and receiving MIDI and receiving Audio, also syncs up **Transport Controls** and **Tempo** between the host DAW and the ReWire application. Our set-up doesn't have this. Furthermore, because of the round-trip latency caused by multiple virtual devices working together, you will find that your recordings don't sync up to the grid.

The easy fix for this is to manually set the tempo to your project tempo in both DAWs, and manually dragging recorded audio to the grid after recording. This is fine enough for most applications, but you have a live set-up, or if you are also performing vocals or an instruments while recording other DAWs, then you need to sync your transport controls, and send MIDI Clock or MTC from REAPER to your destination DAW, and offset the latency coming back into REAPER.

**Sending MIDI Clock to Other DAWs or External Synths**

This topic is covered in [Episode 81](https://youtu.be/vrpR4cIQbSs), but I merged the blog post for the two episode for convenience.  
 The set-up shown in Episode 80 is more than adequate for recording applications, but once we start to get into live performances (especially improvised ones) or if we are using external synths with arpeggiators and other time-based fx, or if we're using Drum Machines, then it becomes crucial to sync those things to beat with REAPER. This is where MIDI Clock comes in!

You can send Clock from every output device in REAPER, by simply going to **Preferences>Audio>MIDI Devices** & double-clicking on the output device, enabling the box 'Send Clock to this device'

![](/blog/rfrt/80/70.png)

From this window you can also offset the output to the device if they are having trouble syncing to each other. Start by recording the click track from that device (when possible) and comparing it with the REAPER click.

On your destination DAW or Synthesizer, you need to now enable the setting to receive external MIDI Clock via MIDI. This will of course be different based on what it is so refer to your user manual (The video shows this set-up using Ableton 11) to find the exact steps to follow. In most devices, this is called something like 'Sync', 'External MIDI', 'MIDI Slave', 'MIDI Follow' or something along these lines.

Doing this will basically give REAPER control over the tempo & transport controls of the destination synth/DAW and in the case of DAWs, will also move their edit cursor/playhead along with REAPER both during playback and while the projects are stopped.

The benefit to doing this is obviously getting to play two projects at the same time, and the tempo and time signature changes are also conveyed to the destination.

**Audio Latency**

Once the destination DAW/Synth receives the MIDI Clock and other MIDI events from REAPER, it'll make some noise, which you can capture through virtual audio busses (in the event of it being another program on your system) or by connecting the outputs of that device to your interface (in the case of synths)

This will always introduce a non-zero amount of latency. MIDI information is sent, read, processed, and then audio is produced and returned to REAPER, which takes time.

This is usually an amount hardly perceivable by human ears, but if you are recording or doing any kind of tightly gridded music, you have to address this.

Simply record some audio and calculate this latency, and you can fix it by setting the input offset in REAPER by going to **Preferences>Audio>Recording**

![](/blog/rfrt/80/71.png)

**Calculating MIDI Clock & Audio Return Offsets**

The best way to manually do this is using a time selection. Audio will arrive to REAPER slightly off-grid.

1. Make some kind of sound in the destination DAW/Synth & Record the audio in REAPER. Simple, short sounds with a clear transient and no attack are the best way to do this.
2. Disable snap in REAPER (Opt+S in Mac, Alt+S in PC) and zoom way in!
3. Set a time selection from the onset of the recorded sound to the grid it's supposed to be on.
4. Right Click on your ruler, set its unit to Minutes: Seconds. This will tell you the duration of the time selection in seconds on your transport bar.
5. This amount is what you set as the offset amount.

_Note: this will calculate the offset with a precision of 1ms. There are still 480 samples in a second (at 48k Sample Rate) so there's still room for error. You can repeat steps 3-5 while unit is set to sample to get the sample-accurate value, but I personally don't think this is super necessary. Also note that REAPER allows offsetting audio by sample amounts, but for MIDI Clock, the resolution is 0.01ms._

**How is all this worth it?**

Only you can answer this question! For recording, you can circumvent all of this by simply rendering audio in destination DAWs and importing into REAPER. If this is something you do often, you will probably lose time in the long term. If you are doing any kind of live performance work, then this is the best way imo, unless you are sticking to the same tempo.

It's also possible to send MIDI via a virtual Network MIDI bus, which means you can do this across multiple systems, so this system also allows you to collaborate in real-time with musicians using other DAWs.

As with most of the stuff I show on this channel, the key is to go through the time-consuming set-up once, save what you can of the set-up as templates, and it'll work for you whenever you need it!

These are the types of things I do when I am feeling uninspired to create. I take off the producer hat and become my own assistant.

**Conclusion**

This is a lengthy set-up but for the most part it's a set-it-and-forget-it type of set-up, as long as you name everything clearly and you can even create template projects in all your DAWs. If you use Logic Pro X, there's a [REAPER Mania tutorial on how to use Logic Pro X with REAPER](https://www.youtube.com/watch?v=3q78Qi_1pgo), and obviously REAPER doesn't have to be the host application. You can just as easily reverse all these applications, or even introduce more DAWs and external applications into the mix!

Here's Episode 80:

<youtube id="FWhJqK2XKW0"></youtube>

Here's Episode 81:

<youtube id="FWhJqK2XKW0"></youtube>

[![](/blog/rfrt/80/8.png)](http://www.buymeacoffee.com/iddqdsound)

If you like the work I do, [you can donate to me here](http://www.buymeacoffee.com/iddqdsound)! Every little helps, so even if you send a dollar or two my way, I’ll be eternally grateful to you!  
 Join the REAPER squad on our Discord Server:  
 <https://discord.gg/YwQESKpBfE>

**My Reaper Stash:** <https://stash.reaper.fm/u/IDDQDSound>

**Follow me on Instagram:** <https://www.instagram.com/iddqdmusic/>

**My Music:** [**https://Soundcloud.com/iddqdmusic**](https://soundcloud.com/iddqdmusic)

[ ](https://soundcloud.com/iddqdmusic) [**https://iddqdmusic.bandcamp.com**](https://iddqdmusic.bandcamp.com/)

