# Design record: pending updates (apply after Colby finishes testing Backup)

Record to update: Version 5 doc (Claude Docs). It was last updated through v0.14.1. Everything below is new since then. Written in first person for the record.

## Name and files (v0.17.0, 2026-11-04)
- Working title changed from Plucky Music to **Orpharion** (a Renaissance plucked instrument named for Orpheus and Arion). Still a working title: needs a trademark check and attorney review. Near-neighbor to raise: the iOS app Orphion (touch-screen instrument).
- Names considered and set aside (with reasons): Strummer Studio (crowded "Strummer" names, guitar-first), Mapsody (close to Rhapsody), Awen (an existing AI music app called AWEN, plus trademark filings), Imbas (unclear records; ordinary word in Indonesian), InVerse (existing Bible apps), Inversion/inVersion (common word; not searched), Aoide/Erato/Euterpe/Melete/Meret/Boann etc. (not searched).
- New file extensions: songs **.orm**, setlists **.orl**, backups **.orz** (all three appear in extension databases only for obscure uses: .orm Ormetis/Print Shop/ORM config, .orl "Object-Relational Language", .orz a game file). .orf rejected (Olympus RAW photos); .orb and .ors rejected (ebook format / existing listing).
- Old files still open: .plm songs and .plmb / "plucky-backup" backups are still accepted. New saves use the new names. Internal storage keys (ukemap.*, IndexedDB "plucky") were kept so no one loses data.
- Terms version (3) was NOT bumped by the rename; the terms text now names Orpharion. Decide whether to bump.

## Backup and restore (v0.16.0)
- Settings > Backup. One file holds library songs, setlists (as titles), custom strums, kept PDFs (optional) and settings (terms agreement excluded). Built-in sample songs are not included.
- Restore shows a preview. Song-conflict modes: keep mine (default), add copies, replace. Optional settings and PDF restore; reload needed for settings.
- Saved through the artifact downloads capability in the preview (extension gets ".json"/".txt" appended there); plain download elsewhere.
- Restore file picker is a real file input laid over the button (programmatic click is blocked in the artifact viewer); paste-text fallback box. Picker asks for document types so Android opens Files, not media. Restore works from GitHub; blocked in the artifact viewer.
- Limits: setlists and custom strums are not saved by the app across reloads on their own yet. Not yet tested on real data: replace mode, custom strums, setlists, PDFs.

## Pedal (confirmed on Joyo JSP-01, Android tablet)
- Two-pedal operation: next/previous section in Practice and Performance. At the last (first) section, press again within 5 seconds to move to the next (previous) song.
- Warm-up: Next pedal = start/pause/resume; Previous pedal = restart.
- Optional extra keys (Next Song, Previous Song, Lock) remain for more than two pedals.

## Warm-up
- Constant-speed chips; tuner-tape style drum dial (stronger curve, darker shading). Confirmed smooth on the tablet (Unisoc T606).
- Fixed: the count-in number now counts 4, 3, 2, 1.

## Tuner (confirmed on the tablet)
- Pitch detection tested accurate to under 0.1 cent on synthetic tones. In-tune window tightened from 5 to 3 cents and the label now shows the reading (for example "In tune (-2 cents)"). Colby confirmed it is much better.

## Test device
- Tablet with "Incar OS" (Android-based), screen 800x1280, 6 GB RAM, Unisoc T606, 128 GB storage, Bluetooth pedal Joyo JSP-01. Preferred test copy: the GitHub-hosted app (artifact viewer blocks file choosers, downloads need the capability, and the microphone needs HTTPS).

## Warm-up count-in on resume (v0.17.1)
- When Warm-up is paused and then resumed with Count-in on, it now counts 4-3-2-1 again, starting from the beginning of the chord that was playing. The dial holds still during the count, then plays on. Pausing during the count and resuming starts the count again.

## Setlist maker (v0.18.0)
- Before this, the app could not create setlists. It had two built-in demo sets (Friday Gig, Birthday Test Set) and nothing else.
- Entry points: **Edit Setlists...** button next to the Setlist menu in Song Info, a second **Edit Setlists...** button beside Export Setlist in Song Files, and **Add This Song to This Setlist** in Song Info.
- Builder (full-screen dialog): pick a setlist, New, Delete (tap twice), rename in the Name box, search your songs, Add, move up or down, remove, and Load This Setlist (jumps to its first song if the current song is not in it). A song can appear only once per setlist.
- Setlists are saved on the device (by song title, key ukemap.sets) and survive reloads. Deleting a library song removes it from every setlist. Restoring a backup adds its setlists and saves them. Export Setlist (.orl), Setlist PDF and Backup all use the same setlists.
- v0.18.1: in the builder, Add is a bright accent-colored button (something to tap) and songs already in the set show a quiet gray "✓ Added" with no button look. Tablet check: two columns fit at 800 px wide.
- The two demo sets are ordinary setlists now: they can be renamed, edited or deleted.
- Not yet tested on the tablet: the builder layout (two columns at 800 px wide), pedal song changes through a user-made set.

