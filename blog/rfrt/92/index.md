## MIDI 101: Editing MIDI Velocity (Rapid-Fire REAPER Tutorials Ep91)

![](/blog/rfrt/92/RFRT-EP92.jpg)

Hey folks!  
 It's been a while since we've done a MIDI related video, but in [this episode](https://youtu.be/er38jXJRDVo) we’re taking a deep dive into editing MIDI Velocity! When you perform MIDI Parts, Velocity comes naturally, and of course we can use MIDI JSFX to control it further. While we Edit it becomes a separate set of operations to edit Velocity. Of course, we can do this afterwards, and [I've covered that in detail before](https://www.youtube.com/watch?v=0Ch9hLZBh5M) but today I also want to show you some of those actions in more detail, to see what options we have for editing MIDI Velocity on the fly as we edit, which can be very useful for Stuff like Drum Editing, and overall working with sample libraries with multiple samples per note based on Velocity! 

**Setting a "default" Velocity Value for Notes?**  
I put default in quotes because, if we're being nitpicky, there's no such thing as a "default" MIDI Velocity value in REAPER, something which you could maybe change in the preferences. Arguably though, what REAPER has is a lot more useful. MIDI Notes that you insert using your mouse, by clicking, double clicking, dragging to draw, or painting (or any other method using a mouse, all of which I've covered [in this video](https://www.youtube.com/watch?v=pw743Lk70PA) in detail) will simply take on the Velocity of the last selected/inserted note. This may sound confusing so let me elaborate: The first time you ever opened REAPER's MIDI Editor, your velocity would have been something like 127. Notes will continue to be 127 forever, but you may have noticed that value changing later. This will happen when you select a note of any other velocity, which then sets that as the default. So the key to understanding why it randomly changes, is to learn how it changes, and there are a few ways:  
**1. MIDI Piano Roll**: In your MIDI Editor window on the left, you see a keyboard. Clicking on the keys there will play you the sound associated with that note. However, this also sets the velocity for new notes. **The closer you are to the left of the keys, the new velocity value will be lower (notes will be played softer) and the closer you are to the right of the keys, the new velocity will be higher (notes will be played harder). The velocity value is not tied to the note on any of the keys you are playing. It simply sets the new value for all notes that you will insert, until you change it.  
 ![](/blog/rfrt/92/RFRT91-1.png)  
 _The colors you see corresponds to REAPER color scheme for note velocity, but are overall a rough estimate. In reality, the curve of the velocities is skewed on both ends, so if you want to be at maximum velocity, clicking anywhere after the note names on the keys will get you to 127!_

 **2. Selecting a note**: The Velocity for new MIDI Notes will also change if you click on a MIDI note, if the Velocity of that note is different from the one currently set. This only works when you click on a note to select it, and not when you right drag to marquee select them, for example. This may not seem super useful on its own (just yet) but it does provide a level of convenience because we don't want to constantly go and click on the Piano roll. The Piano Roll is also not precise. When you click on it, you will hear the note you clicked at the velocity you clicked on based on where on the key you clicked, but you won't know the velocity value exactly until you insert a new note.

  So going back to the question above, if you have a specific value in mind (like 100) that you want to set all new MIDI notes to, what can you do? Well the easiest way is to start by inserting a note, so just double-click anywhere on your timeline and you got a note. Its velocity may be whatever right now, but we can use **Opt+Left Drag** to change its velocity, and set it to any value. As a side note, I have changed these values for myself and added some new ones. Note that I use **Control+Left Drag to edit note velocity**, and I have **Command+Control+Left Drag set to fine edit velocity**, so using a combo of these, I can get to 100. As always, I encourage you to visit **Preferences>Mouse Modifiers** and look at the **MIDI Note** context, because there are lots of useful modifiers that are unassigned, and you may want to change some of them based on what you're used to in other DAWs. Here are my settings for that window:  
  ![](/blog/rfrt/92/RFRT92-2.png)  
  _My favourite unassigned one here is Stretch note positions (arpeggiate) but that's for a [whole other video](https://www.youtube.com/watch?v=ByfB7OYzR4E)_

 Alternatively, you can change the velocity by **left dragging these pin-looking things** on your Velocity CC Lane, which is visible by default, otherwise, click on the dropdown menu on the bottom left to select Velocity, which is the first CC lane (though technically Velocity is not a CC Lane). Once again, there's lots of Mouse Modifiers in the **MIDI CC Lane** context that you should look at.  
  ![](/blog/rfrt/92/RFRT92-3.png)  
  _Since Velocity is not a CC lane, these little handles appear when you have Velocity selected instead of a continuous line. Each MIDI event has exactly one velocity value, which is packed into the MIDI note._  
  

**Pimping the defaults**  
If you watch this channel, you know that I am perpetually baffled by how many awesome actions in the MIDI Editor Section of your action list are unassigned. There are 4 such unassigned actions that I use for the bulk of my on-the-fly and post-composition Velocity Editing. Here are the names and the asssignments I have given to them:  
**G - Edit Note Velocity -10**  
**Y - Edit Note Velocity +10**  
**U - Edit Note Velocity -1**  
**I - Edit Note Velocity +1**  
The keyboard warriors amongst you will notice that these keys are adjacent on your keyboard, and I can place my left hand on these four keys, with my pinky snuggly resting on the G key on the lower row, and this is my default position when editing MIDI. Right hand on the mouse, to insert notes and scroll, Left hand is on these four keys, with my thumb easily within reach of the Right-side shift key, to assist with scrolling side to side:  
 ![](/blog/rfrt/92/RFRT92-4.png) 
_Rest your fingers in this position & practice with this and you will get quick at editing Velocity as you go!_

 You may not want to use these exact keys, but whatever you end up using, do consider the ergonomics of it, try to use adjacent keys, with no modifiers so that you can work with it fluidly. I see editing like an instrument to master, so proper posture not only speeds up your workflow, but also reduces the risk/inevitability of you developing carpel tunnel while crafting your masterpieces throughout your career!

 **My Method**  
 So using the four Actions above, I can edit MIDI Velocity as I write, with complete control over the Velocity values. Starting with my Velocity set to a round number (like 70), I can click to insert notes. The last inserted note is also highlighted, so now I can use my 4 keys which my left hand is resting on, to edit the velocity. When I insert a new note, that note will retainthe original central value I have, in this case, 70, so I can click through and add notes and edit each velocity value from 70 up & down by 10 or 1. If at any point I want to select a new central value, I can insert the first note, edit the velocity to the new value (For example, hitting I five times to get to 75) and then again click to insert new notes at a Velocity of 75, while adjusting inserted notes velocity around that central point! Very easy! 

 **My Method vs. the Jon Tidey Method**  
 For more complex velocity moves, like ramping them up and Down, or setting velocity values for all notes of the same pitch class to a specific number, I first write out my notes, and then edit them later. For cresendos, I can use my mouse modifier from **MIDI CC Lane - Left Drag** where I have set **Command to Draw/Edit CC lane values** and if I want to set all values for the same note to the same number, I can right-click that pitch in my piano roll, and then use my hotkeys there. These hotkeys will work both on the fly but also when selecting multiple notes, so I prefer them to the [Jon Tidey method](https://www.youtube.com/watch?v=pVuOHgOyp0Q) of creating Custom Actions to insert notes at preset velocities, as those will then require you to come up with another system for post-editing of velocity values.  
  That said, of course, the whole point of REAPER is to let users do what they feel comfortable with, and as always there's pros and cons to both methods. Really I'd say learn both. I didn't get used to that set up because I was already used to mine, but I can see how that would be superior, if you, for example, only do Drum Editing. I find that method less fluid, as with most instruments I need more than just 4 preset values, and creating more and more actions and taking up more hotkeys is just not ergonomic!

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

