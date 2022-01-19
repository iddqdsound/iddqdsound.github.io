---
tags:
  - REAPER SWS Extensions Demystified
  - Mixing Tips & Workflow Improvements in REAPER
date: 2021-04-01
youtube: CJpTV3Zzdtw
related-posts:
  - /blog/rfrt/91
---

## LUFS, True Peak & Dynamic Range Analysis with SWS Loudness (Rapid-fire Reaper Tutorials Ep69)

![](/blog/rfrt/69/87.jpg)

Hey folks! [In this episode](https://youtu.be/CJpTV3Zzdtw) we will look at another SWS feature, called Loudness. Loudness is a tool to quickly batch analyze a bunch of audio files for Loudness. It can calculate Integrated and Short-Term Loudness in LUFS, your True Peak value, as well as your dynamic range in LU.  
 [Here is a playlist of all the SWS features we have covered in the past](https://www.youtube.com/watch?v=PQAaAN6AI0I&list=PLjvmrOUg3J0pEil4PDHyupUI-9MQwsPmd).

**Loudness**

Loudness is an important factor when exporting audio files, whether they are songs you are getting mastered, masters you are going to upload, or SFX files you are exporting to a library. I use this tool also as a way to Quality Control my videos, making sure that my Videos are all around the same Loudness, so that if you are binging them, they all sound around the same!

**What SWS Loudness Analyzer Calculates**

SWS Loudness, unlike Loudness meters that analyze your audio in real-time, works on files. That means it may not be of too much use while you are mastering, because it doesn't analyze any Master Track, Track, or Item Processing on your items, just the source file itself. That's why for mastering, I still always have a Loudness analyzer, like the Youlean Loudness Meter, on my monitoring FX, but where those plugins analyze audio in real-time, SWS Loudness can do it in almost an instant!

Below are the things that the Loudness analyzer can show you and a brief explanation of each:

**Integrated, Short-Term and Momentary LUFS**

to best understand these first it's important to understand what LUFS is. LUFS stands for Loudness Units Full Scale, and it's a measure of a sound's perceived loudness compared to Full Scale. Normally, your meters in REAPER and most other DAWs, show you peak and RMS values. These values are very useful to you, but may not tell you much about how loud something is compared to others. For example, take a Kick sound and a fingered Bass note. A Kick sound has a fuller transient and decays quickly, whereas a bass note decays more slowly, sustains for longer, but has a softer attack compared to a kick. So the Kick will show you a higher Peak, and a lower RMS, while the bass will show a lower peak and a higher RMS. So which is louder?

This is where LUFS comes in. LUFS calculates average loudness over a period of time, so two songs that both hit -14LUFS should theoretically feel about the same loud. This is why LUFS values are now the standard for streaming platforms to make sure the music they host is nearly the same loudness, so that, for example, when you have a bunch of songs in a playlist, you're not constantly having to adjust your speaker's volume knob to hear them at a comfortable level!

**Integrated LUFS** refers to the average Loudness of your song from start to finish. This is the value you will have to conform to platform-specific values when mastering your own music, but it also doesn't tell the full story. For example, a track can be very quiet, hovering around -18LUFS during the intro, with a sudden burst of loudness in the chorus, bringing the LUFS value to -10LUFS. Assuming the loud and the quiet bit are equal duration, then your integrated LUFS value will be -14LUFS. That makes it pass the Spotify specs, but it doesn't mean your song won't annoy the listener. In the example above, your **short-term LUFS** is peaking at -10LUFS and your **short-term minimum LUFS** is well below the standard for Spotify, at -18LUFS.

It's totally okay for **momentary** or **Short Term LUFS** values to go below or above the standard, and that's actually encouraged! Afterall, if your song does have a quieter part and a louder bit, you want the transition between the two to be impactful. However, what you don't want to do is make the listener have to turn up their speakers during the quiet part and then have to turn it down. This is where the Loudness Range Comes in.

**Range (LU)** can be seen as the dynamic range of your track, comparing the momentary Maximum against the minimum. In the example above, our **LU Range** will be 8.

8 is not unheard of, but it is significant, and probably not suitable for most genres. It could be fine for an orchestral recording, but if you make rock music, you'd want to reduce the dynamic range a bit. There's no real standard for this and every song is different, but for rock music you should aim for anywhere between 5-7LU, for Hip-Hop you should have 4LU, and unless your song is full-on start to finish, you want to avoid leaving less than 4LU of Dynamic range for your track, [something I massively failed when mastering my last album](https://iddqdmusic.bandcamp.com/)! Learn from my mistakes, and try to consult a mastering engineer for your own genre, if not fully outsource your mastering to another professional!

**Conclusion**

If you are after quickly batch-analyzing a bunch of Audio files, Loudness is as good as it gets! I hope you can put this awesome tool to good use!

Here's the video:

<youtube id="CJpTV3Zzdtw"></youtube>

If you like the work I do, [you can donate to me here](http://www.buymeacoffee.com/iddqdsound)! Every little helps, so even if you send a dollar or two my way, I’ll be eternally grateful to you!

**My Reaper Stash:** <https://stash.reaper.fm/u/IDDQDSound>

**Follow me on Instagram:** <https://www.instagram.com/iddqdmusic/>

**My Music:** [**https://Soundcloud.com/iddqdmusic**](https://soundcloud.com/iddqdmusic)

[ ](https://soundcloud.com/iddqdmusic) [**https://iddqdmusic.bandcamp.com**](https://iddqdmusic.bandcamp.com/)

