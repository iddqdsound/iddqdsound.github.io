## Sound Design For Visual Media - Tutorial Notes Ep07

![](/blog/sd4vm/7/161.jpg)

Episode 07: Compression in Post-Production Audio

**Overview**

In this [episode](https://youtu.be/AXpsVWHK07A), we are gonna look at compression, specifically compression in post-production audio editing & sound design. This is a very large topic and as usual, I recorded 2+ Hours of video and had to edit down a lot of crucial info to get it to a reasonable duration.

Compression is a topic I get riled up about, as I think it's as important as it is misunderstood, with lots of myths surrounding the topic, some of which comes from some really top producers! People who, admittedly, know how to use them and have way more experience with them than me, and have used them to achieve some amazing sounds, but their theoretical knowledge is incorrect, lacking, or perpetuating myths that have circulated the audio world for years. I attempt to bust some of these myths in this blog post. I will also rectify a mistake that I made in the video. I misspoke at around 4:10 due to exhaustion and due to being just not a great video editor and content creator yet, but I am learning as I do so I hope you forgive this and find the correction explicit.

Finally we're gonna look at 5 tasks and effects that can be achieved using a compressor. The video provides a crash course in compression but as we did last week with EQs, let's look Compressors and demystify the common parameters you'd find on most compressors.

**What's a Compressor?**

A Compressor is an audio hardware unit or plugin, with a rather simple task: Controlling dynamic range of audio files, by applying gain reduction. The earliest compressors worked similar to a thermostat. They would be placed in the signal chain, and they would be given a **threshold** amount and a **target**. Whenever the amplitude of the signal being fed into them exceeded that amount, they would turn it down proportionally based on the target.

So instead of having to ride a fader to even out the loudness of a track, you would automate this process using a compressor. There was a problem though. Compressors could react to what just happened, but had no way of knowing what’s going to happen. They would constantly be blind-sided by sudden spikes in amplitude, so when a new transient would occur, they would usually be in the middle of applying reduction to the previous spike, so they would squash it, or sometimes they would just not react as quickly as the audio ramped up in amplitude. These would affect the quality and timbre of instruments (some producers were even able to use these flaws to their advantage). That’s why compressors began to add an attack and release time. When the amplitude exceeded the threshold, the compressor would apply gain reduction with a ramp, and then it stopped working at the end of the release time. With a bit of adjusting, engineers could figure these values out to preserve the transients occurring and the ones about to occur. So beyond controlling loudness, they also became a tool to control the **envelope** of a sound, its attack time, sustain time, and so on.

Nowadays, compressors are extremely sophisticated, there are models like the **Waves H-Comp** plugins that set the release time automatically, or can sync the release time to musical values. There are plugins offering **automatic make-up gain,** or **automatic attack values**, which are handy features but also controversial, with some producers and designers questioning their accuracy and usefulness. Other companies like **iZotope** have built software that can set the compressor by analyzing the incoming audio, to mixed results. All of those is not to mention **multi-band compressor, limiters, maximizers, de-essers, de-plosives,** all of which are forms of compression performing more specific tasks (not all de-plosives are compressors but that's another topic).

![](/blog/sd4vm/7/162.png)

_A random assortment of compressors. Clock-wise from top-left:_
_-CLA-2A, an emulation of the legendary LA-2A Compressor, a primal compressor with two parameters. The amount of compression is decided by comparing the input gain against the amount of reduction. No attack or release. This is suitable for parallel compression._
_-API-2500, another emulation of API rack compressors. this is a semi-parametric compressors allowing for a few carefully selected attack, release and ratio values. This compressor is coveted for its customizable tone and knee, and works especially well for low-end._
_-C4 Multi-band Compressor: This is a compressor with 4 adjustable bands, so essentially it's 4 compressors built into one unit. Suitable for sound design as well as mixing and mastering, both in music and in film. It's one of the go-to compressors for dialogue mixers as well._
_-Puigchild 670: another emulation of the legendary Fairchild 670 Compressor. These compressors introduced various features that set the bar for generations of compressors to come._
_-OTT: my favourite free compressor plugin by Xfer. It allows for serial upward and downward compression, with three bands. It is most famously used in EDM production, but it's also a great sound design tool!_
_-H-Comp: A modern hybrid compressor, blending analogue warmth with digital capabilities like auto-release, tempo-based timing, and a very useful punch parameter, which helps preserve transients._
_-C1 Compressor: My personal all-purpose go-to Digital compressor for most applications in sound design._

With these advancements, the scope of the tasks we can achieve with compression has expanded. Not only do they continue to allow for quick controlling of loudness, but they can get the dynamic range of audio recordings to a mixable amount, help accentuate transients, modify the envelope of a sound, or provide it with power, oomph and body. They are also used to "glue" unrelated sounds together!

**Compressor Parameters**

To understand Compression better, let's look at some parameters that are commonly found, in one form or another on almost every compressor. They may differ in the way they are named, or in terms of the units and numbers they display, but they work essentially the same.

**Threshold:** Threshold is a value expressed in dBFS (decibel Full scale). Threshold dictates when a compressor starts applying gain reduction to incoming audio.

_Say I have a recording of footsteps across a wooden floor. Some are louder, some are quieter. If I set my threshold at, say, -20dBFS, the compressor will not do anything if the incoming audio is quieter, but begins applying gain reduction whenever the audio exceeds -20dbFS._

**Ratio:** Ratio is the most common way this parameter is displayed, but in older models and emulations, may also appear as **Amount** or **Gain Reduction (GR)** or **Peak Reduction.** We have an audio, we have a compressor and we set a threshold. Now the ratio tells the compressor how much gain reduction to apply. Ratio is most commonly expressed in, well, a ratio, X:1 where X dictates what amount of amplitude increase past the threshold, results in a 1dB increase in amplitude post-compressor. This is a bit complicated so let's look at an example:

_Let's continue with the footsteps recording example. I put a compressor in front of the recording, and set the threshold to -20dB. If I choose a ratio of 2:1 that means that for every 2dB the audio exceeds -20dB, there will be a 1dB increase post-compression. So if a footstep registers -18dB pre-compressor, post compressor it would register at -19dB, with a 1dB gain reduction applied. If a footsteps registers at -10dB pre-compression, it would register at -15dB post-compression, with 5dB of reduction applied._

![](/blog/sd4vm/7/163.png)

_Simple graph of values for a compressor with a threshold of -20dB and Ratio of 2:1. Before -20dB, the incoming audio and outgoing audio after compression match in loudness values. Above -20dB every 2dB increase in input gain results in a 1dB increase in output gain, so input gain of -15dB will result in output gain of -17.5, -10 IG will result in -15 OG, and if the input signal is clipping at 0dB it will be output at -10dB._

**Ceiling:** Ceiling is not a parameter per se. At least, it's not something you can set on most compressor (On most limiters you can. We will explain close cousin of compressors later in the post) but it's the maximum loudness possible after compression. Some compressors do away with Ratio and instead feature a **Target** or **Ceiling** parameter, which I will explain below:

_So let's assume that we set a compressor to -20dB threshold and 2:1 ratio, and let's also assume we are feeding it a normalized audio file, meaning it's not clipping and its loudest sound registers at 0.00dBFS._
_With that threshold and ratio, if a sound is at 0.00dBFS, it is 20dB above the threshold, and reducing it by half brings it down to -10dB. In this case, we can say the ceiling of our compressor is -10dB._

As long as our audio doesn't clip, no sound will exceed this threshold (not EXACTLY true but let's accept that for the sake of theory). Calculating the ceiling is pretty easy. This is the formula:

![](/blog/sd4vm/7/164.jpg)

_The post-comp ceiling formula. Take the Threshold (ie -20dB) and deduct it from the ceiling pre-comp (the loudest bit of your audio before compression, which should be 0.00dBFS for normalized audio) then divide it by ratio, and add it to the threshold._

Great! This seems simple on paper, but in real-life presents a bunch of complication and has led to a lot of myths surrounding this topic. We'll tackle these myths in a minute. The problem that occurs is this: When the audio exceeds threshold and is being turned down, how should the compressor do it? Should it instantly turn it down by the full amount? Should it then keep it there until the audio go back to normal? Wouldn't an instant application of gain reduction sound bad? How does the compressor decide when to stop, or should it stop or just keep going? How will this affect the tone of a compressed piece of audio?

![](/blog/sd4vm/7/165.png)

_This is NOT a type of automation you'd want to do with volume, as it will often sound bad. Conversely, compressors would not be very useful if they applied gain reduction in this free-fall manner._

Let's remember here that Compressor apply gain reduction, something we can do without a compressor as well. I can simply grab a fader, play the audio, and turn it down when it gets loud and bring it back to 0 when the audio is quiet, but how do I do this? Can I react instantaneously to dynamic changes? No. When I do, can I instantly apply 6dB? Also no. There's no way for me to have my fader teleport down 6dB. I have to apply the reduction with a linear, continuous fader movement. So on my way to 6dB reduction, there are brief moments that I'm applying 1, or 3 or 5.9dB of reduction. That's good actually, because we don't want an audio to suddenly be dropped 6dB. That would sound bad. That's why faders were invented in the first place. They could just as easily have invented a button that when pressed, turns something down 6dB but that causes a pop and no one wants that. Maybe Glitch music producers, but that type of fader movement would be of little use to anyone aspiring to any level of realism

A compressor may respond faster and more accurately than a human, but it has more or less the same limitations. It may be able to react super-humanly quickly, but it can't pre-act. It can't know what's about to happen with the incoming signal. It also can't make any decisions about the Gain reduction it applies. It does so indiscriminately, and doesn't care about tone or quality.

_Note: Some compressors have a lookahead feature, but that still doesn't allow them to predict the future, or work with live signals. They simply set a buffer time to analyze incoming audio before deciding how to apply gain reduction._

All these problems were answered when **Attack** and **release** values became a staple for compressors. Once we begin thinking of a compressor as a robot that applies gain reduction to an audio, then we clearly see the need for customizing this robot a bit. Does our robot react instantly and quickly? or does it ride the fader smoothly?

**Attack:** The attack, usually expressed in Milliseconds (ms) but sometimes seconds in older compressors, is the time it takes for the compressor to reach full reduction after the signal exceeds the threshold. This bears repeating so much that I'm literally gonna copy and paste it twice more. Read carefully.

Attack is the time it takes for the compressor to reach full reduction after the signal exceeds the threshold.

ATTACK IS THE TIME IT TAKES FOR THE COMPRESSOR TO REACH FULL REDUCTION AFTER THE SIGNAL EXCEEDS THE THRESHOLD.

**This is so utterly important and misunderstood, that I'm gonna bust this myth right here, post structure be damned! A lot of people think that Attack is the time the compressor waits before it reacts to a signal that is louder than the threshold. THIS IS WRONG! It's so wrong and it's also so stupid when you think about it.**

**We invented a robot to automate the task of reducing gain of the loudest parts of our audio, one that does so faster and more accurately than any human could, but now we're creating a parameter to make the robot work more slowly and inaccurately? WHY IN THE FUDGE would we EVER want to do this? What can be achieved by this? Also what happens after the attack time? Our compressor waits the attack time, then suddenly has a knee-jerk reaction to the audio? Meanwhile the amount of time it waited can cause clipping, and then when the reduction is applied it would also sound crappy. Why would we do this?**

Once you think about this myth, it's very clear that compressor don't work that way. Don't believe me, test it yourself. We did so in the video. These things are easier to show visually so I'll let you watch the video for the proof, but for the love of god, stop saying this.

![](/blog/sd4vm/7/166.png)

_As iZotope's Neutron 3 compressor clearly shows, the compressor kicks in at the exact moment the signal exceeds the threshold. It just doesn't apply full reduction right away!_

Anyway, rant over. Let's go back to our footsteps example:

_We have so far set the threshold to -20dB and applied gain reduction at a ratio of 2:1. As stated above, we want this reduction to have some sort of ramp. We don't want it to be an instantaneous reduction because that causes pops. The attack time dictates the curve of this ramp. Say our attack is set to 10ms. Say the audio pre-compressor registers at -10dB. We know that our settings would apply 5dB of gain reduction, making the post-compressor audio register at -15dB. The attack tells us the time it takes for the compressor to reach 5dB of gain reduction. This DOESN't mean that the compressor waits 10ms. It means that it ramps to 5dB of gain reduction in 10ms._

Now, I would say in the interest of accuracy that this is not always the case with every compressor, some compressors' attack times dictates the ramp curve to 2/3 of the way to full reduction, but again, this is somewhat unimportant, and there are bigger myths we have to unlearn before getting nitpicky with this small detail.

Once again, at the conditions set above, the compressor kicks in IMMEDIATELY after the audio exceeds -20dB (in this case, by 10dB) but it takes 10ms to apply the full amount of reduction at 5dB. So 5ms after the audio has exceeded the threshold, we are -2.5dB of reduction, and 8ms after we are at -4dB of reduction. That's it. Simple as that. We are not on purpose making our compressor react more slowly. We are simply trying to "humanize" the reduction it applies, as if it was riding a virtual fader. Attack tells it how quickly or how slowly to move the fader.

A fader that goes down must come up at some point, which brings us to release!

**Release:** Once the maximum Gain Reduction is reached, the compressor has finished the task of applying gain reduction, and now needs to revert back to its idle state, and await more signal. How quickly the compressor goes back to no reduction is dictated by the release time. So in the picture below, you can see that the compressor took 20ms to reach maximum reduction, and then 5 times as long to go back to the flat line.

![](/blog/sd4vm/7/167.png)

_The automation curve displayed on a Neutron 3 Compressor. The gray shapes on the bottom show incoming signal, the orange line is the compressor gain reduction curve. You can clearly see the gain reduction kick in AT THE EXACT MOMENT that the audio goes past the white threshold line. It then takes 20ms to reach 5dB of reduction, and then goes back to no reduction in the next 100ms._

_**Correction from the video:** I noticed that I myself explained this not very clearly in the video. So, my apologies. In the video I mentioned that once the compressor kicks in, it no longer cares whether the signal stays above or below the threshold, which is wrong. I was attempting to bust the myth that Release is the time after the audio goes below the threshold for the compressor to stop, which is untrue, but what I said was also somewhat untrue. For example, if the threshold is so low that the signal is always above the threshold, then the compressor is constantly working. It attacks the signal with reduction, then applies some release, then keeps attacking._

Now that we understand all of this, and most importantly, no longer believe the myths about Attack and Release, let's try and think of attack and release time differently. In my view, a lot of these myths came about because Attack and Release times are hard to grasp and detect as humans. It's hard for humans to hear changes happening to a signal in 5ms and 50ms increments, which is why compressors are so effective. It's hard for us to imagine what 5ms vs 10ms sounds like. We can't really accurately measure them without a device. If I tell you to count 5 seconds, you would probably be able to get pretty close to accurately counting it. If I tell you to count 5ms, you probably wouldn't be able to.

So let's look at them differently, instead of thinking them like time values, let's look at them as curves. A faster attack or release means the fader is moving down or up faster, and slower means its moving slower. It's not about time per se, but how fast it ramps. Think of it like actual attacking. When something is loud, we tell the compressor to attack it with gain reduction. Once the attack takes place, we tell the compressor to ease off on the reduction. The total length of the gain reduction envelope is not attack+release. In a single hit situation it may be close to that, but overall, these values determines the speed of our compressor reacting and not the duration of the attack and release. hopefully that makes sense. If you look at the picture above, you would see, for example, that our release is not fully linear. On its way back up it does occasionally start reducing a bit. The picture from the Neutron 3 compressor illustrates this. The attack is faster and so are the reduction curves. The release is slower means the ramps up are more gradual.

Above, we also discussed **Ceiling** and we said that the ceiling is the maximum loudness attainable post-compression. This is not Completely true and attack and release times are the reason why. Once again, this is easier to comprehend using an example:

_say we have the same recording of footsteps, and the same compressor, Threshold at -20 and ratio at 2:1 but say our attack is 100ms. Say one of our footsteps is very loud, registering at -2dB pre-compression. So it's 18dB above the threshold, meaning it would be reduced by half to -11dB (9dB of reduction) so in this case, we would expect not to see any value on our fader post-compression than -11dB BUT there's another factor at play. If our footstep sound spikes to -2dB from, say -30dB of background noise, in 20ms, then our attack time, set at 100ms will not be fast enough. 20ms in, it has still only applied a fifth of the total amount of reduction, or 1.8dB of gain reduction, which means 20ms into the sound, we will see -3.8dB on our faders, because the full reduction hasn't been applied yet._

This seems to further perpetuate the myth that attack time is the time it takes for the compressor to react, which isn't true. However, it is true that you can set the attack time to be too slow, and thus not achieve the reduction amount you want in the time you set. Again though, this is because of a human error in setting up the compressor, and not at all a flaw inherent to any compressor.

**Knee:** Knee is a rather difficult thing to hear in compression, as is all effects of compression. Let's look at a quick picture before we explain it:

![](/blog/sd4vm/7/168.png)

In the picture above, if you're an astute observer, you can tell that it's a compressor graph showing the threshold at -20dB and a ratio of 4:1. Our ceiling in this case is -15dB for normalized audio. If the audio is at 0.00dB, it is 20dB above the threshold, and at 4:1 for every 4dB going above we are only seeing 1dB increase, so since we are exceeding 5x4dB then we are seeing 5x1dB increase, making our ceiling -15. Great!

The problem is, this curve looks very aggressive. The dynamic range of the loudest parts are very tight and close to each other, while the range below is normal. This is where Knee comes in. A Knee is what it sounds like. The above graph shows a hard knee. The line does a clean break at the threshold and is linear before and after. A knee amount can soften this curve by applying some compression pre-threshold and post-threshold. So instead of being 1:1 before -20dB and then 4:1, a soft knee will have a ratio of 1.1:1 at -25dB, closer to 3:1 at -22dB, and so on, so we can imagine it as having not a clean break, but a curve.

Soft knees should be applied if you want the compressor to be more transparent, while hard knees are used either for very small ratios (below 3:1) or when we want to actually hear the compression, rather than have it work silently in the back!

**Make-Up Gain/Post-Compression Gain:** This is a parameter that, technically, isn't part of compression, but that you would find on most compressor. At the end of the day, when you compress something (downward, more on this later) you are reducing its gain, and therefore, making it weaker. Make-Up gain is an amount of gain restored to the signal after compression is done. So if you compressed a file and lost 5dB on average, then you could use make-up gain to restore 5dB so that it's as loud as it was before, but perceived louder because of the dynamic range being tighter. Some people say make-up gain should never be touched. Yet another myth. Others say you should set make-up gain to the same amount as your maximum reduction, yet another myth. Let's bust both of these right now, even though we're coming up to the Myth-busting portion of this blog.

People who say make-up gain shouldn't be touched, are again, making a blanket statement that isn't necessarily true. This is one of the more well-intentioned myths, and genuinely good advice for beginners. As a beginner, if you use make-up gain, you are often seeing nothing but improvement with compression. You turn the compressor off and your audio sounds weak and erratic. Turn in on, apply some random amount of compression, apply auto gain make up and suddenly it's baller. That's because you are only perceiving an increase in quality due to an increase in overall volume. This is why professors and instructors in audio programs would recommend you don't touch make up gain until you are able to truly hear compression and differentiate between well-done compression and just destroying your incoming signal. However, obviously they wouldn't be there if they weren't useful.

Others say that you should apply as much make up gain as you are reducing gain, which seems weird, right? You bring something down from clipping to hovering around -6dB and now you want to boost it 6dB why? Sure by doing this your audio is tighter dynamically speaking, but you still didn't solve much. You are vaguely back to square one, possibly with more noise.

The way I use make up gain, is by calculating the ceiling then also observing how many times the ceiling is breached. If it's very often, then my attack and release settings are inappropriate. If it's periodically then I can just kinda keep it in mind when I set mine.

It's hard to give a general rule of thumb here, because every audio file is different. Every sound effect, every instrument, and every recording technique presents its own challenges. So once again, rather than looking for a hard and fast rule, you should think of what you want to achieve with compression and use make up gain to help you achieve it. For example, in our first example of footsteps. I first got my footsteps roughly to the same level, then I used make up gain to bring up all the sound occurring BETWEEN the footsteps, all the texture of the forest floor.

**Compressor Myths**

Oh boy! Here we go. I do not look forward to reading the comments after this one.

**Myth #1:** Compressors reduce the loudest parts and boost the quietest parts, thus Squashing the audio.

**Facts:** While this can be true, it is not always true. A basic compressor only works above the threshold, and doesn't touch the audio below. There are expanders and upward compressor which do boost audio below the threshold, but not every compressor works this way. They only would if you tell them to. So while people think a compressor squashes the dynamic range both ways, it's not true. They only reduce the loudest parts, so only half of the first sentence is true.

**Myth #2:** The ceiling amount is absolute and easily calculable.

**Facts:** Earlier in this post, I gave you the formula. This is fine enough for rough calculations and holds true on paper, but as we mentioned, attack and release values come into play. The formula assumes a theoretical attack of 0ms. In reality, if you set your attack too slow, so that the sound spikes in amplitude faster than the compressor can react to it, the ceiling can easily be breached by the incoming signal.

**Myth #3:** Attack is the amount of time the compressor waits before starting to work after the threshold is exceeded.

**Facts:** I've only debunked this about 30 times in this post, but it bares repeating. From an engineering perspective, there's no incentive to deliberately make compressor less efficient at their job, and even less incentive to allow the user to make it even slower. Compressors always kick in immediately at the moment the threshold is exceeded, but instead of applying a straight free-fall reduction, they take some time to apply full gain reduction. This myth is especially harmful because it gives way to more myths like number 4.

**Myth #4:** Compressors destroy transients.

**Facts:** This one is straight up annoying, folks! Again, let's think about this. We are saying that compressors, undisputedly the second most-used effect after EQs somehow destroy transients. If that is true, how come everyone uses them? How come we've seen no advancements in this field? How come we continue to pay good money and demand for old compressors to be re-made and emulated? None of this makes sense obviously once you think about it.

The fact is, compressors CAN destroy transients, if set incorrectly. As we debunked myth #2, we mentioned that if we set attack values too slow, they sometimes won't get to apply gain reduction fast enough for us to control the dynamic range. Well the reverse is true as well. If an attack value is too fast, as soon as a sound occurs that exceeds the threshold, it is attacked quickly and aggressively, meaning we will lose, partially, some info in the transient of the file. This can absolutely happen, but if you set the attack time right, this won't be an issue. The first step in learning to set attack values correctly is to stop believing memes and myths around compression, and think of it in a logical way. This also ties into the next myth so I will elaborate further down.

**Myth #5:** You must set the attack time to be slower than the attack envelope of the sound.

**Facts:** I see beginner producers make this mistake all the time. They get a kick sound, they figure, the transient of a good full-bodied kick takes a good 10-15ms to manifest, so they set the compressor at 25-30ms so as to "leave the transient alone". As we mentioned above, that's not how it works and that's not what happens. What you simply end up doing, is to apply haphazard and inadequate reduction to your kick, and then only reduce once most of the transient has played out, and you have only the body left, which you are now turning down, the only part in a well-recorded kick sound that needs boosting. You also won't be able to turn it up cuz it will keep, because you haven't controlled the transient well enough.

In very dense mixes, there's no way around having to parallel compress to achieve a full bodied sound but overall, if you set your attack time to also be around 10-15ms, you will not be destroying a kick transient, you will instead reduce the transient length of the kick, making it more percussive and more punchy as a result, and the overall loudness is more under control, providing you with more head room to turn it up. As a general rule of thumb (keyword general) attack values if 0.1-5ms should be reserved only for parallel compression, 5-15ms is to make a sound extremely percussive (so if you want a palm muted guitar to fell percussive, that's what you do) and anything above will not work so well with percussive elements, but could reduce annoying tails in a bass track, for example.

