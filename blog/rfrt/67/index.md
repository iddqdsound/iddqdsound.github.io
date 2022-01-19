---
tags:
  - Hotkeys & Mouse Modifiers in REAPER
  - Advanced Customization in REAPER
  - Unique REAPER Features
date: 2021-03-22
youtube: aqGtXK1EN0o
related-posts:
  - /blog/rfrt/68
---

## Maximizing Screen Real Estate Tips & Hotkeys (Rapid-fire REAPER Tutorials Ep67)

![](/blog/rfrt/67/90.jpg)

Hey Folks!  
 [In this episode ](https://youtu.be/aqGtXK1EN0o)we're talking screen real estate, and best ways to maximize every precious inch of your display! In the past, [we've talked about creating screensets](https://youtu.be/-H770OvDFCE) to get your REAPER to look the way you want, with windows where you like them, but even with screensets you still have the problem of where windows you haven't placed anywhere will go. Let's solve that with a few hotkeys and custom actions!

**Floating/Docked Windows in REAPER**

There are a large number of windows in REAPER that you may want quick access to, but not have in view all the time. All these windows exist under **View** in your menu. Next to each one, you will see the ones that have a Hotkey, and you can assign hotkeys to the ones that don't.

![](/blog/rfrt/67/91.png)

Each of these windows can be either floating somewhere or docked (right clicking on any floating window and selecting dock will dock them to the nearest visible, or last opened docker. From there you can move it around ([Explained in detail here](https://youtu.be/-H770OvDFCE)).

I like Docking windows because that would prevent them from popping up somewhere random, cluttering up my screen and obscuring objects & windows behind them.

Of course you can always hide these using their hotkeys, but that's a lot of hotkeys to memorize! Docking them will allow you to memorize one hotkey, and use the action **Activate Next Tab** to access the rest from there. This command is great, but there are two problems:

1. The default hotkey (Cmd+Shift+Tab) is already assigned to move backwards through your last opened apps in Mac, so it won't work unless you go to your **System Preferences>Keyboard** and disabling a very useful hotkey. I have instead reassigned it to **Ctrl+Tab,** which brings us to:

2. Once you activate Next tab, that window, whatever it is, will be focused. So this action will only work once, before you have to manually re-focus on the arrange window, and hit it again. As such I have made a custom action.

_Note: My normal script I use to generate scripts from my custom actions today (LokasennaGenerate Script from Custom Action) has not been working as of late, so I'm just gonna describe the custom actions for now, and you can make them yourself! I'm working on a fix and will add the actions when I do!_

**Custom: Activate Next Tab**  
**-**Docker: Activate Next Tab  
-SWS/BR: Focus Arrange

This custom action refocuses the arrange automatically so I can quickly tab through windows. I can then click on the tab I am looking for. An alternative is assigning the hotkey to the 'Docker: Activate Next Tab' action, and set its scope to global. This doesn't work all the time though, because if the window in the next tab has a text box, it may still register the hotkey as text input.

**Custom: Maximize Real Estate**
-View: Toggle Transport Visible  
-View: Show/Hide toolbar at top of main window

This custom action gives me an extra inch or so of real estate by closing my transport strip and my top toolbar. I can also use the command 'SWS: Hide Dockers' bound to Opt+H to hide all my dockers, and hit Cmd+f11 to fullscreen my REAPER. These 3 actions together maximize my real estate. The reason they are not all together one action is that doing that created more problems than it solved, such as random stuff going missing when switching screensets. I have also run out of screensets and can't save my maximize screen as a screenset.

**Do we need a transport bar?**

I often wonder if a transport bar is needed at all. I never click on Play, Pause or Record on the transport bar when I can run those actions, and I rarely find a usage case for Project Playrate. So do we need a transport bar? You could hide it permanently if you want. I quite like the Selection strip of the bar, which shows me the length of my time selection. Would be nice if REAPER allowed us to dock only that portion of the transport bar somewhere on a toolbar, and crawl back a half inch of screen real estate that way!

**Other Windows**

Earlier, when I said all floating windows in REAPER can be reached via View, well thaat was kind of a lie. there are a huge number of windows that you can open, float and dock, that aren't there. Some examples are:  
**Undockables**
**-**Dynamic Split Window  
-Render Dialog  
-Transient Detection Settings  
-Preferences windows

**Dockables**
-SWS Loudness  
-[SWS LFO Generator](https://youtu.be/L0TjiCQB8Xo)  
-[SWS Resources](https://youtu.be/4SPfUPKZ4fE)  
-[SWS Snapshots](https://youtu.be/XE9JiHliwNY)  
-Reaconsole

For Undockable windows, you can still move them anywhere on your screen and REAPER will remember them. For Preferences windows, you can also use several scripts available in ReaPack by **cfillion** to open specific pages in the Preferences window that you use often. I have two of these:

**-Custom: Stop Playback and Open Audio Devices**
-Transport:Stop  
-Audio Device Configuration...  
 Opening this window mid playback produces an error. I tend to forget this, so I have bound Ctrl+Cmd+Opt+P to this custom action. This is useful for when your audio device doesn't register, and when you hit play the play cursor is shown but doesn't move (usually happens when you open REAPER the first time).

**-Mouse Modifiers**

I also have the action 'Options: Mouse modifier preferences...' set to Cmd+Opt+, so I can quickly access that window.

**Navigator (Cmd+Opt+V)**

The navigator window looks and works like Ableton's Session overview, or the Universe Window in Pro Tools and Logic Pro. It gives you a simple birds-eye view of your project, which you can dock as a thin strip somewhere on your screen, so you can navigate large projects with ease, if that's your style!

![](/blog/rfrt/67/92.png)

_REAPER Navigator, showing items, tracks, and markers as small blocks!_

**TCP on Right Side of Arrange**

This command allows you to place your tracks on the right side of the screen, great for ex-Ableton users who are used to that! Give it a try, you may like it!

**Conclusion**

Taking the time to set your REAPER up in this way saves you tons of time and headache and prevent windows from popping up in random places, which was an early pet-peeve of mine as a new REAPER adopter.

Here's the video:

<youtube id="aqGtXK1EN0o"></youtube>

If you like the work I do, [you can donate to me here](http://www.buymeacoffee.com/iddqdsound)! Every little helps, so even if you send a dollar or two my way, I’ll be eternally grateful to you!

**My Reaper Stash:** <https://stash.reaper.fm/u/IDDQDSound>

**Follow me on Instagram:** <https://www.instagram.com/iddqdmusic/>

**My Music:** [**https://Soundcloud.com/iddqdmusic**](https://soundcloud.com/iddqdmusic)

[ ](https://soundcloud.com/iddqdmusic) [**https://iddqdmusic.bandcamp.com**](https://iddqdmusic.bandcamp.com/)

