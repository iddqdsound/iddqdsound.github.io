## How to do Audio Tutorials - Episode 1: Setting up your DAW & OBS

![](/blog/misc/1/61.jpg)

Hey folks!

This is the [first episode of a new series I'm starting on How to make audio tutorials](https://youtu.be/jRhZcC3SEyE)! There's frankly a ton of these OBS tutorials on YouTube, but they mostly cover video, and glaze over audio completely, which is interesting because in the audio stream is where I've seen a lot of weirdness from OBS.

So in this series I want to focus on Audio instead. We'll start by how to set up your DAW and OBS to capture audio and in future episodes I'll also show you how I automate a large chunk of my process so that I can bang out tutorials quickly and with minimal post-production editing necessary!

**What you need & What I have**

To make tutorials, you're gonna need a few things (and some more optional software, gear and hardware).

Firstly, you need a **DAW** obviously. Since you're thinking of doing tutorials, I'll assume you have that. You also need a video capture software. I use **OBS,** which is free and probably the most popular audio/video capturing software out there. [You can download OBS here](https://obsproject.com/download).

There are many ways of routing audio to OBS, but my favourite way for DAWs is to get a **Virtual Audio Interface/Driver.** A Virtual Audio interface is a piece of software with a number of virtual inputs and outputs that you can use to route audio from different programs throughout your system.

For Mac, I'd recommend downloading **Blackhole 16ch.** It's free and lightweight. [Download it here.](https://existential.audio/blackhole/)

A popular option for PC is **Voicemeeter Input** by VB Audio. [Download it here](https://vb-audio.com/Voicemeeter/).

With these, you already have the bare minimum to do tutorials. Optionally and additionally, you may want to record your voice on top of your tutorials, for which you need a Microphone, webcam/camera and an Audio Interface.

**Microphone**

There are many popular microphones for this application, and my microphone of choice is the **Shure SM7B.** Its pros include a great sound, which has applications way beyond tutorials (for example it's one of the most popular vocal microphones for Rap and Rock), good noise cancellation compared to condenser microphones, great if you live at home or any noisy environments, and its cons include needing a lot of pre-amp power to truly sound good, despite being a dynamic microphone. Many people get a **CL-1 Cloudlifter** to help that process. I personally don't have one but I have decent pre-amps on my microphone. Which brings us to...

**Audio Interface**

My audio interface is the **Zoom L-12.** It's a multi-purpose piece of gear that also acts as a stand-alone recorder. A big con with this device is being quite expensive and also not operable as an interface at 96kHz, but huge pros include having great monitoring routing options, and having great pre-amps, and allowing for a loop-back function from your computer, so you can easily also record audio from your web browser or other sources.

At the minimum, you want an interface which supports phantom power, has a direct monitoring option, and as a bonus it may also be good to have loop-back functions. Any starter audio interface, such as **Scarlett, Audient**, or a **Behringer** interface, as long as it has direct monitoring, will suffice.

**Webcam/Camera**

Many audio tutorial channels opt to not show their faces in their tutorials. It's a totally personal decision, but if you need to do that, you'd need a **Camera** or a **Webcam.** I have the **Logitech C922 Webcam.** Its pros are its price and ease of setup, as well as HD live capture and auto-focus, but as a con I'd say that the picture can be laggy, bad quality, and needing a lot of light. For me, it's good enough, as again, I'm devoted to my tutorials having good audio quality, and not necessarily a great video quality. With adding a camera also comes a need for good lighting! That is, unfortunately, not something I'd consider myself an expert of, but you can find a lot of info on this online (for example, [here](https://www.youtube.com/watch?v=wKt0NaMHCbM)).

I personally have a very simple Selfie light that I use as my lighting. It's cheap and easy to set-up, but it's not as powerful as professional lighting and only works if you are quite close to it.

**OBS Does something weird to audio**

In order to test the quality of my captured audio, I often run null tests. A **Null test** is a way of testing whether two pieces of digital audio are identical. If you have a pre-recorded audio file, and you send it to OBS, record a video and then import audio from that video to your DAW, align them perfectly, then flip the phase of one of them, they should cancel out. If they don't, it means that they are not entirely identical, even though to our ears they may be.

Through hundreds and hundreds of tests, I have not managed to run a successful null test using any audio recorded through OBS. You are welcome to try out different formats and see what works for you.

I'd recommend you start a null test with a simple sine wave. If that passed, you can move on to testing with White Noise, and finally, you can have a go at capturing a whole song and seeing if they cancel out.

Here are my three audio test files for you to use in your tests:

Test Tones

.zip

Download ZIP • 1.12MB

_Zip file contains: 2 audio files, each starting with 4 clicks followed by a 220Hz Sine wave in one and Pink noise in the other._

**Instructions on how to run a test:**

1.  Place the files on a stereo track in your DAW.
2.  Open OBS, make sure it's set up to receive your DAW signal.
3.  Start recording on OBS.
4.  In your DAW, play the file.
5.  Stop recording on OBS.
6.  Import the audio from the video to your DAW.
7.  Manually align the first click of the metronome on both files.
8.  Flip the phase of the second track and play.

If the captured audio is identical to the test tone, you should see meters reading values on both tracks, but the master meter should read Nothing (-inf). If you see anything other than that, it means that a part of the recording is not the same. Check your phase. Do share your results if you managed to run a successful a null test in the video comments!

**Pan Law Consideration**

OBS operates with a Pan law of 0.0dB. [I have explained Pan law in detail in this video](https://www.youtube.com/watch?v=NW--R3Go4wQ). I run my REAPER with a pan law of -3.0dB. This means that I need to compensate for the loudness difference, by capturing my virtual audio interface at -3dB. Based on the Pan Law of your DAW, you may want to test this and apply the correct volume attenuation/cut to your OBS capture source. You can do this by running a null test, and checking your track meters to see if one is louder than the other. Gradually turn down the captured audio in 1dB increments until you reach maximum cancellation. That value (usually -3 or -6) should be what you set for your Virtual Audio interface in OBS.

![](/blog/misc/1/62.png)

_On my system, I have the audio Stream from REAPER captured at -3.0dB to compensate for my pan law of -3.0dB._

**My Audio Signal from DAW & Microphone to OBS**

Below is a simple diagram of how I route Audio to OBS. In OBS go to settings>Audio. Set your sample rate to the desired value and set your audio to 2.1. This allows OBS to record three channels of audio. I route my Stereo Master track output from REAPER to tracks 1 & 2, and I route the signal from my Microphone to channel 3. This allows me to process my DAW output and Microphone completely separately, or remove one while keeping the other!

![](/blog/misc/1/63.png)

_My signal Chain diagram_

**Conclusion**

So there you go! After watching this video, you are ready to start capturing your very own audio tutorials. In future episodes, I will talk about how I edit, mix and export my tutorials, and I will show some tricks I use to automate the process. Again while REAPER allows for some cool workarounds, a lot of it applies to other DAWs as well, so stay tuned for those. Enjoy the video!

<youtube id="jRhZcC3SEyE"></youtube>

