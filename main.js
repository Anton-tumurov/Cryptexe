const BIN_ID = "67b6c25cacd3cb34a8e9372c"; 
const API_KEY = "$2a$10$coWigkYNJbj.z.EUyfjUgurk/Xkg/olZFEXFWplgUtfIhtY9m/rOC"; // (OK if public info only)

fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
    headers: {
        "X-Access-Key": API_KEY
    }
})
.then(res => res.json())
.then(data => {
    const content = data.record;
    const version = content.version || "[An error occured while fetching the version]";
    const updaterlink = content.updater || "fallback.html";
    const torrentlink = content.torrent || "fallback.html";

    // Replace torrent link
    document.querySelectorAll(".torrent").forEach(el => {
        el.href = torrentlink;
    });

    // Replace in download button
    document.querySelectorAll(".download-btn").forEach(linkel => {
        linkel.href = updaterlink;
    })

    // Replace in download button text
    document.querySelectorAll(".download-btn-text").forEach(textel => {
        textel.textContent = `Download Crypt ${version}`;
    })
})
.catch(err => {
    console.error("Failed to load JSONBin data:", err);
});
