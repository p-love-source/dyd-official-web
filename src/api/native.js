export default {
    is_pc: function is_pc(){
        let browserName = navigator.userAgent.toLowerCase();
        if(/Android|webOS|iPhone|iPad|BlackBerry/i.test(browserName)) {
            return false;
        } else {
            return true;
        }
 
    }
}