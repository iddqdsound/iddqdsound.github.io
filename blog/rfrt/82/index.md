---
tags:
  - Custom Actions, Cycle Actions & Scripts in REAPER 
  - Hotkeys & Mouse Modifiers in REAPER
  - Item-based Editing & Mixing in REAPER
date: 2021-08-09
youtube: 349_Vdvaqfc
related-posts:
  - /blog/rfrt/5
---

## 20+ Hotkeys, Mouse Modifiers & tips for Fades and Crossfades (Rapid fire REAPER Tutorials Ep82)

![](/blog/rfrt/82/2.jpg)

Hey folks!  
 [This episode](https://youtu.be/349_Vdvaqfc) will be dedicated to hotkeys, mouse modifiers and preferences related to fades and crossfades. Below you can also download my custom hotkeys and mouse modifiers and I'll also show you how to manually add them!

Let's start with the list of all the hotkeys:

![](/blog/rfrt/82/3.png)

As you can see there are only two default hotkeys, one to toggle auto-crossfade on/off, which you can also do by clicking on the crossfade icon on your toolbar (looks like an X) and the other requires a time selection and item selection.

Of course most of the actions we need for fading and crossfading are done via mouse modifiers, but some additional hotkeys can also make our life easy and our fades more precise!

Normally, if you have auto-crossfade enabled, you can move/trim two items to overlap and a crossfade will be created. Easy! However there are times where you may want to make precise crossfades without adjusting the timing of your items. For this, we use X.

First make a time selection for the duration of your fade, and next select two items that are to be crossfaded. You can do this step by step, or you can use the mouse modifier 'marquee select items and time'. This used to be the default until Razor Edits were introduced.

Here's how to set it:  
-Go to Preferences>Mouse Modifiers & choose 'arrange view' as context and 'right drag'.  
-Double click on the column in front of Opt/Alt, or alternatively choose an unassigned mouse modifier.  
-In the menu that open, choose 'Marquee select items' and then 'Set time selection'.  
-Now you can use the modifier+right drag to select items and time in one go.

![](/blog/rfrt/82/4.gif)

I've additionally added some custom hotkeys for batch fading, as well as to change fade/crossfade curve shapes for one or multiple items.

**Crossfade Editor**

![](/blog/rfrt/82/5.png)

The crossfade editor can be opened by double click on the fade line on any item, or additionally you can set a hotkey for it as I have (Cmd+Shift+Opt+F). This will open the window above where you can make precise edits to one or multiple crossfades as well as audition them in real-time.  
 By default, all the parameters in this window are linked, but you can unlink them and work on each side of the crossfade separately.  
 You can also save your crossfades as a preset.  
 **Equal Gain vs. Equal Power:** As a general rule of thumb, you should use an Equal Gain crossfade when crossfading between two items containing the same-ish sound, like two different iterations of the same drum loop, or to crossfade between two chunks of the same recording, where you may have removed a bit of it in the middle. You use Equal Power to crossfade between two different-sounding items. Equal Power ensures that the loudness level is maintained for the duration of the fade. I usually just use Equal Power, unless this causes a boost in volume (which happens with phase-coherent items).

**Fade parameters:** You can adjust the curve, fade shape, start and end time, and length of each fade from this window. You can also unlink these parameters and customize each side. For example you can adjust the volume of each item to make the fade smoother if needed.

**Auditioning fades:** On the right hand side of the editor, you can tick the 'audition' box and use the transport buttons on the bottom left to play your crossfade. You can also set pre and post-roll durations, solo the track, and so on!

**Editing Multiple Fade-ins/outs**

The crossfade editor is for crossfades. To do any kind of batch fading the best approach is to use the Media Item Properties, by selecting multiple items and hitting **f2**.  
 We also have a [video covering Media Item Properties in detail](https://youtu.be/1u0e5tjxPcg).

**Mouse Modifiers**

![](/blog/rfrt/82/6.png)

As we said before, most of our fading and crossfading is done using the mouse. Above you can see the list of defaults and I have added only a couple of custom mouse modifiers as the default features are already plenty robust.

The ones that I don't like are the click/double-click based ones as there's usually a thin area where the click will work on the fade and this system is very foolhardy.

**Setting Custom Mouse Modifiers**
You can customize your mouse modifiers from Preferences>Mouse Modifiers. You can also pin this window to use as a cheat sheet as you learn your mouse modifiers. There are many different Contexts in mouse modifiers. Clicking on different areas of REAPER, or on different regions around items, automation lanes, and the ruler, etc. will do different things and each of these are its own context. Let's look at the Media item fade/autocrossfade context. These are mouse modifiers for what happens when you hover the mouse near the top edge of any item, or in the cross-section between two adjacent items:

![](/blog/rfrt/82/7.png)

After selecting the context from the dropdown menus above, you will see a list of modifiers in the 'Modifier' column and the action associated with the modifier in the 'behavior' column.  
 Actions with a ● in front of them indicate that the behavior has been changed from the default (like the Control Modifier above). If the behavior column in front of a modifier is empty, that modifier is unassigned for that context.  
 Contexts can be modified completely independently of each other, but there are certain conventions that apply to all of them, and it's good to keep them in mind.  
 For example, adding shift to any modifier usually does the same behavior while ignoring snap. Similarly, Command+Opt modifiers are usually for batch editing behaviors. You will become more familiar with these as time goes by. The Control(Windows) modifier is usually unassigned and here's where we can add behaviors of our own. You can also double click on any of these to modify the behavior.

_Note: Not every action in REAPER can be assigned to a modifier. However, most double click contexts allow you to open the action and choose any action. For dragging and clicking, you're usually limited to a certain number of behaviors but this is a good thing!_

as an exercise, navigate to the context above and manually set Control to 'Adjust fade curve'.

**Importing/Exporting Mouse modifiers**
by clicking the import/export button on the top right of the Mouse modifiers window, you can save and recall mouse modifiers for one or all your contexts. This is great to quickly import settings from another user (like the ones you can download below) and it's also useful if you wish to switch between two different behavior groups quickly! Online you can find modifier configurations to make REAPER behave like other DAWs for example.

Before importing my modifiers, you can click on import/export and save your modifiers for all contexts as a backup. Next you will need to go to each context, choose 'import modifiers for this context' and import mine!

Iddqd_FadeXfadeMouseMods

.zip

Download ZIP • 3KB

In this bundle you can find mouse modifiers for 3 contexts. Each file ends with the context name. Try importing them after exporting your mouse modifiers as a backup, or simply set them manually!

**Conclusion**

Fades are a great way to explore the true power and potential of mouse modifiers, one of REAPER's best features not found in any other DAW (that I know of). We will continue to explore different contexts as we go!

Here's the video:

<youtube id="349_Vdvaqfc"></youtube>

![](/blog/rfrt/82/8.png)

If you like the work I do, [you can donate to me here](http://www.buymeacoffee.com/iddqdsound)! Every little helps, so even if you send a dollar or two my way, I’ll be eternally grateful to you!  
 Join the REAPER squad on our Discord Server:  
 <https://discord.gg/YwQESKpBfE>

**My Reaper Stash:** <https://stash.reaper.fm/u/IDDQDSound>  
**My Reaper Repository (Copy link to ReaPack):** <https://github.com/iddqdsound/reaper/raw/main/index.xml>

**Follow me on Instagram:** <https://www.instagram.com/iddqdmusic/>

**My Music:** [**https://Soundcloud.com/iddqdmusic**](https://soundcloud.com/iddqdmusic)

[ ](https://soundcloud.com/iddqdmusic) [**https://iddqdmusic.bandcamp.com**](https://iddqdmusic.bandcamp.com/)

