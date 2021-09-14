const got = require("got");
const fs = require("fs/promises");

(async () => {
  /*
  const postAddresses = [
    "https://www.iddqdsound.com/post/sws-snapshots-how-to-save-recall-mix-states-with-one-click-rapid-fire-reaper-tutorials-ep86",
    "https://www.iddqdsound.com/post/hotkeys-hacks-to-a-b-plugins-tracks-rapid-fire-reaper-tutorials-ep85",
    "https://www.iddqdsound.com/post/the-entire-audio-signal-path-in-reaper-i-guess",
    "https://www.iddqdsound.com/post/time-signature-mapping-in-reaper-from-n00b-to-goat",
    "https://www.iddqdsound.com/post/transients-by-jayne-karma-lamo-album-review",
    "https://www.iddqdsound.com/post/making-your-frozen-tracks-stand-out-with-a-track-icon-rapid-fire-reaper-tutorials-ep84",
    "https://www.iddqdsound.com/post/separate-audio-from-a-video-item-with-one-action-rapid-fire-reaper-tutorials-ep83",
    "https://www.iddqdsound.com/post/20-hotkeys-mouse-modifiers-tips-for-fades-and-crossfades-rapid-fire-reaper-tutorials-ep82",
    "https://www.iddqdsound.com/post/sound-editing-design-for-visual-media-ep13-tutorial-notes",
    "https://www.iddqdsound.com/post/let-s-learn-scripting-in-reaper-ep02-functions-arguments-returns-variables",
    "https://www.iddqdsound.com/post/how-to-route-audio-midi-between-any-two-daws-rapid-fire-reaper-tutorials-ep80",
    "https://www.iddqdsound.com/post/how-to-use-rewire-to-connect-ableton-live-to-reaper-rapid-fire-reaper-tutorials-ep79",
    "https://www.iddqdsound.com/post/how-to-swap-beats-2-4-with-custom-scripts-rapid-fire-reaper-tutorials-ep78",
    "https://www.iddqdsound.com/post/let-s-learn-scripting-in-reaper-ep00-ep01-notes",
    "https://www.iddqdsound.com/post/media-item-properties-hotkeys-for-batch-editing-items-rapid-fire-reaper-tutorials-ep76",
    "https://www.iddqdsound.com/post/advanced-audio-editing-in-reaper-30-hotkeys-for-editing-rapid-fire-reaper-tutorials-ep75",
    "https://www.iddqdsound.com/post/5-awesome-custom-actions-for-quicker-editing-in-reaper",
    "https://www.iddqdsound.com/post/sound-editing-design-for-visual-media-ep12-tutorial-notes-foley-recording-in-reaper",
    "https://www.iddqdsound.com/post/the-hidden-hierarchy-of-hotkeys-shortcut-scopes-rapid-fire-reaper-tutorials-ep73",
    "https://www.iddqdsound.com/post/locking-tracks-items-stretch-markers-tempo-map-etc-rapid-fire-reaper-tutorials-ep72",
    "https://www.iddqdsound.com/post/controlling-your-sends-using-track-faders-rapid-fire-reaper-tutorials-ep71",
    "https://www.iddqdsound.com/post/changing-reaper-s-editing-behaviour-with-hotkeys-rapid-fire-reaper-tutorials-ep70",
    "https://www.iddqdsound.com/post/lufs-true-peak-dynamic-range-analysis-with-sws-loudness-rapid-fire-reaper-tutorials-ep69",
    "https://www.iddqdsound.com/post/25-hotkeys-for-track-controls-rapid-fire-reaper-tutorials-ep68",
    "https://www.iddqdsound.com/post/maximizing-screen-real-estate-tips-hotkeys-rapid-fire-reaper-tutorials-ep67",
    "https://www.iddqdsound.com/post/optimizing-zooming-defaults-in-reaper-w--hotkeys-mouse-mods-rapid-fire-reaper-tutorials-ep66",
    "https://www.iddqdsound.com/post/audio-to-midi-drum-trigger-js-plugin-explained-rapid-fire-reaper-tutorials-ep65",
    "https://www.iddqdsound.com/post/smart-markers-202-sws-marker-utilities-smart-marker-toolbar-rapid-fire-reaper-tutorials-ep64",
    "https://www.iddqdsound.com/post/sws-smart-marker-103-skip-markers-more-rapid-fire-reaper-tutorials-ep63",
    "https://www.iddqdsound.com/post/smart-markers-102-smart-markers-for-live-audio-amp-sims-rapid-fire-reaper-tutorials-ep62",
    "https://www.iddqdsound.com/post/sws-smart-markers-101-intro-to-smart-markers-rapid-fire-reaper-tutorials-ep61",
    "https://www.iddqdsound.com/post/padre-lfo-generator-lfo-randomize-items-takes-cc-rapid-fire-reaper-tutorials-ep60",
    "https://www.iddqdsound.com/post/how-to-split-your-midi-keyboard-to-play-different-vsti-rapid-fire-reaper-tutorials-ep59",
    "https://www.iddqdsound.com/post/midi-202-20-more-actions-for-midi-editing-rapid-fire-reaper-tutorials-ep58",
    "https://www.iddqdsound.com/post/setting-multiple-tracks-inputs-in-sequence-aka-cascading-inputs-rapid-fire-reaper-tutorials-ep57",
    "https://www.iddqdsound.com/post/how-to-do-audio-tutorials-episode-2-making-a-tutorial-editing-template",
    "https://www.iddqdsound.com/post/how-to-set-up-tab-to-transient-pro-tools-style-rapid-fire-reaper-tutorials-ep56",
    "https://www.iddqdsound.com/post/how-to-solo-in-front-rapid-fire-reaper-tutorials-ep55",
    "https://www.iddqdsound.com/post/how-to-do-audio-tutorials-episode-1-setting-up-your-daw-obs",
    "https://www.iddqdsound.com/post/how-to-jam-in-any-key-without-knowing-music-theory-rapid-fire-reaper-tutorials-ep54",
    "https://www.iddqdsound.com/post/sound-design-for-visual-media-tutorial-notes-ep11",
    "https://www.iddqdsound.com/post/ripple-delete-midi-events-how-to-design-your-own-custom-action-rapid-fire-reaper-tutorials-ep53",
    "https://www.iddqdsound.com/post/sound-design-for-visual-media-tutorial-notes-ep-9",
    "https://www.iddqdsound.com/post/celebrating-50-rfrt-videos-free-downloads",
    "https://www.iddqdsound.com/post/free-downloads-midi-101-102-rapid-fire-reaper-tutorials-ep35-43",
    "https://www.iddqdsound.com/post/free-reaper-midi-map-files-for-drum-plugins",
    "https://www.iddqdsound.com/post/sound-design-for-visual-media-tutorial-notes-ep08",
    "https://www.iddqdsound.com/post/sound-design-for-visual-media-tutorial-notes-ep07",
    "https://www.iddqdsound.com/post/sound-design-for-visual-media-tutorial-notes-ep06",
    "https://www.iddqdsound.com/post/sound-design-for-visual-media-tutorial-notes-ep05",
    "https://www.iddqdsound.com/post/sound-design-for-visual-media-tutorial-notes-ep04",
    "https://www.iddqdsound.com/post/automation-modes-quiz-cheat-sheet",
    "https://www.iddqdsound.com/post/20-rapid-fire-reaper-tutorials-made-free-reaper-scripts",
    "https://www.iddqdsound.com/post/sound-design-for-visual-media-tutorial-notes-ep03",
    "https://www.iddqdsound.com/post/sound-design-for-visual-media-tutorial-notes-ep02",
    "https://www.iddqdsound.com/post/launchsong-a-brand-new-platform-for-independent-musicians",
    "https://www.iddqdsound.com/post/sound-design-for-visual-media-tutorial-notes-ep00-ep01",
    "https://www.iddqdsound.com/post/one-minute-daw-tutorials",
    "https://www.iddqdsound.com/post/and-the-winner-of-the-soe-sound-design-contest-is-me",
    "https://www.iddqdsound.com/post/mutations-is-out-now-plus-other-news",
    "https://www.iddqdsound.com/post/can-a-streaming-platform-that-benefits-artists-exist",
    "https://www.iddqdsound.com/post/free-mixing-feedback-for-a-limited-time",
    "https://www.iddqdsound.com/post/platypus-the-first-single-off-mutations-out-on-all-major-streaming-platforms",
    "https://www.iddqdsound.com/post/how-i-composed-my-submission-to-the-westworld-spitfire-competition-in-a-day",
    "https://www.iddqdsound.com/post/mutations-in-production",
    "https://www.iddqdsound.com/post/how-i-sound-designed-a-whole-video-in-14-hours",
    "https://www.iddqdsound.com/post/manage-your-blog-from-your-live-site",
  ];
  
  for (const postAddress of postAddresses)
    await fs.writeFile(
      `post/${postAddress.slice(
        "https://www.iddqdsound.com/post/".length
      )}.html`,
      (await got(postAddress)).body
    );
  */
})();
