## Sound Editing & Design for Visual Media - Ep13 Tutorial Notes

![](/blog/sd4vm/13/182.jpg)

Hey folks! This episode is a crash course into 5.1 and the basics of surround sound. I thought it would be a good idea, as we prepare to dive into concepts like Ambience Design, Movement, and Layering, it's useful as editors to think ahead to the mix stage, which means we need to talk about 5.1. To do that, we need to cover how we got from mono to stereo, and from stereo to surround sound, and why surround sound has become the standard, and to understand all of that, we need to get inside our own minds and understand a bit about how our auditory perception works. Each topic feeds into each other and here we are, a 20-minute episode about 5.1 that's not exactly all that much about 5.1. Still, this was fun to make and I hope it can be informative. You may know some or all of this but I want the groundwork to be set here and refer to this in future episodes.

Just because it's a crash course, doesn't mean it's gonna be short, but it does mean that we have a lot of additional studying to do. So let's go!

**What is 5.1?**

5.1 is an output channel configuration most commonly used in Surround sound audio. It's not the only form of surround sound, and soon it won't be the most commonly used either. Regardless, it's a great place to start our journey beyond stereo here.

Let’s explain the number really quickly: it tells us the count and configuration of our output channels. In 5.1 There are **5 boundary speakers (L,C,R,Ls,Rs)**, plus an **LFE (Low-Frequency Emitter)** each taking in one of the 6 channels of output audio. Using these numbers we can codify different channel counts and distinguish between different multichannel set-ups.

Stereo Speakers/Headphones = 2.0 (Fig. 1)  
 Stereo Speakers + Subwoofer = 2.1 (Fig. 1)  
 LCR = 3.0 (Fig. 2): This set-up is a slightly wider stereo with a more focused centre. The Left and Right speaker are at a 30 degree angle with the listener.  
 Quadrophonic Audio = 4.0 (Fig. 3): Four Speakers arranged in a square around the listener.  
 LCRS = 4.0 (Fig. 4): An LCR front set-up with a single surround speaker behind the listener

![](/blog/sd4vm/13/183.jpg)

Beyond that, we get to 5.0 which is a slightly Modified LCR array up front with a pair of surround channels out back. In 5.0 the Front Left and Right speaker may be angled wider than 30 degrees, and the back pair can be anywhere from 90-135 degrees behind the listener.  
The addition of the LFE brings us to 5.1: a 6-channel system laid on an array of 5 and an additional 1 purpose-built low-end speaker.

![](/blog/sd4vm/13/184.jpg)

_a 5.1 set-up. Note that the LFE may be placed below the Centre Speaker, slightly to either side, or even under the listener in home theatre set-ups!_

So why exactly do we need this many speakers? To answer this, let’s do a quick crash course inside this crash course and talk a bit about sound cognition, sound reproduction, and psychoacoustics. I'm gonna paste below several links for studying each of these topics further:

