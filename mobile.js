document.getElementById('copy-link-btn').addEventListener('click', function() {
    const url = window.location.origin + '/index.html';
    navigator.clipboard.writeText(url).then(function() {
        const status = document.getElementById('copy-status');
        status.style.display = 'block';
        setTimeout(() => { status.style.display = 'none'; }, 1800);
    });
});

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

    if (status !== true) {
        fallback();
    }
})
.catch(err => {
    console.error("Failed to load JSONBin data:", err);
    fallback();
});
