(function(){
    function init() {
        var ua = navigator.userAgent.toLowerCase();
        var isWeixin = ua.indexOf('micromessenger') != -1;
    
        var downloadApkDom = document.getElementById('downloadApk'),
            maskTipDom = document.getElementById('maskTip');


        downloadApkDom.onclick = function(e){
            if(isWeixin){
                maskTipDom.style.display = 'block';
            }else{
                window.location.href = 'https://datadash.oss-accelerate.aliyuncs.com/app-prod-release.apk';
            }
        }

        maskTipDom.onclick = function(e){
            this.style.display = 'none';
        }
    }

    window.onload = init;
})();