I realize my examples are more music based here, but that's because everyone can imagine a kick or a guitar sound, but not everyone will know what sound effects sound like if I'm referencing them.

**Myth #6:** Release is the time after the audio goes below the threshold for the compressor to stop working.

**Facts:** Once again, I ask you, why in the world would we want our compressors to be a little late to the party? if the audio goes below the threshold and no longer needs to be reduced, why the hell would we wait? even if it is for 20ms, it's just not something engineers do. They make things that work, and work better than humans. They may invent things that replicate human behaviour to make them more artsy, but they would never just make something less efficient. Release is the time after full gain reduction is reached, for the compressor to release, or stop attacking. That's it. Release is useful if you have a periodic sound like a beep. We want to compress each beep but we want the compressor to go back to idling before the next beep, so we can set the release.

**Myth #7:** You should compress everything!

**Facts:** You shouldn't do anything to absolutely EVERYTHING! This won't work in audio production, nor does it work in any field. Filmmakers don't colour-correct everything. Mechanics don't tighten every screw all the way. Compressor is just a tool. You wouldn't walk around holding a lighter and light everything on fire. You keep it in your pocket to use when you need it. Compressors are like that too: a tool. If you need to get something done that a compressor can help with, whip it out!

I think this myth is especially harmful, because I see people editing and mixing, and they bust out the compressor first and ask questions later. This shouldn't be the procedure. You should first listen to whatever it is you're doing. Read faders, hear it in context and then soloed. You should then turn it up or down first. See if that changes something. Then and only then, if there's something you want to do to it that needs compressing, you should reach for a compressor. So find the task first, then take the tool out. Don't take the tool out and not have a task in mind, cuz that's how you get intimidated with compression.

