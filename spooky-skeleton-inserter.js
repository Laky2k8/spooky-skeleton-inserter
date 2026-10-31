// SPOOKY SKELETON INSERTER v1.0
// Made by Laky2k8

(function () 
{
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

    let isPlaying = false;
    let lastPlayedTime = 0;

    function triggerOverlay() 
    {

        if (!CONFIG.mediaUrls || CONFIG.mediaUrls.length === 0)
        {
            console.error("There are no media URLs! Please add some for Spooky Skeleton Inserter to work")
        }

        isPlaying = true;

        // Pick a random URL from the array
        const randomIndex = Math.floor(Math.random() * CONFIG.mediaUrls.length);
        const selectedMedia = CONFIG.mediaUrls[randomIndex];

        // Create fullscreen container
        const container = document.createElement('div');
        Object.assign(container.style, {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            zIndex: CONFIG.zIndex,
            pointerEvents: 'none', // Pass-through all mouse and touch clicks
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
        });

        const isVideo = selectedMedia.match(/\.(mp4|webm|ogg|mov|avi|mkv|flv|wmv)$/i);
        let mediaEl;

        if (isVideo) 
        {
            mediaEl = document.createElement('video');
            mediaEl.src = selectedMedia;
            mediaEl.autoplay = true;
            mediaEl.muted = true;
            mediaEl.playsInline = true;

            mediaEl.onended = cleanup;
            mediaEl.onerror = cleanup;
        } 
        else 
        {
            console.error("URL '" + selectedMedia + "' is not a video URL!");
        }

        Object.assign(mediaEl.style, 
        {
            width: '100%',
            height: '100%',
            objectFit: CONFIG.objectFit,
            pointerEvents: 'none'
        });

        container.appendChild(mediaEl);
        document.body.appendChild(container);

        function cleanup() 
        {
            if (container && container.parentNode) {
            container.parentNode.removeChild(container);
            }
            lastPlayedTime = Date.now();
            isPlaying = false;
        }
    }

    setInterval(() => {
        if (isPlaying) return;
        if (Date.now() - lastPlayedTime < CONFIG.cooldownMs) return; // timeout after playing

        // Roll 1 in X
        if (Math.floor(Math.random() * CONFIG.chanceOneIn) === 0) 
        {
            triggerOverlay();
        }
    }, 1000);

})();