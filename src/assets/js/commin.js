export default isWeiXin => {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
}

// if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
//     alert("请在电脑端打开");
// } else {
//    alert("请在手机端打开");
// }