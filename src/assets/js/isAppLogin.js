export default isAppLogin => {
    // var ua = navigator.userAgent.toLowerCase();
    if (window.location.href.indexOf("approuter") != -1) {
        return true;
    } else {
        return false;
    }
}