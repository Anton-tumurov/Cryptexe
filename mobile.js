const BIN_ID = "67b6c25cacd3cb34a8e9372c"; 
const API_KEY = "$2a$10$coWigkYNJbj.z.EUyfjUgurk/Xkg/olZFEXFWplgUtfIhtY9m/rOC"; // (OK if public info only)

function fallback(){
    console.error("Server Down. Redirecting to fallback.");
    location.href = "fallback.html"
};

fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
    headers: {
        "X-Access-Key": API_KEY
    }
})
.then(res => res.json())
.then(data => {
    const content = data.record;
    const status = content.status || false;
    const version = content.version;
    const updaterlink = content.updater;
    const torrentlink = content.torrent;

    if (status !== true) {
        fallback();
    }
})
.catch(err => {
    console.error("Failed to load JSONBin data:", err);
    fallback();
});
