---
tags:
  - Unique REAPER Features
  - Using FX in REAPER 
  - REAPER JSFX Spotlight
date: 2021-10-20
youtube: xxYuM0bpFew
related-posts:
  - /blog/misc/6/
---

## Delta Solo in REAPER Demystified (Rapid-Fire REAPER Tutorials Ep91)

![](/blog/rfrt/91/RFRT-EP91.jpg)

Hey folks!  
 In [this episode](https://youtu.be/xxYuM0bpFew) we’re looking at Delta Solo, a brand new REAPER feature (as of v6.37). This feature allows you to solo only the difference any plugin is making to the incoming signal, so you can hear what your plugins are actually doing! The usage for this type of soloing ranges from soloing ReaEQ bands, all the way to complex Mastering FX! This was previously possible only using third party plugins (and today I’ll tell you about a [free JSFX Plugin called Delta by Danerius](https://work.danerius.se/download-section/) still worth having in your arsenal) but now it’s baked into REAPER and very easy to toggle on/off!

**What is Delta Solo?**  
With Delta solo enabled on any plugin, you will pass through only the difference the plugin is making to the sound to the rest of the signal chain! In simpler terms, the part of the sound that is unaffected by the plugin will be muted, and you will only hear the difference! This is useful for soloing EQ bands in plugins that don't natively have this feature (like ReaEQ), or to dial in your threshold, attack & release settings in a Compressor. Since you will be able to hear exactly what is hitting the compressor, you'll easily be able to tell if you threshold is set right, or whether or not you are killing any transients!

 To Enable Delta Solo, Hold **Option on Mac, Alt on PC & Left click the Dry/Wet knob of any FX window**  
![](/blog/rfrt/91/rfrtep91-1.png)
_\Option clicking the Dry/Wet knob will enable Delta Solo for any plugin!_

In the image above, since delta solo is enabled, we will only be hearing the band that is active on our EQ. This is very helpful when identifying troublesome frequencies in a sound. I can just sweep to find the frequency and then disable Delta Solo to hear the result. Similarly, when I want to cut any sound out, I can use Delta solo to make sure I am not cutting anything that I shouldn't be!

Most EQ plugins will also have a native hotkey or a button somewhere to do the same thing but ReaEQ previously lacked this feature. The only workaround was the below two mpl scripts:  
**Script: mpl_Solo last touched ReaEQ band.lua:** This action toggles all but the last touched band on an active ReaEQ instance off/on. This action is still very useful as you will see in a second!  
**Script: mpl_Solo last touched ReaEQ band (alter).lua:** This action turns the last touched band on an active ReaEQ to a bandpass filter. You can then use the mousewheel to narrow/widen the band, sweep it to find the frequency you're listening for, and then running the action again will change the band type back to whatever it was before.

Delta Solo largely eliminates the need for thess type of band soloing but not exactly! If you have a single band active, Delta Solo will solo that band, but if you have more than one band active, Delta solo won't exactly act as a band soloing function. For example, in the image below, we are using two bands in the high-end of the spectrum. Delta Solo'ing this instance of ReaEQ will cut the unaltered Low-End but we will hear the effects of both bands simultaneously, which can be a huge benefit or a nuisance!
![](/blog/rfrt/91/rfrtep91-2.png)
_\In this instance, Delta Solo will effectively solo two bands for us, which could be something you always wanted but something you may not want if you need to solo a single band!_

**True Single-band Soloing**  
There's a workaround for a true solo band function. The new update also provides you with a new action called **FX: Toggle delta solo for last focused FX** that you can use instead of option-clicking the wet knob. I have set mine to **Opt+Shift+D**. You can also create a custom action like below:  
**Script: mpl_Solo last touched ReaEQ band.lua:**  
**FX: Toggle delta solo for last focused FX**

 I have set this custom action to **Opt+Shift+S** for me. Hit it once, and Delta solo is enabled, and all but the last touched band will be disabled. Hit it again and all bands are re-enabled, while Delta Solo is disabled. If you want to use this custom action, it's best not to manually enable Delta Solo, as this will mean that the states are flipped and the action won't behave as planned. In future releases or the next SWS update, I am hoping that dedicated actions to enable or disable Delta Solo will remedy this flaw!

I would also love to see an action to disable all Delta Solo Enabled FX at once, as I can easily see myself toggling this on, forgetting about it, and having to rummage through 100 FX on 20 tracks to find the culprit! Another action to toggle Delta Solo on for multiple plugins at once will also be helpful! Once the API begins to include this, I'll take a crack at making these myself!

**Delta by Danerius (Free JSFX Plugin)**

 I'd be remiss not to mention this pair of plugins by Danerius, which you can [download here](https://work.danerius.se/download-section/), that does the same thing, with the exception that you can use it on a whole chain of plugins! Here's how to get them:  
 -Download the plugins.  
 -Copy the FX to your REAPER Resource Path, under Effects
 -Open REAPER, Go to View>FX Browser
 -Right-click JS on the left tab and choose scan for new plugins
 -Search for Delta to find 2 plugins, an encoder and a decoder, and put both on any track/item
 -You can now put the Encoder on the top of the FX Chain, the Decoder at the bottom, sandwiching all the plugins you want to 'Delta' in the middle.
 -Bypass/Unbypass the decoder to hear the changes!

 This is still really useful and a huge time-saver until an action to simultaneously Delta Solo multiple plugins is available. Otherwise, you can always click on any number of plugins, Enable Delta Solo and arrive at the same place!

**Conclusion**

That's really all there is to it. This is a simple but truly genius feature. I hope you can use it!

Here's the video:

<youtube id="xxYuM0bpFew"></youtube>

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

