---
tags:
  - Advanced REAPER Tutorial
  - REAPER SWS Extensions Demystified 
  - Templates in REAPER
  - REAPER Tracks
  - Ideas for Custom Toolbars in REAPER
  - REAPER Hacks & Workarounds
date: 2022-01-16
youtube: Mp97UB9Ctro
related-posts:
  - /blog/rfrt/51
  - /blog/rfrt/52
---

## Assembling Modular Mixing Templates with SWS (Rapid-Fire REAPER Tutorials Ep98) ##

![](/blog/rfrt/98/RFRT-EP98.jpg)

Hey folks!  
 In [this episode](https://youtu.be/Mp97UB9Ctro) we're looking at how to assemble a modular mixing Template from Track Templates, with a little bit of help from SWS Resources. We have covered some parts of SWS Resources, which you can find [in this playlist](https://www.youtube.com/watch?v=APEZ75IOJ0o&list=PLjvmrOUg3J0pEil4PDHyupUI-9MQwsPmd) but it's quite a large topic so this episode will focus on the Track Templates tab!
  
 This Episode was inspired by a question from a viewer, so if you ever have any REAPER or Audio-related questions, shoot them my way as a comment and I will make you a tutorial, or point you towards a tutorial by me or other REAPER tutorial makers!

**WTF is a Template?**

 This one may be a bit obvious, but it's never safe to assume everyone knows what a Template is. Templates are a way of saving the set-up stage of a project. Say you're in charge of making labels for Boxes of Pasta. Now, all the labels need to be in the same dimensions, use the same font, and have the same colour as your company brand, and you have to make 10 of these. Instead of making 10 boxes from scratch, increasing the risk of you making a formatting mistake, you can make a template of a simple one, with everything placed and sized and coloured how it should be, and then you just copy that 10 times and fill in the information.

  So in the REAPER world, a template serves the same purpose. Whether you make music, or podcasts, or edit videos, there's steps involved in setting up a project, that are not only always the same, but extremely boring and time-consuming to do: Creating a bunch of tracks, naming and colouring and ordering them, placing basic FX on them, and then routing them to receive tracks, and organizing them in folders. A template gives you a way to set all that up, and then just load a copy of it for your next project, instead of do all the clericals from scratch!

**Track Templates vs. Project Templates**  

 So, as far as my knowledge of DAWS go (which is quite a lot if I may say so myself) REAPER is the only DAW that features Track Templates (correct me if I'm wrong) and that's possibly why they are quite under-utilized! Most of us migrated to REAPER from another DAW, and most DAWs just have Project Templates (REAPER has both) so when it comes to mixing for example, the common wisdom for years has been to make a template and use it for every mix.

This is totally fine and totally works, but there are definitely some pros and cons. Before we get to those, let's quickly define track templates: While a project template is basically a blank set of tracks, layouts, and routing in a project, a track template is not part of a project. It's simply a collection of tracks that can be quickly loaded into any project. This may seem like not much of a difference but in reality it's huge to have both options! 

 Project Templates are great IF your workflow really is remaining THE EXACT SAME. Say you recorded an album, consisting of multi-mic'ed Drums (the same mics and arrangement on every track), Bass, Guitar, Vocals and Piano. In this case, a project template will save you lots of time, because all your different tracks that you will mix will have the same tracks, in the same order, possibly with all the same settings, plugins, and routing. Project Templates in this case also give your project some uniformness. Your Drums are always panned the same way, using the same buss compressors etc. and you don't have to repeat these steps! 

 Some people have a Mixing Template that they use on ABSOLUTELY EVERY PROJECT they mix. I'm not a huge fan of this personally. Project Templates are a great starting point, and of course you still have the option to change anything or everything once you make a copy, but, using the same template, you also run the risk of falling back on old tricks, running into old problems, and just really doing the same thing without ever having the need to innovate. Of course, I have a favorite Snare Reverb and it makes tons of sense to have that ready to rock in my mixing template, but at the same time, using the same reverb on everything I do? Sounds a bit uninspiring! 

 The other downside to Project Templates is their relative inflexibility. Say your mixing templates is 100 tracks divided into 5 groups, but you receive a mix that is 20 tracks, but divided into 9 groups. In these cases, Mixing templates are possibly too bulky, and whatever time you save setting up the project, you lose trying to thin out the project, losing the extra unwanted tracks, and making the the new group busses etc.

 Project Templates do have some features that Track Templates don't also: In a project template, all your routing is saved, as well as many extra bells and whistles like [track layouts](https://www.youtube.com/watch?v=ixjuqrkA4k0), Monitoring FX, Master Track FX, and Routings done between Busses, etc. 

 On the other hand, Track Templates don't save those things, and any routing that is saved in Track Templates needs to be selected. So for example, if You have a Drum Bus, and all your drums feed into a Reverb in your FX Bus, and you save your Drum Bus by selecting all the Drum Bus tracks, then those routings to the FX bus aren't saved with the Track Template, because the FX Bus wasn't selected. More on this in a second.

 Another downside of Track Templates is that it does take a longer time to assemble a project from a bunch of Track Templates, than it is to simply load a project template. For best results with Track Templates, you also need to pay attention to naming and organizing them, so you don't forget what's what in 2 years, and if there's one thing I know, is that remaining organized is Kryptonite to many creative folks!

 Working with Track Templates can reduce the risk of all your projects sounding the same. With time and more projects, you can accumulate more of them (by going through finished projects and saving a few) and soon you'll have a huge arsenal of track template, each working as a distinct unit, and you can mix and match a bunch of them based on the needs of the project, eliminating the need to foresee every possible mixing scenario, reducing the need to de-clutter, and avoiding the monotony of using the same project template for every project.

  Think of it as having a powerful Synthesizer or a bunch of modular synths. A synthesizer you can pretty much plug in and play, but you may soon realize you always get the same results. With a modular synth units, you have to assemble and route them, so it's not plug and play, but you get so much versatility in return! 

**Saving Track Templates**

 Simply Select any number of tracks, right click and choose 'Save tracks as track template...' and you will be prompted to name the Track template and select a destination for them to be saved, which is by default a folder called 'Track Templates' in your REAPER resource path. You can also create additional sub-folders and I highly recommend you do, and I also highly recommend you number Track Templates inside each folder if order matters to you. You'll see why these are good practices in a second, if the thought of being organized isn't incentive enough!

 Track templates will save all selected tracks' names, colour, icons, parent/folder relations (if parents/children are selected), routing (if sending/receiving tracks are selected) as well as input assignments, layouts, Input and Track FX, and (optionally if you check those boxes while saving them) items & envelopes!

 They will not save any routing to/from tracks that aren't selected and they also do not save 'Learned' parameters. If you want to save those, you should use FX Chains, or look into [ReaLearn](https://www.helgoboss.org/projects/realearn/) or [CSI](https://forum.cockos.com/showthread.php?t=183143). Finally, Track Templates don't save with them layouts assigned to their respective tracks (if any).

**SWS Resources**  

 By default in REAPER vanilla, there is a rather lengthy way of setting up actions to load Plugins, or FX Chains, using the FX Browser, which we have covered [in this video](https://youtu.be/rRYcndmRs0M) but there's not a native way of assigning actions to load Track templates. You can simply right click in the TCP area, and choose 'Insert Track From Template' then navigate to the Track Template you want to load and click it. This is a fine system, but could be annoying if you are loading multiple ones, as the menu closes every time. 

 A viewer of the channel recently asked if putting Track Templates in a toolbar is possible, and SWS Resources makes this possible! 

 Start by going to **Extensions>Resources** to open the window below:  
 ![](/blog/rfrt/98/RFRT-95-1.png)  
 _The Resources Window is fully dockable and resizable!_

 Let's go through its different sections:

 **1. The top panel:** The first two icons on the top left are for importing & exporting Resources. The next Dropdown menu is for navigating between different tabs of the window. You can also use the + icon to add or the - icon to remove tabs. By default, these tabs are available: FX Chain, Track Template, Project, Media file, Image, & Theme. In the image, the FX Chain tab is showing.

 **2. The Slots:** Your tabs may be empty when you first open them, but you can right-click and choose add slot, to add slots for each of these tabs. In the image you can see 5 FX Chains showing with their names (2) and paths (3).

 **3. The Path Column:** Double-clicking the Path column for any of the slots will run the action specified on the bottom panel (5). More on this in a second. To load a new Resource to a slot, first right click on an empty slot and choose 'add slot' then right-click on the path in front of the added slot and choose Load slot/file, then navigate to your item/track template/fx chain.

 **4. The Comment Column:** This is just for you to take notes if you need to remember your resources! Totally optional!

 **5. The Bottom panel:** the dropdown menu on the bottom left is where you can choose what action is run when any slot is double-clicked (3) and the text box on the bottom right is for running searches.

 **Auto-fill settings:** You can also right-click on an empty slot and choose auto-fill. Auto-fill will automatically populate available slots on the selected tab, with contents of a folder. First select the auto-fill directory (in our case, a folder we made with all our mixing Track Templates) and then right-clicking again and choosing Auto-fill. If you took my advice and put all your related track templates in a folder and numbered them, the auto-fill function will import them quickly and in the right order!  
  ![](/blog/rfrt/98/RFRT-95-2.png)  
 _notice how slots 8-13 on my Track Templates tab all belong to the same path (relative to the Track Template Folder) and are ordered according to the numbers I assigned. Without numbers, they will be auto-filled alphabetically! 

**What does doing this do?**

 So why do we add some or all our Track Templates, FX Chains, or Media items to this window? Two reasons:

 -The Resources window is kinda like our inventory, our bag of tricks, if you will. I can always load track templates up by right-clicking, or FX Chains by going to the FX Browser, or media items through the media explorer, but here we get to have all of those in the same place, and maybe some of our go-to ones can be here to quickly double-click and load.

 -Adding Track templates to the resources gives us Actions to load them, and having actions means we can use our resources as part of custom actions, assign hotkeys to them, or put them in toolbars!

**Actions to import tracks from Track Template**

 After you loaded a few of your favorite Track templates to resources you can simply dock the resources tab, and then double-click the desired slots to load them, or you can get fancy and add them to toolbar or set hotkeys to them. I use all three methods myself! 

 To access the actions, go to your Actions List and search for 'SWS/S&M: Resources - Import tracks from track template, slot' and you should see a few actions here corresponding to the slot numbers you see in the Track templates tab. Do with these actions what you will. 

 One potential issue may be that you don't have enough slots. By default, only the first 8 slots have actions available for them. You can get around this by (1) docking the resources window and double-clicking, (2) using the action **'SWS/S&M: Resources - Import tracks from track template, prompt for slot'** followed by the desired slot number, or (3) you can mod your SWS config files to get up to 255 actions for your first 255 slots, which should be plenty!
 
 **What's a '.ini' file and how to modify it?**   

 .ini is a special text format for configuration files in a ton of software, including REAPER. With SWS installed, you can navigate to your resource path **(Options>Show REAPER Resource path in Explorer/finder)** and find the file titled 'S&M.ini' and you can open this file using any text editor! 
 ![](/blog/rfrt/98/RFRT-95-3.png)  
 _Notice that there are lots of .ini files, so make sure you have the right one!_

 The great thing about .ini files is that you can quickly "mod" REAPER by simply text editing these files and saving them. When you open REAPER, these .ini files are read and used to set up your install by your specifications, hardware, and so on. In the case of SWS, we can mod the .ini file to unlock extra actions. 

  With the file open in a text editor (any will do) press **Cmd+F (Mac) / Ctrl+F (PC)** to open the find text box, and look for 'resources'  
 ![](/blog/rfrt/98/RFRT-95-4.png)
 _Find the section called "[NbofActions]" and we are looking for the very first line there, called 'Import tracks from track template, slot n'_

 In front of the title, you will see an action ID starting with S&M and then equal sign, a number. This number is n. In other words, this number dictates the number of actions available to you for each given Resource action. Set this number to any number from 0 (to hide the actions) to 255 (the maximum allowed unless specified otherwise). I recommend starting with a modest 30 and adding more if needed. Once you made the change to the line (just the number) you can save this text file and close it! Make sure you don't modify any bit of text unless you know what it does. For the most part, stick to changing numbers here! We will cover this file in a future episode in more detail!

  Once you re-open REAPER, the 'S&M.ini' is read on startup, and the new actions will be made available in your action list. **If REAPER is open while you make changes, nothing will happen! It needs to be restarted!**

**Putting it all together!** 

 Once all of this is set-up, you can use these actions to quickly load track templates into a blank project, based on your project's needs. If your track only has Vocals and Guitar, then just load those Track Templates. If you have a large orchestral backing to a classic rock song, simply load your orchestral template and add your Drums, Guitar and Bass busses to it, and so on! 

  The original question here was in regards to adding these to a toolbar, but I honestly prefer the much easier, and better looking method of just docking the resources window on my default screenset, and double-clicking my way to a assembling my mixing template!


**Conclusion**

I hope you enjoyed this tutorial, and as always let me know if you have any questions, no matter how related/unrelated!

Here's the video:

<youtube id="Mp97UB9Ctro"></youtube>

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

