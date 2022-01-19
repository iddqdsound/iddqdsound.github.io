---
tags:
  - Hotkeys & Mouse Modifiers in REAPER
  - Mixing Tips & Workflow Improvements in REAPER
date: 2021-09-10
youtube: 3EhIoFe3vEY
related-posts:
  - /blog/rfrt/86
---

## Hotkeys & Hacks to A/B Plugins & Tracks (Rapid-Fire REAPER Tutorials Ep85)

![](/blog/rfrt/85/39.jpg)

Hey folks!  
 [This episode ](https://youtu.be/3EhIoFe3vEY)is all about how to A/B stuff. We will cover ways to A/B between:  
-Different Plugins on the same FX Window  
-One track and everything else  
-Multiple tracks and everything else  
-Multiple tracks and Multiple other tracks

As well as a few hotkeys and mouse modifiers that can make quick work of this stuff.

**What is A/B?**
A/B is fancy audio jargon for quite a simple and effective comparative move when mixing or dialling in tones. It means to compare two different states of plugins, tracks or groups of tracks against each other as you listen to them, and this helps you decide between plugins, tracks, or just to listen for masked frequencies and problem areas. One set of settings, track states or plugins is our A, another set is our B, and we want to (hopefully with a single click or hotkey) switch between them and listen for differences!

**Common A/B Uses in Tone & Sound Design**
When you are dialling in your tone for an instrument, or comparing different instruments with each other, it's very useful to be able to quickly A/B two or two sets of different plugins against each other. For example, I may have 2 reverb plugins on a reverb send, and I want to compare how they sound in the context of my mix.

After sending some of my tracks to the Reverb Aux track, I can bypass one and keep the other one active, then select both of them, and by hitting **Cmd+B (Mac) or Ctrl+B (PC)** with my FX window focused, I can bypass one while unbypassing the other.  
 This also works for whole groups of plugins!

![](/blog/rfrt/85/40.gif)

_A/B action for two or more plugins using Cmd+B hotkey (Toggle Bypass Selected Tracks)_

**A/B Between your mix & Reference Tracks**
If you use Reference Tracks as part of your mixing workflow, you may want to quickly A/B between your entire mix and your reference track. This is what I do:  
-Import your reference track as an item, place it on a track and put that track on top of your project. I call my track 'Ref'  
-Mute your 'Ref' track and play the project. Now you will hear your whole mix!  
-Next, hit Solo on the 'Ref' track while its mute button is still on! This will toggle between muting and soloing on your reference track!

_Note: Solo negates Mute if both are on, on the same track! So if a track is both muted and soloed, then it will be soloed and its mute state is ignored._

**A/B between your mix & multiple Reference Tracks**
I personally have all my reference track items on the same track, as takes. After importing them, I place them on adjacent tracks, select them all, right click and go to **Take>Implode items across tracks into takes.**

This way all my reference tracks are running parallel to each other, I can click to switch quickly between different takes. Optionally, you can use the default hotkey **T** to switch to the next take.

However, if you prefer to have each reference track on its on track (maybe useful if you need to level match or do some EQ'ing to them) then you can still A/B between them. Put them on separate tracks and mute all of them!

This will be a lot easier to do if you use the Exclusive track Solo mouse modifier. If you hold **Cmd+Opt** as you click on the solo or mute button on any track, you will exclusive solo/mute that track. I can now A/B between my mix and multiple reference track, by **Cmd+Opt+Left Clicking** on each reference tracks. Each time I do that, the previously soloed reference track is also unsoloed, which makes its mute state kick in!

If I wanna hear my mix, I can simply click on the active solo button, or alternatively **Cmd+Left Click** on any solo button to Unsolo all tracks!

**A/B between two groups of tracks**
A more complicated A/B set up is when you want to A/B multiple tracks against each other. For example, while arranging, you may want to check your whole mix against a group of 3 guitar elements, or 3 keys elements.

To do this manually is gruesome and tedious. You would have to select the first 3 tracks, click on solo/mute, then select the next 3 tracks and solo/mute those. Very inefficient and not very fast. The Key to effective A/B action is to be able to do it quickly so that you can focus on what you hear, versus what tracks to select and what buttons to push!

By default, if you select the first 3 and solo them, then select all 6 tracks and hit solo, it won't work as a toggle. The first click on the solo button will unify all 6 tracks' solo state, and then they just go on/off in parallel.

However, if you assign a hotkey/toolbar icon to 'Toggle Solo/Mute for selected tracks' then that command will work as a real toggle! If you select 6 tracks, 3 of which are soloed and 3 of which are not, then using the action 'Toggle Solo for selected tracks' you can toggle between them. Every track that is soloed will be unsoloed, and every track that is unsoloed will become soloed.

I have assigned **Shift+S/M/R** to **Solo, Mute & Record Arm** Selected tracks, respectively!

![](/blog/rfrt/85/41.gif)

_Toggle Mute Action (Shift+M for me) in action!_

**Locking Solo/Mute States & Solo Defeat**

In many context, as you A/B between the Mute/Solo states of multiple tracks, you may want a third set of tracks to remain unaffected by these toggles. For example, if I want to A/B between two different Drum Arrangement, each with 8 tracks, I may want to do that against the rest of the instrumentation. However, our normal exclusive solo or unsolo/unmute modifiers will constantly be muting/unmuting the rest of the instruments.

You can tackle this in two ways:  
 **-Solo Defeat:** By Solo defeating a track (**Opt+Shift+Left Click** on any solo button to enable for selected tracks) it will no longer be muted when other tracks are soloed. What soloing essentially is, is a signal to mute all other tracks. So Solo defeated tracks simply don't obey that signal!

**-Locking Track Controls:** If you have certain tracks soloed or muted, and you want them to retain their solo/mute/fx bypass state as you switch between different states around them, you can just set them to your desired state, select them and **Right Click>Lock Track Controls.**

This will mean that whenever you use a mouse modifier like Exclusive solo or Unsolo/Unmute all, these tracks will remain unaffected. This is also useful because, while we can solo defeat tracks, we cannot "Mute defeat" them, so any tracks you want to keep muted, you can mute once and then lock until you need it!

**SWS Snapshots**

The most advanced form of A/B action is toggling between entire different mixes.[ I have covered this in a past tutorial](https://www.youtube.com/watch?v=DsWC4XbVXSA), but looking back, I did not do a good job of explaining it, so I think given that we're a year and 85 episodes into this series, I have earned a re-do so stay tuned for this tutorial!

**Conclusion**

Before Using REAPER, I always found somewhat-advanced A/B action in most DAWs to be a pain, which meant I A/B'ed stuff less. Now that I can do it with ease in REAPER, I do more of it and my mixes sound better as a result, so hopefully you'll find these as useful as I have!

<youtube id="3EhIoFe3vEY"></youtube>

![](/blog/rfrt/85/8.png)

If you like the work I do, [you can donate to me here](http://www.buymeacoffee.com/iddqdsound)! Every little helps, so even if you send a dollar or two my way, I’ll be eternally grateful to you!  
 Join the REAPER squad on our Discord Server:  
<https://discord.gg/YwQESKpBfE>

Become a member of ‘IDDQD Sound’ on YouTube: <https://www.youtube.com/channel/UCXom6oGEQL7iBGTGaCpyHng/join>

**My Reaper Stash:** <https://stash.reaper.fm/u/IDDQDSound>  
**My Reaper Repository: https://github.com/iddqdsound/reaper/raw/main/index.xml**

**Follow me on Instagram:** <https://www.instagram.com/iddqdmusic/>

**My Music:** [**https://Soundcloud.com/iddqdmusic**](https://soundcloud.com/iddqdmusic)

[ ](https://soundcloud.com/iddqdmusic) [**https://iddqdmusic.bandcamp.com**](https://iddqdmusic.bandcamp.com/)

