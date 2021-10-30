## 3 ways to reduce the size of your finished REAPER Projects
![](/blog/misc/6/AYP.png)  
[Artwork Designed by upklyak / Freepik](http://www.freepik.com)

Hey folks!  
 In [this tutorial](https://youtu.be/Gks-hwyRk4I) we’re gonna look at 3 ways to archive your finished REAPER Projects. REAPER offers multiple ways of doing this, including various glue actions & the render window, but today we're gonna focus on what's possible using the 'Consolidate/Export Tracks' window. Each method has its own pros and cons, of course. My main goal when archiving a finished project is to make sure its size is as small as possible, so I can store more projects without having to buy more hard drives or cloud storage. I recently finished mixing [my new single](https://distrokid.com/hyperfollow/iddqd/kurdistan-waltz-feat-jayne-karma-lamo) so I thought to use it as a real-life example, but of course every project is different, as well as different Audio professionals may have different archiving needs. Leave a comment somewhere if you want tutorials focusing on film or game audio projects and I'll make sure to do that as soon as possible, but hopefully once you understand the options provided to you in this REAPER window, you will be able to archive your project in the most efficient way possible based on your personal workflow and needs. For now, let's get into it!

 **DISCLAIMER:** _I have received a frankly insane number of comments on this tutorial from members in the music industry with regards to what they perceive is deleting crucial data. I was simply using this project as an example to show what is possible using the Consolidate/Export Tracks window. It is, and I did not think I would actually need to mention this, up to you to make a judgement call on what you want to take out of the project, and it is of course up to you to make sure you're not deleting anything you are going to need._

**The Importance of Organization & Archiving**  
 Early on in my music-making days, I made music as inspiration struck! I would open Ableton Live 8 (the first DAW I ever used) & get right to composing, never bothering to name tracks or color-coding them. Once done, I would hit save and literally drag my fingers across the keyboard and hit okay, not bothered with exactly where I was storing things, and not sparing a single thought for the possibility of needing to get back to them at some point in the distant or even near future! All my projects were named something like 'sadhjgdaskhjgdsa' and each contained a bunch of tracks named 'audio 1', 'audio 2', 'MIDI 1', 'MIDI 2' and the source files were strewed about all over my laptop hard drive. I would bet that lots of you can relate!

 Unsurprisingly, I lost A LOT of projects! Most were garbage, some were gold, almost all are gone forever. They play in my head, and sometimes I make half-successful attempts at reviving them (My new album is almost all about doing that) but it's basically impossible to replicate the same tones & rawness.

 As you begin to take your audio career seriously, organization becomes key. You often work for clients, so losing stuff becomes less of an 'Awww...oh well!' thing and more of a 'Hope I don't get fired' thing as you frantically run searches across your many drives, opening 300 random projects in vain! Organization is one of the facets of being a pro that people overlook, but the one group of people who never do, are clients, employers, studio owners, people who invest in our creative careers. There are lots of people who can do good work when it comes to music, film sound and game audio, but not all of them can be trusted with unique, sensitive material that can lose someone money and time if they were lost! So staying organized is one of those skills that can serve as your calling card! People remember a good organizer! I've rarely received any memorable compliments on my work from my bosses, but I have seen them half orgasmic at the sight of my well-archived drives!

 Archiving is important for the same reasons. I learned this the hard way, and now I have a solid naming convention for all my files & projects, a rigid folder structure for how I save everything, and I haven't lost anything in ages. I am confident that I can easily and quickly find a guitar track I recorded 2 years ago, 2 years from now! One day I will do a tutorial on these as well, but for now, let's get archiving with what you already have!

 REAPER, as always, gives you the best of both worlds when it comes to staying organized, without losing the spontaneity that creative work often inspires. I have built somewhat of a muscle memory for naming stuff and keeping organized as I go, but even if you don't, REAPER allows you to painlessly organize & de-clutter your project, and gives you many options to archive it so that it takes as little space on your hard drive as possible, without ever asking you to compromise on the quality or quantity of whatever you need to store!

**Preparing a project for archiving**  
Before storing your projects, there are a few things you should do. Some of us do this as we go, and some leave it for the end. In any event, here are some general tips:  
**1. Name & re-order all your tracks appropriately**: If you haven't done this already, take a few minutes to name your tracks based on what they contain & put some thought into their order. For music projects, you should group your tracks based on element: Drums, Bass, Synths, Guitars, Vocal tracks, and so on! I won't tell you how to order and name your tracks, but I would advise that you pick a naming/coloring/ordering convention, and stick to it forever!  
**2. Trim out & delete unused audio**: If you have lots of rendered silence from importing multitracks/stems, discarded audio takes from recording, duplicated & hidden tracks, or any audio that you no longer need (or never needed), now's the time to get rid of them. One way of making quick work of trimming rendered silence is using the [Dynamic Split menu](https://www.youtube.com/watch?v=PLBWt3fzAfM), but for everything else, some manual labour is probably required. Hopefully you will over time learn to do this as you go.  
**3. Clean up Project Directory**: After steps 1 & 2, save your project, and then go to **File>Clean Up Project Directory...**  
 Here you can see all the source media that exist in your project directory, but are no longer in use. These will include large audio files that you brought in and glued, stuff you may have frozen and unfrozen, and items that never made the final cut in your mix! Hit **Cmd+A (Ctrl+A on PC)** to select them all, tick the box below to send them to trash, and remove them! This may already drastically reduce your project size. Make a judgement call on how conservatively or liberally you want to de-clutter your files. Don't delete anything you may later need, or may not have any backups of.  
 ![](/blog/misc/6/clean-up-proj-dir.png)   


 **SECOND DISCLAIMER**: _I feel the need to once again clarify what should really go without saying: DO NOT DELETE ANYTHING THAT YOU SHOULDN'T DELETE! When you clean up a project directory, keep in mind that other projects using the same source media WILL LOSE ACESS to those files. This is not some quirk of REAPER, but basic computer science. Any given project can only access its own project directory, and the above menu can show you all the files in THAT Project that are no longer in use. If your REAPER is set up such that files are shared across projects, take care not to delete anything you may potentially need. I personally have mine set up such that all media is copied into my project directory, and where needed, I make extra backups. If you want to learn more about this topic, I highly recommend watching [this video by the REAPER blog](https://www.youtube.com/watch?v=tk6WLWDYlyU) and this is exactly how I set mine up. I also almost never ever use the Save as... function, with very rare exceptions. In all such cases, again, I understand that it is up to me to make sure that I don't use this feature thoughtlessly. The most important thing, is understanding all these functions, and hopefully you'll be able to use your own judgement to do what is best for YOU!_

 

 **4. Delete offline & bypassed FX**: During a mix, you may have brought in lots of plugins that you are no longer using. Deleting these won't have an effect on the final project size, but will reduce the loading time of your project when you open it in the future!  
 **Bonus step**: I highly recommend you also take some time to go through your project, and save a few FX Chains & Track templates, maybe even some samples. Doing this over time will build you a nice library of ready-to-use FX Chains & Track structures, that you can use in your future project. This will speed up your future mixing, and provide your work with consistency. Whatever you did on this project that worked, is likely to work in similar situations with some minor tweaking down the road. I always include the name of the project in these, so that I can easily get to the same kick tone as my older projects, and so on!  

**Consolidate/Export Tracks window**

This window is designed to quickly render all your project media for exporting, archiving & organizing. To access it, go to **File>Consolidate/Export Tracks** to see a window with lots of options. Let's break them down:  
![](/blog/misc/6/reaper-consolidate-export-window.png)  
**1. Project Bounds, Tracks & Items**: From the top, you can select the bounds of your project in time.  
Set to 'Entire Project' to consolidate the entire project. You can define your project bounds two ways:  
-In File>Project Settings, you can set a start & end time for your project.
-More elegantly, you can create two markers in your project, named =START and =END (all caps and equal sign must be included). This special syntax markers can also convey the bounds of your project to REAPER. I prefer this method because I can more easily move markers around, and make sure my whole project, including any audio tail, is caught within the bounds of my project.  
You can also set a time selection before opening this window, and use the 'Time Selection' option.
Finally, you can set a Custom length right from this window, using the three text boxes.
For tracks, choose 'Selected' to consolidate a selection of your choosing, or set to 'All'. Choosing the 'All' option will consolidate every track with at least one item on it within the selected time bounds. This will exclude any parent tracks, auxillary tracks, or empty tracks!  
Lastly, the box named 'Ignore silence shorter than' (which seems to be a misprint) will give you some additional control:  
When ticked, you can set a number (in seconds) for the minimum amount of silence between two items in a track. If a track contains items that are further apart than your specified number, REAPER will export multiple audio files for that track. This is great as it reduces the final size of your archive, but the downside is that you will lose the ability to simply drag and drop your consolidate files into a new project, or another DAW, and have it fall in sync with the rest automatically.  
When unticked, REAPER will always render a single file per selected track, and every file will be the length of the selected time bounds, regardless of what's on it!

**2. File Formatting**: Here you can set the format for the exported files:  
**-Sample rate**: All the classic sample rate options you would expect can be found here. I personally record & render everything in 48k, but if you use a different sample rate, it's best to choose that here. If your project contains files of multiple sample rate, you can choose the highest sample rate, or downsample to a common one. Having the same sample rate for all stored files is recommended if you wish for your archive files to be cross-compatible with other DAWs, as most are not able to host files of different sample rates within the same project.  
**-Channels:** Here you can specify the same number of channels for all tracks (1 to downmix all to mono, 2 to export all as stereo, or choose any number of channels you want). You also have two options for REAPER to automatically set this per file. Auto (source media) will look at the source file for each track's items, and automatically choose a channel count based on the channel count of the largest item on each track. Auto will do the same but it will respect the takes/items when deciding the channel. For example, in the event that you have brought in a stereo source file as an item, and downmixed/split it into mono yourself, REAPER will render those a mono file, instead of stereo.  
**-Resample Mode:** This option should always be set to the maximum setting (Extreme HQ). This does not affect the file size at all, but may increase render time. This setting only makes a difference when rendering items that include Stretch markers, pitch envelopes, or items with a rate that isn't equal to 1. The higher the setting, the more sync points will be used to render them, assuring the highest possible quality post-processing.   
**-Consolidate to:** Here you can set the format of the consolidated media. These options are available:  
WAV: The most cross-compatible option possible, WAV files (pronounced Wave) are the most common type of professional audio. This format is recognized by All DAWs, but they are also the heaviest option available. You can calculate the size of WAV files with the formula below:  
Number of channels * Duration (seconds) * sample rate * bit-depth = file bitrate (in bits)  
divide that by 1024*1024 to get to MB.  
_example: 1 second of stereo WAV audio at 48k/24bit is 0.288MB_  
AIFF: Apple-Proprietary lossless audio format. This format is still quite cross-compatible on Mac system, and can store certain metadata useful for samples & loops, such as loop points, and sample pitch. Suitable for sample & loop libraries. In cases other than this, it's best to stick to WAV.  
DDP: DDP stands for Disc Protection Protocol. This format is commonly used when delivering audio material for Physical Disk releases. I store my final mastered albums in this format, as well as the regular WAV format. Many labels & CD/DVD manufacturers may specifically request this format, which includes important metadata for mass-manufactured commercial releases.  
FLAC: FLAC is a lossless compression format. You can store your files in this format at no bit reduction, but beware that while REAPER is able to process this format, many DAWs don't accept it, so it may not be suitable if you don't plan to stick to REAPER for the foreseeable future, or if you collaborate with other artists and users of other DAWs.  
MP3: This is a lossy compression format. Storing your files as MP3 will drastically reduce the size of projects, but will degrade the quality of your audio. I do not recommend this option, unless you are saving lots of material where audio quality is unimportant, such as a massive back catalogue of podcasts.  
OGG Vorbis & OGG Opus: This is another lossy compression format. Like MP3, these formats will leave you with very small project sizes, but OGG is not very cross-comptabile, especially on many consumer-grade media players. They are used, however, in game audio, apps, and in other audio applications where a hard limit on audio delivery size is imposed. In many apps & video games, you are limited to a few hundred megabytes to deliver all audio assets. For any other application, I do not recommend this option. OGG Opus is the successor to the Vorbis format, improving upon the quality, so if backwards-compatibility is not an issue, Opus should always be preferred.  
Video (LCF): This is the LiceCap format for videos and GIFs made by REAPER developers. This is the only video option available, however this format is severely limited in resolution, frame rate & color space. Do not use this option unless specifically instructed to!  
WavPack loss compressor: This is the best compression format available. Storing your files in this format can reduce the project size without any degredation to audio quality. However, make sure that, as with FLAC, you will not run into compatibility issues.  
 Overall, I would choose WAV for all cases unless otherwise specified in your delivery specs. For personal archiving, likewise, WAV is the most suitable and cross-compatible option. You can always re-consolidate your files from WAV to any other format if needed!  
 **-WAV Bit depth:** When WAV is selected, you can choose the bit depth here. Floating point bit depths will drastically INCREASE your project size, but are a safe option that does not clip in the digital realm! I prefer to make sure files don't clip before storing my projects, but again, in the case of sample & loop libraries, FP bit depth values may be a superior option, despite their larger size.  
 **-Large Files:** Certain audio formats have an upper limit on size, and very large files can also take a long time to render and are privy to crashing/corruption. In any project that is under 60-minutes in length, this option will not come in play.

**3. Metadata**: In this section, you can choose to include certain metadata & extra files in your export.  
**-Write BWF ('bext') chunk:** BWF stands for Broadcast Wave File. This is a chunk of metadata that stores some useful information, suitable for DAW-proofing your arhives. Every DAW is able to read, index & searched audio files using this chunk, which includes information such as origin, time created, timecode in source project, and can additionally include project name. While all of this data is available when consolidating files within a REAPER project, they are very lightweight so it's a non-risk to include them anyway, apart from the potential minor annoyance of printing cue markers.   
**-Cue markers:** You can set your markers, regions, or both, to be printed as cue markers onto your files. Additionally, you can set only specific markers and/or regions starting with the # symbol to be included. Useful for collaboration projects and heavily used in game audio assets.  
**-Embed tempo:** This will write the tempo & time signature of your project on the files, useful for projects with tempo changes, or when exporting loops for libraries.  
**-Export MIDI as:** by default, REAPER stores all MIDI information inside the .RPP file in every project. Many other DAWs, like Logic Pro X, also do this. However, you can choose to export your project MIDI information as .MID files. You can export project MIDI as a type 0 .MID file (includes all MIDI data in a project) or here, you can export individual .MID files per track (Type 1). Once again, this is a safe option most of the time, as .MID files are extremely small in size.  
**-Consolidated filename:** Here you can set a naming convention, using strings and [wildcards](https://www.youtube.com/watch?v=zVOoSm8-Z14) for all consolidated files. The default here is $tracknumber-$trackname-consolidated, but I strip the last bit of string from my archives. This is of course, ultimately your call to make. The best practice is to choose a convention and stick to it. $tracknumber-$trackname is a good option as the track number will make your directory easy to sort in order that the files appear in the project, and track name makes for an easy way to search through your files.

**4. Output**: Here you can set a directory, and finalize your consolidation.  
Choose the directory first. If you wish to archive files within your project, you can set this to your current project directory.  
Update project with consolidated files will replace all items in your projects with the new files.  
You can also save a new project here, suitable if you plan to keep working on your current project.  
Finally, you can tick the final box to save your current project state to be reloaded should the render fail.  

 Hit 'Process' when all options are carefully set. Curiously, REAPER does not provide a way to save these settings as presets, but as previously mentioned, it's very likely that users will set these once and continue to use the same settings throughout their career!  

  Now let's get to our first 2 method which both use this window!  

**First method (Multitrack Archiving)**

 The first method uses the Consolidate/Export Tracks menu to print multitracks. These are useful in that they will produce files that are future-proof and DAW-proof. Even if, some time down the road in your career, you decide to switch DAWs, you can easily and quickly import these into any DAW if needed. This method is also useful if you have a recording project with lots of discarded audio, that you need to archive and/or send to a producer to be mixed.  

 To do this, I will select the settings below:  
  ![](/blog/misc/6/consolidation-method-1.png)    

 Once done, you will end up with multitrack wav files that are all the same duration, with some useful metadata baked into them, and they will be neatly named & numbered, allowing you to drag & drop them into any DAW, and they will immediately be on grid, in the same order you left them, and ready to be mixed. If you frequently collaborate with other artists, or if you have to deliver work to other professionals, this method is highly recommended. You can store these files in your archives, and delete the project if needed!

 The downside is that, based on your project, this method may actually INCREASE your project size. With tracks with multiple items scattered through them and long periods of silence in between, you will end up with lots of rendered audio, which can weigh a ton. This is also somewhat of a commitment to certain aspects of your project, namely, everything on the item level in REAPER:
 -Stretch markers & Item rate
 -Item FX & Envelopes
 -Fades, Crossfades & free item positioning.

 All of these will be baked into the consolidated audio. _note that consolidation will not bake in Track-Level FX, envelopes or any Parallel/Bus processing! Should you want that, you should just use the render window!_

 **Bonus tip: Calculating the size of WAV Files**
**Second method (RPP Archiving**

 The second method will give you the smallest project size possible, and as a bonus, will make your current project your archive project, so your routing, folder structure, color, automation & FX Chains will all be preserved. The only downside to it is that you will only be able to use REAPER to open these in the future! So commiting to this style of archiving will also mean a commitment to REAPER as your DAW, which is not much of a big deal if you ask me. REAPER is cheap, runs on anything, and REAPER devs have a spotless track record when it comes to assuring backwards compatibility despite updating the DAW more often than arguably any DAW out there! I am confident that REAPER project I archive today can be opened easily in 10 years, and I will be able to navigate my way around those projects just as easily then! If not, I also know that older installs of REAPER are always available, short of a major evolutionary leap in computing technology!

  This is my preffered method, and I will select the settings below:  
 ![](/blog/misc/6/consolidation-method-2.png)  

 Once done, your current projectory will become what you archive. You will notice that your project file gets bigger after you're done, but all the longer audio files that were once referenced in your project are no longer in use, so once you clean up your project directory, you will see a massive reduction in the size of your project media.

**Third method (XRaym_Glue items indepently)**
 Saving the best for last, this option is perfect for music projects & overall for any personal use. With a single action by the incredible XRaym, we can quickly reduce the size of any project massively! Simply open your project, Select all items & run 'XRaym_Glue items independently'. As the name suggest, this will glue all items individually, without rendering the silence between them, and as a bonus, compared to the second method, this will preserve the name, fades & crossfades for every single item. I personally prefer to spend the extra name to get the more neatly named tracks, but otherwise, this method will get you to the same place fast.  
 Like before, make sure to clean up your project directory after the script has run, save and close your project, and enjoy your tiny project, as will your hard drive/cloud storage!

 **The final steps**
 Media files are not the only source of bloated REAPER Projects. REAPER Project files (.RPPs) & Undo History files are unsurprisingly heavy, given REAPER's non-desctructive nature & the insane scope of actions that they hold on to. This will mean that your auto-backups & saves, can sometimes weigh just as much, if not outweigh, your media in any given project, and the longer you spend on a project, the bigger they get! 

  This is a great thing while you are in the heat of the project, as these files protect us against crashes, human error & can help us get back on track in all these cases, but once I am done with a project, it's very unlikely that we would need to revert back 5 save points, or undo the last 200 actions we have done. So I personally don't bother holding on to these files. This is of course, a judgement call only you can make, but at the very least you can delete the auto backups and undo history without worries. As long as the main .RPP file, Simply named after your project followed by .RPP, you will be able to open it in the future. Everything else is decoration! In this particular project which I had sporadically worked on for a few weeks, My backups & undo history had added up to about 2.5GB, and deleting them brought my massive 4.52GB project to under 1GB! 

**Conclusion**

That's really all there is to it. Once you understand your own archiving needs and the consolidate/export window, you can easily reduce the size of your projects for archiving, which saves you lots of space and in turn, money! You will need fewer hard drives/less cloud storage, and you will also be able to quickly and easily navigate your older projects. Taking these simple steps will have your projects look more professional & provide you with a vast library of FX Chains and Track templates that you can continue to use in your future projects! 

Here's the video:

<youtube id="Gks-hwyRk4I"></youtube>

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