## Custom strum files and saving (v0.19.0)
- New extension **.orp** for custom strum pattern files. Extension databases list .orp only for WinSLAM data and Directory Opus rename scripts (both Windows, obscure).
- Song Files > Custom strum patterns: **Export (.orp)** saves every custom pattern to one file; **Import...** loads one (duplicates skipped, invalid patterns ignored, new ids assigned). Paste-text fallback for viewers that block file choosers. File format: JSON, format "orpharion-strums", v1. Songs are not included.
- Custom strums are now saved on the device (key ukemap.strums) and survive reloads. Restoring a backup also saves its strums. They were previously lost on reload, which also meant a song using a custom strum lost it.
- Not yet tested on the tablet: Export download, Import chooser, a reload after making a strum.

## Phone view and Desert palette (v0.20.0)
- **Phone View** (Display Settings, beside Palette): Auto (screens 600 px wide or less), Always On, or Off. Saved on the device (ukemap.phone) and included in backups.
- v0.21.0: Phone View now follows the **mode dial**. Choosing Performance on the dial gives the clean view (song title with artist and the chord sheet at full width, no menus, song buttons, info lines, tempo or key controls, bars or chord diagrams). Choosing Practice or Edit on the dial shows the full controls. The dial and its padlock stay on screen as the only controls, which keeps the look uniform; the faint ... button from v0.20.0 was removed. The padlock works as before. The pedal works the same in Phone view.
- Chord diagrams are hidden in the clean view on purpose. Possible later option: keep them.
- **Swipe between songs** (v0.21.0, touch only): swipe left for the next song and right for the previous song in the loaded setlist, in Performance and Practice. Needs a fast, mostly horizontal swipe of about 70 px or more. Ignored when the screen is locked, in Edit mode, in Warm-up, when a menu or dialog is open, and on buttons, menus, the dial and the chord strip. At the ends it says "last song" or "first song". With no setlist loaded it says to load one. The pedal's press-twice song change is unchanged.
- v0.21.1: swipe works on every screen size (not only Phone view). In return the **Previous / Next Song buttons are hidden in the page header** to give space back. A Display Settings checkbox, "Show Previous / Next Song buttons", brings them back (saved as ukemap.songbtns, included in backups). Pedal press-twice and swipe still change songs.
- The header used to be made as tall as the tallest mode (Practice) in every mode. Now Performance and Edit share one height and Practice uses its own. Result on the tablet: the Performance header is about 43 px shorter (169 to 126 px). Practice stays about 168 px because its play controls sit in that row.
- **Desert palette** (Display Settings > Palette > Desert): darker than Daylight Paper. Sand background #d6c19b, cards #e8d9bb, dark brown text #2a1b10, deep teal accent #17525a, terracotta chords #7a2a0b. Text contrast is at least 4.7:1 on the background and highlight.
- Not yet tested on a real phone or on the tablet.

## Still untested or open
- PDF import and export on real files; (setlists and custom strums now persist); sample-song edits; import rights prompt; setup wizard terms on the tablet keyboard.
- Name conflict and trademark check for Orpharion (and extensions), strum chart permission (ukulelego.com), copyright.gov link, attorney review of the terms.

## v0.22.0 — Palette designer flyout (2026-11-06)
- Palette Designer (renamed from Design Your Own) opens a full-screen mock page (v0.22.2) with Cancel / Save at top and the color controls docked at the bottom.
- Live preview of a generic page (title, accent pill, card with chords/lyrics, highlighted line, divider, mini chord diagram). Tap a preview part or a color box to change that color; preview is scoped, the app changes only on Save.
- "Start from" menu copies any built-in palette as a starting point; readability check shown in the flyout.
- Saved palette ("My Palette") now persists in ukemap.custompal and is included in Backup (previously custom colors were lost on reload).
- Colors section order: Color Mode, Palette, Design Your Own. Phone View moved to its own Display section (v0.21.4). Design Your Own button text smaller (v0.21.8).
- v0.22.3: Palette Designer uses its own in-app color editor (Hue / Saturation / Brightness sliders + hex field) that opens already set to the selected part's current color, replacing the device's native color picker (whose custom sliders did not start at the current color).
- v0.22.4: Swipe fix. Page now declares touch-action pan-y and overscroll-behavior-x none so horizontal swipes reach the app; an accidental Android back gesture (edge swipe) is caught with a toast and needs a second Back within 2.5 s to leave the app. Real-device behavior still to be confirmed.
- v0.22.5: Phone view shows the Previous / Next Song buttons by default on small screens (setting can still be turned off in Display > Phone view), because edge swipes on phones trigger the system Back gesture.
- v0.22.6: Forest palette removed; anyone who had it selected falls back to Default.