If there's anything above you disagree with, let me know! Also if there's any other myths you've heard, or things you suspect are myths, comment them below and I'll write a follow-up post!

**Compressor Cousins**

Now that we understand what compressors do, let's look at some plugins that are not called compressors but they essentially are compressors. I will dedicate future episodes to these but a brief overview won't go amiss.

**Limiter:** A limiter is simply a compressor with a very high ratio, like 100:1, and a fast attack. They are your last line of defence before clipping, and conversely, a way to attain maximum loudness before clipping.

**De-Esser:** A De-esser is a compressor that works only on a specific band, namely the band where the syllables S, F and SH occur.

**Multi-band Compressor:** These are multiple compressors built into one. They allow you to set different threshold, ratio, attack and release times for different bands of frequency in an audio file.

**De-Plosive/De-Popper:** Again, works like a de-esser, but on the frequency band where plosives occurs. Plosive are sounds we make by constricting and then suddenly releasing air flow in our mouths. P and B sounds in English are such sounds. They send a pocket of air towards the microphone, which can cause unpleasant sounds in the low-end. A De-plosive gets rid of them. More sophisticated version apply non-compression operations as well, but essentially you can simply control them by compressing the low end.

**Types of Compression**

Below are common compression types. Operations that fall under the umbrella of compression but work differently from one another. Technically, you can do all forms of compression with any compressor. That said, there are compressors that are better at one type than the other, and ones that are designed to do one really well and sound good doing it, without offering enough parameters and customizability to qualify as an all-purpose compressor.

