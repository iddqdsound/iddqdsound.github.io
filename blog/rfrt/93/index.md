---
tags:
  - Using FX in REAPER
  - Custom Actions, Cycle Actions & Scripts in REAPER 
  - Hotkeys & Mouse Modifiers in REAPER
date: 2021-11-08
youtube: rRYcndmRs0M
related-posts:
  - /blog/rfrt/98
---

## How to create shortcuts to Insert FX (Rapid-Fire REAPER Tutorials Ep93)

![](/blog/rfrt/93/RFRT-EP-93.jpg)

Hey folks!  
 In [this episode](https://youtu.be/rRYcndmRs0M) I wanted to show you how to assign shortcuts aka hotkeys to Insert FX. This is a useful way to very quickly add your go-to EQs, Compressors & other plugins to items & tracks. I'll also show you how you can take your maybe less often-used plugins and add them to a toolbar for quick access. This is in preparation for my next video, where, due to popular demand, I'll be showing you how to create toolbar icons! Some of you may have caught a glimpse of my [FX Toolbar in the SWS Contextual Toolbars Episode](https://youtu.be/xuiB8aGDO18), so I wanted to do that today, but decided to get the REAPER side of things out of the way first. The next episode will be linked here once it's out!

**Regular ways of Inserting FX to Tracks/Items**  
**Method 1 (Using the FX Browser):** There are tons of ways to add plugins to tracks or items. Let's start with the "N00b" way (of course I'm kidding) which is done by opening the FX Browser. You can do this from **View>FX Browser** or by pressing **Shift+F**. Doing so will open the window below:  
 ![](/blog/rfrt/93/rfrt93-1.jpg)  
 _The FX Browser contains a list of all native & third party Plugins, JSFX & FX Chains_

 Here's how to navigate the window:  
**1. Left Column:** From here, you can filter your FX by category. Click on 'All plugins' to browse your entire plugin library, or select a Category (such as EQ, Dynamics, Delays, etc.) or Filter by Developer (Cockos, iZotope, Fabfilter, etc.). You can also access all your FX Chains from here, or Your personalized folders. We've gone over how you can further customize & organize your plugins [in this old video!](https://www.youtube.com/watch?v=-bAhE6HJTGQ)  
**2. Filter Bar:** Type in this dialog box to run a search based on keywords, within the chosen category, developer, or through all your plugins.  
**3. Plugin List:** Here you will find an alphabetically ordered list of all plugin that match your filter criteria. Simply **Left Drag** any desired plugin onto a Track or an item to insert it into your project, or **Double-Click** to insert a plugin on your last selected item/track and close this window.  
**4. Right-click menu:** Right-Clicking on any plug-in reveals additional options. You can select multiple tracks or items to add the highlighted plugin to your selected tracks or active take of your selected items, and you can also select a preset right here. You can also Rename your plugins for easier searching down the line, set a default preset, and much more. Later we will revisit this window to create shortcuts for our go-to plugins.

 The FX Browser is your definitive list of all plugins, but for this very reason may not always provide you with the quickest way to access your go-to plugins. You'll have to be in the right place through the left column, and then either navigate manually, or enter additional keywords to search for your desired plugins. Especially if you have lots and lots of plugins, you may find yourself more than a few clicks away from your go-to plugin. Also opening this window may take up some screen real estate, so closing it may introduce an extra click.

**Method 2(Right-clicking on the FX Tab on Tracks/Items):** A slightly less cluttered alternative is to right click the FX icon on any track or icon*:    
![](/blog/rfrt/93/rfrt93-2.jpg)  
_These menus appear when you right click on the FX Icon. Left: Tracks Right: Items_

From here, you can click to float any plugins already on the selected track/item (if any), and you will see all the regular groupings of your tracks, through which you can navigate to your desired plugin. This is, once again, a useful option, but the more FX you have, the more clicking and scrolling you'd have to do sometimes.

_*In order to see an FX Icon on your items, make sure to go to **_preferences>appearance>media_** and in the item labels section, tick the boxes 'pre-take fx' and 'no fx'._

**Method 3 (Creating Shortcuts):** So the options above are more than adequate for most situations, but a faster way worth setting up, at least for your most-used go-to plugins, is to assign a shortcut to insert them. If you're constantly reaching for a specific EQ, Compressor, or even within a certain project something a bit more exotic, it's huge timesaver to assign shortcuts to them. To do this, Go to your FX Browser, find the desire plugin, right-click & choose create shortcut. This will open a small dialog box, which is identical to the shortcut assignment dialog box of any regular action. Simply press your shortcuts and hit okay. Now you can select one or any number of tracks or items, and hit the shortcut to insert the FX on them!

I personally use **Opt+Q** for my favourite all-purpose EQ (Currently Fabfilter Pro-Q 3), **Opt+1** for my favourite Compressor (Currently Fabfilter Pro-C) & **Opt+2-5** for 4 more favourites. I reserve **Opt+6-0** for additional plugins, but I reguarly switch these out on a per project basis, or when testing a newly acquired plugin. So if I'm working on a project with a Lo-Fi vibe, these may be the shortcuts for my tape & Modulation FX, in a film Project they may have sound Design applications, and when writing MIDI, I'll use these to quickly insert some VSTi. Of course you can also assign FX Chains to these. By default, Opt+1-0 are reserved for navigating through regions, which I find I can easily live without, or at the very least, assign some less premium hotkeys to!

**Method 4 (Creating an FX Toolbar):** When you create a shortcut for any FX, REAPER will create an Action, like any other, with a Command ID, in your Action List. These are always named as 'Insert FX:[Plugin Name]'. So you can Also put these in toolbars and right-click menus, or even arm them as any other action to quickly add them to a bunch of tracks. This is useful for plugins that, while not your absolute go-to's are used often enough that you may want to stop navigating the FX Browser to get to them! Because Toolbars are screen real estate-wise the least space-occupying option, and you can even recall them using Contextual Toolbars or a single hotkey, this will also be a pretty sleek option overall!

In order to do this, first you must have REAPER create the Insert FX action for you. To do this, you can right click on them after finding them in your FX browser, and select 'Create shortcut' but then simply cancel out of the following dialog box. This will nevertheless create the action, which you can then find in your action list and add to any toolbar or right click menu. Watch the video for a more detailed tutorial on how to do this, if you don't already!

**Adding icons to your FX Toolbars:** I was going to cover this in the next episode, but my good buddy Tormy Van Cool did a [tutorial on this just today](https://youtu.be/12AjqFcbZEU)! So instead of repeating what he said, I'll just link to that, and as a bonus, hopefully introduce some of you to a great REAPER tutorial channel. Go check it out, and be warned! It's an easy process but it's not a quick process.

**Conclusion**

I hope some of these methods have been new to you, and I hope you now know which one to use in which scenario. Adding FX was one of the things in my early REAPER days that took an annoying amount of time, so hopefully this will help you avoid the same minor annoyances.

Here's the video:

<youtube id="rRYcndmRs0M"></youtube>

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

