---
tags:
  - MIDI Editing in REAPER
  - Custom Actions, Cycle Actions & Scripts in REAPER 
  - Hotkeys & Mouse Modifiers in REAPER
  - From N00b to GOAT
date: 2021-11-16
youtube: V5XqgHdWsH8
related-posts:
  - /blog/rfrt/36
---

## The Quick way to Adjust MIDI Grid Size (Rapid-Fire REAPER Tutorials Ep94) ##

![](/blog/rfrt/94/RFRT-Ep94.jpg)

Hey folks!  
 In [this episode](https://youtu.be/V5XqgHdWsH8) I wanted to take a deeper dive into MIDI Grid Sizes, Types & how I customized the REAPER defaults to allow for a smoother more fluid way to adjust the grid size as we edit, since the defaults leave a whole ton to be desired. I have covered all my MIDI Hotkeys in Two separate videos before. Find [Part 1](https://youtu.be/0Ch9hLZBh5M) & [Part 2](https://youtu.be/ByfB7OYzR4E) or [a whole playlist dedicated to MIDI Editing](https://www.youtube.com/watch?v=akqKvLiO0xc&list=PLjvmrOUg3J0qpyLea1FiRBrpfWyRaUbgg) on the channel! I'll also be sharing my Entire MIDI Editor Keymap below, but be warned that you would need both the [SWS Extension](https://www.youtube.com/watch?v=JSpDNz8c_do) and MPL Scripts from [ReaPack](https://www.youtube.com/watch?v=S2a4QWqZ53M) installed! Find the link to install MPL Scripts below and refer to the linked videos for more info on how to install them. For now, let's get to it!

**The Basics & Defaults of MIDI Grid Size**  
**Setting Grid Size & Grid Type:** With a MIDI Editor Window open, you can access and change your Grid size & type from the bottom left corner.  
 ![](/blog/rfrt/94/rfrt94-1.png)  
 _The default way to change grid size & type is via the dropdown menus above!_  

 **1. Grid Size:** The Grid Size is a number expressed in fractions or whole numbers, relative to the length of a whole note, or a single measure in 4/4 time. For example, a grid size of 1/4 is a quarter note, 1/8 is an eighth, & 2 is 2 whole measures in 4/4 or 8 quarter notes.  
 **2. Grid Type:** 2 of the 4 Grid Types will modify the Grid Size in some way:  
 **Straight:** The straight grid doesn't modify the grid size or the grid lines in any way. 1/8 is 1/8, 1/16 is 1/16 and so on.  
 **Triplet:** With the Triplet grid type selected, the value set in the grid size dropdown menu is multiplied by 2/3.  
 _For example 1/8 triplet is equal to 1/12, because 1/8 x 2/3 = 2/24 = 1/12_   
             _1/4 triplet is equal to 1/6, because 1/4 x 2/3 = 2/12 = 1/6_   
 **Dotted:** With the dotted grid type selected, the value set in the grid size dropdown menu is multiplied by 3/2.  
_For example 1/8 dotted is equal to 3/16, because 1/8 x 3/2 = 3/16_  
            _1/4 dotted is equal to 3/8, because 1/4 x 3/2 = 3/8_  
 **Swing:** The swing grid type doesn't multiply the grid size by anything. Instead it shifts every other grid line to be later or earlier than they would normally be. You have control over this using the swing strength slider. (more on this in a moment)  
 **3. Note Length:** When set to Grid (like in the image above) the length of every note input using the mouse is equal to the size of the grid. However, you can set this to any size that you want! For example, if you want your notes to ring out in an arpeggio pattern, you can set the grid size to 1/8 to input notes on any of the 8 grids, but set the Notes length to 1/4 so that each note rings out an additional eighth.  

**Adjusting Swing Strength:** The Swing strength slider sets the swing strength, which determines how much every second grid line is shifted in time, in relation to a straight grid type. At 0% there is no difference between the straight & swing grid types at all! Negative values will shift every second grid line earlier than where they would normally fall, while positive values will shift every second grid line later!  
Writing MIDI using the Swing grid type will give your passages the swing feel. You find examples of this feel all over the music spectrum, most commonly in Jazz but also very commonly in Rap & Hip-Hop, Funk, Be-Bop & Even film music. If you want to give your MIDI passages a sense that they are performed by a human, you should probably use the Humanize function instead of the swing type, as this is a totally separate feel than simply a humanized passage!
![](/blog/rfrt/94/rfrt94-2.gif)  
_When the grid type is set to swing, you get an additional slider to control the swing strength!_  

**What's Wrong with the defaults?**  
The only way to change the grid size by default is by clicking on the dropdown menus to change the grid size and type to pre-determined values, or with grid size you can also manually type in ANY FRACTION or whole number to change to less common grid sizes (more on this in a moment). The obvious problem with this is that it's slow. It may be fine enough if your entire MIDI passage is written in a single type of note length, but if that's not the case, every time you need to change it, you need to move your mouse down there, change the grid size, and possibly also the grid type, only to have to come back down to the dropdowns in a short moment. I also found that I constantly forget to change the grid type, when, for example, I switch from 1/8 triplet to 1/4 straight. So my preference is to set some hotkeys so I can simply look at the dropdowns to know where I'm at, without almost ever needing to click on them. These are the actions I use & the hotkeys I've assigned to them. All these actions are in the **Action List>MIDI Editor**:  
**Commmand+Control+Mousewheel** -  Script: mpl_Adjust MIDI Editor grid (mousewheel).lua*  
**P** - SWS/NF: Toggle triplet grid**  
**O** - SWS/NF: Toggle swing grid**  
**Command+Control+Option+Shift+Mousewheel** - Grid: Adjust swing strength (MIDI CC/mousewheel)  
*This is a custom script by mpl. Copy this link to ReaPack to download all mpl's actions. Watch [this video](https://www.youtube.com/watch?v=S2a4QWqZ53M) for an installation guide. Paste this into ReaPack:  
 https://github.com/MichaelPilyavskiy/ReaScripts/raw/master/index.xml

**Pressing each of these toggle hotkeys again will revert the grid type back to straight!

 Simply using these 4 actions, I can adjust my grid size and type on the fly, without ever having to go down to the dropdown menus. The only time I would go there, is when setting my grid size to a less common value, such as 1/20 for 16th quintuplets or 1/14 for eighth septuplets. The mpl action will still work in those contexts to get me to multiples of these sizes such as 1/10 or 1/7.  
 You may notice that I don't have a hotkey to toggle dotted grid (though the action for it does exist in SWS) and that's because I can always get to a dotted value from what I already have. Since a dotted note is always one & a half times in duration, I can simply double my grid size and then click and drag on 3 grids to get a dotted note. **Remember that the note length is only valid when you double click to insert a note, if you single click and drag, you will be able to insert notes that are any length, if the length is a multiple of the grid size. Holding Shift will allow you to ignore snap!**
 ![](/blog/rfrt/94/rfrt94-3.gif)  
 _Click to insert notes, click & drag to insert longer notes!_

**How about a Cycle action?**  
 Every time I make a tutorial showing how I have set multiple hotkeys for similar actions, someone mentions a [cycle action](https://www.youtube.com/watch?v=PQAaAN6AI0I) and that lets me know that they don't fully understand how cycle actions work (ie they cycle). Let's take changing the grid type as an example: I can create a cycle action to cycle through the straight, dotted, triplet & swing grid sizes. This is not going to be as efficient as having two toggle hotkeys, because:  
 A. We can't reset cycle actions. If I press it twice to end up in triplets, then want to go to dotted, I'd have to press it 3 more times.
 B. We don't know which part of the cycle we're on until the action is executed. So I may have pressed the hotkey 3 times a while ago to get to swing, and then an hour later I want to set it to swing again. Pressing the hotkey will first go to straight, and then I'd need to press it twice more to get back to swing (because I also may have change the grid size another way)  
 So yeah, cycle actions aren't always superior. With my set up, I am never more than 1 key press away from any value. If I'm in straight, a single key press takes me to triplet or swing, and while in either mode a single press of the same key takes me back to straight!

**Additional Hotkeys & an alternative workflow**  
Apart from the 4 actions above, I have additional exclusive hotkeys to set my grid to 3 of my most-often used grid sizes:  
**8**: Grid: Set to 1/8  
**6**: Grid: Set to 1/16  
**3**: Grid: Set to 1/12 (1/8 triplet)  
If you look for 'Grid: Set to' in the **Action List>MIDI Editor Section** you will find all the versions of this action, which you can set hotkeys for, or you can grab all of them and add them to a toolbar. I find this excessive, since I hang out in these 3 grid sizes 90% of the time. Any longer values I can get to by clicking & dragging, and I can always use my mousewheel to cycle through the rest, in the rare occasions where I do use them! Again, you do you!

**Other weird Grid Sizes**  
As we said before, we can type in any value in the grid size window, such as 1/20, 1/10, or 1/28, but even better, any fraction works here. So I can manually type in a value like 5/8 or even 3. This is really useful when you have a specific rhythmic pattern for chords or a rhythmic structure for your entire song that never changes. You can simply input your notes as large chunks and then split them afterwards. I can write chords while my grid is set to whole notes, then set my grid type to 1/8, for example & split them to grid. I do this by pressing **Cmd+Opt+x** which I have assigned to **split notes on grid** a native unassigned REAPER action! 
 ![](/blog/rfrt/94/rfrt94-4.gif)  
 _You can set your grid size to whole notes, write your chords, then split them & further edit the rhythm, instead of entering tens of the same notes over and over again!_

**Conclusion**

I hope you enjoyed this tutorial, and hopefully it's once again clear that, with a bit of customizing, REAPER's MIDI Editor can not only rival any other DAW, but blow them right out of the water! To make your life a little easier, you can download my entire MIDI Editor section keymap below:  

[IDDQD Sound - MIDI Editor Keymap](/blog/rfrt/94/iddqd_MIDI-Editor-Keymap.ReaperKeyMap)

To install, simply open your action list, go to the MIDI Editor Section, then click on Keymap>Import shortcut keymap, and navigate to the file.  

Here's the video:

<youtube id="V5XqgHdWsH8"></youtube>

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

