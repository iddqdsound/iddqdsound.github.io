## Time Signature Mapping in REAPER: From N00b to GOAT

![](/blog/misc/4/202.png)

Hey folks!  
 In this episode we will explore time signature in REAPER in as much detail as possible. Based on the style of music you do, your time signature needs may range from very simple (setting one time signature per project) to very complex (needing to change time signatures often and also loop and arrange complex rhythm structures) and I tried to structure the video in a way that starts simple and works it up in terms of complexity so that hopefully you can hop on and hop off when you feel like all your time signature needs can be met!

That said, I highly recommend you watch all the way to Level 3 and check out my Time Signature Toolbar, which you can download, with all its icons right here:

iddqd_Time Signature Toolbar Download Bundle

.zip

Download ZIP • 45KB

**Contents:**
1 toolbar (iddqd_time signature toolbar.ReaperMenu  
29 toolbar icons

**Installation:**
Step 1: Make sure you have 'mpl*add x to y time signature' installed. If you don't you can import them in ReaPack (they come pre-packaged) under MPL Scripts>Various.  
Step 2: in REAPER, go to Options>Show REAPER Resource path in Explorer Finder  
Step 3: in your resource path, go to Data>toolbar_icons and paste all 29 toolbar icons there!  
\_IMPORTANT NOTE: by default, the toolbar will be imported and replace your toolbar number 15. If you have a toolbar assigned to that, do Step 4, otherwise, skip to step 5.*  
Step 4: open 'iddqd_time signature toolbar.ReaperMenu' with a text editor. at the very top you will see [Floating toolbar 15]. If your toolbar 15 is already occupied, change that number to that of an unassigned toolbar. In the next step, you will have to navigate to that empty toolbar.  
Step 5: in REAPER, go to Options>Customize menus/toolbars...

![](/blog/misc/4/203.png)

Step 6: From the dropdown menu on the top left (pictured above) navigate to Floating toolbar 15.  
Step 7: From the bottom right click on import, and navigate to my toolbar, and import it.

REAPER should automatically import the toolbar and its actions and all the toolbar icons! You can then set a hotkey to this, or add it as the contextual toolbar for your ruler (we will cover contextual toolbars in the near future)

**Creating a Time Signature Marker**
By default, your project will have a default tempo of 110bpm and will be in 4/4. You can change this for your project from **File>Project Settings...** or by placing your edit cursor at the beginning of your project (Default hotkey: **W**) and double clicking in the relevant fields in your transport bar.  
_Note: If you don't see time signature in your transport bar, right click on it and click on 'show time signature'_
You can also hit **Shift+C** to open this submenu:

![](/blog/misc/4/204.png)

**Position:** Determines the time where the marker will be placed.  
**Set Tempo:** When ticked, will change the tempo at the marker**Set Time Signature:** when ticked, will change the time signature at the marker  
**Set Metronome Pattern:** when ticked, allows you set your own custom beating patterns by the metronome, by inputting one of the 4 characters below:  
**A -** Primary beat **B -** Secondary beat **T -** Triplets **. -** Skip  
The number of characters in this box MUST correspond to the top number of your time signature. Normally all patterns will be beat as **A** for the first beat followed by all **B**s.  
 We will cover the rest of the options in the tempo episode!

**Important Hotkeys & Actions to know**
**Shift+C -** Insert tempo marker at edit cursor - This opens the tempo/time signature marker submenu, where you can create a tempo/time signature marker anywhere on your project, and set the beating pattern for the metronome.  
**Shift+T -** Insert Region at time selection - This is useful when you have a complex set of time signature markers that you want to duplicating/move around the timeline. For example, if you have a phrase made up of three 4/4 measures, and a 5/4 measure, that you want to loop, set a Region to the first 4 measures, then you can duplicate it using **Cmd+Left Drag.**
**Ctl+Shift+T -** This is a custom hotkey I have set to the action 'Insert measure from time selection (new time signature)...' which allows you to change the time signature and tempo of a section of your project, based on its duration! Useful for re-arranging or fixing your mistakes when time signature mapping!

**Alternative to using Regions**
I like to keep my region lane free to denote different sections of my song. Because of this, I prefer to use Empty Items to move/duplicate my time signature markers. To do this, make sure you are in **Ripple Editing All mode** and simply duplicate the item. Copying and pasting will unfortunately not copy over the time signature markers, but duplicating (**Cmd+D**) will!  
 You can insert an empty item by going to Insert>Empty MIDI Item after setting a time selection, or alternatively, you can set up a mouse modifier for the same action in **Mouse Modifiers>Track>Left drag.**

**Conclusion & Important announcement!**

My website is going to be down starting from September 9th for a short time, while I try to figure out where to move my domain, and honestly, I'm debating whether or not I should keep it at all. I feel like the blog posts take a long time to make and are rarely visited by you lovely folks! That said, if any of you really like these, please let me know. If they are actually valued by you folks, I'll do my best to maintain them! Of course, if you can, please donate to the channel as the cost of upkeeping a website is also quite significant, and not currently offset by what I make off of YouTube monetization!

Here's the video:

<youtube id="coffee.com/iddqdsound"></youtube>

![](/blog/misc/4/8.png)

If you like the work I do, [you can donate to me here](http://www.buymeacoffee.com/iddqdsound)! Every little helps, so even if you send a dollar or two my way, I’ll be eternally grateful to you!

**My Reaper Stash:** <https://stash.reaper.fm/u/IDDQDSound>  
**My Reaper Repository: https://github.com/iddqdsound/reaper/raw/main/index.xml**

**Follow me on Instagram:** <https://www.instagram.com/iddqdmusic/>

**My Music:** [**https://Soundcloud.com/iddqdmusic**](https://soundcloud.com/iddqdmusic)

[ ](https://soundcloud.com/iddqdmusic) [**https://iddqdmusic.bandcamp.com**](https://iddqdmusic.bandcamp.com/)

**How to Download my custom scripts**  
 You can download my custom script by copying the link below to your ReaPack. Go to Extensions>Import Repositories and paste this link:

<https://github.com/iddqdsound/reaper/raw/master/index.xml>

Next go to Extensions>Browse Packages and search for iddqd. You can then select some or all of my actions to install!

