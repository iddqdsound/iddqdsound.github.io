---
tags:
  - Weird & Hidden Stuff in REAPER 
  - Hotkeys & Mouse Modifiers in REAPER 
date: 2021-05-03
youtube: UQV03bGaZSs
related-posts:
  - /blog/rfrt/78
---

## The Hidden Hierarchy of Hotkeys & Shortcut Scopes (Rapid-fire REAPER Tutorials Ep73)

![](/blog/rfrt/73/197.jpg)

Hey folks!

Hey folks! [This episode is about a little something I like to called the hidden hierarchy of hotkeys in REAPER](https://youtu.be/UQV03bGaZSs). Knowing this will hopefully help eradicate some behaviours that may currently be annoying the hell out of you, like not being able to type in 3rd-Party Plugin windows, or your marker shortcuts not working in the MIDI Editor (I covered this from a different angle and in [a lot more detail in this video](https://youtu.be/xLD6zDcd-QI))

![](/blog/rfrt/73/198.jpg)

**How Hotkeys normally work in REAPER**
As I'm sure you know already, here's how to set a hotkey in REAPER:  
-Open the Action list by clicking on **Actions>Show Action List** or by pressing **?**
-Click to highlight the action (4) you want a shortcut to (You can search for it by Hotkey (2) or name (1) through the filter bar)  
-On the bottom left (5), click on Add.  
-Hit your hotkey  
-Press Enter or click Ok.

Simple, right? Not exactly! Doing this will create an action in the **Main Section** with the **scope set to normal**.

**Sections of the Action List**
On the top right of the action list, you can choose which section you want to browse the action list for (3). The Sections are:  
**-Main:** The majority of Actions on this list reside here. These actions can be triggered while the arrange window is in focus. Some are possible to trigger from other windows too. A general rule of thumb is that if any hotkey is not assigned to any other action in other sections, it is passed through to main, except for...  
**-Main (alt recording):** This section includes a list of pretty much everything you find in main, except that these are assigned for when you are recording. You may want to have some hotkeys not work while in recording mode, or you may want some keys to change their assignment while recording. We will cover some examples of this in future episodes!  
**-Media Explorer:** These commands work when the media explorer, REAPER's own file explorer/player, is focused!  
**-MIDI Editor:** These commands work when the MIDI Editor window for an item is open and in focus.  
**-MIDI Event List Editor:** The event list editor is an alternative way of viewing MIDI Events as a list, which should be familiar to older users and probably a bit of a headache to look at for younger viewers! You can reach this window by pressing **Opt+3** with the MIDI Editor Selected.  
**-MIDI Inline Editor:** The default hotkey to open this is **E.** You can also select any item and run the action 'Open Inline Editors' from the main section. The Inline Editor allows you to modify MIDI events inside an item without opening a MIDI Editor window. You can also assign additional hotkeys to this section to make some MIDI operations easier, like transposing a bunch of items!

![](/blog/rfrt/73/199.png)

_What the Inline Editor looks like_

**Understanding Shortcut Scopes**

Apart from key assignment, every keyboard shortcut has a scope, which is normally set to normal. You can change this in the window that opens when you click on Add (5) with any action highlighted.

![](/blog/rfrt/73/200.png)

With Scope set to **Normal** The hotkey only works when the correct window/section is focused, meaning if I have, for example, **Remove fades from selected item** set to **Cmd+F,** this will only work with the arrange view in focus. This may sound like a bit of a flaw, but it's actually awesome, because, I can still use **Cmd+F** to do something totally different in, say, the MIDI Editor, (toggle docking perhaps?) and another thing in the Media Explorer (Play the highlighted file from the beginning)!

If no action has that shortcuts set to it, the shortcut is usually passed through to the main section, except for **main (alt recording).**

With Scope set to **Global** The hotkey becomes global for REAPER, so with any window focused, the hotkey will still be possible trigger, and hotkeys in Main take precedence, meaning if I set **Cmd+F** to global scope, it's no longer possible to assign it to other actions in the other sections!

This is useful to do if you want, for example, for your project markers hotkeys to work in the MIDI Editor. In the Main section, I can press **1-0 QWERTY** to go to markers 1-10. In the MIDI Editor these don't work, but if I go back to main, and set the scope of these actions to Global, then they work in the MIDI Editor window too, however, that means that I can no longer use those keys to do other things in the MIDI Editor. Still, a worth-it tradeoff if this is something that has been annoying you for a while!

The only exception where Global shortcuts don't work, is when a text field in [any of REAPER's many windows](https://youtu.be/aqGtXK1EN0o) are selected. Search bars in the action list, FX Browser, Media Explorer, and so on, all supercede the global scope, so even with a hotkey set to global, if I hit, say **Shift+F** while a text field is active (they would have a blinking | on them) it will type Capital F, rather than trigger that action.

With scope set to **Global (+ Text fields)** the hotkey is now possible to trigger any time anywhere, and with anything focused in REAPER. This is useful to set for hotkeys that you trigger a lot, right after switching focus of your windows, or for hotkeys where the key combo doesn't actually type anything (or anything useful)

_Note: As a general rule, I don't set the scope of any one-key hotkey or any shift hotkey to Global (+ text fields) because we use those keys to type in text fields. However, with other more elaborate hotkey combos, like_ **_Cmd+Ctrl+Shift+M_** _it's likely that even if we press them with a text field focused, that is a mistake, so it's safe to set the scope of those to global (+ text fields) and probably saves you time down the line!_

**Typing in Third Party Plugins**

There are some third-party plugins that may include text fields of their own, and some plugins even have their own hotkeys for certain operations. You'll have seen that these plugins aren't easy to type in. For example, I can't type space in any of the text fields on my sample libraries like **Kontakt** or **Play** because pressing Space is for playing and stopping, so when I hit space, that command is passed through to the main section. To get around this, you can right click on any plugin in the plugin window, and tick the option **'Send all keyboard input to plugin'.** Voila!

_Note: With this option ticked, you can no longer trigger any normal scope hotkeys when the plugin window is selected for that plugin, however, Global scope and above hotkeys still work as they used to._

**The Hidden Hierarchy of Hotkeys**

So to take a birds-eye view of where we're at, here's a picture:

![](/blog/rfrt/73/201.png)

_Feel free to screenshot this!_

Here's the video:

<youtube id="UQV03bGaZSs"></youtube>

If you like the work I do, [you can donate to me here](http://www.buymeacoffee.com/iddqdsound)! Every little helps, so even if you send a dollar or two my way, I’ll be eternally grateful to you!

![](/blog/rfrt/73/8.png)

**My Reaper Stash:** <https://stash.reaper.fm/u/IDDQDSound>

**Follow me on Instagram:** <https://www.instagram.com/iddqdmusic/>  
**Join our Discord Server:**  
 https://discord.gg/YwQESKpBfE

**My Music:** [**https://Soundcloud.com/iddqdmusic**](https://soundcloud.com/iddqdmusic)

[ ](https://soundcloud.com/iddqdmusic) [**https://iddqdmusic.bandcamp.com**](https://iddqdmusic.bandcamp.com/)

