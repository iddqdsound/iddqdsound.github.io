## How to do Audio Tutorials Episode 2: Making a tutorial Editing Template

![](/blog/misc/2/64.jpg)

Hey folks!

In [this episode](https://youtu.be/PL33oQmK4oQ) I wanted to show you my tutorial editing template. If you're a REAPER user, feel free to download my template below, but otherwise, you can easily recreate this in any other DAW. I will also show you my voice-over DSP chain, and again, whatever DAW you use, the principles applied here are the same!

Since I personally use Waves and Eiosis Plugins for my chain, the template will include the REAPER equivalents, or you can remove those channels and add your own.

IDDQD Sound - Tutorial Editing template

Download • 9KB

**Instructions:** Download the file, and paste it to your Project Template Folder (go to Options>Show REAPER path in Explorer/finder and navigate to ProjectTemplates). Then open REAPER, File>Project Template and click on it. Choose a directory and save.

_Note: I highly recommend you adjust the ReaFir, ReaEQ and ReaComp Settings. Also Automatic Gain stager doesn't work as well as Vocal Rider. I'd recommend you instead go_ [_to this post_](https://www.reddit.com/r/Reaper/comments/2q4fsq/this_is_great_reaper_can_do_automatic_vocal/) _and follow the instructions there._

**What to consider when EQing Voice-over**

Every voice, microphone and recording environment is different. Here are some common problems and how to fix them. At the end of the day though, these may be different for you, but here are some guidelines:

**Rumble & Hum:** Whether you hear it or not, your Voice-over audio contains information below 90Hz that you don't need. This can be electricity hum, rumble from accidentally touching your mic or hitting the table, and so on. I recommend a high-pass around 90Hz and possibly more if your voice pitch is high. This will clear up your audio, but more importantly, it'll make your meters read more accurately, cuz inaudible audio still affects your level readings.

**Boxiness:** If you are really close to your mic, and if your mic is dynamic, you are likely to have a boxy recording. This is a result of [the proximity effect](https://www.neumann.com/homestudio/en/what-is-the-proximity-effect) of non-omnidirectional mics, where there's a boost in low-end content when you are close to the mic. I recommend a semi-wide reduction of 1-2dB around the 300Hz

**Nasal Voice:** Some people are blessed with a divine voice. I am not one of those people and you may not be either. If you find your voice to be very nasal, you place a narrow can cut of 1-6dB around 600Hz.

**Resonant Room:** A sub-optimal recording environment leads to weird build ups of frequencies and the odd resonance. For me, I have found the 1-1.2kHz area to be a problem area, which I cut with a medium Q. This will almost definitely be different for you. Try to record a sentence rather loud and somewhat away from your mic, and try to listen to the tail of your words, and see what you can cut to make those sound better.

**Pre-Ess region:** Based on how Essy your voice is, you will probably need a de-esser. My esses are pretty obnoxious due to having gapped teeth, so I have to use extreme de-essing settings. This will in turn result in some weirdness in the pre-ess region, ie right at the cutoff point of your De-essed band, which for me is in the 3-3.5kHz range. I also place a cut here.

**Dullness/Lack of presence:** Based on your mic type and the type of tutorials you do, you may find that your voice sounds dull or doesn't cut through your mix. A side-chain comp helps, but you can additionally place a 1-3db high-shelf boost starting at around 8-10k to brighten your voice. I personally don't do this.

**EQing BG music:** If you use Background music, you may also want to place a dynamic EQ around 200-700Hz on your Background music. This will help your vocal cut through the background music, as the alternative would be turning your BG music down too much.

**Conclusion**

My template may or may not work you, and may or may not be a good starting point, but hopefully this tutorial will have shown you the importance of making a tutorial template, to speed up and automate your tutorial editing, improve the organization and workflow, and for the most part, auto-mix your audio so that you don't have to spend too much time on it each tutorial. If you don't have one, I seriously recommend some type of a gain riding plugin as well. It's a small expense for the amount of time it saves you.

Here's the video:

<youtube id="PL33oQmK4oQ"></youtube>

If you like the work I do, you can [donate to me here](https://www.buymeacoffee.com/iddqdsound).

Follow me on Instagram.  
 Check out my music on [Soundcloud](http://soundcloud.com/iddqdmusic), or [Bandcamp](http://iddqdmusic.bandcamp.com). You can also find it under the name 'IDDQD' on Spotify and every other platform. [Here's a link](https://distrokid.com/hyperfollow/iddqd/mutations-2) to all my streaming services as well.