## v0.23.0 — Real device folder browser for Import (2026-11-07)
- Import Songs now has "Import to: <path> [Choose Folder…]". The old name dropdown and typed new-folder fields are hidden on browsers that support the folder picker.
- Choose Folder opens a tappable folder browser: pick a main folder on the device once (system picker), then tap through subfolders, see breadcrumbs, the song files inside, create a New Folder Here, and Use This Folder for Imports. "Import the N song files here" imports a folder's songs directly.
- Imported songs are added to the library under a folder named by its path and also saved as files into the chosen real folder (names de-duplicated). Folder handle and chosen subpath are remembered (IndexedDB + localStorage); the browser may ask to allow access again.
- Browsers without the folder picker keep the old behavior. Folder handle persistence across restarts is untested here (headless browser crashes on stored handles); the user's earlier Folder Access Test passed on the tablet.
- v0.23.1: Import-to-folder hardening after a reported freeze on the tablet: saving copies to the real folder no longer asks for permission automatically (only on a tap of "Allow and Save to Folder"), and every file step has a timeout so a stalled write reports an error instead of hanging.
- v0.23.2: Music Library screen simplified: plain wording, the "Add a Folder" name/location form and its fake "Cloud storage" option are replaced (on browsers with a folder picker) by a "Folder on this device" section with Choose Folder… and Stop Saving Copies. Browsers without the picker keep a simple Add a Folder (name only).

- v0.23.3: Setup wizard step 4 'Song folder' now shows 'Now using' path + 'Choose Folder…' button that opens the real folder browser (select kept only as fallback without the picker). Folder browser overlay raised above the wizard.

- v0.23.4 (replaces interim v0.24.0, v0.24.1, v0.25.0, which were never separate releases): Import/export rebuilt from scratch. First removed all prior import/export (song import, library/folder browser, song+setlist export, PDF import/export, Backup/Restore .orz, custom strum files .orp, Folder Access Test, wizard folder step); pre-removal copy at archive/presenter-v0.23.3-with-import-export.html. Then new Import: Explorer-style dialog (address bar, folder tree, file list with checkboxes, New Folder, Delete with confirm, Up, Change Folder, Other locations = system Files picker for Drive/Dropbox). Default song folder chosen in Setup step 5 or Library panel (handle in IndexedDB 'orpharion-folders'/kv/root). Converter handles ChordPro (+aliases, comments as sections), OnSong text, chord-over-lyric plain text. Read-only (never writes copies into the folder). Imported songs listed in Library with two-tap delete. Privacy policy added to About (no accounts/tracking, local storage, GitHub Pages logs). Decision: Google Drive via Google Picker (drive.file) deferred (needs Cloud project, client ID, API key); Dropbox/OneDrive later; iCloud only via system picker. Not yet: PDF import (text PDFs next, OCR later), Backup/Restore, export. Terms/rights text still mentions importing (revisit on terms bump).
- v0.23.5 (covers interim v0.23.6 to v0.23.10, which were tuning passes, not separate releases): PDF import. Text-based PDFs appear in the Import file list and are read with pdf.js 4.10.38 from jsDelivr (loaded only when a PDF is imported). Layout -> chords over lyrics -> sections. Tuned against the real ukulelesongbook.com Alabama PDF: unlabeled songs split at blank lines; repeated identical blocks named Chorus (variants collapsed so a repeated chorus is one card); chord-only blocks named Intro/Instrumental; back-to-back repeated blocks split; headers tolerate split letters and bracketed chords ('INTRO: [D] [C]'); 'Chords used' legend, www/.com/copyright and 'Version N / Page | N' lines dropped; line under title = artist. Scanned/image PDFs report 'no readable text' (OCR not built). Also fixed Library menu closing when deleting an imported song. Privacy policy mentions jsDelivr.
- (still v0.23.5) Library panel: removed the extra divider lines after the Imported songs list.
- (still v0.23.5) PDF import, Rose Garden PDF (contains the song twice: lyrics-only pages then chord pages, each starting with the title): importer now keeps only the version with chords when another version has none; drops 'p.N' page markers, repeated title lines and time-signature lines (4/4); artist line can't contain ':'; chord rows before the first header are no longer dropped when a lyric follows; 'Intro: First line' becomes an Intro card with 'First line' as its text.
- (still v0.23.5) PDF duplicate-version detection made content-based (a chordless page whose lyric lines mostly appear on chord pages is dropped) instead of relying on identical top-of-page titles, after the tablet still imported both versions of Rose Garden as variations.
- (still v0.23.5) TEMPORARY diagnostic: imported PDF songs show a small gray line in Library > Imported songs ('PDF: N pages, chords per page a/b/c/d, dropped x,y') to debug why the tablet still imports both Rose Garden versions. Remove once PDF import is solved.
- (still v0.23.5) PDF duplicate-version rule: a page with only a stray chord-like mark (tablet showed 1/0/34/19) now counts as chordless (<=10% of the max chord count).

