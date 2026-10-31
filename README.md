# Spooky Skeleton Inserter

*Yo guys GTA7 is- oh holy shit did you see that 👀*

Have you ever wanted to add random running skeletons to your webpage for the spooky vibe, or really just any kind of random video to pop up? Well now you can!

**Spooky Skeleton Inserter** allows you to add as many .webm (or any other video) files as you want, set a random 1:X chance and a timeout, and it will randomly roulette these videos out!

<br>

<img width="auto" alt="kép" src="https://github.com/user-attachments/assets/57388089-d2b4-4b14-b434-6e0cf6645a71" />

*The masterpiece in action*

<br>

## Usage
**Spooky Skeleton Inserter** is plug-and-play! Just download the JS file and add it to your website, something like this:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>My sick as hell website</title>
    </head>
    <body>
        <!-- your website here -->

        <script src="spooky-skeleton-inserter.js"></script>
    </body>
</html>
```

Then configure the URLs, chance, timeout etc. in the JS file:
```js
// CONFIGURATION
const CONFIG = {
    mediaUrls:                                      // URL or URLs to the video(s) you want to use
    [
        "example1.webm",
        "example2.webm",
        "example3.webm"
    ],
    chanceOneIn: 100,                               // 1 in X chance every second (e.g., 100 = 1% chance per second)
    cooldownMs: 3000,                               // Cooldown period in milliseconds after playback
    objectFit: 'cover',                             // 'cover' fills entire screen, while 'contain' preserves aspect ratio
    zIndex: 2147483647                              // Z-index of the inserted GIF, ideally you should set this to (the max Z-index your page uses) + 1
                                                    // Since this default might overflow on some old browsers (see https://stackoverflow.com/a/63592166)
};
```

Then sit back, and enjoy!
