---
tags:
  - Unique REAPER Features 
  - Custom Actions, Cycle Actions & Scripts in REAPER 
  - Hotkeys & Mouse Modifiers in REAPER
date: 2021-04-12
youtube: lu-TjJk-_Ak
related-posts:
  - /blog/rfrt/75
---

## Changing REAPER's Editing Behaviour with Hotkeys (Rapid-fire REAPER Tutorials Ep70)

![](/blog/rfrt/70/24.jpg)

Hey folks! In [this episode](https://youtu.be/lu-TjJk-_Ak), I'll show you how to control some of REAPER's Editing behaviour that you may want to control on the fly! Stuff like Ripple Editing mode, Snapping, Grid and ruler options, etc.

**What's in my Main Toolbar**  
 My main toolbar consists of everything you would find in your default main toolbar (At least as of REAPER 5.91) and I have added some actions to it. I explained what each button did in the video but cut it out of the final video cuz y'all like them short and sweet, so here's a detailed explanation below. Note that some of these toolbar icons are special, meaning they do a lot more than 1 action, which is something you can't do to your own customized toolbars, a thing I wish REAPER will introduce at some point. Some of these icons also change based on what Editing Behaviour is active, and right-clicking each one will give you access to some preferences and options.

![](/blog/rfrt/70/25.jpg)

**1. Auto-Crossfade:** Enables the automatic creation of crossfades when the edges of two items on the same track meets. I have this on all the time but I keep the icon there because it gives me quick control over these preferences:  
**-Trim Content behind media items:** With this option on, if an item completely overlaps the other, the item that is enveloped will be deleted. I never found a use for this personally.  
**-Always trim content behind razor edits:** A new option. This does the above behaviour but for any razor selection that overlaps an item.

**2. (Custom) Toggle enable/disable default fadein/fadeout:** This option normally lives in Preferences>Project>Media Item Defaults, but I got tired of finding there so I added it here. It's useful most of the time, unless you do sample-based editing, in which you probably want it off. I've also bound it to **Command+Option+K.**

**3,4,5. Ripple Editing:** Ripple editing is a great REAPER feature. What it does is making any edit cause a ripple across the rest of the project, which makes it very useful for podcast editing, radio work, tutorials, and Ambience creation. If you delete an item normally, it'll leave an empty space where the item was. With Ripple Editing on, that space will be instead filled with the items that come after. Similarly, with Ripple editing on, if you insert a new item anywhere on your timeline, it'll move the later items forward, creating space for that item. The default hotkey for this is Opt+P, but I changed this to **Opt+R** (re-assigning REAPER's default function for that, opening Routing matrix, to Opt+P) because Opt+P is hard to press with one hand, but Opt+R, isn't.

This is an interactive icon, meaning the icon will look different based on which mode you are on. When **Ripple Editing is off**, it looks like 3, With **Ripple editing set to track** mode, Ripple editing is only enable for the track being edited, and the icon looks like 4. With **Ripple Editing set to all**, any edit will affect all items that come after it on all tracks, and the icon looks like 5.

Right-Clicking this icon reveals additional options around Ripple Editing.

I have also added additional mouse modifiers to temporarily switch Ripple Editing mode. These are all found in **Preferences>Mouse Modifiers>Item - Left Drag**  
**Cmd** - Move items, enabling ripple editing per track  
**Cmd+Opt** - Move items, disabling ripple editing  
**Cmd+Ctrl+Opt** - Move items, enabling ripple editing for all tracks  
**Cmd+Ctrl+Opt+Shift** - Move items, ignoring snap and enabling ripple editing for all tracks.

_Note: under move items, you can select multiple non-conflicting behaviours for your mouse modifier, which further adds to the versatility of mouse modifiers._

**6. Move envelope Points with items and Razor Edits:** Another one I always have turned on, but right-clicking this button gives you quick access to tons of options about envelope points and automation items behaviour. I have covered a lot of these in my automation series, [which you can watch here.](https://www.youtube.com/watch?v=Kf8TFQ8ov_s&list=PLjvmrOUg3J0r0-Xq2ONWsEOBnHEDonPW2)

**7. Grid Settings:** You can enable grid lines visible by pressing opt+G, and you can right-click the icon or press opt+L to access Grid/Snap settings, where you can set your grid values, snap settings, as well as control what types of stuff in REAPER obey snaps and grids. You can for example tie items to the grid, but have automation items move freely, and so on.

Another useful thing to do is create some additional hotkeys for changing your grid size, as it can be cumbersome to this via the right-click menu. I have a few of these.

**Ctl+Page Up** - multiply grid size by 2  
**Ctl+Page Down** - multiple grid size by 1/2  
**Ctl+Cmd+Opt+\*\* - Toggle framerate grid  
**\*\* - Cycle through relevant grid sizes (Explained below)

Finally, I like the custom script **'amagalma_change grid size (via dropdown menu)'** which opens a dropdown menu where your mouse cursor is to quickly change grid settings. I have that tied to an extra button on my Logitech G600 mouse, which has 25+ extra buttons you can bind to macros and hotkeys.

_Note: I personally very rarely change my grid size in Arrange view. I change them a lot more often in the MIDI Editor, for which I have it tied to Cmd+Ctl+Mousewheel._ [_Watch this video for more info._ ](https://youtu.be/0Ch9hLZBh5M)  
**8. (Custom) Toggle pre-Roll:** Bound to **Cmd+K** for me, this enables pre-roll for recording. You can additionally right-click this icon or the next, to access metronome settings where you can change your pre-roll settings and amount, change your metronome sound or beat pattern, and more.

**9. Toggle metronome:** Click to enable/disable metronome, or right-click to open the settings window. This doesn't have a hotkey be default, but I have bound it to **Cmd+Opt+T** which is normally for showing/hiding transport, but really, how often are we doing that to give it its own hotkey? I instead prefer to have this hotkey toggle the metronome, and I can always go to View>Transport to show/hide my transport.

Another useful unassigned REAPER action is 'Adjust metronome volume (CC/OSC only)' which I have tied to Opt+Shift+Mousewheel which allows me to turn up and down my metronome without opening the menu, really useful when time-correcting a dynamic performance.

**10. Snapping:** Enables/Disables snapping, which you can do by clicking the icon or pressing Opt+S, and right-clicking the icon gets you to the snap settings.  
 What snap does is to allow more precise editing by snapping your items to the grid, meaning, If I move an item, the beginning (or snap offset) will always snap to the grid, and never fall slightly after or before the grid.

_Bonus Tip: By default, holding Shift while dragging on an item temporarily disables snapping._

**11. Locking:** Press L or click the icon to enable/disable Locking, or press Shift+L or right-click the icon to open the Lock parameters. This is Project-based locking, not to be confused with locking items and tracks, and it's a very under-utilized feature in my opinion. You can set several things to be locked when this is enabled, such as locking the left-right movement of items (useful for mixing), the markers and regions (once you have them finalized), the time selection (if you are doing precise work like exporting libraries or stems) and so on.

**12. (Custom) Unsolo All:** While Command+Clicking any solo button on any track will unsolo all, I found that I need to be able to just click this with one hand when I'm recording, so I added it to the main toolbar.

**13. (Custom) Solo in front:** I have covered this before [in this video, so check it out](https://youtu.be/9CpTS9zvoW8) if you're wondering.

**14. (Custom) Unarm all tracks:** This is very useful if you are forgetful like me and you have big projects going on, where you have intermittently armed various audio and MIDI tracks for recording, and moved on to other things. Then you start recording and suddenly, you're recording 10 tracks while playing only one. Hence why I added this icon to my toolbar.

**15. Item Edit grouping and selection grouping:** You can enable/disable grouping temporarily by pressing Opt+Shift+G. Think of this like suspending the groupings temporarily. With this on, grouping items behaves as it should. With this off, you will temporarily be able to control and edit individual items in a group. Additionally, right-clicking it gives you access to another preference for selecting any item in a grouping to select all the items, which is useful if you want to use further actions and mouse modifiers on the grouped items, like fade or trim, or dynamic split.

**16-17. Mute/Solo Guide Track:** This is really for me, and if you watch my sound design series you will know what this does ([explained here](https://www.youtube.com/watch?v=V1K0uSvKChk)).

**Cycle Action 1: Cycle through relevant grid sizes**

![](/blog/rfrt/70/26.png)

_Pretty simple and_ [_Courtesy of Jon Tidey_](https://www.youtube.com/watch?v=PvzbBeW_F4c)_. (Unfortunately I wasn't able to find the direct video to link you to.)_

I have this set to \*\*Cmd+\*\* and it toggles through my most commonly used grid settings. You can add as many as you want. Make sure NOT to put a step at the end or beginning, just between each command. For more on Cycle Actions, watch [Episodes 3](https://youtu.be/PQAaAN6AI0I), [4](https://youtu.be/cve527gA22M), and[ 5](https://youtu.be/SwbcLZDccB0) of Rapid-Fire REAPER tutorials. (Don't worry, they used to be 2 minutes long!)

**Cycle Action 2: Cycle through ruler options**

![](/blog/rfrt/70/27.png)

Another great candidate for a cycle action. Like with Grid Sizes, there are simple too many commands to cycle through all of them each time. I have my 4 most-used ruler types in this cycle action, each with or without a secondary time unit, and I can quickly cycle through them without opening any menus (Normally, you'd have to right click the ruler and menu-dive to change these) with **Ctl+Opt+R.**

The first mode is for **Music.** The second mode is for **Film Music.** The third mode is just for **Film sound editing,** and the final one is for **Podcast/Radio Editing.** I added samples to the last one to give me some visual differentiation, as timecode and minutes:seconds look very similar at a glance.

**Conclusion**

I love the main toolbar for all the preferences it gives me access too, as well as being a great visual indicator of what Editing Behaviours I have enabled, but moving my mouse over from my items to click them is not necessarily something I enjoy doing. By making all these hotkeys executable with my left hand alone, I get the fastest possible workflow with just a mouse and keyboard.

Here's the video:

<youtube id="lu-TjJk-_Ak"></youtube>

New videos out every Monday at 12pm EST and Friday 1pm EST!

If you like the work I do, [you can donate to me here](http://www.buymeacoffee.com/iddqdsound) or by clicking the image! Every little helps, so even if you send a dollar or two my way, I’ll be eternally grateful to you!

[![](/blog/rfrt/70/8.png)](https://www.buymeacoffee.com/iddqdsound)

**My Reaper Stash:** <https://stash.reaper.fm/u/IDDQDSound>

**Follow me on Instagram:** <https://www.instagram.com/iddqdmusic/>

**My Music:** [**https://Soundcloud.com/iddqdmusic**](https://soundcloud.com/iddqdmusic)

[ ](https://soundcloud.com/iddqdmusic) [**https://iddqdmusic.bandcamp.com**](https://iddqdmusic.bandcamp.com/)  


