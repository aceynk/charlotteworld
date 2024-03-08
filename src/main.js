

async function fetch_list() {
    const request_url = "https://cdn.jsdelivr.net/gh/aceynk/charlotteworld/users.json";
    const request = new Request(request_url);
    const response = await fetch(request);
    const userlist = response.json();

    return userlist;
}

function link(userlist) {

    cur_url = new URL(document.URL);
    const userlist_keys = Object.keys( userlist );

    for (let i = 0; i < userlist_keys.length; i++) {
        let test_url = new URL(userlist[userlist_keys[i]]);
        if (test_url.origin == cur_url.origin) {

            // set forward button
            if (i == userlist_keys.length - 1) {
                solidify_link(userlist[userlist_keys[0]], userlist_keys[0], 1);
            } else {
                solidify_link(userlist[userlist_keys[i+1]],userlist_keys[i+1], 1);
            }

            // set back button
            if (i == 0) {
                solidify_link(userlist[userlist_keys[userlist_keys.length - 1]],userlist_keys[userlist_keys.length - 1], 0);
                return;
            } else {
                solidify_link(userlist[userlist_keys[i-1]],userlist_keys[i-1], 0);
                return;
            }
        }
    }
}

function failure(error) {
    // NOT testing logs. don't delete
    console.log("Failed to access list of webring users. Please report this to @aceynk on discord or create a github issue.");
    console.log("Getting userlist failed with:");
    console.log(error);
    // NOT testing logs. don't delete
}

function solidify_link(linkto, name, ind) {
    /* 
    shouldn't return anything
    sets the link of the webring navigator arrows

    index = 0 is previous site
    index = 1 is next site
    name is the stored name associated with the site
    linkto is the site assigned to the index
    */

    const dir_list = ["prev-link","next-link"];

    console.log(dir_list[ind] + ": " + linkto);

    if (document.getElementById(dir_list[ind])) {
        document.getElementById(dir_list[ind]).href = linkto;
    } else {
        // NOT testing logs. don't delete
        console.log("No CHARLOTTEWORLD webring navigator found on this page.");
        console.log("Please visit 'https://github.com/aceynk/charlotteworld' for instructions on setup.");
        console.log("If issues persist, please report them to @aceynk on discord or create a github issue.");
        // NOT testing logs. don't delete
    }
}

fetch_list().then(link,failure);