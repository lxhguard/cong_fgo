// 性能优化，提高网页打开速度
// 当用户二次进入的时候，直接走缓存，更快出现活动图

window.onload=function(){
    try {
        const imgDoms = document.getElementsByClassName('fullscreen')
        const erweimaDom = imgDoms[4];
        const str = String(new Date().getTime());
        const lastNum = str.charAt(str.length - 1);
        if (['3', '5', '7'].includes(lastNum)) {
            console.log('性能-');
            erweimaDom.setAttribute("src", 'https://article.biliimg.com/bfs/article/fa867e73d2e6ff29ee5d291dc0e103cac8e644a4.jpg');
        }
    } catch(e) {
        console.log('file ', e)
    }
}