- (still v0.23.5) Chord diagrams now support m7b5 (half-diminished: Em7b5, Em7(b5), Em7-5, ø) and '+' (G+ = Gaug); previously these drew blank grids.

- (still v0.23.5) Import dialog now re-reads a folder every time it is opened or navigated to, so files saved after the last visit appear without refreshing the page.

- (still v0.23.5) PDF import: rhythm-chart PDFs (I Love a Rainy Night). Beat lines like '. |C . . | F . G' and 'G\ -- --' now yield their chords placed over the lyric; dots/bars/dashes are dropped; snap/clap-only cue lines are dropped; 'Chorus: lyric' header lines keep the lyric; word gaps detected a bit tighter (fixes 'lovea'); '(v1d - 4/4/21)' footer dropped.

- (still v0.23.5) PDF import (Orinoco Flow): 'artist: X writer: Y' line read as artist (writer dropped); 'Based on…', 'Produced by…' and URL lines dropped; single blank lines between paragraphs now detected when lines are inline-chord/lyric only (uniform spacing); 'x2' ignored when matching repeated blocks; chord-only first block named Intro instead of Song.

- (still v0.23.5) Layout: narrow cards (short intro/chorus) now reserve room for their header (name, number, + Strum), so names no longer collapse to blank or 'Ch…'.

- v0.23.6 (version bump requested by Colby): Oxford (serial) comma applied throughout app text (About legal notice and privacy policy, tuner help, Music defaults, import messages); standing rule going forward. PDF import: a space after an inline chord bracket is removed when it precedes a word, so chords sit directly over the word and no stray space appears after an opening parenthesis (e.g. '( Ooh' now '(Ooh').

