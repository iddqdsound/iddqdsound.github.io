---
tags:
  - MIDI Editing in REAPER
  - Custom Actions, Cycle Actions & Scripts in REAPER 
  - Hotkeys & Mouse Modifiers in REAPER
  - From N00b to GOAT
date: 2021-11-03
youtube: er38jXJRDVo
related-posts:
  - /blog/rfrt/36
---
## MIDI 101: Editing MIDI Velocity (Rapid-Fire REAPER Tutorials Ep91)

![](/blog/rfrt/92/RFRT-EP92.jpg)

Hey folks!  
 It's been a while since we've done a MIDI related video, but in [this episode](https://youtu.be/er38jXJRDVo) we’re taking a deep dive into editing MIDI Velocity! When you perform MIDI Parts, Velocity comes naturally, and of course we can use MIDI JSFX to control it further, but while we edit using a mouse, it becomes a separate set of operations to edit Velocity. Of course, we can do this afterwards, and [I've covered that in detail before](https://www.youtube.com/watch?v=0Ch9hLZBh5M), but today I want to show you some of those actions in more detail, focusing on the ones that are useful for editing MIDI Velocity on the fly! 

**Setting a "default" velocity value for Notes?**  
I put default in quotes because, if we're being nitpicky, there's no such thing as a "default" MIDI velocity value in REAPER, ie something which you could maybe change in the preferences. Arguably though, what REAPER has is a lot more useful & fluid than that! MIDI Notes that you insert using your mouse, by clicking, double clicking, dragging to draw, or painting (or any other method using a mouse, all of which I've covered [in this video](https://www.youtube.com/watch?v=pw743Lk70PA) in detail) will simply take on the Velocity of the last selected note. This may sound confusing so let me elaborate: The first time you ever opened REAPER's MIDI Editor, your velocity would have been something like 127. Notes would've continued to be 127 forever, but you may have noticed that value changing later. This hapens when you select a note of any other velocity, which then sets that value as the new "default". So the key to understanding why it randomly changes, is to learn how it changes, and there are a few ways:

**1. MIDI Piano Roll**: In your MIDI Editor window on the left, you see a keyboard. Clicking its keys there will play you the sound associated with that note. However, this also sets the velocity for new notes. **The closer you are to the left of the keys, the new velocity value will be lower (notes will be played softer) and the closer you are to the right of the keys, the new velocity will be higher (notes will be played harder)**. The velocity value is not tied to the note on any of the keys you are playing. It simply sets the new value for all notes that you will insert, until you change it. Instead of calling this the default, **I'm gonna refer to this from now on as the "Central Value"**.   
 ![](/blog/rfrt/92/RFRT91-1.png)  
 _The colors you see corresponds to REAPER's color scheme for note velocity, but are overall a rough estimate. In reality, the curve of the velocities is skewed on both ends, so if you want to be at maximum velocity, clicking anywhere after the note names on the keys will get you to 127!_

 If you don't need to be super-specific about your velocity values, this is a fine way to change them, as you can hear the new velocity, and if the value is 87, instead of a round 90, you probably don't care and it probably doesn't affect the underlying VSTi much!

 **2. Selecting a note**: The central value for new MIDI notes will also change if you click on a MIDI note, if the velocity of that note is different from the one currently set. This only works when you click on a note to select it, and not when you right drag to marquee select them, for example. This may not seem super useful on its own (just yet) but it does provide a level of convenience because we don't want to constantly go and click on the Piano roll. The Piano Roll is also not precise. When you click on it, you will hear the note you clicked at the velocity you clicked on based on where on the key you clicked, but you won't know the velocity value exactly until you insert a new note. Inserted notes on the other hand, do show you the velocity value, if you have the state of the action **View: Show velocity numbers on notes** to on. Look for it in the Action List in the MIDI Editor section, if your MIDI values don't display this value.

  So going back to the question above, if you have a specific value in mind (like 100) that you want to set your central value to, what can you do? Well, the easiest way is to start by inserting a note, so just double-click anywhere on your timeline and you got yourself a note. Its velocity may be whatever right now, but we can use **Opt+Left Drag** to change its velocity, and set it to any value. As a side note, I have changed these values for myself and added some new ones. Note that I use **Control+Left Drag to edit note velocity**, and I have **Command+Control+Left Drag set to fine edit velocity**, so using a combo of these, I can get to 100.  
  As always, I encourage you to visit **Preferences>Mouse Modifiers** and look at the **MIDI Note** context, because there are lots of useful modifiers that are unassigned, and you may want to change some of them based on what you're used to in other DAWs. Here are my settings for that window:  
  ![](/blog/rfrt/92/RFRT92-2.png)  
  _My favourite unassigned one here is Stretch note positions (arpeggiate) but that's for a [whole other video!](https://www.youtube.com/watch?v=ByfB7OYzR4E)_

 Alternatively, you can change the velocity by **left dragging these pin-looking things below** on your Velocity CC Lane, which is visible by default, otherwise, click on the dropdown menu on the bottom left to select Velocity, which is the first CC lane (though technically Velocity is not a CC Lane). Once again, there's lots of Mouse Modifiers in the **MIDI CC Lane** context that you should also look at.  
  ![](/blog/rfrt/92/RFRT92-3.png)  
  _Since Velocity is not a CC lane, these little handles appear when you have Velocity selected instead of a continuous line. Each MIDI event has exactly one velocity value, which is packed into the MIDI note byte, alongside its note value and channel number._  
  

**Adding a few actions to edit velocity values quickly**  
If you watch this channel, you know that I am perpetually baffled by how many awesome actions in the MIDI Editor Section of your action list are unassigned. There are 4 such unassigned actions that I use for the bulk of my on-the-fly and post-composition Velocity Editing. Here are the names and the asssignments I have given to them:  

**G - Edit Note Velocity -10**  
**Y - Edit Note Velocity +10**  
**U - Edit Note Velocity -1**  
**I - Edit Note Velocity +1**  

The keyboard warriors amongst you will notice that these keys are adjacent on your keyboard, and I can place my left hand on these four keys, with my pinky snuggly resting on the G key on the lower row, and this is my default position when editing MIDI: Right hand on the mouse, to insert notes, marquee select notes and scroll, Left hand is on these four keys, with my thumb easily within reach of the Right-side shift key, to assist with scrolling side to side:  
 ![](/blog/rfrt/92/RFRT92-4.png) 
_Rest your fingers in this position & practice and you will get quick at editing velocity in no time!_

 _Note: It's up to you whether you want to use these exact keys for your workflow, but whatever you end up using, do consider the ergonomics of it, try to use adjacent keys, with no modifiers so that you can work with it fluidly. I see editing like an instrument to master, so proper posture not only speeds up your workflow, but also reduces the risk/inevitability of you developing wrist/shoulder pain while crafting your masterpieces throughout your career!_

 **My Method**  
 So using the four Actions above, I can edit MIDI velocity as I write with complete control! Starting with my central value set to a round number (like 70), I can click to insert notes. The last inserted note is also highlighted, so now I can use my 4 keys which my left hand is resting on, to edit the velocity. When I insert a new note, that note will retain the central value, in this case, 70, so I can click through and add notes and edit each velocity value from 70 up & down by 10 or 1. If at any point I want to select a new central value, I can insert the first note, edit the velocity to the new value (For example, hitting I five times to get to 75) and then again click to insert new notes at a Velocity of 75, while adjusting inserted notes velocity around that central point! Very easy! 
 ![](/blog/rfrt/92/RFRT92-5.gif)  
 _Look at me go!_  
 For more complex velocity moves, like ramping them up and Down, or setting velocity values for all notes of the same pitch class to a specific number, I first write out my notes, and then edit them later. For cresendos, I can use my mouse modifier from **MIDI CC Lane - Left Drag** where I have set **Command to Draw/Edit CC lane values** and if I want to set all values for the same note to the same number, I can right-click that pitch in my piano roll, and then use my hotkeys there.  

 **My Method vs. the Jon Tidey Method**  
  You should also check out how [Jon Tidey of the REAPER Blog tackles this](https://www.youtube.com/watch?v=pVuOHgOyp0Q)! I won't get into the details but check out the video, but to summarize, his method is to create Custom Actions to insert notes at preset velocities under mouse. So with his method, you already input notes at the velocity you need, so once you're used to it, it could be lots quicker. I saw his tutorial after I was already really accustomed to my system, so I set it up but it never fully made it into my muscle memory. 
  
  Of course, the whole point of REAPER is to let users do what they feel comfortable with, and as always there's pros and cons to both methods. Really I'd say learn both, and here's my two cents on the Pros & Cons of each:
  **My Method**  
  **Pros**:  
  ✓ Works both while writing & in Post Editing  
  ✓ Works on multiple selected notes  
  ✓ You can get to any value from 1 to 127  
  ✓ Great for Expressive instrument writing (orchestral instruments, realistic VSTi like Bass & Guitars)  
  **Cons**:  
  ✘ Requires multiple hotkey presses for drastic jumps in dynamics (ie 5 times to go down by 50)  
  ✘ Less suitable to quickly insert hard hits & ghost notes in a pattern  
  **Jon Tidey Method**  
  **Pros**:  
  ✓ Faster after you're used to it  
  ✓ Great for Drum Editing  
  ✓ Easy to access really soft & really hard dynamics quickly for creating dynamic patterns  
  **Cons**:  
  ✘ The hotkeys don't work for post editing, so an additional set up is required  
  ✘ Inserting notes under mouse cursor may slow you down if you're writing instruments vs. drums  
  ✘ Changing the preset values is more difficult  

   So really, the best way is to have both and switch between them based on context! If you do lots of MIDI Editing, really memorizing 8 hotkeys is a small price to pay for the fluidity that it'll bring you!


**Conclusion**

That's really all there is to it. Check out the Jon Tidey method too, and whatever you end up doing, the key is to practice with it, tweak it as you go and you will be fluent in it in no time! If you are new to my channel, or if you missed them, make sure to check out [this playlist](https://www.youtube.com/watch?v=akqKvLiO0xc&list=PLjvmrOUg3J0qpyLea1FiRBrpfWyRaUbgg) full of more hotkeys, mouse modifiers, custom actions, toolbars & hidden features all based around MIDI. 

Here's the video:

<youtube id="er38jXJRDVo"></youtube>

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

