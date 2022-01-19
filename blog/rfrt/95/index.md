---
tags:
  - Custom Actions, Cycle Actions & Scripts in REAPER 
  - Hotkeys & Mouse Modifiers in REAPER
  - Recreating Logic Pro X features in REAPER
  - Item-based Editing & Mixing in REAPER
date: 2021-11-23
youtube: Eds4igcIh9A
related-posts:
  - /blog/rfrt/35
---

## Quick-Swipe Comping Logic Pro Style (Rapid-Fire REAPER Tutorials Ep95) ##

![](/blog/rfrt/95/RFRT-EP95.jpg)

Hey folks!  
 In [this episode](https://youtu.be/Eds4igcIh9A) we're gonna look at recreating a much-missed feature from Logic Pro X: Quick-Swipe Comping takes. One of my favorite things about REAPER is our ability to recreate many features and workflow types from other DAWs, and I have a playlist on some of the features I've covered from [Logic Pro X](https://www.youtube.com/watch?v=Eds4igcIh9A&list=PLjvmrOUg3J0pZQiONS59jspqM1kobRkTK) as well as [Pro Tools](https://www.youtube.com/watch?v=UNmnaRw4e0A&list=PLjvmrOUg3J0rREGxVkhUhKdHYc1T-Z9SP) So check those out if you happen to be a transplant from either of those DAWs. I'll be doing one on Ableton Live as well if any feature request comes through. Feel free to comment under any of my videos if you want a feature from one of these DAWs recreated! I haven't used any other DAW other than these 4 but if you explain any feature from Studio One, FL Studio or any other DAW, I can try to have a crack at those too! For now, let's get to it!

**WTF is Comping?**  

 It's common practice these days to record parts for a song multiple times (called takes), and if you use a DAW like REAPER or Logic Pro X (and Ableton as of Version 11), you are able to do this on one track, by recording over and over again onto the same track & in the same region. Once done, we usually go through takes phrase by phrase, and choose the best parts to create a composite take. A composite take, or a comp, is a recording comprised of bits and pieces from multiple pre-recorded takes!

**What is Quick-Swipe Comping?**  

 Check out the video for a detailed demonstration of this, but basically, quick-swipe comping is a feature in Logic Pro X that lets you quickly get a comp from a series of pre-recorded takes. Here's a GIF of how it looks:  
 ![](/blog/rfrt/95/swipe.gif)  
 _Swipe comping allows you to click and drag on takes to create a comp!_

**How to set up Quick-Swipe Comping in REAPER**   

REAPER's default way of dealing with takes is, well, kinda non-existent. Since takes are treated as any other item, there aren't really much in terms of dedicated actions for comping takes, but we can set all of it up using some preferences, some actions, custom actions & mouse modifiers, so let's go through all of them:  
**Enable Auto-crossfade**: From your main toolbar, click to enable auto-crossfade. This makes it so that when we split items with takes in them, there's a tiny crossfade that's inserted between them. This allows us to smoothly transition from one take to another, and in a second you will see how we will use these crossfades and a mouse modifier to approximate a quick-swipe between takes.  
**Set up some hotkeys**: The following actions need to be set up to make quick work of comping. Luckily, most of these are native REAPER actions, but some have no shortcuts assigned to them, so for those, I'll tell you the keys I'm using. All of these actions are native REAPER actions found in the Main section of your action list:

(default) K - Item: Switch to next take in items  
(custom) Shift+K - Item: Switch to previous take in items  
(custom) Y - Take: activate take under mouse  
(custom) S - Item: Split item under mouse cursor (Select Right)  
(default) Cmd+H - Item: Heal splits in items  

 Using these actions, we can quickly get to a rough comp. At this stage, we're basically aiming to chop the entire recording into phrases, so if it's a vocal recording featuring 4 phrases with some rests between them, at this stage we will simply make 3 splits using **S**. From there, I can use **Y** to select the take under mouse cursor (or clicking works too! You'll see why I have this set up in a second), or using **K** & **Shift+K**, I can cycle through each take to find the phrase I like. If you make one too many cuts, you can always use **Cmd+H** to heal those splits. _Note that this only works if adjacent selected items have the same source file._

**Set up Mouse Modifiers**: To do the actual swipe-comping, we can then hover our cursor over the auto-created crossfades between our takes, and use **Shift+Left Drag** to move crossfade ignoring snap. This is a default Mouse modifier, found in **Preferences>Mouse Modifiers>media item fade/crossfade - Left Drag**.  
![](/blog/rfrt/95/swipe-reaper.gif)  
_When you hold shift, your cursor changes into the icon above, and you can swipe away!_
 
 So this is the method I use to get a quick comp going and then finessing each crossfade to the perfect spot, preserving the tail of phrases and making sure to catch the beginnings. I personally don't really miss swipe-comping anymore, while I'd admit that this is not EXACTLY like Swipe-comping.

However, I see no need to get nitpicky about something like this either. If you ask me, we've all gotten a bit too spoiled by modern DAWs and especially by REAPER. We get so much from these programs in terms of quick and easy fixes to age-old problems & customizations, but we tend to forget how far we've come in terms of recording and editing technology. Not 50 years ago, comping involved multiple pieces of physical tape and a real-life razor blade. You would scrub at painfully slow speeds through recordings, find the right place to cut basically blind, and then split the tape using an actual blade, and then splice together a bunch of tape to get a comp going. If you ever made a mistake, cut something too close to a phrase, that was it! There was no undo button, there was no way of correcting your mistake without some degradation, and if there were no copies, you lost that take forever. You'd get fired from your studio gig, decide to hitchhike down to Mexico to take your mind off things, and before you know it, you would take some tainted drugs at a beach party, OD miles away from home and no one ever heard of you again. So when I hear people complain about possibly having to click a few times too many to get somewhere, or nitpick about features that are even at their worst a thousand times faster than what was possible not too long ago, I can't be asked to muster up the tears to empathize. I mean yeah, you may have to memorize a hotkey or 3, but is it really worse than OD'ing in Mexico? I didn't think so...

**What's next? Committing, Locking, & Collapsing the comp**  

 After your comp is done, you have a few options to proceed. If you are fully committed to your take and strapped for storage space, you can simply **right-Drag** to select all items, then **right-click>Take>Crop to active take** or press **Opt+Shift+T** to basically commit to the takes you've selected, removing the rest. From there, you can also glue items to get a single contiguous audio file, and then you can clean up project directory to reduce the size of your project. Alternatively, you can **right-click>Take>Duplicate active take** or press **Cmd+Ctrl+Backslash** to make a copy of all your selected takes and paste them as a new take, which is handy because it preserves all previous takes in the same order. You can also **right-click>take>Lock active take** which prevents your mouse-clicks from accidentally selecting another take, but you will still hold on to all the takes as they were. Locking the active take **ONLY PREVENTS MOUSE CLICKS** from changing the take, but you can still use any action/hotkey to change them. This is why I have **Y** set to **Activate take under mouse**. There's little chance that I will accidentally press it, but while my takes are locked I can still change them without having to unlock them.

  Finally, you can de-clutter your takes by going to **action list** and finding **Show takes in lanes (when room)** and running it to set its state to off. This will collapse all your takes to the active one, but you can still use the K & Shift+K hotkeys to switch between them!

**My Custom action**

 My Custom action, which you can download below, combines the two actions **split selected item under mouse (select right)** & **take: activate take under mouse** into a single action. My suggestion is that you set this up as a Mouse modifier in **Media Item - left click** by choosing Option (assigned by default to something kinda useless IMO) and selecting action list. From here, select your custom action from the action list and choose select. Now, by holding option & left clicking, I can split the item and choose the take under mouse cursor in one go. Check out the video to see it in action! 

 You can download this action and import it into REAPER, or go to my Github Repository (linked below):  
 [IDDQD Sound - Split & Select Take under mouse](/blog/rfrt/95iddqd_Split-and-Select-take-under-mouse.lua)


**Conclusion**

I hope you enjoyed this tutorial, and hopefully it'll be a close enough approximation of swipe-comping. If not, drop me a line in comments, and I may take a crack at scripting the exact behavior, though again, if you ask me, our method is even better in some ways!

Here's the video:

<youtube id="Eds4igcIh9A"></youtube>

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

