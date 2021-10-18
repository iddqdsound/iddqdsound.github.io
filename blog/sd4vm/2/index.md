## Sound Design for Visual Media - Tutorial Notes Ep02

![](/blog/sd4vm/2/131.jpg)

**Episode 02: Optimizing Reaper Workflow For Film Sound Editing**

In this episode we will import a video to our project, do a set of tasks to set up our Video and Audio Guide Track (Hereby GT), Burn Timecode onto our video, and finally discuss Screensets in Reaper.

Every Video for this series will come with its own blog post, which you can find on this website on the day or a day after the release of the video (Every Wednesday) and these blog posts will contain Notes, Cheat Sheets, Scripts, Free Downloads, as well as extra study material on the topics covered for you to deep dive into them. The aim of the videos is to focus on Reaper, but obviously if you are unfamiliar with concepts discussed, these posts will give you more than a starting point to do some extra research.

Click below to download all Project & Track templates discussed in Episode 1 & 2. You will also find a Stereo and a Mono 2pop!

SD4VM Ep00-02 Downloads

.zip

Download ZIP • 36KB

**Timecode**

Timecode is an essential aspect of syncing audio to picture. This [video from Filmmaker IQ](https://www.youtube.com/watch?v=PgX_R-JgpJE) breaks down Timecode in incredible detail, as well as delves into its history and science. In every step of the way, from Production Audio all the way to final mixing, Timecode is our insurance for our sync being correct. Timecode is a set of 8 numbers. From left to right the format is:

![](/blog/sd4vm/2/132.png)

Timecode is a frame-accurate system. A unique timecode value can be assigned to every frame of video, and used to sync audio to it. Timecode also exists in audio form, and can be placed on any audio recording.

**Production Timecode:** During the shooting of a movie, Audio and video are recorded either in a **Single System** or **Double System** configuration. **Single system** means both the audio and video are written onto the same disk, so for example, in smaller movies or whenever a very portable set-up is required, you would often plug your audio system directly into the camera, and the footage along with the audio is recorded to the Drive or SD card on the camera. This means that the audio and video will not be out of sync, as they are both part of the same file.

However, single system has a lot of limitations. Obviously Cameras are not designed for their audio capabilities, so often you are limited to two tracks, not to mention that most cameras aren't able to provide phantom power. Now you can put a device that provides phantom power (like a Sound Devices 302T) but you are still limited in other ways.

![](/blog/sd4vm/2/133.jpg)

_Sound Devices 302T Location Sound Mixer_

Another limitation of a single system is that, you are somewhat tied to the camera, meaning you can't move freely around the set to find the recording sweet spot. You are connected to the camera via cables, and cables have a finite length.

For these and various other reasons, many productions instead rely on a **Double System.** A Double System is a set-up where the audio and video are recorded onto separate systems. For example, the camera records video onto its Disk or SD Card, and audio is recorded on a separate Disk or SD card on a Sound Recording Device. Back in the day, this would be a separate device from your mixer. You would have something like the Sound Devices 302T, which was only a location Sound Mixer capable of Taking in 3 Balanced Signals, and outputting 2 Balanced Signals. You would conventionally plug your Boom mic into input 1, pan it left, and then you would have 2 Lavalier (or Lav) microphones plugged into 2 & 3, and pan both right. The two outgoing channels would have the Boom on one channel, and the two lavs would be summed on the other channel, but there was no disk or drive on that mixer. If you wanted to record the audio, you would need a separate device like the Sound Devices 702. This second device was called the recorder, and it had the ability to record audio onto a card.

![](/blog/sd4vm/2/134.png)

_Sound Devices 702 Location Sound Recorder_

With double system recording, came the need for a system to sync the audio to video reliably and this is where Timecode comes in. At the beginning of each day, both devices were "jammed" (industry lingo for inputting timecode) with a timecode from a separate device, called a Lock-it Box, once they had the same timecode running, each frame of video, and each few thousand samples of audio were assigned a unique timecode, which could be used to sync them together later. For example, in a 24 frame video and a 48k sample rate audio, every 2000 samples would have the same timecode, but 2000 sample is only 2ms, so that would you maximum margin of error. 2ms is incredibly short, to the point where it didn't matter. Even our own brain has a non-zero delay between processing visual and auditory information, so 2ms is totally irrelevant.

Nowadays, audio gear has become so advanced and portable, that you have devices that both mix and record. They can take 4 or 8 tracks, provide them with phantom power if needed, and they could write 6 to 12 tracks on a built-in card. A Zoom F8 is one such device. It's a mixer and recorder in one, that can take up to 8 microphones, output each one on a separate track, as well as one or two stereo mixdown tracks. It also reads timecode, so you no longer need two devices to do the job. Even in smaller productions nowadays, running double systems is easy, cheap and reliable.

![](/blog/sd4vm/2/135.jpg)

_Zoom F8 Portable Mixer/Recorder_

In Production, Timecode is simply the time of the day, so if you started shooting at 11.45 am, you would jam 11:45:00.00 into both devices, and away you went! During the day you would update the timecode jam every time a device powered down for battery changes or lunch breaks, so for example after lunch at 3.22pm you would jam 15:22:00.00 into each device, and they would be back in perfect sync.

This way not only do you assure the audio and video were synced, but it also gives editors a way of knowing what time a given scene they are cutting was shot.

**Post-Production Timecode:** Once video editors got the footage from the film, they would begin to cut it together into the movie. As they cut the movie, the timecode values would jump all over the place. Maybe the first scene was shot at 7.22pm and the second scene was shot at 4:45pm with close-ups in the middle, shot at 11.31pm. The production timecode at this point has served its purpose and needs to be replaced.

In post-production, every movie starts at 01:00:00.00 and timecode becomes a unique identifier for each frame of edited picture from then on. It doesn't matter anymore when the scene was shot, only where it is in the cut.

As Audio editors received the cut of the movie, they would import it into their DAW of choice, which has its own timecode timeline, and put the video at 01:00:00.00 and begin adding sounds. Once they were done, they would export their audio and the timecode was their way of making sure the sounds they export will fall back on the same place they were left on.

This is as quick a description of Timecode in Production & Post-production as I could give. Obviously there is so much more about Timecode beyond this, and if you don't understand timecode yet, give yourself time. You'll be happy to know that when it comes to Post-production editing, all you really know about timecode is that it needs to be the same on the video and on your DAW timeline! Later on when we talk about conforming edits to new cuts, it's still a matter of correctly reading timecode (also that part has become automated with modern software as well).

**Burning TC on a Video in Reaper:** If you are working with a video that doesn't have Timecode on it, I encourage you to burn TC on the video. Luckily, [this script on the Reaper Forums](https://forum.cockos.com/showthread.php?t=170727) makes quick work of this. Simply paste the script onto the script window of the Video Processor, save it as a preset, put it on any video item, adjust the offset values until it's correct, and you got yourself some timecode!

When you begin to edit sounds, you are often working with videos you found online. It's still advisable to burn TC onto them, just to familiarize yourself with how it works, so that you understand it better when you do get that next Sound Editing gig!

**Guide Tracks:** When working with videos, the production company will send you a video, along with an audio guide track. We talked a little bit about Guide track in [the first episode of the series](https://www.youtube.com/watch?v=V1K0uSvKChk) and on [its blog post](https://www.iddqdsound.com/post/sound-design-for-visual-media-tutorial-notes-ep00-ep01), but just to recap, a Guide track will include all the production audio, as well as any temp music and sfx that video editors put in.

Temp Music is often used to help editors cut, and temp sfx helps the story along before serious sound design work has been done. These are also useful to sound editors to get an idea of the type of music or Sound design required, as well as provide them with a guide to how busy each scene is. For example, if we know a certain scene will include crazy loud music, we'd take care not to cut too many busy sfx for that scene. We will revisit this in later videos.

Though any Reaper track can play both video and audio, it's advisable to split the two. This is because keeping them together makes some things annoying. For example if you mute your audio guide track, if it comes with a video, that video is also hidden. We almost never want NOT to see a video, but we very often want to mute our guide track, and only reference it when needed.

In case you didn't know, glueing a video item will remove the video, as glueing is always done to audio. The only way of "glueing" video is to render a video (as far as I know!), so a few things I do whenever I am beginning to work on a video is this:

-Open My Film Editing Template (which you hopefully downloaded above)  
-Import the video and place it on track one.  
-Burn Timecode if needed)  
-Move the video item onto 01:00:00.00 on track one (vid track in my template)  
-Duplicate the item onto track two (GT track in my template)  
-Glue the duplicate to remove the video.  
-Lock both items to timeline (to prevent accidental moving)  
-Hide my video track  
-Insert a marker at the last frame of the video.

This can be done in about 20 seconds, but when you use Reaper, 20 seconds is something you can afford to cut down to say, one! I created a custom action that does all the above with one click! All you have to do is have your Video Track as track 01, a marker on 01:00:00.00 (which is saved on my project template) and have an empty track on track 02.

You can download my custom action as a script below, import it into Reaper, and bob's your uncle! However, I encourage you to watch the video and copy my action step by step, especially if you have never created a custom action before. Get as familiar as you can with custom actions as they are the single most useful Reaper feature, and can help to optimize you workflow immensely. Almost any set of tasks you regularly do can be made into a single custom action, reducing the time you spend on these sets of tasks to about 1 second! Optimizing workflow is all about chipping away at those boring and repetitive tasks, freeing up all your time for the actually fun parts. Beyond that, the faster you work, the more you are earning. In films you often get paid a fee to do a task. So if you're getting 500 to edit dialogue for a 5-minute short, you are making 100 an hour if you do it in 5 hours, and only 20 an hour if it takes you 25, so every second you shave off is extra money in your pockets. Literally!

Video Import Clericals.lua

.zip

Download ZIP • 480B

**Screensets:**

Another immensely powerful feature in Reaper are the screensets. Screensets exist in one form or another in almost every DAW (by the same name in Logic Pro X or known as Window Configurations in Pro Tools) and are a way of saving and recalling an arrangement of various windows, menus and toolbars within Reaper. You can access the Screensets window by pressing Command+E (on Mac) or Control+E (on PC) and from there you can save up to 10 screensets. Simply move your windows, timeline, and mixer around your (one or more) screen, dock what you gotta dock, save it as a screenset, and you can load that screenset at anytime by recalling the screenset window or by pressing a hotkey.

![](/blog/sd4vm/2/136.png)

_My baller Video Editing Screenset_

Once again, I encourage you to create your own screensets based on your own needs and preferences. I use 3 screensets most commonly when working with video. My main editing screenset is the regular look of reaper, with the timeline filling most of my screen, a small mixer on the side, and my top toolbar up top. I also have my Main video editing screenset, which cuts the timeline screen real estate by half, and instead fills the other half with my video window, as well as my Track Manager, Action List, Region/Marker List, Media Explorer and so on. Finally I have a MIDI editing Video Screenset which gives half my screen to my MIDI editor, while splitting the other half between my timeline and Video window.

![](/blog/sd4vm/2/137.png)

_My Default Screenset. Looks eerily similar to the Logic Pro X interface._

In my video I will show you each of these and break them down, and you can follow along and create your own in no time! I actually won't provide these as a download, to really force you to make some of your own and customize them based on your needs. Also mine only make sense for one screen, and most sound editors I know use 2 or 3! I have my own arguments for why I use 1 screen, despite actually owning 2.

**Conclusion**

So that's it for this episode. In the next episode, we will spot a video together. Cards on the table, I am stalling a little bit here, as I am still looking for appropriate videos that I can use in my tutorials to teach sound design, that won't get my video taken down for copyright infringement. I am in the process of securing a few short films, animations and documentaries for these purposes. That said, it's truly crucial to me to make sure you have your workflow optimized fully before we get to the fun stuff. Optimization of Workflow is not the most...sexy of topics, but I assure you that jumping straight into Sound Design before doing some homework, will only lose you time in the long run, as well as make Sound Design and editing annoying enough to discourage you. So bear with me!

Thanks for reading! See you next Wednesday for Episode 3!  


