---
tags:
  - Hotkeys & Mouse Modifiers in REAPER
  - Advanced Customization in REAPER
date: 2021-03-22
youtube: kjwI342Vklk
related-posts:
  - /blog/rfrt/67
---

## Optimizing Zooming defaults in REAPER w/ Hotkeys & Mouse Mods (Rapid-fire REAPER Tutorials Ep66)

![](/blog/rfrt/66/109.jpg)

Hey folks!

In [this episode](https://youtu.be/kjwI342Vklk), we're gonna be looking at a few preferences, Hotkeys and Mouse Modifiers all related to zooming! It's not the sexiest of all subjects, but the larger your projects get, the more important it becomes to be able to quickly navigate through them. I found a few of the REAPER defaults in this area to be less than perfect, and with some customization and a bit of SWS actions action, you can really optimize your zooming!

Here's a list of all the commands I covered in the video. I'll explain why I replaced the ones I replaced in a second:

![](/blog/rfrt/66/110.png)

_Mac to PC Action translation: All the same defaults exist in PC. All you need to do is replace Command with Control, Option with Alt, and Control with Windows. Shift remains shift._

**-SWS: Vertical zoom to selected tracks, minimize others:**
I replaced the default REAPER command of the same name to this SWS equivalent, using the same hotkey of Shift+1 aka !  
 The default action doesn't utilize the full height of the arrange window when selecting one or two tracks, and doesn't fit all tracks to screen on higher-count track selections. The SWS action always fills the screen with the tracks selected, and adjust each track's height as your selected track counts get higher to make sure they all fit! (Works up to about 30 tracks depending on Theme settings, etc.)

**-SWS: Toggle zoom to selected items:**
I replaced the default REAPER command which is bound to Command+- aka _ with this SWS action, also changing the binding to control+Shift+Z. This binding made sense to me because Pressing _ with one hand is rather impossible, so I like to make most of my hotkeys possible to press using my left hand. Z also is a good way to remember that this Zooms.

The action itself is more robust as well, as it works for multiple items on multiple tracks, and takes whether automation lanes are visible or not into account. Overall, I found the existence of automation lanes to throw the default actions off slightly!

**-Increase/Decrease Selected Track Heights:**
These are two commands you would find in Pro Tools, and I've bound them to the same hotkeys of Command+Control+Up/Down. The make all the same adjustment to a selected subset of all visible tracks.

**-Mousewheel Scrolling/Zooming:**
These were among the first actions I re-assigned in REAPER, because the default make little sense in my opinion. Any browser, any website and App, and every other DAW I can think of, simply uses mousewheel to scroll up and down. I am so used to this that I do it unintentionally. Similarly, Command+Option+mousewheel is default hotkey to zoom horizontally in both Pro Tools and Logic Pro X, and quite similar to Ableton's command+Control+Mousewheel. Hence I think switching these two makes a lot of sense, as I still do go to those DAWs from time to time!

**-Marquee Zoom:** The reason I changed this mouse modifier is because REAPER changes your mouse cursor icon based on what is assigned to left drag, and not right drag, so when I hold control anywhere on my Track, I get a magnifying glass, signalling to me that I have the right mouse modifier. I also do most of my dragging with LMB, so this just made sense!

**-Restore Previous Zoom level:** Again, makes a lot of sense because I don't really press middle click\* and the default is set to the same action as left clicking. So why not change it?

_Note: The middle click is just what happens when you click on your mousewheel! Some of you based on your mouse may not have access to this._

_Note: Remember that Right Drag & Middle click mouse modifiers exist in Mouse Mods>Arrange View while Left Drag options are in Mouse Mods>Track._

**Preset-based Zooming in REAPER (a la Pro Tools):**

Reaper Script amalagma has a number of scripts allowing you to save and recall horizontal and vertical zoom presets. Using this system, you can, for example, set 5 horizontal zoom presets, (1/16th zoom, 1/4 zoom, 1 bar zoom, 4 bar zoom, 16 bar zoom) and then bind hotkeys to the load presets, but I never liked this system in Pro Tools and never really implemented it in REAPER either. Just wanted to throw this one out there!

**MIDI Editor zoom settings:**

All the same zoom actions exist for the MIDI window, but you need to set them manually. Go to your Action List and select MIDI Editor from the top right dropdown menu, then search for and assign the same hotkeys to the same actions!

**Conclusion:**

There you have it! I'm gonna do more of these because I think they can be really useful, but lemme know your thoughts! Here's the video:

<youtube id="kjwI342Vklk"></youtube>

Watch [all my SWS tutorials here](https://www.youtube.com/watch?v=PQAaAN6AI0I&list=PLjvmrOUg3J0pEil4PDHyupUI-9MQwsPmd).  
Watch a [similar episode on MIDI Editor window here](https://youtu.be/0Ch9hLZBh5M).

If you like the work I do, [you can donate to me here](http://www.buymeacoffee.com/iddqdsound)! Every little helps, so even if you send a dollar or two my way, I’ll be eternally grateful to you!

**My Reaper Stash:** <https://stash.reaper.fm/u/IDDQDSound>

**Follow me on Instagram:** <https://www.instagram.com/iddqdmusic/>

**My Music:** [**https://Soundcloud.com/iddqdmusic**](https://soundcloud.com/iddqdmusic)

[ ](https://soundcloud.com/iddqdmusic) [**https://iddqdmusic.bandcamp.com**](https://iddqdmusic.bandcamp.com/)  