**Downward Compression:** Everything discussed so far in this video has been around downward compression, taking the loudest parts of an audio file, past a certain threshold, and turning them down, thus reducing the dynamic range of the file, for easier mixing, or so you can make it louder without clipping.

![](/blog/sd4vm/7/169.png)

_Downward Compression illustrated: The incoming signal can have the loudness range of -inf to 0. Post compression, its range is -inf to -30._

**Upward Compression:** Upward compression is the opposite of downward (duh) so instead of controlling dynamic range by bringing down the loudest parts, we instead bring up the quietest parts. Now bear in mind that, we could, and often do, apply both types to the same signal. Also, some people think that only some compressors can do this, and while some compressor do specialize in it (like OTT by Xfer) you can achieve the same result with any compressor.

![](/blog/sd4vm/7/170.png)

_Example of upward compression. The threshold is set very low (-63.3dB) and the ratio is very low as well (1.61:1) so only a slight amount of compression is applied, but instead you can see 13.6dB of make up gain has been applied. Now, on its own this will surely cause clipping, as you can see that incoming audio of 0dB brought down by 1.39 and then boosted 13dB would easily clip, but as you can see this is applied in serial with a compressor before it, which takes care of the top. The upward bit simply boosts a signal that already doesn't go anywhere near clipping. Once again, our dynamic range is squashed from being -inf to 0.00dB pre compression, to being from -inf to -30dB After downward compression, and then being boosted 13.6 dB so that its range is now roughly -80dB to -15dB._

