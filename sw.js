self.addEventListener("install", function (event) {
    //lifecycle event
    console.log("Service Worker installing - ", event);
});

self.addEventListener("activate", function (event) {
    //lifecycle event
    console.log("Service Worker activating - ", event);
    return self.clients.claim();
});

self.addEventListener("fetch", function(event){
console.log("Service Worker fetching...", event);
});