- v0.24.0 (new feature: tab sheets and Word import): (1) Import accepts Word (.docx) files; the text is read from the file directly (no extra library). A header line becomes the title, the next short line the artist, a trailing '(1971)' becomes the year, and trailing '# legend' notes on those lines are dropped. (2) Tab and grid blocks: any line that starts with '|' or a string letter plus '|' (A| 0---, | Am * E+ *, |====|), plus ChordPro {start_of_tab}/{sot} and {start_of_grid}/{sog} blocks, is shown in the built-in JetBrains Mono font (embedded, about 9 KB, SIL OFL credit in About) so columns stay aligned; the card scrolls sideways on narrow screens. (3) Chord diagrams are built from the chord rows of tab blocks (names split on '*', '|', '.', and joined names like C9#11Cadd9 are separated). (4) Section labels now include 'Verses 2-5' and 'Pre-solo'. (5) New chord diagrams: add9, 9, sus (as sus4), slash chords (bass note added as a required tone, e.g. C/D shows the Cadd9 shape), and 9#11 (approximated without the 5th and 9th). Known limits: tab chord rows are not transposed when the key changes; tab is not yet wrapped into bars (step 3 planned after more samples).

- (still v0.24.0) Tab cards: width measured with 6% slack and re-measured once the embedded font has loaded, so the last bar is no longer cut off.

- (still v0.24.0) Display Style: choosing Chord Sheet while in Edit now shows a short message (Edit always uses cards), and the hint says to switch to Practice or Performance.

- (still v0.24.0) Song Info now also has a Display Style group (Song Screens: Card Map or Chord Sheet), available in Edit, Practice, and Performance. It stays in sync with the Display menu setting.

- v0.24.1: (1) Chord Sheet now works in Edit as a view-only layout with an 'Edit with cards' button (and a note at the top); the Display Style hints say so. (2) The PDF reader (pdf.js by Mozilla, legacy build, Apache 2.0) is now built into the app file (about 720 KB added, stored compressed and unpacked when the first PDF is imported), so PDF import works with no internet connection; verified with all external requests blocked. The jsDelivr sentence is gone from the privacy policy (last updated November 7, 2026) and About credits pdf.js and the JetBrains Mono font in one line. (3) Terms screen header reads 'Terms of Use' with the version and copyright inline, which removes two lines from the scrolling text; About shows name, version, and copyright on one line. (4) Spaces after inline chord brackets are removed for PDF text but a trailing 'x2' keeps its space.

## v0.25.0 — Chord Sheet editing (Stage 1)
- Chord Sheet view now works in Edit mode: tap a word to place or remove a chord, add dynamics, Edit This Line, or Edit All Lines (same palette as the cards).
- Tap a section name or its play-order numbers to rename it or renumber it. Edits change every repeat of a section.
- Tab lines refuse chords (toast) and use a fixed-width line editor. Strum tags are available on section headings.
- "Use Card Map" button in the Edit note switches back to cards.
- Next: Stage 2 Text view (ChordPro-style source editor, also serves as ChordPro export), planned v0.26.0.

## v0.25.1 — ChordPro (.pro) import fixes
- Tested a real .pro file (59th Street Bridge Song). Imports fine.
- A misspelled closing tag ({End_of_griid}) no longer leaves the rest of the song stuck in fixed-width tab mode. Any end_of_gr… tag closes a grid, and a line with bracketed chords also ends an unclosed grid.
- Comment directives such as {c: Verse 1} or {comment: Chorus} now name a section when the text starts with a section word. Other comments (empty, or like "Capo 2") are ignored.
- A line like "Instrumental:" starts a section with that name.
- A grid at the start of a song becomes "Intro". Lyrics after a grid-only section start a new section.
- Limit: files with no section markers still land in a few broad sections. Text view (Stage 2) will let users fix those.
- (still v0.25.1) An empty comment line ({c: }) now ends the current section, so stanzas separated that way become their own sections or variations instead of piling into one long card.
- (still v0.25.1) A grid that starts after lyrics in a section now becomes its own "Instrumental" section, so an instrumental break is no longer buried inside a verse variation. Side effect: a short tab riff written inside a verse is also split out. Revisit with more tab samples (tab step 3).
- Open idea: size a card to the variation being shown, not the tallest variation.

## v0.25.2 — compact Imported songs list
- Imported songs rows are tighter, with small Delete buttons (two-tap confirm kept).
- The list scrolls inside its own area (max about 46% of screen height).
- A filter box appears once there are six or more imported songs.

## v0.25.3 — stable card height and column fill
- A card's height is set by its tallest variation, so switching variations never moves the other cards.
- Shorter variations fill the first column before using a second, instead of being split evenly across columns.
- If a card would be taller than the screen, it is capped to the screen height and scrolls inside itself.

## v0.26.0 — Text view, ChordPro export, and library autosave (Stage 2)
- New "Text View" button next to Lyrics Page in Edit mode opens the song as ChordPro-style text. Chords are red, standard directives teal, Orpharion-only directives purple, dynamics amber. A live preview sits beside it (a Preview/Text toggle on phones).
- Apply replaces the current song with the edited text. Apply is disabled while a real problem exists. Problems and notes list the line number and say what to fix in plain words: unclosed chord brackets, unclosed directives, unknown strum patterns, unreadable melody data, play-order names that match no section, and odd chord names (notes only for unknown directives, keys, tempo, time signature, unclosed sections).
- Format: {title} {artist} {year} {key} {tempo} {time}; each variation is its own {sov: Name} … {eov} block; tab and grid lines are wrapped in {sot} … {eot}.
- Orpharion-only directives: {x_order: Name | Name | …} for play order, {x_strum: pattern} for the song default (before the first section) or a section override (inside it), {x_melody: [...]} for melody data (one line of data), and [*mf] after a chord for a dynamic mark.
- The text round-trips exactly for all built-in songs and the imported samples (lines, variations, dynamics, strum, melody, play order, key, tempo, time signature).
- Export .cho downloads the same text. Inside the Claude preview it is offered as .txt (the viewer only allows certain extensions); on the GitHub Pages copy it downloads as .cho. Copy puts the text on the clipboard.
- Parser additions that also help imports: x_ directives, [*dyn] annotations, {time}, and a grid ({sog}) that starts after lyrics becomes its own Instrumental section while {sot} blocks stay inside their section.
- Library songs now autosave every edit (visual or text) every few seconds and when the page is hidden. Built-in demo songs are not saved. Earlier versions lost visual edits to imported songs on reload.
- Known limits: [*dyn] on a chord that has no text and sits directly before another chord can shift by one position; comment lines are not kept in the round trip; no undo for Apply (Cancel before applying, or re-edit).

## v0.27.0 — tab and grid wrap by bar (tab step 3)
- Consecutive tab or grid systems with the same row layout (separated only by blank lines) are shown as one continuous stream of bars. Bars flow and wrap to the card width, in Card Map and Chord Sheet views. The string labels (A, E, C, G) repeat at the start of each wrapped line.
- Bars are found automatically from the bar lines ("|") that appear in most rows of a system. Double bars and repeat marks stay attached to the bar they close. Rows such as beat counts, the divider, volta text, and chord names are cut at the same bar columns.
- A card with wrapped tab asks for the width of the widest original system, so wide screens look like before, and narrower cards or phones wrap instead of scrolling sideways.
- The stored song, Text view, and export still hold the original grid lines. Tapping a tab row still opens the fixed-width line editor, and chords still cannot be placed on tab lines.
- Limits: dragging a tab card narrower than its natural width is not honored yet (only widening); systems with different row layouts are not merged; a system with fewer than two bar lines or fewer than three rows is shown the old way.

## v0.27.1 — tab cards resize both ways
- Dragging the resize handle on a card with wrapped tab now works narrower and wider. Narrower wraps to fewer bars per line, wider shows more bars per line than the original system had (for example 7 instead of 5). The narrowest allowed width is one bar plus the string labels.
- This replaces the v0.27.0 limit "dragging narrower is not honored". The original system width is now only the preferred starting width.

## v0.28.0 — Song picker moved, imported list ordering
- The Song group (song picker) moved from the Song Files menu to the top of Song Info. Song Files now holds Setlist, Import Songs, and Imported songs.
- Imported songs are listed A to Z. With more than five imported songs, a "Recently imported" block (the 3 to 5 newest, scaled to library size) appears above an "All songs, A to Z" list. With six or more songs the filter box appears, and while filtering only matches are shown, A to Z.
- Each import is stamped with its import time. Songs imported before this version have no stamp, so their recency falls back to their order in the library.
- Not done: the Song picker is still hidden in Performance mode, as the rest of Song Info is.

## v0.29.0 — Song picker in Performance mode, setlist pause and resume
- The Song picker (Song Info) is now available in Performance mode, so a song outside the setlist can be picked mid-show.
- Picking a song that is not in the loaded setlist pauses the setlist instead of losing the place. The app remembers the last setlist song played.
- While paused: Song Info shows "Setlist paused after X. Next in <setlist>: Y." with two buttons, "Resume with Y" and "Back to X". The Next Song button reads "Resume Setlist" and Previous goes back to X. The header line reads "Setlist paused after X". Swipe shows a short hint to use Resume Setlist.
- At the end of a setlist: "That was the last song" and the resume button reads End of Setlist.
- Picking a song that is in the setlist behaves like a jump: the remembered place moves to that song.
- The paused place is kept for the current session only (not saved across reloads). Revisit if a gig needs it saved.

## v0.29.1 — PDF diagnostic line removed
- The temporary line under imported PDFs ("PDF: 4 pages, chords per page ...") is no longer saved or shown. Songs imported earlier may still hold the old text in storage, but it is not displayed.

## v0.30.0 — Song tab while the screen is locked
- Problem: the lock shield blocks every touch, so the Song picker was unreachable during a locked performance.
- Added a small music-note tab in the same left-edge spot as the menu tabs. It appears only in Performance mode with the screen locked.
- A single tap shows "Double-tap to choose a song". A double-tap opens a song list above the shield (setlist songs first when one is loaded, then all songs A to Z, with a filter when there are many songs).
- Picking a song switches to it and closes the list, and the screen stays locked. The existing setlist pause and resume applies as usual.
- The list closes by itself after 12 seconds with no touch, with the Close button, with a tap on the locked screen, or when the screen is unlocked. A single tap on the tab while the list is open also closes it.
- Hidden on phone layout, like the menu tabs.

## v0.30.1 — Resume from the locked song list
- When a setlist is paused, the locked-mode song list now starts with a "Setlist paused" block: "Resume with <next song>" and "Back to <last setlist song>" (or a note when the paused song was the last one). Resume works without the pedal and without unlocking.
- The pause line under the song title was already there; the Resume and Back buttons otherwise live only in the Song Info tab, which is unreachable while locked.

## v0.31.0 — Pedal on/off setting; swipe sections on the locked screen
- New first setting in Settings > Bluetooth > Pedal: "Use a pedal" (on by default, remembered on the device). When off, the pedal key list is hidden, pedal and arrow keys are ignored, and a note explains the alternatives.
- With the pedal off and the screen locked, a horizontal swipe on the locked screen steps sections (left is next, right is back). At the end or start of a song, a second swipe goes to the next or previous song, matching the pedal's behavior. Taps and everything else stay blocked, and the lock message says to swipe.
- With the screen unlocked, swipe still changes songs (setlist only), and tapping a card still jumps to a section. This was the user's choice.
- The first-run setup's Pedals step is unchanged.

## v0.32.0 — Setlist picker above the Song picker
- Song Info > Song now has a Setlist dropdown above the Song dropdown (a setlist contains songs, so it comes first). It stays in sync with "Loaded Setlist" in Song Files.
- Choosing a setlist loads it but does not change the open song. With a setlist loaded, the Song dropdown lists that setlist's songs first, in setlist order, then everything else under "Other songs". Choosing None brings back the grouped list (Stand-Alone, Easy, Medium, Hard, library folders).
- Song Files keeps its Loaded Setlist dropdown and Edit Setlists button; no song picker was added there (user agreed).

## v0.32.1 — Loading a setlist opens its first song
- Choosing a setlist (Song Info or Song Files) opens its first song, so the setlist starts at the beginning. If the open song is already in that setlist, it stays open. Choosing None, or an empty setlist, changes nothing.
- This replaces the v0.32.0 behavior, where a setlist loaded from a song outside it had no position, so Next Song, the pedal, and swipe could skip song 1 or do nothing. It now matches the Load button in Edit Setlists.

## v0.32.2 — Loading a setlist always starts at its first song
- Loading a setlist (from either dropdown or the Load button in Edit Setlists) now always opens song 1, even when the open song is already in that setlist. This replaces v0.32.1's "stay if already in it" exception (user's decision: loading means starting from the top).
- Re-picking the already-loaded setlist in a dropdown does nothing (a dropdown does not fire for the same choice); the Load button resets it.

