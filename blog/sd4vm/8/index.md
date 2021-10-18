## Sound Design For Visual Media - Tutorial Notes Ep08

![](/blog/sd4vm/8/171.jpg)

Episode 8: How I won a Sound Design Competition (Part 1)

**Overview**

[ In this episode](https://youtu.be/Th_sDTNK_qY) and the next, I want to break down some of the Sound Design techniques and plugins I used to win the [SOE Sound Design Competition](https://www.asoundeffect.com/sound-design-contest-winners-soe/), organized by a Sound Effect. If you don't know, [A sound effect](https://www.asoundeffect.com/) is a great website for sound designers, with tons of useful blogs and tutorials, tons of libraries to purchase and download (some are free) and occasionally they also run sound design competitions.

I was one of the winners of their most recent Sound Design competition called Sounds of Esen, where the goal was to Sound Design a 30-second animation, using a limited palette of sounds that they made available to download. I think this is a great approach because otherwise, people with more libraries would just have too much of an edge. This is a great way of evening the playing field.

**Rules of the Competition**

There rules were simple:

Create your own sound design for the video above (no music is required) - here's what you can use:

-You can only use the sound effects included.  
-You're free to process, mangle and modify those sound effects in any way you like.

What we look for:  
-Great storytelling, as well as interesting experimental/creative sound usage.

Deadline:  
-Submit your entry no later than 23:59 CET on August 21st, 2020. 3 winners are picked.

**How to win a Sound Design Competition**

**1. It's all about the Story:** An old teacher of mine used to ask 'What is your job?' and many of us would say 'I'm a sound designer' and he'd say 'Wrong! You're a filmmaker!' what he basically meant by that is that we shouldn't only look at our job as a purely technical endeavour. We ultimately have the same job as any director, set designer, cinematographer or VFX Artist: We do it to tell a story. So your sound design has to help the story along, and provide the correct ambience to immerse the audience. How you got to that point from a technical standpoint is unimportant to most people, other than maybe other sound designers. You need to understand the story and then use sound effectively to help it along and even add to it.

**2. Stand out:** In order to win any competition where hundreds or thousands (in this case 4000+ entries were submitted) of submissions, you need to make your work stand out. Quality of work aside, think of the judges. They will go through thousands of the same video, so if you're doing what everyone else is doing, you are likely to be forgotten. Which brings us to:

**3. Throw away your first idea:** Whatever your first instinct is when you watch a video, it's safe to think that most people had that exact idea. So watching the video we had to sound design for, I think most people had more or less the same idea (and this is proven if you look up a few submissions and listen to them) which is a cute kinda comic approach to sound design. If you want to stand out, you need to throw that idea away, and find some angle to see the story that others possibly overlooked.

**4. Follow the rules:** People get disqualified for the dumbest reasons: Putting music where they shouldn't have, adding things that were not allowed, forgetting to submit with the correct title, forgetting to submit the correct format, or even missing the deadlines. Read the rules carefully and often, and stick to them. Read them before you start, a few times during preparing your entry, and right before you submit, and make sure you don't miss anything.

**5. Check your work:** Something that is an instant turn off for judges is minor mistakes that demonstrate a lack of attention to detail: SFX being out of sync, sounds cut off too early or drawn on too long, scenes left untreated, and weird volume unevenness across the project. Don't make them have to turn the volume up or down constantly, and don't give them a reason to disqualify you before even finishing.

**6. Layer sounds:** Placing a sound effect in sync to something happening on screen is not really sound design. Part of designing sound is combining multiple sounds to create a new entity. Layering is really what separates a Sound Editor from a Sound Designer. Layer your audio files for the same event. Have one low-end element, one high-end element and fortify each with layers. Similarly for designing any futuristic gun, you need an organic sound, and then maybe something futuristic and synthetic. We will tackle the topic of layering in further detail down the line.

**Sound Design Techniques I used**

In this project, as you will see in the video, I went for a very different approach than convention would dictate. [I took a cute video and I treated it like a gory horror film](https://youtu.be/oobhbZ_TDpg). Watch the video for more on this, and I had to break it down into two parts due to time, but here are some of the techniques I used most often.

**Pitch/Playrate Manipulation:** By far the most used technique in my arsenal is to simply play with the pitch and playrate of items. It may seem basic, but it really opens up the realm of possibilities, especially when you work with a limited palette of sounds. For this project, I took all the sound, divided them into groups based on length, file type, and sound designability (TM) and then for the first bit I just played with their playrate. Especially because these videos were recorded in 96k or even 192k, I could safely pitch shift them and warp them and they would still sound good. Pitch has a very interesting relationship to size. for example, take a cat growl and pitch it down, and suddenly you got a huge beast. The high-pitched growl turns into a low-heavy beastly growl.

The same applies to any impact sound effect and really to all sounds.

**Reversing:** Once again a very basic sound manipulation techniques which can transform your sounds from mundane boring SFX found anywhere, to something weird and synthetic.

Especially if you're going for a more organic approach to sound design, these first two techniques should make up the majority of what you do.

**LKC Variator:** [The LKC Variator is a series of free scripts and a GUI in Reaper ](https://shoutout.wix.com/so/11NGVl87N#/main)which can take a number of audio items, and randomize them in various ways (by volume, pan, pitch, rate, length, etc.). Since in this project we had a limited palette, I got a lot of variation out of a single Sound Effect by just duplicating it and applying randomization to its parameters. I then ran it through my Sound Design FX Chain (more on that below) and I ended up with hundreds of variations of the same file. It's important not to repeat the same sound effect so many times, as our brains easily latch on to that, and it just lacks a certain amount of class.

I only briefly went over how it works in the video, so [watch this tutorial by the Reaper Blog for a more in-depth tutorial.](https://reaperblog.net/2020/08/lkc-variator/)

**Modulation:** Modulation effects, especially when their rates are set to random amounts and not anything rhythmic, are a great way of introducing additional randomness to any sound, as well as lots of synthetic character. We will tackle this topic in further detail in future episodes.

**My Sound Design FX chain**

When I want to do sound design, I usually work within the same chain. This chain is made up of three tracks. The first track is called 'To FX' and this is where I would place my base sounds. That is then routed to my FX track, where I have a bunch of commonly-used plugins, and then that gets routed to a recording track set to record incoming audio in Mono (I have the same exact setup for Stereo Sound Design as well) which I name based on the SFX I'm preparing. I hit record, loop the audio, and start playing with the plugins. The changes are recorded in real time, which allows for lots of expressiveness, and eliminates the need for automating. This way I can focus on playing around and not on recalling everything I did.

![](/blog/sd4vm/8/172.png)

_My Sound Design FX Chain: Track 6 is where the audio goes, which is routed to Track 5, where I put my plugins, and then it's recorded onto Track 4, which I name based on the sound._

I also make a habit of saving FX chains in combos that I used them, and saving those as separate FX chains for later use. For example in this project I saved an FX chain I used on creating variation for Mechanical sounds (an EQ, compressor, and saturation) as 'SOE - Mechanical SD' and if at any point in the future I want to create Sounds of this type I can just recall that FX chain on my FX Track. A lot of sound design is about setting up your work now for future projects, so that when you are strapped for time, you can quickly use previously set up processes and get to the result you need.

**Project Organization**

I have alluded to some of these tips in the past, but in this video I also wanted to show a finished project so you can see my organization of a real-life project. Organizing items in this way is important both for sending projects off to your mixer, as well as for your own sanity, and pre-mix work. (More on Pre-mixing in the next episode)

![](/blog/sd4vm/8/173.png)

_My finished project. As you can see, all items cascade top to bottom and left to right, and every scene or every event in a scene is contained within 8 tracks, either 1-8 or 9-16. The reason for this is that most Mixing consoles are set up in banks of 8, corresponding to our 8 digits on our two hands. That is the maximum number of faders we can move at the same time, so this is how sound mixers like the projects delivered to them, but even in a project like this where I am my own mixer, this layout helps me navigate my project better!_

In a sound design competition, you are your own boss, so do what you want, but habits like these, you want to embed in your brain and muscle memory.

**Item-based Processing**

When SFX Editing, Tracks are simply receptacles for audio. They are not organized like a music project is, where one track would contain Bass, another one Overhead mics and so on. The same track could contain vastly different sound effects, which is dictated by when they occur in a scene. This is why Item-based processing in Reaper is a godsend for SFX editors. I can simply do all my automation and DSP by placing plugins on the items themselves and they are only tied to that item. This way I can move them around as I wish, and never have to retrace my steps!

![](/blog/sd4vm/8/174.png)

_Reaper allows you do any number of things just to an item, like change its rate, pitch, as well as place any plugins on it, or automate it, and all this stuff is contained in the item, moves with the item, and doesn't affect other items on the same track._

**Conclusion**

I hope this video was a good change of pace from our more technical tutorials in the past 2 weeks and I hope by the end of the next episode you will have at least some of the most common sound design techniques I use at your disposal. I also really hope you are using these in your own projects, and soon I want to run my own Sound Design competition and give awards to people. It would also give you something to do. If there's any video you know of that we can secure the rights of and use for sound design, email me at [iddqdsoundofficial@gmail.com](mailto:iddqdsoundofficial@gmail.com) and let me know about it!

Here's the video for this week:

<youtube id="Th\_sDTNK\_qY"></youtube>

[Visit this link](https://www.asoundeffect.com/sound-design-contest-winners-soe/) to see my submission and also check out the other two winning entries!

**Reading Material**

Below are some articles I found which can be useful to further study some of the concepts and topics we discussed this week:

Great video by Kenny Gioia on Item-based Processing: <https://www.youtube.com/watch?v=vWFT5nMQxik>

Great Sound Design article on Layering: <https://getthatprosound.com/sound-design-techniques-tools-series-10-key-ways-and-best-plugins-part-3-layering-plugins/>

Another great article from the same author on Pitch Shifting: <https://getthatprosound.com/sound-design-techniques-tools-series-part-6-pitch-shifting/> [ ](https://getthatprosound.com/sound-design-techniques-tools-series-10-key-ways-and-best-plugins-part-3-layering-plugins/)On modulation: <https://iconcollective.edu/modulation-effects-tips/>

See you next week!  


