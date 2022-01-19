---
tags:
  - Item-based Editing & Mixing in REAPER 
  - Custom Actions, Cycle Actions & Scripts in REAPER 
  - REAPER Hacks & Workarounds
date: 2021-06-14
youtube: LD_HFJATtQs
related-posts:
  - /blog/rfrt/65
---

## How to swap beats 2 & 4 with custom scripts (Rapid-fire REAPER Tutorials Ep78)

![](/blog/rfrt/78/75.jpg)

Hey Folks!

Hey folks! One of my lovely donors asked for a tutorial on how to swap beats 2 and 4 of a song, so [here's a quick tutorial](https://youtu.be/LD_HFJATtQs) with some cool custom scripts that make this quite easy to do! Swapping beats 2 and 4 of popular songs is a relatively recent trend on YouTube ([Here are some examples](https://www.youtube.com/results?search_query=swap+beats+2+and+4)) but above and beyond the meme value of doing this, it can actually achieve some quite interesting results!

Changing out beats 2 and 4 (The downbeat in many western styles of music) will alter the melody and sometimes even the harmony of a track, while leaving the beat relatively unchanged. You will end up with a song that feels more or less like it did before, but all these new patterns emerge that can be hilarious to hear, but also interesting to explore. It could be a great way of injecting some interest into an otherwise stale arrangement, and all of these types of procedural random alterations can get you out of rut!

So anyway, here are the steps for doing that:

1. Make sure your song tempo matches the project bpm, and that it works on grid. ([Watch this video](https://www.youtube.com/watch?v=A4M4BoYcwPc) for a full explanation, as we will go over it very quickly in the video)
2. Set your grid size to 1/4. You can do this by clicking on your grid settings in your main toolbar, or [I have some other methods of quickly doing it as explained in this video](https://youtu.be/lu-TjJk-_Ak?t=190).)
3. Run the native REAPER action 'Item: Split items at timeline grid' with your item selected. This will split your song into 4 items per measure.
4. Download & Run 'spk77_select every nth item within time selection' with your track selected. This script doesn't actually require a time selection to work.\*

![](/blog/rfrt/78/76.png)

5. Select your track, and set the script settings to every 4th item, with the offset at 1. You can do this by hovering over each bit of text and moving your mousewheel. This is not very usual but it's the only way this script works. Doing this will select the 2nd item on each measure, starting on beat 2 and ending on beat 3. You can now Group these items (G by default, or you can right click and choose 'Group items'. Optionally run 'set items to random color' to get some visual differential for beat 2 items.

6. Rinse and repeat for beat 4, changing the offset value to 3 using your mousewheel. This will select the 4th item on each measure, starting on beat 4 until the measure end. Similarly group and color these items.

7. Drag each group of items to its own track. You can make this more foolproof by going to mouse modifiers>media items-left drag and assigning a mouse modifier to 'move items vertically'. Move beat 2 items to the second track and beat 4 items to the third track.

8. Double click on the Track Control Panel for track 2 to select all its items, move them from beat 2 to 4. Then do the same for track 3, moving the items from beat 4 to beat 2.

9. Drag all items on track 2 and 3 back to track.

10. Look at the end of the item and you may have some extra items, which happens if your track starts on measure 1 but doesn't end on a measure but in the middle of a measure!

11. Optionally select each group of items and holding shit and dragging on their ends, add a small crossfade for each one. You can also glue it to get a new audio file for your track. Done!

**Downloading Custom Scripts**

You can [download the spk77 custom script here](https://github.com/ReaTeam/ReaScripts/blob/master/Items%20Editing/spk77_Select%20items%20within%20time%20selection%20on%20selected%20tracks.eel), or you can make your life much easier by using ReaPack. Check out [this tutorial by my friend Myk from Let's Talk about REAPER](https://www.youtube.com/watch?v=S2a4QWqZ53M) for a step-by-step tutorial on this!

**Conclusion**

There you go! Hopefully this will be useful to you. Thanks to my wonderful donor EJV for suggesting this tutorial. Here's the Video:

<youtube id="LD_HFJATtQs"></youtube>

![](/blog/rfrt/78/8.png)

If you like the work I do, [you can donate to me here](http://www.buymeacoffee.com/iddqdsound)! Every little helps!  
 Join the REAPER squad on our Discord Server:  
 <https://discord.gg/YwQESKpBfE>

**My Reaper Stash:** <https://stash.reaper.fm/u/IDDQDSound>

**Follow me on Instagram:** <https://www.instagram.com/iddqdmusic/>

**My Music:** [**https://Soundcloud.com/iddqdmusic**](https://soundcloud.com/iddqdmusic)

[ ](https://soundcloud.com/iddqdmusic) [**https://iddqdmusic.bandcamp.com**](https://iddqdmusic.bandcamp.com/)

