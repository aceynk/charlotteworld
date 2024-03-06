

async function fetch_list() {
    const request_url = "https://raw.githubusercontent.com/aceynk/charlotteworld-webring/main/test_users.json";
    const request = new Request(request_url);
    const response = await fetch(request);
    const userlist = response.json();

    return userlist;
}

function link(userlist) {
    // cur_url = new URL(document.URL);
    const cur_url = new URL("https://aceynk.neocities.org");
    const userlist_keys = Object.keys( userlist );

    for (let i = 0; i < userlist_keys.length; i++) {
        let test_url = new URL(userlist[userlist_keys[i]]);
        if (test_url.origin == cur_url.origin) {
            if (i == userlist_keys.length - 1) {
                solidify_link(userlist[userlist_keys[0]], userlist_keys[0]);
                return;
            } else {
                solidify_link(userlist[userlist_keys[i+1]],userlist_keys[i+1]);
                return;
            }
        }
    }
}

function failure(error) {
    console.log("Failed to access list of webring users. Please report this to @aceynk on discord.");
    console.log("Getting userlist failed with:");
    console.log(error);
}

function solidify_link(linkto, name) {
    console.log(linkto);
    console.log(name);
}

fetch_list().then(link,failure);