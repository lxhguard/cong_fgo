// 性能优化，提高网页打开速度
// 当用户二次进入的时候，直接走缓存，更快出现活动图

window.onload=function(){
    try {
        console.log('dddd111')
        const imgDoms = document.getElementsByClassName('fullscreen')
        const erweimaDom = imgDoms[4];
        console.log('dddd')
        const str = String(new Date().getTime());
        const lastNum = str.charAt(str.length - 1);
        if (['3', '5'].includes(lastNum)) {
            console.log('性能-');
            erweimaDom.setAttribute("src", 'https://article.biliimg.com/bfs/article/1615b738b9d75974509333fdc1ae8c747a77928f.jpg');   
        }
    } catch(e) {
        console.log('file ', e)
    }
}
