# Space Echoes — updated prototype

## What changed
The experience now follows the requested sequence:
1. Home / Hero
2. Gender selection (Girl or Boy)
3. Character selection + explorer name
4. Destination selection
5. Equipment explorer
6. Equipment story / video
7. Four-question quiz after the video
8. Discovery Log

## Run the project
1. Extract the ZIP file.
2. Open the `Space_Echoes` folder in VS Code.
3. Install/enable the **Live Server** extension (recommended).
4. Right-click `index.html` → **Open with Live Server**.

You can also open `index.html` directly in a browser, but Live Server is recommended.

## Mission videos
Each story has an English and Arabic YouTube embed URL in `app.js`. The active video follows the selected site language. Videos require an internet connection and YouTube embedding must be enabled for each upload.

## Points
- Every correct quiz answer gives **20 XP**.
- Each equipment story has **4 questions**.
- Maximum score per story is **80 XP**.
- The story is added to the Discovery Log after the quiz is completed, even if some answers were incorrect.

## Saving
Explorer profile, XP, and discoveries are stored in browser `localStorage`. They stay on the same browser/device until the user resets browser storage or presses Reset my progress.

## Important notes
- This is a front-end prototype built with HTML, CSS, and Vanilla JavaScript.
- Mission facts and quiz wording should be reviewed against NASA primary sources before final submission.
- YouTube videos are embedded; an internet connection is required.
- All icons and characters are custom SVG drawings in `icons.js` (no emoji). Add or edit an icon there, then use `I("name")` in JS or `<i data-ic="name"></i>` in HTML.

## Arabic / English
- The language button is in the top bar. The choice is remembered in the browser.
- Arabic texts are in `i18n.js`: `AR` (interface text) and `AR_ITEMS` (stories and quiz questions). Keep each question's answers in the same order as the English ones.
- Story descriptions, facts and quiz questions are available in English and Arabic. Science article text is currently English.


## Current mission content

- **Moon level:** Apollo 11 Lunar Module (Eagle), Lunar Roving Vehicle (LRV).
- **Mars level in the game:** NEAR Shoemaker, Ingenuity Mars Helicopter, Kepler Space Telescope. The game keeps the requested level grouping; the science descriptions clarify that NEAR Shoemaker explored asteroid Eros and Kepler was a space telescope, not a Mars lander.
- Total: **2 levels, 5 equipment stories, 4 questions per story**.
- Each story has English and Arabic YouTube video embeds. The video switches when the site language changes.
