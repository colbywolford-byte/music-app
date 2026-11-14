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

## v0.37.0 — Logo follows the theme
- Two transparent-background logos: a light silver-titanium version for dark backgrounds and a black-titanium version for light backgrounds. The browser tab icon switches with the browser's light or dark mode. The About box logo switches with the app's own theme, including custom colors (it checks how dark the card color is).
- The installed-app (home screen) icon is one picture, so it keeps a solid dark background with the light logo.
- About text: the "Concept, design, and direction" line also leaves room for the logo on narrow screens.

## v0.37.1 — Collapsible imported-songs list
- In Menu > Song Files, the Imported songs list is now a collapsible section like the others, with the song count in its title ("Imported songs (13)"). It starts closed so Export is only a tap away; opening it closes the other collapsible sections, as the rest of that menu already does.

## v0.37.2 — Pedal key tester
- Menu > Bluetooth > Pedal now shows "Last key received" live, so you can see exactly what a pedal sends (key name, code, and key number). If nothing appears, the browser is not receiving keys from the pedal.
- Keys that the browser reports without a name ("Unidentified", which some Bluetooth pedals do) are now given a usable name from their code, so they can be assigned with Set and used for sections and songs.

## v0.37.3 (Nov 8, 2026)
- Song picker category headings (Stand-Alone, Easy, Medium, Hard, Library) now use the accent color and heavy weight so they stand apart from song titles (owner request; depends on the Android picker honoring option-group styling).
- Edit-mode card chips return to a single scrolling row (wrapping removed because long songs cost too much screen space); drag reordering unchanged (owner).
- Code View button now appears only in Edit mode and matches the height of its neighbors (owner's report: it showed, and did nothing, in Practice).
- Cards of any kind can now be resized narrower than their automatic width, down to about 8 rem, so wasted space on the right can be reclaimed (owner report on a sample song).
- Note: a browser "Create shortcut" keeps the browser frame unless "Open as window" is chosen; "Install app" is the full-screen route. Browser behavior, not changeable from the page.

## v0.37.4 (Nov 8, 2026)
- Card-chip row: on touch screens a chip now reorders only after a short press-and-hold (about a third of a second, with a small vibration and an outline); a quick drag scrolls the row. A mouse still drags at once (owner: scrolling kept moving chips).
- Edit-mode buttons (Edit Song Order, Lyrics Page, Code View) made smaller to save vertical space (owner).
- Hammer-on and pull-off marks: the H and P letters now sit above the arc instead of overlapping it (owner).
- Following the active card now checks against the visible card area, so stepping to the previous section scrolls it into view in Practice too (owner: it only worked after a second pedal press).
- Song picker category headings stay gray: the Android picker ignores page styling (owner's test of v0.37.3); alternative proposed.

## v0.38.0 (Nov 8, 2026)
- Custom Song list: the Song picker in Song Info now opens the app's own list instead of the Android system list, so category headings (Easy, Medium, Hard, Library, setlist name, Other songs) are shown in the accent color, bold, small capitals, and stay pinned while scrolling; the current song is highlighted and scrolled into view (owner chose this after the system list ignored heading colors).

## v0.38.1 (Nov 8, 2026)
- Dynamics rework (owner's tablet test of v0.35.0): marks are no longer limited to one per chord phrase. A letter dynamic or technique mark now attaches to the word you tapped, so one phrase can hold several; marks are drawn above that word from the real text position. Stored as extra keys (section|variation|line|@character) beside the old keys, so existing songs are unchanged.
- Crescendo and decrescendo are drawn: choose the hairpin, then drag from the start word to the end word (or tap the end word). The wedge follows the text across wrapped lines and lines, and may start and end inside the same chord phrase. Cancel and Escape still work.
- Code View and ChordPro export/import carry the new marks inline, such as "Happy [*mf]birthday" and [*cresc-start] ... [*cresc-end], and round-trip exactly.
- Known limit: marks are anchored by character position, so editing lyric text earlier in a line can shift them; the song should be re-checked after text edits.

## v0.38.2 (Nov 8, 2026)
- Dragging a card chip near the left or right edge of the chip row now scrolls the row, so a chip can be carried to chips that are off screen and dropped there (owner's tablet report: a dragged chip stopped at the visible edge). Autoscroll stops at the end of the row.

## v0.38.3 (Nov 8, 2026)
- Fixed a leftover gray shield: loading a song from the Song picker closes the Song Info panel, but the translucent shield behind the side panels stayed up until the next tap. The shield now clears whenever the Song Info panel closes (owner's report).

## v0.38.4 (Nov 8, 2026)
- Update check: on the hosted copy, the app fetches the newest page in the background about a second after launch and each time it returns to the front, bypassing the browser's 10-minute cache. If the version differs it shows "A new version is available" with Reload and Later buttons; Reload refreshes the cached copy and reloads. Never reloads on its own, so nothing is lost mid-edit (owner: installed app stayed on the old version after reopening).

## v0.38.5 (Nov 8, 2026)
- Update check now loads the newer version automatically at launch (about 0.7 seconds after opening, before any editing), once per new version so it cannot loop. Later checks, when the app returns to the front mid-session, still show the Reload / Later bar so an edit is never lost (owner request).

## v0.38.6 (Nov 8, 2026)
- Card-chip row: the thin native scrollbar is replaced by a larger scroll handle under the row (24 px tall, with a thick thumb) that can be dragged or tapped to jump; it appears only when the chips overflow and is hidden in Performance (owner: the native scrollbar was too small to grab).

## v0.38.7 (Nov 8, 2026)
- Section navigation: the card-chip row is replaced by default with one compact button showing the position and section name (for example "4 / 13 Chorus"). Tapping it opens a list of the whole play order to jump to any section; in Edit the list also offers "+ Add Card" and "Edit Song Order...". Chosen by the owner after weighing the chip row's cost in space and touch problems; drag-to-reorder chips remains available in the chip setting, and Edit Song Order handles reordering otherwise.
- New setting under Display, "Section navigation": a compact button (default), a row of chips, or hidden. Saved on the device.

## v0.38.7 follow-up (no version bump)
- Section list is narrower (200 px) with smaller options (.8rem, 2rem rows).
- Add Card and Edit Song Order from the list now work: the click no longer reaches the outside-click closer, and the action runs after the list closes.
- Responsiveness safeguards: the pending-hairpin touch lock (touch-action none) applies only in Edit and is cleared on leaving Edit; interrupted chip drags are cleaned up on touchend, touchcancel, tab hide, window blur, and a 20-second guard.
- Section list shows at most 8 rows with its own scroller; "+ Add Card" and "Edit Song Order…" (Edit mode only) are pinned below the scroller, always visible.
- The two footer options are merged into one: "Add Card / Edit Order…" (both opened the same card palette).

## Tuner string tap (no version bump)
- Tapping a string that is already selected now plays its piano note again instead of deselecting it, so the note can be repeated as often as needed. Selecting another string switches; Reset strings clears the selection.

## Chip scroll handle width (no version bump)
- The chip-row scroll handle track now matches the left edge and width of the chip window instead of the full screen width.

## v0.38.8: Report a Bug
- New "Report a Bug" button in the global menu directly under About, with the same gap before Display that About used to have.
- Form: description (required), optional reply email (validated, never shown to anyone else), optional app version and device details, hidden spam trap. Sent through Web3Forms so the developer email is never in the app. Shows clear messages for empty text, bad email, offline, timeout, and failure.
- Needs the developer Web3Forms access key in the KEY constant; until then the form says "Bug reporting is not set up yet."
- Chip scroll handle now matches the chip window width.
- Bug report: the technical-info checkbox now says what it adds (app version, mode, screen size, installed or not, browser type) and what it never includes.

## Dynamics and technique marks by syllable (no version bump)
- Marks now land on the syllable you tap, not the start of the word. Syllables use the same splitter as the melody editor (birthday = birth + day). Hammer-on, pull-off, slides, bends, and the rest can sit on different syllables of one word, and each gets its own mark instead of replacing the other.
- The tapped character is found from its real position on screen, so taps near a syllable boundary resolve correctly.
- Crescendo and decrescendo start and end points, and the stretch drag, use the same syllable units; a wedge ends at the end of the last syllable.
- Marks that already exist on a segment start keep their old key, so saved songs are unchanged.

## v0.39.0: Backup and Restore
- New "Backup" section in the global menu (after Library).
- .orz full backup: a real ZIP (opens in any unzip tool when renamed .zip) holding manifest.json, library.json (songs and folders), setlists.json, strums.json, and settings.json. Deflate-compressed where the browser supports it, stored otherwise. Everything is included: library songs and folders, all setlists, custom strum patterns, and all ukemap.* and orph.* settings except the library, setlists, strums, and folder-name keys, which are handled separately.
- .orl setlist file: plain JSON with the setlist name, its song titles, and the full songs, so it opens complete on another device.
- .orp strum file: plain JSON with one or more custom strum patterns.
- One Restore button reads all three types (it detects ZIP versus JSON, then checks the manifest or kind). A confirmation dialog lists what the file contains first. Settings restore is an opt-in checkbox and reloads the app after.
- Name clashes never overwrite: a song or setlist with the same name but different content is added as "Name (restored)"; exact duplicates (including an earlier restored copy) are skipped; setlist song titles are remapped to the restored names. Folders match by id and name, then by name. Strum patterns match by pattern and are renumbered when ids clash; songs that use a restored pattern are re-pointed.
- Safety: the file is untrusted. Size caps (80 MB total, 60 MB per entry), entry-name allowlist, encrypted ZIPs refused, songs validated (types, lengths, section and layout references), only ukemap.* and orph.* settings accepted and never the library, setlist, strum, or folder keys. Titles stay escaped when shown.
- Files made by a newer format version are refused with a message to update the app.
- The Save and Restore buttons stop their click from closing the menu, so the result message stays visible.
- Restore: the file picker now shows "Choose your backup file…", then "Reading <name> (<bytes>)…", and failures name the file, its size, and the technical reason. The picker listens for both change and input events.
- Restore picker: the "Restore From a File" button is now a transparent file input laid over the button, so the tap opens the picker directly (some Android browsers ignore a programmatic click on a hidden input). The Restore dialog no longer closes the menu behind it.
- Restore picker: when the browser supports the File System Access API (showOpenFilePicker), Restore uses it, which opens the full system file browser. The tablet browser showed only Camera, Camcorder, and Photos & videos with a plain file input. Browsers without the API fall back to the plain input.

## v0.39.1: launch splash
- Full-screen splash on app launch, about 2 seconds: the rosette (petals and center dot) turns once counter-clockwise while the strings and scroll orbit once clockwise around the rosette's center, then both settle into the finished logo and the splash fades out.
- Shows once per session (so the update check's automatic reload does not repeat it); tap or press a key to skip; skipped entirely when the device asks for reduced motion.
- Metal logo on dark palettes and black titanium on light palettes, matching the About logo.
- Splash follow-up (no version bump): the splash is now drawn in the first paint, from a small script at the top of the page, on the installed app's own splash color (#11161b) and starting at the icon artwork size (192 px), then grows to 1.7x while it spins. This blends it into the Android splash instead of showing a different logo first. The starting size is a best guess at the Android splash icon size and may need a nudge after a side-by-side look.
- Splash follow-up 2 (no version bump): measured from device screenshots (device pixel ratio about 1.33), the Android splash logo is about 151 CSS px, so the splash now starts at 151 px instead of 192. The animation is paused until the first frame is painted plus a short hold (about a quarter second), so the logo appears at rest exactly over the Android splash and only then starts to turn and grow.

## v0.39.2: launch splash removed (shelved)
- The animated launch splash (v0.39.1) is removed. On the tablet the page-drawn splash never lined up with Android's own splash screen: it appeared after Android's splash, showed only part of the animation, and jumped. A web page cannot animate Android's native splash, so the clean version of this idea needs a different approach (for example, a short in-app animation after the app is already showing, or the About logo). Shelved for later in the project.
- The logo geometry, the rotation directions (rosette counter-clockwise, strings and scroll clockwise around the rosette center), and the measured Android splash icon size (about 151 CSS px at a device pixel ratio of about 1.33) are recorded above in v0.39.1 for reuse.

## v0.40.0 — PDF export
- New "Export PDF" group in Menu > Song Files. The app writes the PDF itself (PDF 1.4, standard fonts, Flate-compressed pages), so one tap saves a real file to Downloads.
- Exports one song or a whole setlist (each song starts on a new page). Options (saved in 'orph.pdfopt'): page size Letter/A4 (default by locale), font size Small–Extra large, margins Narrow/Normal/Wide, Chords and lyrics / Lyrics only / Chords only, include chord diagrams, include tab and melody staff.
- Chord diagrams follow the Display settings for position (top, left, right, bottom), order (alphabetical or order of appearance), and size.
- Footer on every page: "Orpharion" left, "Page x of y" centered. Clean black on white; section names bold small caps style.
- Melody staff is converted from the on-screen SVG to vector drawing; clef is a simplified bold G; dynamics and range overlays are not in PDFs yet.
- PDF follow-up: a song that would run past one page now flows into a second column on the same page before starting a new page. Songs that fit on one page stay single-column. Setlist songs still start on a new page.
- PDF follow-up: words split by a chord change stay together when a line wraps.
- PDF follow-up: two columns are used only when the song would pass one page AND every line fits the narrower column (no wrapped lines, shrunken tab, or shrunken staff); otherwise the song stays in one column. Info line under the title now wraps.
- PDF follow-up: title, info line, and top chord diagrams span the full page width; both columns start together below them.

## v0.40.1 — PDF polish
- Two-column PDFs: header (title, info, top diagrams) spans the page and columns start level; chord-split words stay together; columns only when lines fit.
- Footer now has the date and time of saving, right-aligned.

## v0.40.2 — PDF menu buttons
- Save This Song as PDF, the Setlist picker, and Save Setlist as PDF share one width (13rem) and sit right-aligned in the Export PDF group.

## v0.40.3 — PDF option selects
- Page size, Font size, Margins, and Show selects share the 13rem width of the PDF buttons.

## v0.40.4 — menu alignment
- Export PDF toggles: label on the left, toggle centered in the same 13rem column as the buttons.
- Song Files: Import Songs and Choose Song Folder buttons are 13rem, right-aligned, each beside its text block and vertically centered with it (wraps below on narrow menus).

## v0.40.5 — update prompt colors
- The 'A new version is available' bar's Reload and Later buttons now use the bar's own contrast colors (Reload filled, Later outlined) in both themes.

## v0.40.6 — flyout menu standardization
- Menu controls share one size and alignment: buttons, selects, and sliders are 13rem wide and right-aligned with their labels on the left; toggles have the label on the left and the switch centered in the same 13rem column.
- Applies to Display, Bluetooth, Song Files, and Backup (including Export all songs, Full screen, Reset Layout, Palette Designer, Use Global Defaults, Reset Pedal Keys, Edit Setlists, Add This Song to This Setlist, Back Up Everything, Restore, Save Setlist File, Save Strum File).
- Bold Text, Thick Outlines, and Phone view's song buttons option are now switches like the rest.
- Pedal Set and Clear buttons, segmented This Song/Global Defaults buttons, color pickers, and the imported songs search box are left as they were.

## v0.40.7 — Phone view toggle fix
- The Previous / Next Song buttons switch no longer gets squeezed by its long label; the label is shorter and the swipe/pedal note sits below as a hint.

## v0.40.8 — toggles right-aligned
- All menu switches sit on the same line as their label, right-aligned and vertically centered (no longer centered in the button column).

## v0.40.9 — delete custom strum patterns
- Strum pattern group has a Delete This Pattern button, shown only when one of your own patterns is selected. First tap arms it (shows the pattern name), second tap within 5 seconds deletes it.
- Songs and cards that used the deleted pattern fall back to No strum pattern; built-in patterns cannot be deleted.

## v0.40.10 — Song Info menu standardized
- Song Info (and the tuner panel) now use the same control sizes and alignment as the global menu: 13rem right-aligned selects, sliders, text boxes, and buttons (Open Chord Library, Create Your Own, Delete This Pattern, Reset strings), with switches right-aligned on the label's line.
- Metronome's beat light moved to the left of its label so the switch stays at the right edge.
- Compact steppers (tempo, transpose, capo, key dial, Major/Minor) are unchanged.

## v0.40.11 — Song Info Setlist and Song selects
- The Setlist and Song selects were stretching to fill their row; they now match the standard 13rem width and right edge like every other control.

## v0.40.12 — strum pattern layout
- Built-in strum patterns no longer show the pattern slot row (they cannot be modified); your own patterns still show it.
- Create Your Own is now Create a Pattern. In the creator, Set the Pattern labels the slot row on the left with the slots right-aligned, the tap hint below is right-aligned, and Save Pattern and Cancel are equal width, right-aligned, with space between. The Name box now matches the other controls (it was a bright white box).

## v0.41.0 — five built-in strums per time signature
- Built-in strum patterns reduced to five per time signature (4/4, 3/4, 2/4, 6/8). 4/4 keeps: down strums, down-down-down-up (D-D-DUDU), island, D-DUDUDU, and all down-up. Four patterns are new, written for 3/4, 2/4, and 6/8.
- Songs, cards, and saved data that used a removed built-in pattern switch to an identical remaining pattern if there is one, otherwise to None.
- The ukulelego.com credit was removed from About and from the Strum pattern group. Attorney review of this is still on the 1.0 checklist.

## v0.41.1 — strum pattern list
- The Strum pattern drop-down opens the same grouped list as the song picker, with colored time signature headings and the selected pattern highlighted.

## v0.41.2 — strum list alignment
- The strum pattern list opens at exactly the width and left edge of its control.

## v0.41.3 — tuner layout
- Tuner: Reset strings moved above the string diagram, styled and right-aligned like the other buttons. The A4 control is now labeled Reference pitch (A4), right-aligned, with a tooltip explaining it is the pitch the tuner uses for the note A above middle C (440 Hz is standard).

## v0.41.4 — Melody editor layout
- Melody editor reorganized into labeled sections: Note length (5 equal buttons), Note options (Rest/Dotted toggles right, Accidental buttons right), Edit notes (4 equal buttons), Stacked notes (toggle, Chord select at control width, Clear Stack / Fill Chord equal buttons right), Lyrics (Syllable input at control width, Hold toggle, Clear Syllables / Fill From Card Lyrics equal buttons right). Existing controls re-parented so all handlers are unchanged.

## v0.41.5 — PDF page orientation
- Added Orientation (Portrait / Landscape) to PDF export options, persisted with the other options. Works for Letter and A4, single song and setlist; footer, columns, and diagrams adapt to the page width.

## v0.42.0 — Melody editor rebuild (supersedes the 0.41.4 layout)
- Compact toolbar on top: note lengths as a segmented row, Rest and Dotted as small toggle buttons, Accidental as a drop-down, Note up/down/Delete/Clear all, Zoom − / +. Controls stay put while the staff grows.
- Staff is one continuous horizontal tape (scrolls sideways, follows the newest or selected note). New single-line option in the staff renderer; the wrapped renderer is unchanged for cards and PDFs.
- Stacked notes and Lyrics moved to a bottom tabbed panel (collapsed by default; tap a tab again to close).
- Page view: full-screen read-only sheet-music layout that wraps measures to the screen width; tapping a note closes it and jumps the editor to that note. A "Rotate for larger view" button (portrait only) tries full screen plus landscape lock and falls back to a hint; orientation is not forced.
- Interim 0.41.4 restructure removed.

## v0.42.1 — Phone = Performance mode only
- On phones the app stays in Performance mode. Practice and Edit are blocked (mode buttons, mode picker, melody editor) and show the note "Editing is available on tablets and computers." A hint with the same text appears in Song Info and the Phone view settings.
- Auto detection now uses the screen's smaller side (under 500 CSS px) instead of window width, so a 600 px-wide tablet keeps the full app and a narrow computer window does too. Phone View setting (Auto / Always On / Off) is the manual override.
- If a saved session starts in Practice or Edit on a phone, it switches to Performance.

## v0.42.2 — Phone menu (reuses the existing tabs)
- On phones the side tabs return, limited to what a performer needs: Songs (Song picker, Transpose and Capo), Song Files (Setlist, Import Songs, Imported songs, Export; no PDF export), Tuning (full tuner), Settings (Display, Bluetooth and pedal settings, Backup, About, Phone View). Music defaults and all editing groups stay hidden. Same sections as the tablet, so settings stay in sync.
- Mode dial disk, labels, and marker hidden on phones; the Lock button stays. Taps on the dial are ignored.
- The "Editing is available on tablets and computers" note now shows only for real taps, not for the automatic mode restore at startup.
- Tablet and computer behavior unchanged.

## v0.42.3 — Settings menu spacing
- More vertical space between Report a Bug and Display in the menu's left column.

## v0.42.4 — Strum slots right-aligned in Song Info
- The strum slot boxes (shown for custom patterns) and the "Fits 3/4" note under them are right-aligned with the Pattern drop-down and buttons.

## v0.42.5 — About
- The "independent and not endorsed by Anthropic" line now sits directly under the "Code written with Claude" credit line.

## v0.42.6 — Grouped drop-downs and About wording
- Every grouped drop-down in the side menus (Instrument and any other list with sections) now shows accent-colored section headers with dividers, indented options, a tinted selected item, and headers that stay in view while scrolling, matching the song and strum pickers.
- About: "This is an independent app and is not endorsed by Anthropic."

## v0.42.7 — Consistency audit fixes
- Bluetooth pedal key rows: label and key readout stacked on the left, Set and Clear as equal 6.1rem buttons right-aligned beneath (Next/Previous Section show Set only, aligned to the same right edge).
- Button text size standardized to 1rem in menus (Edit Setlists, Add Song to Setlist, Export all songs, Export PDF buttons, Colors design button); Backup buttons raised to the standard 44 px height; Backup drop-downs match other drop-downs' text size.
- "Add This Song to This Setlist" shortened to "Add Song to Setlist" so it fits on one line.
- The side tabs are hidden while the Chord Library, Melody editor, or Page view is open so they no longer cover content.
- Audit scope: every group of Song Info, Song Files, Tuning, and Settings (Display, Bluetooth, Defaults, Backup) in Edit mode; Chord Library and Setlist builder viewed. Known small difference left alone: Song Info and Tuning controls sit 6 px further from the right edge than Song Files and Settings.

## v0.42.8 — Song order wording
- Song order dialog counter reads "1 step" (singular) instead of "1 steps".
- Second audit pass viewed first-run terms, Song order, Edit, Practice, Performance, and Warm-up screens. Open item for Colby: the Warm-up control panel (Instrument, Key, Length drop-downs and the Sound, Loop, Count-in switches) does not yet follow the menu standard (13rem right-aligned controls, switches on the right of their labels).

## v0.42.9 — Warm-up panel alignment
- Exercise is now a drop-down (Arpeggios, Progressions, Scales, Mixed). Exercise, Key, and the Tempo slider share one width (230 px) and left edge. Start, Shuffle, and Restart are centered under the strip.

## v0.42.10 — Warm-up widths
- Instrument drop-down now ends at the right edge of the Major/Minor control. Difficulty is three equal buttons totaling the Tempo slider's width. Major/Minor buttons are equal width.

## v0.42.11 — Warm-up BPM input
- The BPM number beside the Tempo slider is now a number box (40-160): type a value or use the slider to fine-tune; they stay in sync, out-of-range entries are clamped, and Enter confirms. The box is centered under the Major/Minor control.

## v0.42.12 — Warm-up BPM select-on-tap
- Tapping the Warm-up BPM box selects the whole number, so typing replaces it.

## v0.42.13 — Select number on tap everywhere
- Tapping any tempo or number box (Edit header BPM, metronome BPM boxes, beats-per-measure, custom A4 pitch, Warm-up BPM) selects the whole number so typing replaces it.


## Record status (Nov 9, 2026)
- Design record Version 7 written Nov 9 (https://claude.ai/artifact/6SHuyGRX1eLE2QWPagyi1V), covering ver. 0.37.3 to 0.42.13 plus the Orphion comparison, the attorney/IP plan, and the Nov 7-9 decisions. Everything above this line is now in Version 7. New notes for Version 8 start below.

## For Version 8 (added Nov 9, 2026)
- Include the draft email to VLPA (separate doc: https://claude.ai/artifact/Kt47neA3tWAC7YMtSWKLBK) as an appendix or linked item in the legal section, plus whether and when it was sent and what VLPA answered.
- Include the USPTO screenshots Colby took on Nov 9 as evidence of the name search (already summarized in Version 7, section 3).

- v0.44.0 (Nov 9, 2026): Export section in the Library menu now has three format switches (ChordPro .cho, plain text .txt, Markdown .md; any combination, at least one stays on), a "Save Song As" row whose button shows only the chosen extensions (such as .cho + .txt) and saves one file per chosen format, and Export all songs (.zip) with every chosen format for each song. Text and Markdown put chords above lyrics; Markdown uses code blocks to keep spacing. Choice is remembered. Not yet device-tested.
- v0.44.0 also: Code View's export now offers Export .txt and Export .md (chords above lyrics, from the editor text including unapplied edits) instead of .cho. .cho stays only in the Library Export section.
- v0.44.1 (Nov 9, 2026): the Edit flyout (chord, dynamic, technique, lyrics) now starts below the mode dial so nothing is covered; the title stays at the top. Added a "What do these mean?" cheat sheet under Dynamic (pp through ff, sfz, cresc., dim., rit., the crescendo and decrescendo wedges, fermata), and tooltips on the dynamic buttons. Other flyouts not yet checked against the dial.
- v0.44.2 and v0.44.3 (Nov 9, 2026; 0.44.3 only re-versions small wording and layout tweaks so devices recognize the update): the same "What do these mean?" cheat sheet under Technique, with each mark's icon and a plain-English explanation (hammer-on, pull-off, slide up and down, bend, vibrato, mute). The X mark is now named "Mute / chuck" and explained as the scratchy muted strum. A true chuck slot in strum patterns (own sound, .orp, PDF) is a possible later feature.
- Update check (Nov 9, 2026, in v0.44.3): every build now carries a build timestamp, and the update check compares it as well as the version number, so an administrative change with the same version still reaches devices. The build time also appears in bug-report diagnostics. Tested against a simulated hosted page. Version numbers now move only for real fixes and features.
- Bug report (Nov 9, 2026): the Report a Bug screen now shows the exact technical info that will be sent (version and build, mode, screen size, installed or not, browser text) in a read-only box that comes from the same function as the sent message; it hides and says nothing extra is sent when the checkbox is off. The Terms and privacy text can say users see exactly what is sent before sending.
- Nov 9, 2026: "(working title)" removed from the About screen; Orpharion is now shown as the app name. The name itself is still pending the trademark search review (VLPA, law school clinic) and the domain choice.

- Legal questions added (Nov 9, 2026) for Version 8: (1) Copyright: automatic on creation; registration is optional but needed before suing for infringement and affects statutory damages; the Copyright Office requires disclosure of AI-generated material and protects the owner's human contribution (design, selection, arrangement, direction), which this record documents; how it applies to AI-assisted code is unsettled; fee believed to be roughly $45 to $65 (unverified); registering around launch seems reasonable. (2) LLC: decide before filing the trademark, because an application filed before use generally cannot be assigned to a new owner until use begins except to a successor of the business; Tennessee costs per one filing guide (unverified with the Secretary of State): $300 to form online, annual report $300 minimum, 6.5% franchise and excise tax, registered agent. Both questions were added to the VLPA email draft (Questions list); the AI-ownership question there now also asks about copyright registration and disclosure.

- Bug report test (Nov 8, 2026, 3:23 PM, found in the owner's inbox Nov 11): the owner sent a test report from the Android tablet while the app was at v0.38.8. It arrived through Web3Forms as "Orpharion bug report (0.38.8)" from the Orpharion app sender, with the message "Testing the bug report functionality.", the technical info block (version, mode shown as E, screen 601x962 at 1.33x with a 601x961 window, installed app no, Android 10 Chrome 156), and the owner's optional email. This confirms the form delivery works end to end from the tablet. Findings: (1) The tablet's real CSS viewport is about 601x961, narrower than the 800x1280 used in most of my tests, so layout checks should also use 601x961. (2) The mode was a single letter, since fixed to the full name in v0.44.3, and the report screen now shows the technical info before sending. (3) Web3Forms adds the visitor's IP address and the sending page address to the email, which the in-app technical info box does not show. The privacy policy currently says nothing you do in the app is sent to the developer and does not mention bug reports or Web3Forms. To fix: say that a bug report is sent only when the user taps Send, goes through Web3Forms, and includes their IP address. Owner's email and IP address deliberately not recorded here.

- v0.45.0 (Nov 11, 2026): (1) The Edit flyout is now collapsible sections, Chord open by default and Dynamic, Technique, and Lyrics collapsed, one open at a time, with the open choice remembered while the app runs; this answers the worry that the app looks too complicated. Moving the flyout behind the Song Info menu was considered and rejected because it would add taps to every edit and break tap-a-word-then-edit. (2) Simple or Advanced setting: Simple hides the Dynamic and Technique sections and the Add melody buttons while editing (marks already in songs still show); Advanced shows everything. A new setup wizard step offers the choice, preselecting Simple for first-time setup, and Settings > Display has a matching switch. Users who skip setup, and existing users, stay on Advanced. Tested at 601x961 (the tablet's real viewport) and 800x1280. Not yet device-tested.

### Version 8 notes: v0.46.0 sound engine and instrument packs
- Added a sound engine (ORPSND) that every note the app plays now goes through. Before this, Practice used one generic plucked-string sound, and the tuner's reference tone used a separate piano sound.
- Built-in instruments are synthesized in the app, free, and work offline: piano, ukulele, nylon-string guitar, steel-string guitar, bass, mandolin, and banjo. The string sounds are Karplus-Strong plucked-string models, each with its own body resonance. The piano is built from added-together harmonics with a hammer noise.
- Settings > Display > Sound: one choice for "Chords and strums" and one for "Melody and stacked notes", each with "Match the song" (default, follows the song's instrument) or any voice, plus "Hear it" buttons. Stored on the device only (localStorage 'orp.snd').
- Melody editor: new Listen / Stop button plays the section's melody at the song's tempo and key signature, including stacked notes. Rests and dotted notes are honored. Not yet in Performance mode.
- Practice now plays through the engine and follows the chord voice choice.
- The engine has a pack registry (ORPSND.register) so more packs can be added later without changing the rest of the app. A pack is a list of voices, each with a play function.
- Decision (Colby, Nov 11, 2026): ship the synthesized packs now. Plan hi-fi recorded packs as a thank-you for donations, after 1.0. Open items before that: recording or licensing rights for the samples, hosting outside GitHub Pages, how a donor receives a code, and privacy policy and terms updates for the new network call.
- Post-1.0 ideas recorded from the same discussion: separate sold packs through a seller-of-record service (no real copy protection possible), play chords and melody together from a song, per-section instrument choice, a Resources flyout for gear and lessons.
- v0.46.0 tuning (Nov 11, 2026): Colby found the string sounds tinny while listening to the melody. Darkened every plucked voice (stronger damping of the highs in the string model, softer pluck, a gentle treble cutoff, more body boost, slightly longer sustain to offset). Measured the brightness of a mid-range note before and after: about 3 times the note's pitch down to about 2 times. Not yet judged on the tablet.
- Post-1.0 (conditional): extra parts in the melody editor (stage 1 treble parts with their own instruments played together, stage 2 bass clef, stage 3 Page view, Performance strip, and PDF). Build only if beta testers ask. Reason for waiting: it moves toward notation software and adds complexity, and the sound features are not yet device-tested.
- v0.46.0 low-note fix (Nov 12, 2026): Colby heard the low strings of the guitar and bass as distorted, like a tone switching between two frequencies with static. Offline tests showed the notes were in tune, not clipped, and not affected by the master compressor, so the cause was how each string was started: random noise, which gave low notes a flat, randomly gapped set of harmonics. Replaced it with a smooth plucked-string shape plus a little noise, so the fundamental is strongest and the harmonics fall away evenly. Also trimmed the low-frequency boosts and lowered very low notes slightly for small speakers. Not yet judged on the tablet. If it still sounds wrong, the next suspects are the tablet speaker itself and how its browser handles low-frequency filters.
- v0.46.0 follow-up (Nov 12, 2026): Colby said the lowest bass notes were still a bit unsteady or fuzzy, though much better. Moved all tone shaping below 350 Hz out of the browser's filters and into the note itself (double-precision math done once per note), since browsers can be noisy with very low-frequency filters. Gave the bass stronger second and third harmonics so small speakers can reproduce its pitch. Checked every voice for invalid numbers and harmonic balance. Not yet judged on the tablet.
- 12-string guitar: when the song's instrument is the 12-string and the steel or nylon voice is playing, each note now sounds with its partner string. The lower four pairs add an octave-up string, and the top two pairs add a slightly detuned unison string, plus a tiny strum delay and detune for the shimmer. The 6-string diagram is correct because a 12-string has six pairs fretted as one.
- Guitar strings option (Nov 12, 2026, Colby's request): Settings > Display > Sound has a Guitar strings choice, Steel or Nylon (default Steel). It applies when the song's instrument is a 6-, 7-, or 8-string guitar and a sound choice is set to Match the song. The 12-string always sounds like steel. Ukulele, bass, mandolin, banjo, resonator, and lute keep their own automatic sounds. The choice is global, not saved per song. Per-song would need a new line in the song file and is a possible later step.
- Competitor comparison (Nov 12, 2026): wrote a one-page comparison of SongBook, SongFolio, Setlist Helper, Ultimate Guitar, Chordify, and Songsterr (OnSong could not be read). Findings: no listing mentions playing your own melodies on your chosen instrument or a choice of string type; Songsterr's playback is also synthesized. SongBook already offers linked devices (Play Together), cloud sync, and a concert mode. Document: https://claude.ai/artifact/64bzxneKbn5w33TnyDN3g8
- Leader and follower device linking (asked Oct 26, put on the later list Oct 27): still not built. SongBook's Play Together shows a competitor offers it, so ask beta testers (especially band players) whether they want it before building.

### Version 8 notes: v0.47.0 offline copy
- Found (Nov 12, 2026) that the app's background helper file (sw.js) cached nothing, so the installed app could fail to open with no connection even though everything works offline once it is open. Colby asked for this to be fixed, and it is a v1.0 requirement because gigs often have no signal. Corrected an earlier statement that the sounds were fully available offline.
- Fix: sw.js now saves a copy of the app (page, manifest, and icons) on the device. Online, it asks the network first, so new versions still arrive right away. If the network takes longer than 4 seconds, the saved copy opens and the fresh copy is saved for next time. With no connection, the saved copy opens. The old cache is cleaned up when the helper updates.
- Tested in Chromium: offline reload, offline new tab, offline direct address, a missing file fails cleanly, a changed page arrives online and then stays available offline, and a 7-second slow network shows the saved copy at about 4.2 seconds and refreshes the cache afterward. Not yet tested on the tablet.
- The bug report's technical info now includes a line "Offline copy: on or off", so Colby can confirm on a device that the saved copy is active.
- Needs one online launch after updating before offline launch works. The helper registers only on the github.io address, as before.
- Possible later improvements: a small "saved for offline use" message after the first save, and an offline note in Help.
- Page title changed from "Orpharion - mockup" to "Orpharion" (Nov 12, 2026), so the browser tab and installed-app name no longer say mockup. Same version, picked up by the build timestamp.
- v0.47.1 (Nov 12, 2026): renamed the Practice mode to Rehearse, because Warm-up and Practice sounded like the same thing to Colby. Warm-up is exercises not tied to a song; Rehearse is playing along with a particular song. Chosen from three options (Warm-up and Rehearse; Exercises and Play Along; Drills and Practice). All 12 places in the app that said Practice now say Rehearse: the mode dial, the mode menu, the header, the setup wizard, the Song Info controls heading, the phone-view preview, the bug report text and technical info, and a toast message. Internal names stay the same. Earlier versions of the design record still say Practice, as that was the name then.
- Bass sound follow-up (Nov 12, 2026): Colby still heard a bright tone on some bass strings. Measured every bass note: the overtone pattern varied by up to about 20 dB from note to note, caused by the small random element used to start each note, so some strings sounded brighter than others. Made the bass start from a smooth shape with no randomness, so all strings share the same overtone pattern, and lowered the treble cutoff from 2200 Hz to 1000 Hz. Overtones above 600 Hz are now about 35 to 45 dB below the main tone, down from about 25. Same version, since it is the same issue. Not yet judged on the tablet.
- Bass correction (Nov 12, 2026): the previous bass change overshot. Colby then heard only short thumps, because the smooth start shape made each overtone about 12 dB quieter than the last and the 1000 Hz cutoff removed the rest, and a tablet speaker cannot play the lowest tones, so the mid-range overtones are what make it sound like a string. Reworked the bass: a sharper pluck (overtones fall away gradually, about 4 dB at the second and about 15 dB at the fifth), a small identical pick transient on every note, a treble cutoff back at 2200 Hz, and still no random element, so every string has the same overtone pattern. Lesson: judge small-speaker sounds by what the mid-range overtones do, not only by cleanliness. Not yet judged on the tablet.
- Bass pick transient (Nov 12, 2026): Colby said each bass note now started with a sound like tapping a microphone. The small pick "tick" added in the previous fix was white noise and too loud (estimated about 20 dB below the note's first 20 ms). Replaced it with a softer, low-pass-filtered tick at about 32 dB below, still identical on every note. Same version. Not yet judged on the tablet; the level is a single setting if it needs to move either way.
- Instrument volume balance (Nov 12, 2026): Colby noticed the bass was quieter than the guitar. Measured each voice with a hearing-weighted loudness (which counts low pitches as quieter, as ears do): the bass had the most raw energy but was about 4 dB quieter to the ear than the steel guitar, the mandolin about 3 dB, and the banjo about 5 dB. Raised their levels and trimmed the nylon guitar and ukulele slightly, so all six string voices now measure within about 1 dB of each other, with the bass about 1 dB above as a small allowance for tablet speakers. The piano was not measured. Not yet judged on the tablet.

- Bass pluck softened (no version bump): bass click .8 to .25, level 1.15 to 1.0, pick position .08 to .12. Measured attack was already no sharper than the guitars, so the audible tick and the extra level were the likely cause.

- Bass low-note fix (no version bump): Colby's Warm-up recording on a 4-string bass showed isolated sharp clicks. A tablet-speaker model (180 Hz high-pass) showed low-string notes sound mostly like the pick: E string attack was about 20 dB above sustain. Added a gentle saturation for notes under 130 Hz (`sat`, `satf` voice params), click .25 to .1, pick position .12 to .06, decay 3.4 to 4.5 s, tilt .25 to .5. E-string attack ratio improved from about 19.9 to 14.5 dB in the model. Limit: a tablet speaker cannot play the fundamentals, so low notes will always sound more like the pick than on headphones or a real amp.

- Bass pick, second pass (no version bump): Colby suggested softer pick on lower notes so strings keep their relative heard volume. Removed the bass pick click and added a pitch-scaled fade-in on notes under 130 Hz (`fade`, lower note gets a longer fade). Tablet-model measurement barely moved (E string attack about 14.5 dB over sustain). The remaining ratio comes from overtones decaying faster than the fundamental, so judge by ear before changing more.

- v0.47.2: bass sound fixed. Colby confirmed the tapping noise at the start of bass notes is gone after the pick click was removed and low notes were given a pitch-scaled soft start. Changes since v0.47.1: bass level 1.15 to 1.0, pick position .08 to .06, decay 4.5 s, saturation and fade on notes under 130 Hz, no pick click.

- Sound settings moved out of Display into their own Sound tab (after Display) in the menu, at Colby's request (no version bump yet).
- Steel versus nylon made clearly different (Colby heard no difference): steel is brighter (boosts near 2.8 and 5.2 kHz, lowpass 6.5 kHz, slight pick snap, longer ring), nylon is rounder (lowpass 1.8 kHz, warm boost near 550 Hz, shorter ring). Measured 1.5 to 4 kHz level about 18 dB apart.

- v0.48.0: Sound tab now has three collapsible groups (Instruments, Guitar strings, Sound packs). The Display tab's Section navigation and Screen groups now fold together with the other Display groups (one open at a time). Setup wizard got a Sound step after Pedals (Chords and strums choice, Guitar strings, Hear it buttons; skippable; shown to every instrument, since the guitar choice only matters for guitars). Wizard is now 8 steps.

- Backup tab groups (Back up everything, Restore, Share a setlist, Share strum patterns) now fold like the other menus (no version bump; same release 0.48.0).

- Fix: the arrow at the right of collapsible group titles showed as a plain bar on Display (Section navigation, Screen), Sound, and Backup. The arrow style was limited to the older menus; extended it to the new ones (no version bump, same 0.48.0 release).

- Refactor: the arrow layout for collapsible group titles now applies to any heading the script marks as foldable (.pg and .trg children with data-acc), so a new menu cannot miss it. The only list left to maintain is the script list of foldable menus. Checked: Display, Sound, Backup, Library, and Song Info match; plain headings unchanged (same 0.48.0 release).

- Bluetooth (Pedal) and Defaults (Defaults for songs) groups now fold with an arrow like the other menus (same 0.48.0 release). Every menu tab's groups now fold.

- On the 1.0 list (Colby, Nov 12, 2026): connect Report a Bug to Claude so reports are triaged automatically. Plan: bug reports are also filed as issues in a separate private GitHub repository through a small relay (testers need no GitHub account; the app's own repo is public, so issues cannot go there). A scheduled task reads new issues, works out the likely cause, and notifies Colby with a short plan. Colby approves, then Claude fixes, tests, and publishes. Not instant (hourly at best). Needs: privacy policy and bug-report wording updated for the new destination, terms version raised, test with Colby's own reports before testers use it. The scheduled task starts fresh each run, so it relies on these notes and the issue text.

- Nov 13, 2026: the ukulelego.com credit is off the 1.0 attorney checklist (Colby decided Nov 9 that the built-in strums are his own selection). This supersedes the "still on the 1.0 checklist" line in the v0.41.0 section. Remaining attorney items: the name Orpharion and trademark search review (VLPA, law school clinic; USPTO screenshots from Nov 9 are evidence in Version 7), file extensions, donations, terms, and the legal notice.

- v0.49.0: PDF export now has a Layout choice (Chord sheet, Card map) and a Page fit choice (Multiple pages, Fit to one page), plus Legal, A5, and Tabloid page sizes. Card map keeps the on-screen column arrangement (card widths and free positions follow the map; cards pack upward like the screen) and never splits a card between pages. Fit to one page shrinks the whole map (down to about 35 percent) to fit; Multiple pages starts a new page when the next card will not fit. Chord diagrams keep following the existing "Include chord diagrams" switch (shown in a row under the title). First version is black and white only. Not done yet: free card colors (fill, border, text, chosen by the user, no swatch limit; also on screen and in the PDF), custom PDF footer (group name, contact, "for personal educational use"), the chord in effect at the start of each card shown in parentheses, staff and melody display inside map cards, and left/right diagram placement in map layout. Lines wrap inside map cards when text is much larger than the card allows. Idea from Colby: dedicate a line in About to the Morristown Uke Jam, after asking the organizer. Idea from the group's sample sheet: show the first notes or starting pitches at the top.