**Parallel Compression:** This is not a different way of applying compression but a different method. After all, compressor do one thing: Apply gain reduction. So there's not a whole lot of different ways we can do that. However, so far we have always done compression in Series, meaning the audio goes into the compressor, and the compressor feeds the outgoing audio somewhere.

In parallel compression, we are feeding a COPY of the signal to the compressor, applying compression, then mixing it with the dry uncompressed signal. This is applied mostly in mixing, and especially often in music. There's not really a lot of use for it in Sound Design and Editing, so this short description should suffice for now. We will revisit this topic later when we get to mixing!

**Side-Chain Compression:** Again, same types of compression, but a side-chain compression is one that looks NOT at the incoming signal but a side signal for when to apply compression. When the side signal exceeds the threshold, the compression is applied to the main signal.

As usual, this is easier to explain with an example: Say you are mixing a stand-up comedy performance. You have the audio recording of the comedian's mic, and you have the recording of a mic, placed near the audience recording their reactions. Now, normal rules of decency dictate that the audience laughs at jokes, then remain quiet while the comedian speaks. Reality is never like that though, if you've ever been to a show. People do talk during the jokes, and sometimes they're still laughing as the comedian launches into the next joke. So as a mixer, what you can do is, set the level for the comedian, then ride the fader controlling the audience mic, so when the comedian is speaking, you can turn the audience mic down, and then bring it up as the comedian pauses. Great! This, however, would take a long time for a 90-minute performance, at least 90 minutes and that's assuming you make zero mistakes that need revision in a second pass.