## v0.32.3 — Card overflow fix; resume buttons pinned in the locked song list
- Fixed lyrics and chords spilling out of a card into a second column outside it (seen on Sweet Home Alabama's verses and chorus). The card's fixed height was taken from a whole-pixel measurement that could be a fraction of a pixel too short, so the last line wrapped into an extra column. The height now rounds up with a small margin. Checked on all six imported samples and the built-in songs at three screen widths, in Performance and Edit modes: no card overflows.
- The "Setlist paused" block (Resume with… / Back to…) in the locked song list now sits above the scrolling list, so it can't scroll out of view when the current song is far down the list.
- Known: importing a file again adds a second copy of the song (no duplicate check). Edits to a song live in the app's library on the device and never change the original file; Text View > Export .cho saves a file. A duplicate prompt and an Export All are candidates for Backup/Restore.

## v0.33.0 — Card drag scrolls and inserts; duplicate-import prompt; Export all songs
- Dragging a card in Edit mode now scrolls the card area automatically when the pointer is held within about 70 pixels of the top or bottom edge (faster closer to the edge), so a card can be moved a long way in one drag. The dragged card follows the pointer while the area scrolls.
- Dropping a card where it overlaps another now works as an insert: if the top of the dragged card lands in the upper half of a card, that card (and any card it would then overlap) moves down to make room, shown live while dragging. If the top lands in the lower half of a card, the dragged card goes below that card, as before. Cards in other columns are not disturbed.
- Duplicate check after an import: when an imported song matches a song already in the library (same title, and the same artist or a blank artist on either side), a prompt offers Keep both, Replace the old ones (overwrites edits to the old copy; setlists keep pointing at the same song), or Skip the new ones. Built-in sample songs are not checked. Escape means Keep both. The import message reports what was skipped or replaced.
- Song Files > Export > Export all songs: saves one .zip with every song as a ChordPro .cho file (named by title, numbered if two share a title), including edits. The currently open song and the rest are all included; the open song is not disturbed.
- Re-importing exported files gives the same cards (checked on a tab and grid song, a dynamics song, variations, and a long arrangement).

## v0.33.1 — Duplicate prompt works one song at a time
- Changed from the v0.33.0 batch prompt (user's feedback). During an import, each song that matches a library song stops with its own prompt: Keep both, Replace the original, or Keep the original. A checkbox, "Do this for the rest of this import (N more)", applies the same choice to every remaining duplicate without asking again; it only shows when more files are still to come. Escape means Keep both.
- Wording: "Keep the original" replaces "Skip the new one"; "Replace the original" replaces "Replace the old one". The import message says how many originals were kept or replaced.

## v0.34.0 — Tablet test fixes: sorting, scrolling, chips, wrapping, end-of-song
- Song titles that begin with "The" now sort and display by the next word, with "The" at the end ("Long Road Home, The"). Applies to the song picker (within each category), the imported-songs list, the locked-mode song list, and the setlist editor. A trailing parenthetical stays at the very end. Setlist order itself is never re-sorted. "A" and "An" are not handled (only "The" was requested).
- Song picker categories are now alphabetical. "9 to 5" moved from Stand-Alone to Medium so it no longer sits uncategorized at the top.
- Recently imported: newest first. Imports in the same instant now get strictly increasing timestamps, so ties no longer scramble the order.
- Card map follows the active section in Practice and Performance: stepping with swipe, pedal, or keys scrolls the active card into view (with margins under the header and above the chord strip) and centers the active chip when the chip row overflows.
- Edit mode: the card chips wrap onto several rows so every chip is reachable. Reordering by drag now works in reading order (row, then column) using both pointer axes.
- Lyric lines wider than a card now wrap at spaces (long text between chords included). Cards with "no wrap" still keep each line on one line.
- End of song with swipe or pedal: works even when the Previous/Next Song buttons are hidden. In a setlist it asks for a second swipe or press ("Next Song"/"Previous Song", or "Resume Setlist" when paused). With no setlist it says a setlist is needed. At the ends of a setlist it says so. Removed the "(this mockup reuses the same sheet)" text and the stale "Use Next song." hint.
- Dedicated song pedal keys also work when the song buttons are hidden.

## v0.34.1 — Articles in sorting, Code View rename, card-height safety net
- Sorting and display by title now skip a leading "The", "A", or "An" ("Horse With No Name, A"). Words that only start with those letters (Another, Anna) are untouched.
- "Text View" renamed "Code View" (button, page title, and messages) to make clear it is the ChordPro-style source editor, distinct from Edit All Lines.
- Card height safety net: after each layout, any card whose lyric area still scrolls (content taller than its box) is grown to fit and redrawn. Added after a tablet screenshot showed scrollbars inside Scarborough Fair's verse cards and the Verse 1 card taller than Verse 2. I could not reproduce the height difference on the desktop test browser, so this is a safeguard, pending a recheck on the tablet.

## v0.34.1 — Articles, Code View name, card height check
- Sorting by title skips a leading "A", "An", or "The" (standard practice): "A Horse With No Name" lists as "Horse With No Name, A". Applies everywhere the earlier "The" rule did.
- The Text View button is now named Code View, matching the ChordPro-style source it shows.
- Added a safety check after each card layout: if a single-column card's reserved height differs from its real content height by more than a few pixels, it is corrected, so neighboring cards with the same amount of text stay the same size (reported on Scarborough Fair, where Verse 1 was taller than Verse 2). Could not reproduce on desktop; needs a tablet recheck.

## v0.35.0 — Dynamics with start and end points; technique marks
- Crescendo and decrescendo are now range marks. In Edit mode, tap a syllable, choose Crescendo or Decrescendo in the Dynamic section, then tap the syllable where it ends. A bar at the top says what to tap and has a Cancel button (Escape also cancels). The hairpin is drawn as one wedge across every syllable from start to end, wrapping across lines, widening for a crescendo and narrowing for a decrescendo. It works in Practice and Performance too.
- The end must be on the same card and version as the start. Tapping an earlier syllable moves the start there. Other marks placed on syllables between the start and end (for example mf) stay visible. A syllable holds one mark, so the end syllable cannot also carry a letter dynamic.
- Clear on either end of a range removes the whole range. Older single-point hairpins in existing songs still display; new ones are always ranges.
- New Technique marks in the same palette: hammer-on (H arc), pull-off (P arc), slide up, slide down, bend, vibrato, mute. They are single marks placed on a syllable, like letter dynamics.
- Code View, export, and import carry all of it as marks: [*cresc-start], [*cresc-end], [*decresc-start], [*decresc-end], [*hammer], [*pull], [*slide-up], [*slide-down], [*bend], [*vibrato], [*mute]. Checked a round trip through Code View.

## v0.35.1 — About screen fixes
- Version and copyright are back on their own lines under the app name, and the top lines leave room so they no longer run under the logo.
- The About box now fits the visible screen height on phones and tablets (the browser's address bar had made it taller than the screen, hiding the lower half of the Close button). It scrolls fully to the Close button.

## v0.36.0 — Full screen and installable app
- New Screen block at the top of Menu > Display with a Full screen button. It hides the address bar, tab strip, and Android navigation bar; swiping in from the edge or tapping Leave full screen brings them back. The browser requires a tap to start full screen, so it cannot start automatically. The button is hidden where the browser lacks full-screen support, and replaced by a note when the app is already installed.
- Installable as an app: added a web app manifest (name, icons, standalone display with full screen preferred), icons made from the Orpharion logo (192, 512, and a maskable version), and a tiny service worker that only enables the Install option and caches nothing, so updates always arrive fresh. After installing from the browser menu (Install app or Add to Home screen), Orpharion opens from its own icon with no address bar or tab strip. Only applies to the GitHub Pages copy.
- New files in the repo next to index.html: manifest.json, sw.js, icon-192.png, icon-512.png, icon-maskable-512.png.

## v0.36.1 — Browser tab icon
- The Orpharion logo now shows as the browser tab icon (built into the page, so it works on any copy), on a cream rounded square. The home-screen icon for the installed app uses the same logo.

## v0.36.2 — Dark icon
- The tab icon, home-screen icon, and installed-app colors now use the dark background instead of cream.
