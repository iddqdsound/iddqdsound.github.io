---
tags:
  - REAPER SWS Extensions Demystified
  - Unique REAPER Features 
  - Mixing Tips & Workflow Improvements in REAPER
date: 2021-10-20
youtube: atWmyZxob30
related-posts:
  - /blog/rfrt/90
---

## SWS Snapshots: How to save/recall mix states with one click (Rapid-Fire REAPER Tutorials Ep86)

![](/blog/rfrt/86/190.jpg)

Hey folks!  
 In [this episode](https://youtu.be/atWmyZxob30) we're gonna take a deep-ish dive into SWS: Snapshots. I have to admit, [I have covered this topic in the past](https://www.youtube.com/watch?v=DsWC4XbVXSA), but I did a terrible job of it, and nearly a year into these tutorials, I feel like I have earned myself a re-do! Also while we're on the topic of A/B action from [the last tutorial](https://youtu.be/3EhIoFe3vEY), we may as well get this out of the way!

**What are Snapshots?**
Snapshots are like save points within your project for the overall state of your mix. Unlike regular saving, Snapshots don't save every single thing in your project (more on that in a second) but also unlike regular saving, recalling snapshots can be done instantly and without having to load an actual project! This makes them the perfect for the mixing/mastering stage!

With Snapshots, you can save and later recall multiple states of your entire project or certain tracks, including their levels, pan, I/O routing, FX Chain and parameters, and more!

They are THE staple feature of SWS in my opinion, an extension that offers so much I can't imagine living without it ([Here are instructions on how to install SWS!](https://www.youtube.com/watch?v=gVbMbqGSB7E))

**The Snapshots Window**

Go to **Extensions>Snapshots** to open this dockable resizable window:

![](/blog/rfrt/86/191.png)

Click on 'New' or right click on an empty name column and choose 'New Snapshot' to create your first snapshot. Your first snapshot will save the current state of your entire project, but we can change that to 'Current Visibility' to only save visible tracks, or 'Custom' to select a subset of the 10 things Snapshots can save. These are:

**-Pan:** Pan position, type, Width, & pan law of tracks  
**-Volume:** Fader position of tracks  
**-Mute:** Mute state of tracks  
**-Fx Chains:** Assignment, Settings & Routing of track FX Chains  
**-Solo:** Solo state of tracks  
**-Sends:** Assignment, Fader Position, Pan & Mono Summing of Sends  
**-VIs:** Track Control Panel & Mixer Control Panel Visibility status of tracks\*

**-Selection:** Current Track Selection\*  
**-Phase:** State of polarity switch of tracks & Sends  
**-Offset:** Manual playback offset assignment of tracks (in Track I/O & 0 by default)

_\*I took a page out of_ [_the SWS manual_ ](https://www.sws-extension.org/download/REAPERPlusSWS171.pdf)_and left these two for another tutorial, as they are their own kind of monster all together!_

There are also some things that Snapshots WILL NOT SAVE so note that Snapshots cannot entirely replace regular saving and in fact, snapshots themselves are only truly saved after the project is saved. Otherwise quitting the project without saving will not save snapshots created in that session! These settings are among the things that Snapshots will not save:

-Items Position, Length, Rate  
-Items Fade, Take FX, Snap Offset, Mute state  
-Markers & Regions ([though SWS has a feature for that too covered here](https://youtu.be/Vzx4F-IaCKw))  
-Project-wide preferences (Snap, Ripple State, etc.)  
-Automation

_Note: Snapshots WILL NOT Bring back deleted tracks & items!_

**Snapshots Filter Options**

**-Filter on recall:** upon recalling an older snapshot, will only load the selected subset (10 boxes above the option) of states.  
**-Save Sel Tracks Only:** Snapshots saved will only save states of selected tracks (works in conjunction with Full Mix, Visibility & Custom options above). You can still choose Full Track Mix, but that will only save all the settings for selected tracks, so hopefully that distinction is clear!  
**-Recall Sel Tracks Only:** Will only load states of selected tracks. This works even when your actual snapshots contains more states which is very useful!  
**-Show Snapshots for selected tracks:** Hides snapshots that don't include references to selected tracks (useful for huge projects with many track/group-specific mix states)  
-Prompt For name: Creating New Snapshots will instantly ask you to name them!  
**-Hide New Tracks on VIs Recall:** Tracks newly created since the snapshot saved will also be hidden upon recall.  
**-Prompt on recalling deleted tracks:** When a snapshot is recalled that includes references to tracks deleted since it was saved, you will be prompted to delete or keep references to those tracks from the snapshot. Clicking Yes will remove the references to deleted tracks. Clicking No will close the window but you will prompted again on next recall, unless you untick the box.

![](/blog/rfrt/86/192.png)

**-Previous/Next**: Recalls Previous/Next Snapshots from selected snapshot.  
**-Move Up/Down:** Use when you need to re-organize your snapshots!

**Right-Click Menu**

Right-clicking the body of the window will open a right-click menu with some additional & some duplicate options:

![](/blog/rfrt/86/193.png)

Some are very obvious but here are some of the less obvious ones explained:  
**-Merge Into Project:** Opens additional window (we will cover this below) to help integrate a snapshot into a project that has gone through some changes.  
**-Show Snapshot Details:** Opens additional window (covered below) with text information on what the snapshot contains.  
**-Add/Delete Selected Tracks to snapshot:** A special type of overwrite. This retains/removes all the info currently in the snapshots, but adds references to the selected tracks.  
**-Overwrite Snapshot:** fully re-writes all the settings in selected snapshot with current mix state.  
**-Export/Import Snapshot:** Used to move snapshots between projects. Very useful for migrating settings from a current mix to similar mixes. For example, I will probably get a good mix on my new album's drums once and then export that to all other projects from there, making minor adjustments. Snapshots are Text files with a special extension (.swssnap)

**Merge Window:**
This window is shown when 'Merge into Project', 'Import snapshot' or 'Paste snapshot' are selected.

![](/blog/rfrt/86/194.png)

From the left two columns, you can match/unmatch tracks, useful for when you import or export tracks, or if your track names/structure has changed since the last recall.  
 You can unchain two tracks, or chain any two tracks to each other.  
On the right, you have the same filter window to further customize your new snapshots, and you can then choose to save your new settings as its own snapshot!

**Snapshot Details:**
Clicking on 'Show Snapshot Details' will open this window:

![](/blog/rfrt/86/195.png)

This window contains text information of everything saved in a given snapshot, such as the name of plugins, States that are unsaved (off) or the saved state of what was saved.  
 Familiarizing yourself with these also helps in case you have some plugins that you no longer have access to. You can manually erase them by exporting the snapshots, editing them in any text editor, and re-importing them into the project!

**Usage**

Obviously the uses for a feature this massive are endless, but here are some things I use them for:  
 **-Saving the Starting Point of my mixes:** When I start a mixing project, after importing, grouping and routing my tracks, I take my first snapshots. I can always go back to square one if I hit a dead end.  
 **-Creating checkpoints in the mix:** Similarly, at certain milestones I keep a snapshot, like when all levels & pans are set, when basic EQ & Compression is done, etc.  
 **-Experiments:** I can save snapshots of my current mix, and then go nuts on it, experimenting with weird routing & plugins, knowing that I can safely return to the point of sanity!  
 **-A/B ing Mixes:** With a few snapshots, you can quickly A/B your mixes. Is it really better now than before you added any plugins? Does your experimental DSP sound as good as the more straight-forward one? Of course, you don't have to A/B per se, you can save and switch between any number of states!  
 **-A/B ing track groups:** With multi-mic setups, you can toggle between having some or a blend of all of them or none of them. You can take your time & level match these so you don't fool your ears as you A/B/C/D!  
 **-Changing perspective/Width of projects:** You can save certain image-based settings as separate snapshots per groups of tracks and mix and match to find an image you like. Save your drum mix from drummer & audience perspective and audition both against your track. Instantly go between a full LCR mix of your guitars/keys & a more panoramic approach.  
 **-Compare FX Chains, gear & monitoring systems:** Put them on tracks, dial each in, and instantly switch between hem. You can also see if you get a vastly different when mixing with Headphones vs. Speakers and make possible corrections to your set up.  
 **-Live Performance:** Once we bring in live performance into the mix, the possibility once again multiply! Especially if you change a lot of settings while performing live, you can save these on the fly and toggle between vastly different FX Chains. Just remember that the more complex the switch, the more time you need to allow REAPER to unload/load them. Do lots of testing and plan it out carefully based on your upcoming performances!  
 -**Comment with how you use them & I'll add them here.**

**Conclusion**

Snapshots are one of the features that make REAPER a step above any other DAW in my opinion. In my older DAWs, I always had a weird fear of experimenting, or pushing things too far once I had a "safe" mix going but safe mixes are also boring in my opinion.  
 The only solution with other DAWs is to Constantly save new versions of your mix (Logic has an approximation of snapshots with project alternatives, but nowhere near this level of functionality IMO. Pro Tools has Playlists, but not the same thing, in fact, REAPER could use playlist IMO)  
 The best analogy I can think of is that mixing without snapshots is like playing an old arcade machine or NES console. You are too careful not to die, because you don't want to start over, so much so that it can actually give you anxiety. REAPER & SWS make mixing like a modern video game, where you can go nuts and have fun knowing that you are always a few clicks away from your last checkpoint, and will only lose a few minutes of work at worst!

We will definitely revisit Snapshots in the future, as I doubt any single video can truly do its vast feature set justice and still be palatable!

Here's the video:

<youtube id="atWmyZxob30"></youtube>

![](/blog/rfrt/86/8.png)

If you like the work I do, [you can donate to me here](http://www.buymeacoffee.com/iddqdsound)! Every little helps, so even if you send a dollar or two my way, I’ll be eternally grateful to you!  
 Join the REAPER squad on our Discord Server:  
<https://discord.gg/YwQESKpBfE>

Become a member of ‘IDDQD Sound’ on YouTube: <https://www.youtube.com/channel/UCXom6oGEQL7iBGTGaCpyHng/join>

**My Reaper Stash:** <https://stash.reaper.fm/u/IDDQDSound>  
**My Reaper Repository:** <https://github.com/iddqdsound/reaper/raw/main/index.xml>

**Follow me on Instagram:** <https://www.instagram.com/iddqdmusic/>

**My Music:** [**https://Soundcloud.com/iddqdmusic**](https://soundcloud.com/iddqdmusic)

[ ](https://soundcloud.com/iddqdmusic) [**https://iddqdmusic.bandcamp.com**](https://iddqdmusic.bandcamp.com/)

