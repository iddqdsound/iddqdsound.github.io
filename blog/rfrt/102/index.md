---
tags:
  - Mixing Tips & Workflow Improvements in REAPE
  - REAPER JSFX Spotlight
  - Automation in REAPER
  - Routing in REAPER
date: 2022-02-09
youtube: DpArrOEirRE
related-posts:
  - /blog/rfrt/99
---

## BEEF UP your Kicks with just a sine tone (Rapid-Fire REAPER tutorials Ep102) ##

![](/blog/rfrt/102/RFRT-EP102.jpg)

Hey folks!  
 In [this episode](https://youtu.be/DpArrOEirRE) I wanna show you a classic mixing trick to beef up your kicks, especially for acoustic drums that may sometimes lack that impressive rumble that some of the more synthesized versions do! Of course, lots of people use additional samples to sweeten and fortify their drum recordings, but sometimes, your mix is dense enough as it is, and in my experience, blending together two sounds if you're already looking at a dense mix with lots of elements fighting for attention, introduces more challenges than solves problems! As a bonus I'll show you a cool script called MusicMath that I find useful for a variety of situations. More on that Later!

  While I'm sure lots of people do something similar to this in music, I learned this trick in film school. In 5.1 mixes, whenever you want to add impact to a sound, say, a gunshot, one trick to employ is to layer in a 1-frame long sine wave right at the onset of the gunshot sound, and send that to the LFE (Low Frequency Emitter aka the .1 in 5.1) and what that does is add a bit of a chest-thumping impact to the beginning of the sound, so we not only hear the gunshot, but we really feel it. So we can do a similar thing in music, and while we don't have an LFE, we can definitely pack in some ultra-low rumble for those listeners whose playback system can handle it!

**Why a Sine tone?**

 Simply put, a sine tone carries energy in a single frequency, the fundamental. So while you can use a sample, or another waveshape like triangle (Energy at all odd harmonics) or sawtooth (energy at all harmonics) adding those in may require you to re-balance the mix, and/or introduce sound to bands that are already congested with other elements. A sine tone on the other hand, is effective in its simplicity. It only really affects the mix at a single frequency, therefore it's suitable to add at any stage in the mix, cuz even if I'm halfway through the mix, all it takes is setting its level and we can be sure the rest of the mix is minimally affected by it! Tune the sine tone to the key of your song and it will sit in the mix comfortably and expand your low end.

  In the mix I use this for, I bring the sine tone to fortify the kick just at the end, when I want many elements of the song to really explode, and so the song widens, gets louder, and its low-end gets expanded all at once!

**Creating the Sidechained Sine Tone Trick Track**  

 So our goal here is to add a burst of energy to each kick hit, and there's an easy way to automate this process:  
 -Create a track right below your kick track.  
 -Insert JS: Tone Generator or any other sine wave generator on the track as the first FX.
 -Insert ReaGate or any other side-chain compatible gate as the second FX.  
 -In REAPER, you can click on the routing icon on any track, and drag it to the interface of any side-chain compatible plugin to automatically create a send from the first track to the auxillary inputs of the second track.  

 ![](/blog/rfrt/102/SideChain.gif)  
 _The ReaGate in this example is on track 33 and we want to trigger the gate whenever track 32, the kick track, exceeds the gate threshold_

 -On the tone generator, set the loudness and frequency of the sine tone. I recommend using a frequency that exists in the key of your song, preferably the root, and reaching for the lowest audible octave. You are likely to already have lots of energy around the 60-80Hz area from your kick, and higher octaves are likely occupied by Bass, Snares, and so on. The 25-60Hz region is the sweet spot to add a sine tone in. If you already have lots of energy in that band, you probably already have a rumbly enough kick, or you got a bunch of noise there you should cut with EQ.  
 -Finally, set the proper threshold for the gate, making sure to catch all the kick hits, and then use the Pre-Open, Attack, Hold and Release controls to shape the sine tone burst.

 
**Tompad_Musicmath**

 This awesome script, part of ReaTeam Scripts, is a great helper tool to help you set both the frequency and envelope of your sine tone bursts! To download it, copy this link to your ReaPack (Which you hopefully know how to use by now!)  
  https://github.com/ReaTeam/ReaScripts/raw/master/index.xml  

![](/blog/rfrt/102/Musicmath.png)
_The Musicmath GUI_

 In the first tab, you will see your project bpm at the top, followed by clickable boxes with common grid values written on them. Click on any of the values and below you will see the duration of that beat type at the given bpm. Click on the value to copy it, and you can paste it anywhere!

  In the second tab, you have two sliders with which you can select a note and an octave, and musicmath will tell you the corresponding frequency for that fundamental note. So how is any of this useful?

 Knowing the duration of different beats in your song's bpm is a great way to set up many time-based FX. Back in the day, of course, you couldn't really link effects like Delay or Chorus to the bpm of a DAW, so if you needed a ping pong delay with a rate of 1/16 you had to set that manually! 
  
  The calculation is pretty trivial:  
  1 second = 1000 ms  
  1 minute = 60 seconds = 60000 ms  
  60000 / bpm = Duration of the beat in ms

 So for example, at 150bpm in 4/4 time, the duration of a quarter note is 60000/150 = 400ms. From there, we can multiple and divide to get to any other rhythmic value.

  Nowadays, many delays and other time-based effects calculate these rates for you automatically, but many still don't. I for one consider even compressors to be time-based, when attack and release parameters are involved. So for example, using musicmath you can help decide the release time of your compressors, based on the fastest rhythm any given element is expected to play on the track. 

  Similarly, you can set the decay time of your reverbs based on exactly how long of a space between two sounds you want them to fill, and so on!

  Finally, when it comes to side-chained gates and compressors, the release parameter dictates the perceived rhythm created by the compressor pumping/ducking, so these values can guide us when we set those parameters. 

  In the case of note-to-frequency conversions, of course they come in handy with Sound Design, but also, EQing decisions can be guided by these too! You can find the tuning of your percussive elements, or make surgical cuts to tackle specific dissont sounds! Super nerdy stuff, but it's good to know of these tools when they are needed!

**Conclusion**

I hope you enjoyed this tutorial, and as always let me know if you have any questions, no matter how related/unrelated!

Here's the video:

<youtube id="DpArrOEirRE"></youtube>

If you like the work I do, [you can donate to me here](http://www.buymeacoffee.com/iddqdsound)! Every little helps, so even if you send a dollar or two my way, I’ll be eternally grateful to you!  
 Join the REAPER squad on our Discord Server:  
<https://discord.gg/YwQESKpBfE>

Become a member of ‘IDDQD Sound’ on YouTube: <https://www.youtube.com/channel/UCXom6oGEQL7iBGTGaCpyHng/join>

**My Reaper Stash:** <https://stash.reaper.fm/u/IDDQDSound>  
**My Reaper Repository:** <https://github.com/iddqdsound/reaper/raw/main/index.xml>

**Follow me on Instagram:** <https://www.instagram.com/iddqdmusic/>

**My Music:**  
[**https://Soundcloud.com/iddqdmusic**](https://soundcloud.com/iddqdmusic)  
[**https://iddqdmusic.bandcamp.com**](https://iddqdmusic.bandcamp.com/)  