Side chain compression allows you to automate this process. The side signal becomes the comedian mic, but it is applied to the audience feed. Every time the comedian speaks, the incoming signal from their mic passes a threshold. Compression is then applied, but not to the comedian's mic, but to the audience's mic. So every time the comedian speaks, gain reduction is applied to the audience, whether they themselves are quiet or loud, and when the comedian stops the gain reduction is also stopped, whether the audience laughs or not.

Once again, this type of compression doesn't have a lot of uses in sound design (though I literally thought of one right now) so we will come back to this in further detail later.

**What Compressor to buy**

So, if you watched the video and read so far, you may be asking, "So what compressor should I have?" well, that's up to you. Your DAW definitely comes with a stock compressor which should work fine, but there are many free and cheap compressors that work well like the Xfer OTT, and there are more expensive compressors that make a considerable contribution to the tone of the audio they compress, which you should buy if you need them.

For starters though, you want an all-purpose compressor you can use as a go-to. I would go for something with some kind of visual display if you're a beginner. Compressors like the PuigChild 670 or CLA-2A are amazing, but they are not fully customizable, and they don't really show you what they do. Even when and if you do get a good result from them, they won't teach you much about how to compress. They just sound good. So a digital compressor like Waves C1, Reacomp, or Waves H-Comp would be a good first purchase!  
 **Conclusion**

So there we are! I spent so much time busting compressor-related myths that we got to spend little time talking about their practical applications. So watch the video, where I show you some techniques, and feel free to ask any questions you want. We will get deeper into different types of compression (Parallel, Sidechain) later. Here's the link to the video:

<youtube id="AXpsVWHK07A"></youtube>

_Message from Author: If you like these blogs and my videos, please consider leaving me a tip at the top my_ [_blog_](http://www.iddqdsound.com/blog) _page. I am committed to providing these tutorials and blog posts, as well as quizzes and other downloadable content free forever, but I do spend considerable time on them and would appreciate a tip as work has been harder than usual to come by. If I could find a way of earning a decent income from this job, I could release more content at better quality. Do more tutorials, make them look better, and so on._

