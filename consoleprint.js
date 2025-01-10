    document.addEventListener("keydown", function(event) {
        if (
            (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "C")) || 
            event.key === "F12"
        ) {
            event.preventDefault();
            console.log(
                "%cCyberEcho - Powered by Github and Cloudflare\n" +
                "              ✧               ✦      .        ✧  \n" +
                "         ✦             ✧                ✧            ✦\n" +
                "   ✧                  .              ✦       ✦         .\n" +
                "               ✦     ✧   ✦     ✧         ✧          ✧\n" +
                "         .            .         ✦                   ✧    \n" +
                "   ✧         .       ✧ ✦        .        ✧      ✦  \n" +
                "         ✦         ✦      ✧      ✧  ✦    ✦  ✧       ✦\n" +
                "    ✦            ✧       ✧             ✦       ✧  \n" +
                "         .     ✦        ✧ ✦  ✦        ✦          ✧   \n" +
                "    ✧          ✧ ✦ ✧     .         ✦           ✧\n" +
                "              .          ✧       ✧       ✧\n" +
                "        ✧  ✦          ✦ ✧    ✧        ✦ \n" +
                " ✦             ✦    ✧ ✧       ✧       ✦\n" +
                "   ✦        ✧       ✧    ✦        ✧\n" +
                "    ✧            .        ✦        ✧        ✧\n" +
                "         ✧            ✦ ✧     ✧   ✦\n" +
                "    .        ✦      ✧      ✧    ✧\n" +
                "          ✧    ✧           ✧        ✦\n" +
                " ✦           ✧   ✦    ✧ ✦     ✦      ✧\n" +
                "     ✧       ✧         ✦ ✧            ✧\n" +
                "  ✦         ✦         ✧ ✦       ✧        ✧\n" +
                "       ✦           ✧     ✦         ✦         ✧\n" +
                "             ✦       ✧        ✧",
                "color: purple; font-family: monospace;"
            );
        }
        });