## Audio to MIDI Drum Trigger JS Plugin Explained (Rapid-Fire REAPER tutorials Ep65)

![](/blog/rfrt/65/17.jpg)

Hey folks!

In [this episode](https://youtu.be/XtnuecwO8hM) I wanna show you a very useful JS plugin called 'Audio to MIDI Drum Trigger'. This Free plugin allows you to layer an acoustic drum/percussion performance with samples in an automated way (as opposed to having to write a double line of any element like a noob). I will also show you a quick way of using it to trigger MIDI drum sounds while playing on your practice pad, or just banging on your thighs, or even with a guitar! This is very handy especially for creating human-sounding Hi-hats, or simply to make your practice pad sound more interesting!

All you need for this is the free plugin, which you can download from Reapack ([here's how](https://www.youtube.com/watch?v=S2a4QWqZ53M)), a mic (doesn't have to be a good one), and a surface to tap/bang on, or anything that makes noise of any kind!

**How it works**
This plugin is essentially a gate. A gate is a plugin that you can place in front of your audio, and it will only let audio through if the level is above (or below) a certain threshold. This gate does the same thing, but where it's different is what happens when the gate opens. When the gate opens in this plugin, it sends a MIDI note on message. You can then use this message to trigger any kind of MIDI VSTi to play a sample/note for you! Simple as that!

**Parameters**

**Open Threshold:** This is threshold above which the gate will open. The way to set this is by looking at the incoming audio signal (the left meter on the plugin). So let's look at two examples:  
_Example 1 - triggering samples by acoustic drums:_ If you are using the plugin on a spot mic (let's say your kick mic), you are likely to have some bleed\* in your signal from other drums. You don't want the sample triggered by those, so you would set this amount to be above the bleed and other noise, but below the amount of the quietest kick sound.

_\*The sound of other drums (or any other element) captured by a spot mic is referred to as bleed. For example, when you record a kick drum, the sound from the snare, toms and cymbals still travel through the mic and are captured._

_Example 2 - performing a VSTi instrument using audio source:_ In this case, you want all your hit to be registered, so you can play the instrument/practice pad/surface quietly and set it below that to ensure all hits are registered!

**Close threshold:** Once the gate opens, it needs to close. This parameters indicates this level. For a real gate, this parameter is more important to set right, but for the purpose of this plugin, 9 out of 10 times it can just be the same value as the open threshold value, so set that well and then just make close threshold the same or within 1-3dB.

**Retrigger Interval:** As we mentioned above, once the gate opens, a MIDI message is sent, but what happens if the gate remains open? Well, the message will be sent again and again and again until it closes. This parameters sets how long the plugin waits until sending the next message, in the event that a gate remains open. In the case of drums, we mostly deal with sounds with a burst of energy up front and a quick decay, but you may wanna adjust this if your room is very reverberant, or if you want this "machine gun" like if you wanna say "ahhh" for 3 seconds and have it trigger 32nd hi-hat notes for the duration of your note!

**Original Signal Mix:** No matter what the gate does, the audio is never let through the gate, only MIDI message, but this parameter determines how much of the original signal is passed through besides the MIDI messages. To me, only 0% and 100% make sense here. You set it to 0% if you're using, say, a practice pad, to trigger a Hihat, and you set it to 100% if you are using a recording to trigger extra samples!

**MIDI Channel & MIDI Note:** These two parameters determine the data that goes with the MIDI Note On message, namely, the velocity and MIDI channel!

**Peak Detection Interval:** I did not ever need to play with this parameter at all! However, it is the interval at which the plugin "reads" the audio signal for level. Keep this at default unless you really know what you're doing!

**Trigger Align:** You may find that you need to align the sample's transient with the audio reading, or you may want to intentionally delay the sample playback. This parameter sets a delay for the MIDI message sent. You can set this to a negative value, but this causes latency and only works with pre-recorded material. For performance, this value should be zero or a positive value!

**How to set the re-trigger interval**

To avoid the "machine-gun" effect that occurs if the gate remains open, you have to adjust the re-trigger interval carefully. This is best done the accurate and hard way or the easy way:  
**-Accurate but hard method:** set the re-trigger interval to be a bit longer than the decay rate of your sound from the time the transient passes the gate to when the amplitude dips back below the gate. You can set a time selection from the transient to the point it's decayed, after setting the ruler to seconds. It may be hard however, if the triggering audio is not at a constant dynamic range. One way of making this easier is to send the audio to a dummy bus where the plugin sits, disabling master send, and placing an EQ before the JS Plugin. On the EQ, if you set a high HPF at around 500Hz, you will end up only with the high-end transient data that decay more quickly. This over-filtered audio will not be heard, but it can be more accurate at triggering the gate on time and then decaying quickly!  
**-Easy way:** Another way to set this number is by calculating roughly the lowest note denomination that exists in the recording/that you plan on playing. For example, say I know I'm recording a Hihat with the quickest rhythmic value of 1/16. We can then calculate the duration of that time division using this simple formula.  
**Duration of a Quarter Note in any given bpm: 60,000 (1 minute in milliseconds) / bpm.**
_Example: at 150bpm, a quarter note lasts 60,000/150=400ms._
From there, simply divide that number by 4 to get 1/16 notes, 8 for 1/32, or 3 for 1/8 triplets.

**How to set-up the plugin as a Drum Trigger**

To use this to trigger samples to layer pre-recorded material, simply place it on your audio track, and set original signal mix to %100. Then create a send from it (MIDI only) to send to another track where you VSTi plugin sits! Adjust the gate thresholds, set the correct MIDI note and you're done!

**How to set-up the plugin as a MIDI instrument "Controller"**

For this workflow, create a track. Put the plugin on first and then your MIDI VSTi Plugin. Set input to a mic, set the values as you soundcheck, and set record mode to output (MIDI).

Once you record, you can add it to a separate track and keep tracking, or just delete the track.

This plugin doesn't work so well when you overdub-replace, but try it and prove me wrong!

**Conclusion**

In the next few episodes, I will show you a few more JS MIDI plugins that I like a lot! This is inspired by my friend Myk from Let's talk about REAPER, who also contributed the drums to this tutorial! Make sure to check out his channel.

Here's the video:

<youtube id="XtnuecwO8hM"></youtube>

If you like the work I do, [you can donate to me here](http://www.buymeacoffee.com/iddqdsound)! Every little helps, so even if you send a dollar or two my way, I’ll be eternally grateful to you!

**My Reaper Stash:** <https://stash.reaper.fm/u/IDDQDSound>

**Follow me on Instagram:** <https://www.instagram.com/iddqdmusic/>

**My Music:** [**https://Soundcloud.com/iddqdmusic**](https://soundcloud.com/iddqdmusic)

[ ](https://soundcloud.com/iddqdmusic) [**https://iddqdmusic.bandcamp.com**](https://iddqdmusic.bandcamp.com/)

