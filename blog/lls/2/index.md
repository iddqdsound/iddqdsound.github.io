---
tags:
  - Let's Learn Scripting in REAPER
date: 2022-01-17

related-posts:
  - /blog/lls/1/
---

## Let’s learn scripting in REAPER Ep02: Functions, Arguments, Returns & Variables

![](/blog/lls/2/84.jpg)

Welcome to [Episode 02 of this series](https://youtu.be/hgx0btZuAas), in which I, a ReaScript n00b, will attempt to learn scripting in REAPER with a little help from my friends! I will be seeking help from REAPER Pros and consulting many different resources on this journey, then every month I’ll bring to you whatever I have learned, and boy, I’ve been learning a lot thanks to the awesome [Leandro Facchinetti](https://leafac.com/)! As someone on their third attempt at learning to code, I'm finally making some serious breakthroughs thanks to his awesome teaching style! Give him some love on [his channel](https://www.youtube.com/channel/UC_R-6HcHW5V9_FlZe30tnGA) and [send some donations his way](http://patreon.com/leafac) if you can! People charge seriously money to give out the type of information he's feeding us on a weekly basis!

Other than these shorter tutorials, you can also join me and Leandro, on a live scripting tutorial every Tuesday at 1.30pm EST. Here's the next [one: https://youtu.be/WR8PtyfLAVc ](https://youtu.be/WR8PtyfLAVc)If you've missed the first 3 livestreams, check them out because they are full of info and a lot of fun:  
Live Lua Scripting with Leandro Facchinetti: [https://youtu.be/YfTVXn730DQ ](https://youtu.be/YfTVXn730DQ)Part 2: [https://youtu.be/63RKdZfeN7c Part](https://youtu.be/63RKdZfeN7c) 3: <https://youtu.be/Wp11Varkd6A>

We have also begun doing some JSFX, but we will continue with lua on this tutorial series for a few episodes before we get into JSFX:  
<https://youtu.be/HexzW0EZal8>

I may or may not use examples we covered there for these videos (like this week I didn’t) so make sure to check those out even if you missed the livestream, you can also ask any questions you have under comments and I will collect them all and have them answered by the next one!

From this week, I will also be joining Leandro on [his channel ](https://www.youtube.com/channel/UC_R-6HcHW5V9_FlZe30tnGA)every Wednesday at 1.30 EST for another weekly livestream. Join us this Wednesday on Leandro's channel to find out more!

If you're caught up on[ the series](https://www.youtube.com/playlist?list=PLjvmrOUg3J0rlHO9Clbo9WLxeN9BsSPlj), you'll know that so far we've done some scripting reading and light modification and have taken a look at the [REAPER API](https://www.reaper.fm/sdk/reascript/reascripthelp.html). Today we're gonna take a closer look at some of the functions in the API, and explain some terminology and structure as we run into them!

**So what’s a function?** As we mentioned previously, ReaScripts in REAPER are rarely written from scratch. A lot of what we may need to do using scripts has already been done and we can simply assemble our script using bits of code.

Those bits of code are called **functions** and every script is made up of a number of functions. When you run the script, the script is read by the program line by line from top to bottom, and something happens.

CurrentCursorPosition = Reaper.GetCursorPosition ()
Reaper.SetEditCurPos (CurrentCursorPosition+1,1,0)

_Example of a simple ReaScript made up of two functions. REAPER functions in lua all start with 'Reaper.' and are denoted in Yellow in the Scripting Environment. The scripts are read top to bottom, so GetCursorPosition is run fiollowed by SetEditCurPos in the script above._

Every REAPER function runs a certain task for us (like renaming or coloring items and tracks, or toggling mute on one or a number of items), or it gets us some information we may need to use later in the script. This can be something quite simple like **Reaper.GetCursorPosition** (which simply communicates our current cursor position to the Script) or more complex functions like **Reaper.GetFXEnvelope** (which can return or create an FX Parameter envelope based on the arguments we provide.)

Each Function we find in the API can have one or a number of r**eturns** and one or a number of **arguments**.

**Arguments** are the bits of information we need to give to our function so it can do its job, and it does its job by way of **returning** something back to us.

_MediaTrack_ reaper.GetSelectedTrack(_ReaProject_ proj, _integer_ seltrackidx)

_In the code snippet above you have reaper.GetSelectedTrack as a function. It requires a project name (or 0 for active project) and an integer (denoting which selected track) as arguments, and will return a MediaTrack to us._

To put it more simply, every time we ask our script to do something, we are asking the script to return something, and every time the script needs extra information to return something to us, it asks for an argument. REAPER doesn’t speak English, so we need to form our questions in a language it understands. Right now, we are looking at lua, so we need to learn to communicate with our scripts using lua, which is where the API is very helpful.

**Argument & Return types**

Arguments & Returns can come in many data types. Returns can also be actions that are just run when the script is executed, but just as often they could simply be some information we are asking from a script. These are the Argument types we will run into in this episode, and there will surely be more in the future:

**String _(str):_** These arguments can be made up of any type of character. Strings can communicate names for us. for example GetTrackName will return the track name as a string. Other argument types can also be displayed as a string, when we are debugging, or want to show the user some data.  
**Integer _(Int)_:** These arguments only accept whole numbers (ie 55, 1, -239), but do not accept fractional numbers (1.54, -0.75) or any other non-numerical characters. A very common example of this are **index numbers\***  
**Number _(num)_:** These arguments accept any number. An example of this is the GetCursorPosition, which returns the CursorPosition as a number (pure seconds from project start time) or the SetEditCurPos, which requires a number as its first argument, and will then move the edit cursor to that position.  
**Boolean _(bool):_** These arguments accept only two values. In some languages this is true/false and in some it's 1/0 or sometimes both. Think of these as Yes/No Question that the function will need you to answer. 1 is yes. 0 is no. For example, SetEditCurPos requires a boolean argument called moveview. Plugging 1 into the second argument will move the arrange view to keep the Edit Cursor in view, and plugging 0 into it preserves the scroll position.  
**MediaTrack (_tr):_** This is an example of an Object argument. This data type is not any of the above, but it's an actual REAPER track that we can do stuff to.

**\*Index Numbers:** Index Numbers are one of the most common Integer values in ReaScripts. All REAPER projects, tracks, items, plug-ins, and their parameters, etc. are indexed, starting from number 0.  
 This is a bit strange, because as humans we tend to start counting at 1 but many programming languages start at 0. So if we want to ask the GetFXEnvelope function for the 4th parameter of the 1st plugin, we need to plug 3 and 0 as those arguments, respectively.

**Debugging**

ShowConsoleMsg is very useful for debugging but it can also help us make sense of what’s happening at each step in our script. Whenever you are not sure what your script is returning to you, you can print the return as a string, which you can then plug into another function. Regardless of what data type the return values are written in, ShowConsoleMsg will print them as strings.

**Variables**

When we want to use the return(s) of one function and use that as an argument in a future function, we can define those returns as variables. We do this by placing an = in front of the function, and giving it a unique name. Spaces are not allowed and special characters should be avoided.

Variables are named as such because the value that each one stores is subject to change every time the script runs.Example:

CurrentCursorPosition = Reaper.GetCursorPosition()  
_CurrentCursorPosition is a variable which stores the number return of Reaper.GetCursorPosition._

_Tip: You can call your variables whatever you want. They can be random stuff like Steve, or they can be shortened descriptive titles like CurPos as Cursor Position, however, it's recommended that you start out at least being as descriptive as you can, so you don't feel lost, avoid spelling mistakes that would cause your script not to run properly, and so that you feel less lost when revisiting scripts. Whatever system you decide on, stick to it so others reading your scripts aren't more confused than they need to be._

**Review**

So to recap, We use **functions** to ask our scripts for certain information to return to us, or to do something for us. In order to do this, they may ask for certain information from us, which we call **arguments**. Arguments can be input manually, or we can call additional functions that can **return** the required arguments once they get their arguments provided to them, and round and round we go.

When you run a script, it starts executing commands starting from the top. For each function, it’ll check if it has all the arguments it needs, and if it does, will then return something. If that function’s returns are to be sent as an argument to another function below, then we can give it a Unique Identifier, which is called **defining a variable** and simply provide that identifier as an argument to the next function. as we run the script, each **variable** stores the return from its function and when called upon as an argument, will return whatever it has stored, which could be a **string**, a **number,** **Integer, Boolean,** or even a **Reaper object** like a track, item or envelope. If at any point the script runs into a function without having all the necessary arguments, or if the arguments provided are still undefined, an error will occur. If not, the next script will then return something and this goes around and around.

We only need to define returns as variables, if we are using their returns elsewhere. Otherwise, simply inputting the arguments required for a function is enough to make it run and for the script to return something to us, but unless we define it to use later, or do something to it, the return is simply obtained.

There are many types of arguments, and in this tutorial we’ve seen examples of **string**, **number**, **boolean**, and **[object]** arguments. We will see more of these in the future.

**Conclusion & Homework Challenges for Next Month**

Watch the video and I have included a couple of challenges for myself and all of you to sink your teeth into. Use the API, The ShowConsoleMsg and lots of trial and error to figure them out, and you can ask your questions from Leandro on any of the livestreams, or post them as comments under any video. Each month, I will reveal the previous month's challenges.

Here's the video:

<youtube id="hgx0btZuAas"></youtube>

If you like the work I do, [you can donate to me here](http://www.buymeacoffee.com/iddqdsound)! Every little helps, so even if you send a dollar or two my way, I’ll be eternally grateful to you! Also make sure to subscribe to [Leandro's Channel](https://www.youtube.com/channel/UC_R-6HcHW5V9_FlZe30tnGA) and [donate to him here.](https://www.patreon.com/leafac)

Join the REAPER squad on our Discord Server:  
[ https://discord.gg/YwQESKpBfE](https://discord.gg/YwQESKpBfE)

**My Reaper Stash:** <https://stash.reaper.fm/u/IDDQDSound>  
**My Reaper Repository:** <https://github.com/iddqdsound/reaper/raw/main/index.xml>

**Follow me on Instagram:** <https://www.instagram.com/iddqdmusic/>

**My Music:** [**https://Soundcloud.com/iddqdmusic**](https://soundcloud.com/iddqdmusic)

[ ](https://soundcloud.com/iddqdmusic) [**https://iddqdmusic.bandcamp.com**](https://iddqdmusic.bandcamp.com/)

