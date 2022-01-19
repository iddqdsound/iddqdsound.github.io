---
tags:
  - Advanced REAPER Tutorials 
  - Recreating Ableton Live features in REAPER
date: 2021-06-18
youtube: 9wpndk1v75Q
related-posts:
  - /blog/rfrt/80
---

## How to use ReWire to connect Ableton Live to REAPER (Rapid-fire REAPER Tutorials Ep79)

![](/blog/rfrt/79/77.jpg)

Hey folks! [In this episode](https://youtu.be/9wpndk1v75Q) we're gonna look at how to Route Audio and MIDI between REAPER and Ableton Live (v10 or earlier) using ReWire!  
 I'm very sad that ReWire is no longer supported as of Ableton 11 but given how easy it is to use and set up, I think it's still well worth knowing how it works, especially if you don't plan on upgrading to the latest version of Ableton Live. In the next episode, I will tackle some workarounds for routing MIDI and Audio between REAPER and Live 11. The new method is significantly harder to set-up, but the added benefit is that it works with any DAW!  
 Below you can also download my ReWire templates to save yourself a few steps on your way to your hybrid DAW setup!

**Why use ReWire?**

You may be wondering right about now: What's the point of sending MIDI from REAPER to Ableton when I can just write MIDI in Ableton? Why send audio back to REAPER when I can use all my plugins in Ableton? What exactly do I gain by going through this lengthy and soon-to-be-obsolete set-up?

Well the answer is: Options!

Before moving most of my work to REAPER I used to make a lot of my own synths and effects racks in Ableton. When I moved to REAPER, I wasn't ready to throw all that work away and start from scratch, not to mention that Ableton comes packed with a lot of nice-sounding versatile synths and other VSTi that REAPER doesn't come with, unsurprisingly given REAPER's price tag of $60 vs. Ableton's $900+!

At the same time, I'm very comfortable with my customized workflow in REAPER, as I've shown in many past tutorials, from my MIDI editing [Hotkeys](https://youtu.be/0Ch9hLZBh5M) and [Mouse Modifiers](https://youtu.be/pw743Lk70PA), to my [Screensets](https://www.youtube.com/watch?v=-H770OvDFCE) and [custom actions](https://www.youtube.com/watch?v=oct6BXj6nmI&list=PLjvmrOUg3J0p1UrUJXBnWlTE-vd-qM7aM), and [all the other shortcuts that make my life enjoyable](https://www.youtube.com/watch?v=0Ch9hLZBh5M&list=PLjvmrOUg3J0rI6lDlP8xSARzvOaNd__oG). I don't want to have to relearn the Ableton workflow just to use its sounds.

On the other hand, as much as I love REAPER, I think Ableton does a few things better, like a more simple and quick MIDI Mapping technique, and of course the beloved session view.

To cut a long story short, ReWire gives me the best of both worlds, a little from column A and a little more from column B.

With ReWire you can send MIDI from REAPER to control Ableton's sounds, while sending audio back to REAPER to mix, edit and automate using REAPER.

**ReWire Components:**
ReWire is a plug-in that comes with Ableton and a few other DAWs and applications. In REAPER it can be added to a "hub track" that distributes all incoming and outgoing MIDI and Audio information between REAPER, your host application, and Ableton Live, your Rewire application.

You have to first open REAPER and load the plug-in, after which you can open Ableton. This order of operations is very important, as you need to make Live open in Re-Wire mode. In this mode, Ableton's Audio I/O, as well as MIDI Sync features are disabled, while its transport and tempo functions are controlled in real-time by the host application.

REAPER controls Play/Pause/Stop/Rewind functions of Ableton, and the tempo map information is conveyed to Ableton in Real-time.

With ReWire running as an insert on a REAPER track, that track becomes the "hub track". From there, you can create additional tracks to send MIDI to the hub track, and additional tracks to receive audio back from the hub track.

![](/blog/rfrt/79/78.png)

ReWire takes care of 3 out of our 4 possible routing needs: We can send MIDI from REAPER to Ableton, Receive Ableton's audio back in REAPER, and we can also send MIDI from Ableton to REAPER. The only thing we can't do is send Audio to REAPER, something I will cover next week!

**MIDI Send To ReWire:** The Track MIDI column displays the Bus and channel number for the MIDI Sends on the REAPER side. Once you open a Live Project, ReWire will automatically populate the 'ReWire Destination' column with all the MIDI tracks in your Live Project, from left to right. From here, you can right-click to change these, or leave them as is. For every track you want to control, you can create one track, and send MIDI from it to the corresponding MIDI bus and channel. The hub track will receive this data and pass it on to Ableton.

On the Ableton side, you can set MIDI Ins to no Input, but it will still receive MIDI from ReWire.

**Audio From ReWire:** Since Ableton's I/O is disabled, you then need to send audio back to REAPER for processing/monitoring. By default, the Master Out from Ableton is routed back into the Hub Track's Audio channels 1-2, but you can additionally send up to 64 channels of audio back from Ableton to REAPER, allowing you to route individual Ableton Tracks to their own channels.

For Each Ableton Track, set Audio To to ReWire Out, and choose a bus number.

In REAPER, you can create new tracks, and send audio from the hub track's channels 3-64 in stereo pairs or mono channels to them!

With my template, I have already set up 8 MIDI sends and 8 Stereo returns for your to get going. If you need additional tracks, simply duplicate the last pair of MIDI sends and Stereo Returns and re-assign their I/O routings accordingly, selecting an unoccupied MIDI bus and channel, and a pre-assigned Audio return.

**MIDI From ReWire:** With ReWire you can also send MIDI data back to the host application, useful in this case to get use out of Ableton's awesome MIDI Effects and even Max for Live MIDI modules for some truly wacky stuff!

Unfortunately, at the time of this writing, I couldn't get this module of ReWire to work properly. Regardless, here's how to do that in case you wanna give it a go:  
-Create MIDI Tracks in Live with no VSTi on them. Send the MIDI input to whatever you want, and set the MIDI To to no output. ReWire should still receive this MIDI Data, which you can once again use sends to route to additional tracks in REAPER.

**Download Bundle**

You can download the bundle for this episode here:

[IDDQD Sound_ReWire Templates](/blog/rfrt/79/IDDQDSound_ReWire-Templates.zip)

Contents:

1. IDDQD Sound_ReWire 8 Sends-Returns.RTrackTemplate: With Ableton Live closed, Import this into your TrackTemplates and load it into REAPER. Make sure the ReWire: Ableton live plugin is active.
2. Ableton ReWire Template 7 Tracks.als: Open this Project with Ableton and it should be already set up to go! In order to be able to assign Audio Outs in Ableton, I had to put some VSTi on each track, but obviously feel free to replace them with whatever!
3. ReadMe: Additional set-up info, including where to import the Track Template.

**Conclusion**

If you are among the few who don't plan to/can't afford to upgrade Ableton 11, now you hopefully have a reason to brag to your rich buddies who already have upgraded, cuz you can do something they can't. Well, they can, but this is much easier! Without ReWire, we are currently limited to lengthier set ups for this type of hybrid work, one that requires additional installs of virtual MIDI busses and virtual audio interfaces to be set up separately. Luckily this is all possible with free software, but unfortunately, this will be different for PC and Mac users. PC users of REAPER have the awesome ReaRoute, while us Mac folks have to rely on the much finickier Soundflower or Blackhole. On the flip-side, Mac comes with its on Virtual Bus, the IAC Driver, while PC users need to install a third-party bus. Anyways, we'll cover all of this in the next episode so stay tuned!

Here's the video:

<youtube id="9wpndk1v75Q"></youtube>

If you like the work I do, [you can donate to me here](http://www.buymeacoffee.com/iddqdsound)! Every little helps, so even if you send a dollar or two my way, I’ll be eternally grateful to you!  
 Join the REAPER squad on our Discord Server:  
 <https://discord.gg/YwQESKpBfE>

**My Reaper Stash:** <https://stash.reaper.fm/u/IDDQDSound>  
**My Reaper Repository (Copy link to ReaPack):** <https://github.com/iddqdsound/reaper/raw/main/index.xml>

**Follow me on Instagram:** <https://www.instagram.com/iddqdmusic/>

**My Music:** [**https://Soundcloud.com/iddqdmusic**](https://soundcloud.com/iddqdmusic)

[ ](https://soundcloud.com/iddqdmusic) [**https://iddqdmusic.bandcamp.com**](https://iddqdmusic.bandcamp.com/)

