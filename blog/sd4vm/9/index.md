## Sound Design for Visual Media - Tutorial Notes Ep09

![](/blog/sd4vm/9/124.jpg)

**Overview**

In [this episode](https://www.youtube.com/watch?v=nifgJyN6P7U), I wanted to show you how I designed the vocalizations for the robot in t[his video](https://www.youtube.com/watch?v=oobhbZ_TDpg), which was one of the winners of the SOE Sound Design Competition. I'll walk you through the whole process, from choosing a base sound to how to set up a sampler to "perform" the vocalizations in real time for maximum control.

**Choosing Base Sounds & Basic DSP**

When choosing base sounds for a robot, it's good to start simple. In [last week's tutorial](https://www.youtube.com/watch?v=Th_sDTNK_qY), we browsed the limited sound palette we were provided for the project, and among the sounds was a Fishing Beeper which I found suitable for designing the robots vocalizations.

Beeps are a great base sound for sound design. They're simple, pitched and hold well against all kinds of DSP.

Once I chopped the sound up, I ran it through my SD chain (explained in the [last episode](https://www.youtube.com/watch?v=Th_sDTNK_qY) and [the blog](https://www.iddqdsound.com/post/sound-design-for-visual-media-tutorial-notes-ep08)) where I applied some basic EQ, compression and Saturation to it, plus iZotope's trash plugin.

When time-stretching base sounds, it's always a good idea to apply a high-pass filter, because as we slow down a sound, its lower frequency content is shifted even lower, leading to potentially unwanted hum in the sub. Compression is a good idea too, because changing the timing/playback rate of a sound affects its envelopes, something a compressor can help unify. Saturation comes into play just to provide some warmth and character.

I also ran the sounds through iZotope to trash, in order to, well, Trash them more. Trash is a very sophisticated plugin with multiple modules (EQ, Compressor, Overdrive, Delay, and more) which deserves its own episode, but for this competition and in the interest of time, I simply had a browse through presets.

**Should you use Presets?**

Yes! Presets are oddly stigmatized in the audio engineering community, and there is some logic behind it, but I think people take that logic and apply it incorrectly, giving out bad advice in the process. Some plugins are hard to set presets for, namely EQs and compressors. If you want to compress, say, a bass synth, it's not enough to choose the bass synth preset on your compressor. For one, bass synth is a loosely defined term, and can be anything from a square wave to a sophisticated synth setup with multiple HFOs and filters, but also, possibly the most crucial parameter in any compressor is the threshold, and there's no way for the preset to know what your threshold needs to be, so choosing a preset there is not wise. Even still, as a beginner you may want to start from the preset, and adjust the threshold and attack/release time to get to where you want quicker.

For more complicated plugins like iZotope Trash, presets save you time. A plugin with multiple modules takes time to set up, and offers infinite possibilities, with each module having multiple parameters and your possibilities compounded further by the ability to re-order these modules in series and parallel. Chances are you can find the sound you want quicker through presets and time is literally money in this business.

In Sound Design, you are often paid for the project. You get, say, $1000 to Sound Design a short film. If it takes you 100 hours to do it, then you are paid $10 per hour, and if you bring that number to 20, suddenly you are earning $50 per hour. So whatever you can do to save yourself time, translates to money in your pocket.

Use presets, but don't rely solely on them. Use them as a starting point and edit them from there, but to completely write off presets is tantamount to dogma and I can't stand for it!

**What's needed for a good robot sound**

One of the best examples of great robot sound design is the work of Ben Burtt in Wall-E (2008). I took huge inspiration from the way he designed the sound of that robot for this project. The robot's vocalization are not just ornaments. They convey great emotion despite the fact that the robot doesn't speak, and the primary way Burtt achieved this is through manipulating the pitch envelope of the vocalizations.

One characteristic of the human voice that we use to convey tone and emotion is the pitch. Think of how differently we say these two sentences:

He's leaving. (statement. Steady pitch envelope)  
 He's leaving? (same words, but an upward pitch envelope in the end conveys our amazement and forms it as a question)

This characteristic of the human voice is crucial to inject into any creature design, and transcends language and culture. If you've ever tried communicating with someone where you don't speak a common language, you'd know how important it is to convey your tone. We do this unconsciously, but as sound designers, we need to dissect and recreate these.

**Sound Design Method 1: Item-based envelopes**

One of Reaper's hallmark features is Item-based envelopes, allowing you to adjust pitch, volume, pan, and mute for an item. If you place any plugins on the item, you also get envelope lanes for all its parameters. So a simple yet time-consuming way of sound design is to simply make duplicates of your sound, and use the envelope lanes to manipulate their pitch envelopes.

**Sound Design Method 2: Using Samplers**

My preferred method for most sound design applications, is chopping up my base sounds and placing them in a sampler. From there, I can assign different sounds to different keys, assign some parameters like pitch and playback rate to knobs, and "perform" the sound design in real-time. This may take a long time to set up, but on the plus side, once you set it up, two things happens: one, you have a working "instrument" that you can use forever, in different projects. Two, once you set this up, you can spend hours experimenting by just playing notes, manipulating them, and recording the result. So in the long-run whatever time you lose setting up an instrument, you make up for by not having to use your mouse to manipulate envelopes, playing it back, rinsing and repeating!

**What Samplers should you use?**

For this project, I used Kontakt, but in the tutorial I'll also show you how to use Reaper's built-in sampler, ReaSamplOmatic5000, which may not look like much, but is capable of doing most of the same things that Kontakt can do, and comes free!

**Conclusion**

I hope you enjoyed this tutorial! Every sound design project is different, and while the exact process I used may not be applicable to your projects, the way I do it is something I hope you can take away from.

<youtube id="be.com/watch?v=nifgJyN6P7U"></youtube>

**Extra Study Material**

Ben Burtt on Wall-E Sound Design: [https://www.youtube.com/watch?v=bF12uhlT6ZM ](https://www.youtube.com/watch?v=bF12uhlT6ZM) RS5K tutorial (in-depth) by Kenny Gioia: [https://youtu.be/VxEGphq0Gck ](https://youtu.be/VxEGphq0Gck) Kontakt basic tutorial: [https://www.youtube.com/watch?v=IzjXTACUWsY ](https://www.youtube.com/watch?v=IzjXTACUWsY) Robert Dudzic on Sound Design: https://www.youtube.com/watch?v=Uxr9765BYNA  


