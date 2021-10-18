## Sound Editing & Design for Visual Media - Ep12 Tutorial Notes (Foley Recording in REAPER)

![](/blog/sd4vm/12/178.jpg)

Hey folks!

Welcome to Episode 12 of Sound Editing & Design for Visual Media! Our last episode was back in January. I've been busy recording my new album and March-May is peak film season for post-production folks, so I hope you've missed this series and had a chance to watch all previous episodes!

This episode is all about Recording Foley and our longest episode to date! Still, given that we've condensed literally months of learning into half an hour, it should be action-packed and watch-worthy! By the end of this episode, I will promise you that you will have a hard time recording Foley in any DAW other than REAPER!

The focus of this episode will largely be on being the Foley Recordist as opposed to Foley Artist. I wanted to show you my foley recording workflow, a system I devised while working at my first job out of film school. This system builds upon the decades-old foley recording procedures and protocols, while using REAPER's many awesome features and custom scripts, to automate a large amount of the clerical tasks involved in being a Foley Recordist.

My assumption in the video will be that those of you watching are at least somewhat familiar with foley, more than a bit familiar with REAPER, and hopefully may have even done a few sessions of foley recording at some point in your life. If this is you, you can skip the next chapter, which will be a 101 Foley crash course for those not so familiar with this incredible artform!

**What is Foley?**

