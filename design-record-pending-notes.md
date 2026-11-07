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
- v0.23.5: Import now reads text-based PDFs (pdf.js 4.10.38 from jsDelivr, loaded only when a PDF is imported; text layout -> chords over lyrics -> sections). PDFs appear in the Import file list. Scanned/image PDFs report 'no readable text' (OCR not built yet). Privacy policy mentions jsDelivr. Tested here with a locally served pdf.js and Chromium-printed PDFs; real-world chord PDFs vary.