5.1 Speaker Setup: [https://www.dolby.com/about/support/guide/speaker-setup-guides/5.1-virtual-speakers-setup-guide/ ](https://www.dolby.com/about/support/guide/speaker-setup-guides/5.1-virtual-speakers-setup-guide/)A Brief history of recording: [https://charm.rhul.ac.uk/history/p20_4_1.html ](https://charm.rhul.ac.uk/history/p20_4_1.html) Incredible book on Music Cognition & Psychoacoustics: [https://mitpress.mit.edu/books/music-cognition-and-computerized-sound ](https://mitpress.mit.edu/books/music-cognition-and-computerized-sound) History & Evolution of Microphones: [https://mynewmicrophone.com/mic-history-who-invented-each-type-of-microphone-and-when/ ](https://mynewmicrophone.com/mic-history-who-invented-each-type-of-microphone-and-when/) Interesting article on the birth of Stereo: <https://theconversation.com/how-stereo-was-first-sold-to-a-skeptical-public-103668>

Introduction to HRTF: <http://users.umiacs.umd.edu/~ramani/cmsc828d_audio/HRTF_INTRO.pdf>  
Brief History of Surround Sound: <https://us.kef.com/blog/a-brief-history-of-surround-sound>

LFE Article: <https://hometheaterhifi.com/editorial/the-misunderstood-01-lfe-channel-in-51-digital-surround-sound/>

Another great paper on Sound Cognition: [https://www.cambridge.org/core/journals/organised-sound/article/abs/spatial-perception-and-cognition-in-multichannel-audio-for-electroacoustic-music/AED2D7A5A1DE681DC6D6955669CBBD3A ](https://www.cambridge.org/core/journals/organised-sound/article/abs/spatial-perception-and-cognition-in-multichannel-audio-for-electroacoustic-music/AED2D7A5A1DE681DC6D6955669CBBD3A) Short but deep article on Surround Sound Psychoacoustics: <http://decoy.iki.fi/dsound/ambisonic/motherlode/source/Surround_sound_psychoacoustics_A4.pdf>

**The Phantom Centre**

Stereo speakers can trick your brain into hearing sounds coming from between them. This is due to a psychoacoustic phenomena known as phantom centre. Our sound localization ability relies on processing two different streams of sound through our ears, so If both channels in a stereo set-up include the same exact sound, like a mono dialogue track, assuming the listener is wearing headphones or aligned perfectly in an equilateral triangle with the speakers, then theoretically the same sound would hit both ears at the same time. Since it’s impossible for the same exact sound to come from two different sources in nature, our brain is tricked into thinking that the sound source is directly in front of it! From there, adjusting the pan knob creates a change in the amplitude of the sound to each output channel, thereby creating the illusion that the sound is moving in a panoramic field.

![](/blog/sd4vm/13/185.jpg)

_The phantom centre & the field of audio in Stereo Set-Ups_

Stereo speakers still have limitations though. For example, They can’t trick our brain into thinking something is coming from behind us, or above us, cuz every sound they produce is loudest at the source, and our brains will always be able to tell, especially with speakers that are some distance away from us.

**Sound Cognition along the Z Axis**

![](/blog/sd4vm/13/186.png)

Due to the way our ears are shaped, our brains can also analyze the placement of sounds on the Vertical axis though we are less accurate on this axis. Sounds that are at the same height as our ears hit it from the front, while sounds above us, below us, or behind us, hit the exterior of our ear at different angles, decaying in specific ways that our brains can identify, albeit less accurately than Left-Right or Front-back detection. You will have experienced this when hearing a plane fly by. The low-end frequency content of the jet, paired with its placement above us, makes it hard to pinpoint its direction. This gets easier in enclosed spaces as our brains collects further information from the reflective environment.

Since stereo speakers are always in front of us, it’s not really possible to put a sound above or below another sound, nor to make it come from behind us. Headphones can kinda do this. through HTRF trickery, we can achieve a semi-convincing illusion of this by changing the frequency content of the two output channels to mimic the decay caused by the sound hitting our earlobes at different angles. HTRF is in itself a complex topic, and suffice it to say that it doesn’t really trick the brain if speakers are involved and therefore, is not of much use in a theatre where speakers are tied to a point in the space.

**5.1 Field of Audio and the purpose of added channels**

Stereo provides the listener with a window into a sonic space (The Pink strip in the image above. We can hear things to our left and right, and we can even perceive them to be near or far based on their loudness, reverb profile and more. 5.1 on the other hand, adds to immersion by putting you in the centre of the space. Utilizing a pair of stereo channels sent to speakers behind the listener, surround sound creates a 360 degree field of audio and places us in the middle of action.

![](/blog/sd4vm/13/187.jpg)

_The Field of audio in a 5.1 Set-Up_

**The Centre Speaker**

The centre speaker provides additional power to the front of this audio field, but more importantly, it gives a true centre. Like we said earlier, phantom centre relies heavily on the listener being aligned perfectly with a speaker pair. In a movie theatre, most of the audience are not perfectly aligned with the speakers. Without a Centre speaker, audience members sat in the outer seats will not hear the sound the way it was mixed. In theatres, you may not see the centre speaker, as it is built into the screen. In home theatre set-up, the centre speaker may be much smaller that the rest.

The Centre speaker plays the most important stuff which are, you guessed it : mostly Dialogue, important SFX and Foley elements that pertain to the story, and maybe some elements of music to help widen the sound in key moments. Especially when it comes to dialogue, we want to stick to the centre for most of the film. Even if we are watching two people converse in a wide shot like this, we don’t want to pan our dialogue accordingly, cuz maybe the next shot cuts to a different angle, and now we have to flip the pan, which again, takes away from the immersion. Our brains are so attuned to sudden changes like that in sound, because they never happen in real life. We seem to have suspended this disbelief when it comes to sudden angle changes in picture, because shots like this are part of the film grammar that we have become fluent in.

**The LFE**

The LFE adds a somatic layer to the experience. We feel even more affected by the sounds in the environment as the ground shakes beneath us, and we feel energy in our chests as low-end hits. It’s a much more immersive experience!

The LFE is a funnel for most of the low-end in a project. For the same reasons we don’t put a lot of sudden sounds in the surrounds, it’s also important to remain cognizant of how much low-end goes into boundary speakers. Rumble and low-end in the surrounds are also a no-no, as they can also make the audience instinctively turn around and away from the screen. Low-End sounds also have relatively little trouble filling the room, so we output them all from one place. The placement of the LFE also helps adds to its somatic impact. We feel really low-end frequencies as much through our bodies as we do through our ears!

**Approaches to 5.1 Editing & Mixing**

Something to know is that 5.1 doesn’t give us complete free rein to send audio wherever we want and whenever. In fact, there are certain conventions that inform the decisions of 5.1 mixers and editors. The goal of audio in films, after all, is to immerse the audience into the film world. In simple terms, we want the audience to be captivated and glued to the SCREEN. Having more speakers can help with this, but it can just as easily hurt it if we are not careful to adhere to certain principles. These principles are not always HARD rules, but they are still important to know. You want to stick to them most of them time, and break these rules with care and purpose.

Once again, let’s get in the head of our listeners. Humans are very instinctively reactive to sound. It’s a primal defence mechanism. Humans have a limited field of vision, but a near-spherical field of hearing. It’s coded into our DNA to get clues about our surroundings through hearing, and react to them instinctively. When you hear a loud bang out of nowhere behind you, you’re gonna look behind you and see what’s up. This is important to keep in mind as we mix a 5.1 film, because we don’t want to send too many sudden sounds to the surrounds. The main function of surround is to put us in the centre of a space, but we still want most of the action to happen in front where the screen is. For the most part, The Surround speakers are tasked with playing Stereo Ambience files and big stereo reverbs, everything needed to expand the space we are placing the listener in. They may also occasionally help create the delusion of movement, like when a spaceship darts into view from offscreen, but again, we don’t wanna over-do this. On the other hand, you want to refrain for the most part from putting dialogue or sudden gunshots in the surrounds because in those cases the audience is very likely to instinctively turn around and look behind them, away from the screen. Of course, horror movies turn this principle on its head sometimes, because they do want to startle you, but overall, this is something to use sparingly, too much activity in the surrounds makes for an annoying movie experience.

So we can see that these speakers often serve specific purposes, which limit our choices most of the time, but these conventions are also established in the film grammar. From a psychoacoustics standpoint, these conventions make a lot of sense. It’s useful to group our speakers in a specific way. We have a stereo pair up front, a stereo pair in the back, a mono Centre plus a mono LFE. In other words, we are working with two stereo and two mono subgroups of output channels. So as Editors we need to know all of this and we need to provide the mixers with appropriate sounds tailor-made for each of these speakers, both in terms of channel count and frequency content.

Keep in mind that 5.1 by no means eliminated all the limitations of Stereo. 5.1 expands the depth of the audio field, allowing us to place sounds behind the listener, but it doesn’t expand the Z axis. With 5.1 we’re still limited when it comes to tricking the audience into hearing sounds above them for example, which is part of why every year audio professionals find ways to add more speakers to this setup, and just like 5.1 builds upon stereo, 7.1, 9.1 and atmos build on top of 5.1. 5.1 editing and mixing is still the logical next step to take from stereo, before we can get too too crazy.

Hopefully you are beginning to see why it’s important to know this stuff. Movies and by extension their sound, are like a magic trick. You are creating an illusion that, if engaging enough to the senses, will transport the mind of our listeners into an artificial world. To make any illusion work well, you need to have some knowledge of how the brain works, and I hope that I’ve given you enough fun facts and quick tidbits to nudge you towards exploring these interdisciplinary fields of science.

**5.1 Deliverables**

Getting into the technical, a 5.1 mix is rendered onto 6 channels of audio as a multichannel wav. When we print a stereo file, we know that output channel 1 goes to the Left Speaker and channel 2 goes to the right, so with 5.1 audio engineers had to established an order for the channels rendered so they end up in the correct speaker, there are two commonly used orders: The Film Order, and the SMPTE Order.

**5.1 Film Order: L C R Ls Rs LFE**

**SMPTE Order:: LR C LFE Ls Rs**

Which order to print your mix in depends heavily on the spec requirements from whoever you are printing the audio for, but really there is no difference in how these sounds are heard from the listener’s perspective, and no difference in how we treat these six channels. It’s simply a matter of routing and the deliverable. Of course it’s also very very easy to take a 6-channel audio in either order, and simply re-arrange the channels to get to the other order when needed.

Commonly you deliver film audio in an 8-channel polywav file, the first 6 being the 5.1 print in the specified channel order, and 7-8 containing the stereo print. Unless your movie/TV show is extremely high-budget, you are probably gonna mix in 5.1 and simply do what’s called a mixdown or folddown to get a stereo mix, with very minor adjustments, if any. We will cover the specifics of a folddown in the next episode when I show you my mixing template.

You are also required to deliver a D M E stem mix, something we covered in Episode 0 of this series. The Dx Stem includes all the dialogue & Walla, The Mx Stem contains all the music, and the Sfx stem contains everything else. The stems are required for a few reasons beyond archival purposes: For international releases. The production company can have the film mixed in, say, English, then simply replace the Dx Stem with dubs of other languages. Stems also help create trailers, episode recaps in TV shows and additional promo material for films. When you’re editing a trailer or an episode recap, you don’t want to cut the film with all the audio intact, cuz that causes incoherent skips in music and dialogue. Instead, you want to provide the trailer editors with the stems, so they can take a bit of the music and overlay it on top of their edit, or just use their own hyped-up music as is common these days, and they can freely separate the other two stems from the footage. For example you may have narration from one scene just go on top of a big montage of many scenes, or you may want to turn down SFX to leave space for music. Finally with commentary, you usually turn down or strip each stem as needed, and mix commentary on top of that.

**Conclusion**

I will update this blog as time goes on, adding more animation and articles. For now, hopefully the extra articles will nudge in the right direction & watch the video for more graphics and demonstrations using audio:

<youtube id=".com/about/support/guide/speaker-setup-guides/5.1-virtual-speakers-setup-guide/"></youtube>