Foley is the act of performing sound effects using our bodies and props in sync to picture! Performing is a keyword here, as much as it may get lost among all the other fancy words in that sentence. As opposed to SFX editing, which is cutting sounds to picture using a DAW, foley is a performance-based art form, and one that dates back to the advent of audio in films. [This wonderful video by Filmmaker IQ](https://www.youtube.com/watch?v=_Jznye0iqYE) takes a deep dive into the history of Foley (and SFX as a whole), how it came to be a useful method of post-production audio editing in the days before DAWs, and why it continues to be common practice for any film and animation, even with today's technology and the vast amounts of sound libraries at the fingertips of sound editors!

Foley falls under the umbrella of Sound Effects (SFX) in the film audio pipeline. We’ve already covered this in Episode 0 (which [you can watch here](https://youtu.be/7SXGtB3TQzo), or [read the blog post here](https://www.iddqdsound.com/post/sound-design-for-visual-media-tutorial-notes-ep00-ep01))

![](/blog/sd4vm/12/126.jpg)

_Foley, alongside SFX, SPFX & make up the SFX pipeline of film audio!_

Foley itself can be further broken down into three categories:

1. Footsteps

2. Props

3. Cloth (movement)

In short, Foley is the sound of the characters in a movie moving & interacting with each other, the set and various objects. The necessity to record foley for films stems from how the production phase of a film is typically conducted. During the shooting of a film, production sound crew focuses on capturing Dialogue. It’s nearly impossible to capture all the various sounds of movement on set like a character touching their body in a wide shot, or even the sounds of footsteps.

Even Dialogue, despite being the focus of production sound crew, is still often in need of being re-recorded in post-production. Sets are noisy, imperfect audio recording environments and that’s where ADR comes in! You can think of Foley as ADR for all the sound effects that occur during production. Much like an actor gets in the studio, hears their line and tries to reproduce it matching the lip movements and intensity, a Foley Artist watches movement on screen and reproduces those sounds in sync to picture. Every film scene is unique as every character is unique. They all move differently and they are living, breathing entities in the film world and we need sound to reflect that!

This is why these elements are usually performed by a Foley Artist, rather than edited, or cut to use industry jargon, by an SFX Editor. A good Foley performance ties the sound of movies together, and pulls the audience into the scene and the heart of the action, and it takes a foley artists less time to cover a sequence of an actor walking to a fridge, grabbing a beer and sitting down, than it does an sfx editor to find all these sounds from libraries and edit them to picture!

It’s also important to remember that these sounds are very familiar for audiences. The average person may not have a clear idea of what the Bat-mobile may sound like, but they are instinctively know if someone walking sounds...wrong.

**Footsteps** sound easy in theory but there are many considerations to be taken: You have to know what footwear the character is wearing, you have to consider what surface they are walking on, and you need to take their weight, their pace, potential nuances like a limp, a drunken stammer, and even the character’s emotions and intent into account! There’s a big sonic difference between nervously pacing outside the surgery ward, running from the cops, or seductively walking down the steps of your mansion to meet your prom date.

![](/blog/sd4vm/12/179.png)

_Not to burst your bubble, but every bit of dialogue, as well as every footstep you hear in a typical walk-and-talk scene in movies, is re-recorded in the studio. Imagine what the shooting of the scene above would entail: You have three actors walking and talking together, but behind the camera, you probably have a cam op, boom op, a cable runner, a focus puller, and maybe even a couple of gaffers walking with them. The sound will just not be pristine, and neither the dialogue nor the sound effects recorded on set are usable!_

Keep in mind that not all characters in a film or animation are human. As a foley artist, not only do you have to master human walking, but you would need to imagine and recreate the sound of anything moving: A cat, an 8 legged monster, or even a slimy blob!

![](/blog/sd4vm/12/180.jpg)

_These things need foley too, and a human has to figure out how to make it sound right!_

**Props** are sounds pertaining to characters interacting with objects or each other. Taking your phone or keys out of your pocket, smashing someone’s skull with a baseball bat, a handshake, or the sound of gulping beer are all examples of Props. This is another aspect of Foley that requires true artistry. A good foley artist knows what stuff sound like. Not only do they have access to a variety of objects and gadgets, but they are able to combine sounds of other objects to make the sound of another. Using a heavy stapler to recreate the sound of gun handling, or using celery sticks to imitate the sounds of someone’s bones shattering are all inventions of gifted foley artists!

Finally you have **Cloth**. It may not seem like such an important aspect of Foley, but cloth is essentially the sound of movement. Whenever a character turns around, sits down, or when two characters embrace each other with passion, it’s cloth that brings life to that. Like footsteps, cloth tracks aren’t made just with cloth. Your character may be a ghost, a bird person or a tree person from Lord of the Rings!

A final subcategory of these is what is known as **Gack**. Gack is a special track for characters when they move with a certain uniform or carrying an object. Think of a soldier walking down a road. They are probably wearing army boots, but may also have a backpack with stuff in it, a gun holstered, various things hanging off their body, all of which makes a sound, and all of which a Foley artist recreates layer by layer!

The lines between these elements are not super clear cut sometimes. Normally cloth covers movement, but if a character takes their jacket off to pat out fire, their jacket is now a prop. Similarly, if one character touches another character, the sound of that moment is covered in cloth, but also by an additional prop element of the hand itself. Similarly, chairs and beds are considered props. So every time a character sits or gets off of a chair or bed, that is covered in props, despite beds and chairs not technically being props!

Other than all of this, Foley artists sometimes perform additional sounds that may also be covered by the SFX Editor. If a bag of oranges breaks and falls all around the floor, this is something that Foley covers as the SFX editor may struggle. Similarly, a Foley artist may add additional sounds to a scene where an earthquake is making objects fall around a house. Check out [this short clip of Foley sounds in Cast Away](https://vimeo.com/518690844).

Foley is an art into itself. A Foley artist has a keen ear, a knack for object-based sound design, and is extremely good at outside-the-box thinking. They won’t always use the objects we see on camera to make the sounds for various reasons. How do you cut footsteps in the snow if you are editing it in the summer? You can use cornstarch to get the crunch of the sound, while using a mop to get some wet squish-ness, and blend both of these with the sound of regular footsteps!

Similarly, you may use something like a piece of wood with three nails poking out of it to recreate the sounds of a cat running around.I can give examples all day, but the fact is, each project presents unique foley challenges, and a good foley artist knows how to tackle them, improvise on the spot, and use stuff lying around to recreate it.

I don’t consider myself a Foley Artist. I have worked as a Foley Recordist and this will be the focus of the rest of this episode. The foley recording process is extremely fluid. Almost every new element being recorded requires you to quickly and efficiently adjust pre-amp levels, and the large volume of audio items recorded means that you need to have a good way of quickly renaming and organizing the project. This is why Foley is usually a two-person (minimum) operation: **Foley Recordist,** and **Foley Artist.**

**(A) Foley Artist(s)** are in the recording room. They are watching the picture, and using various props and their bodies, performing whatever they see on screen! A **Foley Recordist** is the person in the control room, behind the DAW. They cue up different foley elements for the artist to record, keep track of what elements are done and what's left, and most importantly, constantly make sure that the recording levels are optimal. In a typical foley session, you may covering a wide range of sounds, from very quiet (things like a nose scratch, or reaching into one's pockets) to very loud (breaking a bunch of dishes) and everything in between. A Foley Artist may also want to jump back and forth between quiet and loud elements. So a foley recordist is constantly doing mini-soundchecks, and setting levels based on whatever is up next, all the while keeping up with a number of clerical tasks: Naming each clip appropriately, organizing clips in a logical manner, and discarding bad takes.

Back in the Pro Tools days, a lot of this had to be done manually and by memorizing hotkeys, but also staying after the session to organize and further categorize sounds. Thankfully, with REAPER you can automate most of these clerical tasks, leaving you free to simply adjust levels and listen for sync!

**Foley Spotting**

We have discussed Spotting in [Episode 3, in the context of SFX Editing](https://www.iddqdsound.com/post/sound-design-for-visual-media-tutorial-notes-ep03) and essentially, Foley Spotting is the same process for Foley. The foley team sits down, ideally with a director or producer, and they go over the movie, taking notes of what needs to be covered and where. This is often done in the DAW, using Clip Regions, Markers or empty items, that the Foley team will then name, and it'll serve as the guide to recording all foley sounds!

Spotting is often overlooked, or set aside deliberately by amateurs, who may see it as a waste of time, but Spotting is extremely important, and the time it takes to do will save a lot more time down the line, especially with REAPER! Here's 4 reasons why:

**1. Full coverage:** Imagine a 90 minute movie full of movement from start to finish. It would be arrogant to think that a foley team can just show up to the studio, watch the picture, cover every sound, never missing a single element, and staying fully faithful to the story. While foley seems straightforward, it is almost impossible to execute well without a good understanding of the story, characters' intent and the flow of the video edit.

**2. Continuity:** There is a fundamental difference between video editors and audio editors. Video editors, cinematographers, and a large number of directors, have a visual mind. When it comes to filmmaking, their brain operates within the confines of the frame, because the story in their mind takes place within the frame. Sound editors are different. While visuals can be fit into a square, and ignore everything outside of that square, Audio is omnidirectional! It exists all around us, both in and out of the frame. We can't just ignore the fact that character A is walking towards character B, just because the walking is not in the frame. Video editors forget stuff like this ALL THE TIME, which leads to continuity errors. You may see character A walking from across the hall towards character B, we cut to character B's face for 2 seconds, and suddenly character A is right in front of B! Similarly, you may have one character holding a cup of coffee one moment, and not in the next shot. All of this, is the job of the Foley team to solve, by adding additional sound effects that explain away these continuity errors!

**3. Preparation:** Every foley session starts with gathering a palette of objects, footwear, surfaces and mics to record! Spotting provides the foley team with a fetch list. Say we're working on a movie, where there are 2 characters. They start at the beach wearing sandals, then put on shoes, walk on concrete to their cars, then get home and remove their shoes to walk on tiles, then when they get out it's raining. All of these surfaces and various footwear makes a unique sound, so Foley needs to prepare for all of that, not to mention all the objects the characters may interact with (Towel, Car Keys, Car stereo knobs, door knobs, Kitchen gadgets and cutlery, umbrellas)

Every foley studio would have a storage space full of weird objects, old smelly footwear and a bunch of clothing. A good foley spotting means one trip to the storage and you are ready to rock n' roll. Don't do spotting and you'll find yourself walking back and forth between the control room and the storage space, wandering around, looking for garbage!

**4. Automation of Clerical Tasks:** With REAPER, simply having a list of elements can help you with automating your clerical tasks as the foley recordist. In the video you will see all the stuff that I've come up with!

**Spotted Items Naming Convention**

In order for the custom actions to work, you need to spot in a specific way. Firstly, you need to create empty items in 1-4 Spot tracks. I do this by assigning **Cmd+Left Drag** to **Draw an Empty MIDI Item** in Preferences>Mouse Modifiers>Track-Left Drag.

Simply draw an empty item, and then use **'Xenakios/SWS: Rename takes...'** to rename. I have assigned **Cmd+R** to this action. Alternatively, you can select each empty item, press **F2** to open the item properties, name the item and hit enter, but the SWS action allows you to quickly rename multiple tracks.

Each empty item name should by either 'Feet -' or 'Prop -'. This is how my custom action will decide where the recorded elements will go.

Optionally, with footsteps, indicate the type of footwear and surface for every time one of these changes for the first time!

**Exporting a Fetch List:**
Once you are finished spotting the tracks, you can select all items on 1-4 Spot, and run the action **'Script: X-Raym_Display list of selected media items active take names in the console.lua'**

This will generate a list of all the spotted items, which you can then use as a fetch list to prepare your palette of props, cloth and footwear/surfaces.

Optionally, you can colour-code your prop & feet elements using the Project Bay. Follow the instructions in the video!

**Foley Template & Set-up**

I have devised a well-automated system of recording foley in REAPER, but to set this up takes a bit of time and bit of tweaking. Below you will see a list of all the assets that I have shown in the video, but each assets depends on other things being set-up to work properly. My Custom actions only work if you have all the underlying custom scripts and SWS actions, and my Foley template is only good if you have my custom actions, and the custom actions only work if you use them in the foley template, as they rely on a specific order of tracks to function properly as intended. If you are more advanced, you can easily figure out how to tweak my actions to work in your template, but otherwise, follow these steps carefully!

**STEP 0:** DO NOT download my actions and templates before completing steps 1-3! My custom actions use SWS and other custom scripts, and if you don't have them, my custom actions won't function properly (or at all!)  
**STEP 1:** Download & Install SWS for REAPER. [This video](https://www.youtube.com/watch?v=y71-rcVK7jQ) will show you how. Installing SWS is free and will add a ton of functionality and new actions to REAPER's already-extensive action list, a lot of which we will use throughout the project.

**STEP 2:** Download & Install ReaPack for REAPER. [This video](https://www.youtube.com/watch?v=S2a4QWqZ53M) will show you how. ReaPack is another extension for REAPER that allows you to download custom script repositories, coded by REAPER users and available for free.

**STEP 3:** Here are the non-SWS custom scripts that are used in My custom actions:  
-**Script: mpl_Move selected items to tracks with same name as items.lua:** this is used in my 'Move Foley Element to Relevant Folder' action.  
**-Script: X-Raym_Move edit cursor to next/Previous frame.lua:** Optional but highly recommended for film work, these two actions (which I have assigned to **,** and **.**) are great for moving through the video frame by frame.  
**-Script: X-Raym_Display list of selected media items active take names in the console.lua:** Another optional but highly recommended script. This is what I use at the end of the Foley Spotting session to generate a fetch list for all the props and footwear we need.  
**-Script: Archie_Item; Move selected items down one track.lua:** This script by Archie is used in my Cycle Action 'Distribute to Bank of 8', however, you can actually the REAPER native action **'Item edit: Move items/envelope points down one track/a bit'**  
 Since I can't export my cycle actions anyway, I will suggest you create your own, and skip this script. That said, Archie has a number of really useful scripts! [Find his repo here.](https://github.com/ArchieScript/Archie_ReaScripts)

**STEP 4:** Once you downloaded all the above, you can now download my template and custom actions using the link below:

SD4VM Ep12 Downloads

.zip

Download ZIP • 24KB

**Contents**
**1. 3beeps.wav:** this is 3beeps audio file that we use to cue up foley and ADR in films. More on this in the video and later in the blog!  
**2. IDDQD Sound_Foley Rec Template.RPP:** My Foley Recording template. Once downloaded, open the template, import the **3beeps.wav** and place it on Track 06 (3 beeps) and save it as a project template, making sure to tick 'include items' in the dialog box. I didn't include it in the template because you may be using a different organizational structure for your projects!  
**3. IDDQD Sound_Move Foley Element to Relevant Folder.lua:** This is the custom action you will run AFTER you finished recording a new foley element. More instructions in the video and below.  
**4. IDDQD Sound_Move Selected items To Bin track.lua:** Bonus action for temporarily "binning" an item. This is explained[ in the field recording episode](https://www.youtube.com/watch?v=mUc-rOBWndY&t=545s).  
**5. IDDQD Sound_Prepare Foley Element for Recording.lua:** This is the custom action you will run BEFORE you begin recording a new foley element. More instruction in the video and below!

If you need instructions on how to download and import custom actions, [watch this video](https://www.youtube.com/watch?v=LGkB9EOn3sE)!

**My recording Template**

The Foley recording template consists of 46 tracks (no plugins):

1. Vid: This is where you import the video.  
   2-4 GT: This is where you would import the Guide track, temp Dialogue, SFX and Music, if needed/Available.
2. Rec: This is the single recording track in the project. Using my custom actions, you can have each spotted item automatically rename this track, so you don't have to rename it manually for each foley element.
3. 3 beeps: 3 beeps is the standard film way of cueing up a performance in post-production, whether it's an actor doing ADR, or a Foley Artist. The way the 3 beeps works is the same as a pre-roll bar in music, except there is only 3 beeps rather than 4 and it has a fixed tempo.

Each beep is a 1000Hz Sine tone at -20dBFS, and is 1 frame long. Between each two beeps is 21 frames of silence, as well as at the end of the third beep. Line up the END of this audio item to the beginning of your spotted foley element, and begin recording. The foley artist will hear the 3 beeps and begin performing from where the fourth beep would be. So in music, we usually go: 1, 2, 3, 4, Play, but in films we go: 1, 2, 3, Go.

7-10 Spot tracks: On these four tracks are where all our empty spotted items will go.

11 HP Buss: This is a Headphone Buss for the Foley Artist. It has pre-fader audio receives from the 3 beeps track, Feet and Prop folder, and the Cloth and Room tone tracks. I personally send the feed from the mic directly from my interface. If you don't have this option you will need to create that receive yourself. By default, this Headphone Buss is sending audio to output 3-4, and again, you can change this based on your own I/O

12-18 Feet Folder: All your footsteps are auto-moved to the parent track, and then propagated on Feet 1-6.

19-27 Prop Folder: All your props are auto-moved to the parent track, and then propagated to Prop 1-8

28 Cloth: A single cloth track, where you will record cloth.  
29 Foley Room Tone: This track is optional, but highly recommended in case you record foley from home. We will cover this in the next episode in more detail.

30 Bin: Optional bin track for temporarily trashing items.

31-46 Fly Tracks: On these 16 tracks we will put our edited foley audio to send to the mixing stage. We will cover this in the next episode in more detail.

_Note: based on your workflow, your project's needs and your mixer's preferences, you may want to export your foley tracks in a different order, with different names, or fewer or more tracks than 16. As long as you don't change the order of tracks 1-10, and as long as you have at least one track called prop with 8 children, and one track called feet with some children, you can modify this template any way you want without messing up the custom actions._

**Foley Recording Custom Actions**

Below you can see the breakdown of my custom/cycle actions. If you wish to make these yourself, or if you had trouble installing mine (it's been known to happen) then just manually create these yourself:

**IDDQD Sound_Prepare Foley Element for Recording.lua:** This is the action we run when we are ready to record a new foley element from the spotted empty items. Simply select the item you want to record and run it (I have assigned this action to **Page Down**) and it will name the Rec Track based on the empty item, line up the 3beeps to it, and you can start recording! After you're done, press Space any number of times and record new takes on top of the audio.

_HINT: assign a hotkey to REAPER native action 'Tranport: Stop (DELETE all recorded media)' For me it's **Cmd+Opt+Space** and run it when you do a bad take instead of stopping and deleting. Doing so will delete the recording audio directly to trash, saving work and hard disk space!_  
Custom: Prepare Foley Element for Recording

Edit: Copy items/tracks/envelope points (depending on focus) ignoring time selection

Track: Select track 05

Item: Paste items/tracks

SWS: Set track name from first selected item on track

Item navigation: Move cursor to start of items

SWS: Delete all items on selected track(s)

Track: Select track 06

Item: Select all items in track

Item edit: Move right edge of item to edit cursor

Item navigation: Move cursor to start of items

Action: Wait 0.1 seconds before next action

Track: Select track 05

**IDDQD Sound_Move Foley Element to Relevant Folder.lua:** This is the action we run after we are done recording a foley element. Simply select the first item on track 5, and run it. It will move the takes to either Feet or Prop tracks, based on the empty item. Of course, this will only happen if you included this info in your spotted items.

Custom: Move Foley Element to Relevant Folder

SWS: Save selected item(s)

Track: Select track 06

Item: Select all items in track

Item navigation: Move cursor to end of items

Track: Select track 05

SWS: Restore saved selected item(s)

Item edit: Trim left edge of item to edit cursor

Item: Select all items in track

Script: mpl_Move selected items to tracks with same name as items.lua

**Cycle Action: Distribute to Bank of 8:** This cycle action is NOT included in the download bundle but you can make it easily yourself:

![](/blog/sd4vm/12/181.png)

Each Step is the same as the last, with an extra iteration of Archi_item; move selected items down one track, the final step using the action 8 times! This action is used to propagate all the takes from the parent prop folder to Prop 1-8 tracks. tap the hotkey repeatedly (**Clear** button for me) until all the items are laid in a cascading fashion, from left to right and top to bottom!

**Video Window Limits in REAPER**

One area where REAPER is a bit lacking when it comes to the Foley workflow, is the fact that you can only have one video window open in REAPER. This is a problem because Ideally, you would want the Foley Recordist and the Foley Artist, each working in a different room, to see the video. If I have the video docked on my screenset, I can't also show it to my artist, and if I show it to them, then I'd have to control the DAW kinda blind.

Here are a few possible workarounds:  
**1. the 3 Screens Solution:** If you happen to have 3 screens connected to your system, you can get around this limitation quite easily.  
 Simply have your REAPER on Screen A, Your video Fullscreen on Screen B, and then you can use Screen C to mirror Screen B from Control Panel/System Preferences in the display settings. Both you and the Foley Artist will now have a fullscreen video to watch!  
 This is great but of course, not everyone has 3 screens, and maybe some systems may not even have 3 ports for screens.  
**2. The 2 Screens+OBS Solution:** If you only have 2 screen, you can set up the two screens like Screens A & B in the above solution, but Screen B this time will be in front of the artist. Next, using something like OBS you can capture the video on Screen B, either via Window or display capture, and then use OBS kind of like a monitoring device, somewhere on your screen. This is annoying because of lag being an issue, but also, you'll have to resize REAPER to make space for OBS, and every time you click on REAPER you may also get the video track partially covered by additional REAPER windows & Menus.  
**3. The 2 REAPER Installs solution:** I have not tested this myself but will do and post the results soon! The idea is using two different REAPER installs. You could, for example, Run the project off of your REAPER, with the video wherever you want (for example, Screen A using my audio video template, then in the other REAPER install, I am just importing the video, syncing the two REAPER instances using ReWire or an External/MIDI Clock, and make that second install's video window fullscreen on Screen B for your artists to see.

Again I haven't tested solution 3 so I'll keep you posted, but do let me know in the comments if you know a better workaround, or if you have tested solution 3 and your thoughts on it!

**Conclusion**

I hope you enjoyed this video and I hope you will use my system, or tweak it to your liking. Honestly, this system has the potential to automate any kind of big recording project with a bit of tweaking. I know this is a very involved system so don't hesitate to reach out to me with your questions.

For the first time, this video will be premiered tomorrow, **May 7th, at 1pm EST** on YouTube, and I will be online and ready to answer any questions you may have, so join me!

<youtube id="be.com/watch?v=\_Jznye0iqYE"></youtube>

![](/blog/sd4vm/12/8.png)

If you like the work I do, [you can donate to me here](http://www.buymeacoffee.com/iddqdsound)! Every little helps, so even if you send a dollar or two my way, I’ll be eternally grateful to you!  
 Join the REAPER squad on our Discord Server:  
 https://discord.gg/YwQESKpBfE

**My Reaper Stash:** <https://stash.reaper.fm/u/IDDQDSound>

**Follow me on Instagram:** <https://www.instagram.com/iddqdmusic/>

**My Music:** [**https://Soundcloud.com/iddqdmusic**](https://soundcloud.com/iddqdmusic)

[ ](https://soundcloud.com/iddqdmusic) [**https://iddqdmusic.bandcamp.com**](https://iddqdmusic.bandcamp.com/)

