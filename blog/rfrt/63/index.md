## SWS Smart Marker 201: Skip Markers & More (Rapid-Fire REAPER tutorials Ep63)

![](/blog/rfrt/63/188.jpg)

Hey folks!

[This is the third episode](https://youtu.be/QYRKtXG_5BU) on Smart Markers, so if you found yourself confused, watch [episode 1](https://youtu.be/Lu_Z5GFj0Ts) and [episode 2](https://youtu.be/88-aCc5dQ-k) first! We're gonna get into some more complex applications of Smart Markers through some examples, show you how to make a Skip Marker similar to what you have in Logic Pro X and other DAWs, and I'll also show you how to save Smart Markers and recall them as an action for future use!

**Skip Markers**

A skip marker is a marker that skips a part of your project. This is useful for mixing, arranging and more. Say you're mixing a project and want to know how your choruses sound back to back, but there's a minute of Verses and bridges in the way! With a skip marker, you can make REAPER skip those so you can audition the Choruses back to back!

**Smooth Seeking**

This is a REAPER feature that makes jumping to different parts of your project mid-playback more smooth, by waiting a determined amount of time (either by measures or regions/markers) before playing the part you are jumping too. This makes it more smooth and continuous. For Skip Markers and recording using Skip Markers, it's a good option to have on.  
-Go to Preferences>Audio>Seeking  
-Tick the box 'Do not change playback position immediately when seeking (smooth seek)  
-Set the amount of wait time. I keep it at the 1 measure default.

Now when I seek/skip/jump to another section, REAPER waits until the measure I'm on ends before jumping, creating a more smooth playback experience, which is similar to how Ableton, for example, triggers new clips at the start of the next measure/beat.

**Saving/Recalling Smart Markers (or any markers)**

My way of doing this is through using an outboarder script which you can download from ReaPack. ([Here's a tutorial](https://www.youtube.com/watch?v=S2a4QWqZ53M) on how to do that by 'Let's talk about REAPER') The action is called: 'Outboarder - Insert Marker at Edit cursor with custom Name and Color.lua'

You can use this action to save and recall a marker with a custom name and color. If you want to use it for multiple markers, you have to copy all the script text and pasting it in a new script. Here's how:  
-Download the Script: Outboarder - Insert Marker at Edit cursor with custom Name and Color.lua  
-Click on the action in the action list and choose 'Edit Action...'  
-In the script window, hit Command+A to select all the text, and Command+C to copy it!  
-Close the window and go back to the action list.  
-Click on 'New Action...' on the bottom and choose 'new ReaScript'. Give it a name you can remember.  
-In the empty script editor window, hit Command+V to paste the script text.  
-In the section called USER AREA set a name for your marker.  
-For smart markers, the same format applies (! followed by command ID)  
-Optionally select a color from the list in the script.  
-Hit Command+S to save the script.  
-Close the window.  
-Search for the name, and optionally assign a hotkey to it or add it to a toolbar!  
-Bob's your uncle!

**Skip Markers for Recording**

When we record, we can't just use skip markers how we normally do. When REAPER is recording, several navigational options are disabled. This is possible to configure through the actions list, but since those options are more useful left untouched in my opinion, I have a workaround:

We can use additional smart markers stop recording, then we can just seek as we normally do.

In the video you will see a complex set up where I can have REAPER start and stop recordings for me, really useful if you record yourself and away from your computer.

**Conclusion**

With Smart Markers you can essentially make REAPER your own recording assistant, and that helps get you as a performer, more in the zone and less distracted/worried about technicalities, you can also skip entire parts of songs if you don't play on those parts, all of which hopefully helps get a performance out of you! You may, however, be too lazy to create these complex structures from scratch every time, so in the next episode, we will go through ways of saving and recalling multiple markers for use in other project, so hopefully you only need to set this up once! Stay tuned!

Here's the video:

<youtube id="QYRKtXG\_5BU"></youtube>

If you like the work I do, [you can donate to me here](http://www.buymeacoffee.com/iddqdsound)! Every little helps, so even if you send a dollar or two my way, I’ll be eternally grateful to you!

**My Reaper Stash:** <https://stash.reaper.fm/u/IDDQDSound>

**Follow me on Instagram:** <https://www.instagram.com/iddqdmusic/>

**My Music:** [**https://Soundcloud.com/iddqdmusic**](https://soundcloud.com/iddqdmusic)

[ ](https://soundcloud.com/iddqdmusic) [**https://iddqdmusic.bandcamp.com**](https://iddqdmusic.bandcamp.com/)

