## Smart Markers 102: Smart Markers for Live Audio/Amp Sims (Rapid-Fire REAPER Tutorials Ep62)

![](/blog/rfrt/62/121.jpg)

Hey folks!

[This episode](https://youtu.be/88-aCc5dQ-k) is part II of Smart markers, so watch the [last episode here](https://youtu.be/Lu_Z5GFj0Ts).

Excited to be doing this episode with a little help from my friend Myk from [Let's Talk about REAPER](https://www.youtube.com/watch?v=ZynVR9bMSZc), another REAPER channel you should be all over! Myk does short, on-point REAPER tutorials on editing, SWS features, hidden JS Plugin Gems, and more!

For those of you who don't enjoy my fast talking, this blog post will hopefully clear everything up!

**Smart Markers Formatting**

To re-iterate the[ last episode](https://youtu.be/Lu_Z5GFj0Ts)'s note on Smart Markers, they are not a special type of marker! They are a regular marker that run actions. So you don't need to run a special action to create one or anything like that. Just create any type of marker in any way you create markers (Action, toolbar, Marker/Region Manager, etc.)

The text format of a marker dictates whether it's an action marker/smart marker, or just a...I guess, dumb marker? a non-smart marker is just a visual marker you set for yourself. A smart marker is kinda like making a marker for REAPER, reminding it to do something for you when the playhead reaches that location. You can have any marker run one, or any number of actions for you! (More on this in a second)

Here's how to format a marker to make it "smart".

1. The marker has to start with an exclamation mark: !
2. Next, place a command ID for the action you want your marker to run. To find out the command ID of your action, go to Actions list and look in the ID column, or you can right click on the action, and choose 'Copy selected action command ID'.
3. Double click on your marker, and paste the command ID after the !
4. For additional commands, simply separate by a space, and paste another action's command ID next to it.
5. (optional) you can still include regular text for yourself in these markers. The text needs to go between the ! and the command IDs and separated by a space on both sides. So the ! always comes first.

**Example:** I want a smart marker to select track 03 and switch to the next preset on FX1.

I make a marker by pressing Option+M. type ! in the box, Open my action list and look for select track 03 (command ID 40941), copy selected action ID, double click on my marker and paste, back to action list, look for 'Trigger Next Preset FX 1' and copy the SWS command ID '\_S&M_NEXT_PRESET_FX1', double click on my marker again and paste it. Voila! You have a smart marker that runs two actions. However this is confusing to me cuz it's just a bunch of numbers (at least SWS markers have more descriptive IDs but custom actions and native REAPER actions are just values that mean nothing to us) so I can additionally add the text 'track03 next preset' in between the command IDs and the !

This is what it would look like:

![](/blog/rfrt/62/122.png)

_Example of Action Marker/Smart Marker: ! makes it an action marker, the text tells me what it is, and the two action IDs separated by space are the two actions it will run when the playhead goes over the marker (at 2:00:00.00)_

**Limitations**

Technically, there are none! You can run any number of actions, custom actions, ReaPack scripts, SWS Actions, and Cycle Actions all separated by space. In reality, you don't want to overload this. Similar to when you run a really lengthy custom action, it takes REAPER a non-zero amount of time to execute these actions in sequence. So do your own testing but obviously running too many actions may cause playback issues, clicks and pops, or just a big delay in when your action is actually run.

As an example, if you run the 'Disable metronome' action on Bar 3, you will still hear the first tick of Bar 3 (so you can put it slightly before) or in the marker above. The preset actually is triggered on 2:00:00.00.50 or about 20ms later than the marker.

Do your own experimentation, and obviously you can move the marker around, or move actions around in the marker. For example in 2nd example, see what happens if you switch the two actions to mute and unmute track sends. The result could be smoother or worse based on your sounds, and many other parameters.

**Latency issues**

When you play through Plugins, there will always be latency. There is really no way around this. However, as you hopefully saw, I could still play the tracks fine without direct monitoring, and experienced little to no latency. I have played live through REAPER many times. I tend to doubt folks who nitpick over latency. Any latency below 10ms is fine in my opinion and near impossible to hear. If you have more than that, there are a few ways to optimize this:

-Lower your buffer size  
-Optimize your drivers.  
-Use lighter plugins  
-DON'T use mastering FX or buss your multiple tracks.

I have a good interface, so my latency is 3ms at 128 buffer size. I play to this fine. As I was also capturing video on my system, in the tutorial my latency was 9.7ms and I was still fine. So again, do your own experiments, change plugins, etc. and this system can work fine for live or streams. Obviously if we're recording we can just record raw and add FX later.

**Clicks & Pops when switching FX Chains**

If you use these set-ups for live performance, you may experience clicks & pops! The second method will show you a way around that using Sends. The second method is also better because you are not limited to presets from the same plugin, but entire FX chains. Again, what FX Chains you use also dictate how much latency and clicking issues you will have. Obviously you shouldn't run any True Peak Limiters, or anything with a lookahead feature, or you will have latency and clicking. Similarly, any plugin that gives you a high PDC count (Plugin Delay Compensation, you can view this from the Track Manager) is not suitable from this setup.

To get the best results, you have to re-create how you use pedals. For example, when I use pedals, they feed into my amp. I don't put limiters on there or run it through a fancy compressor or true peak limiters. I set the levels on my amp, and let the sound technician take care of the Front-of-house operations. So again, this system is only as usable as you help make it.

**Conclusion**

These are simply examples of using smart markers, so whether you find them useful or not, and whatever your feelings are about Clicks, latency, etc. is besides the point that Smart Markers are very powerful, and easy to use! Even if this setup is not for you, just be aware of Smart Markers and one day they will save your life!

Here's the video:

<youtube id="88-aCc5dQ-k"></youtube>

If you like the work I do, [you can donate to me here](http://www.buymeacoffee.com/iddqdsound)! Every little helps, so even if you send a dollar or two my way, I’ll be eternally grateful to you!

**My Reaper Stash:** <https://stash.reaper.fm/u/IDDQDSound>

**Follow me on Instagram:** <https://www.instagram.com/iddqdmusic/>

**My Music:** [**https://Soundcloud.com/iddqdmusic**](https://soundcloud.com/iddqdmusic)

[ ](https://soundcloud.com/iddqdmusic) [**https://iddqdmusic.bandcamp.com**](https://iddqdmusic.bandcamp.com/)  


