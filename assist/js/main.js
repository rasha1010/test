function scrollHeaderDesktop() {
    const headerDesk = document.getElementById('headerDesktop')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 100) headerDesk.classList.add('out');
    else headerDesk.classList.remove('out')
}
window.addEventListener('scroll', scrollHeaderDesktop)

function scrollHeaderMobile() {
    const headerMob = document.getElementById('headerMobile')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 100) headerMob.classList.add('headerBG');
    else headerMob.classList.remove('headerBG')
}
window.addEventListener('scroll', scrollHeaderMobile)

function changeToGrid() {
    var element = document.getElementById("layout");
    element.classList.add("apps__grid");
    element.classList.remove("apps__list");
}

function changeToList() {
    var element = document.getElementById("layout");
    element.classList.add("apps__list");
    element.classList.remove("apps__grid");
}
// document.addEventListener('keydown', function() {
//     if (event.keyCode == 123) {
//         alert("This function has been disabled to prevent you from stealing my code!");
//         return false;
//     } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
//         alert("This function has been disabled to prevent you from stealing my code!");
//         return false;
//     } else if (event.ctrlKey && event.keyCode == 85) {
//         alert("This function has been disabled to prevent you from stealing my code!");
//         return false;
//     }
//     }, false);

//     if (document.addEventListener) {
//     document.addEventListener('contextmenu', function(e) {
//         alert("This function has been disabled to prevent you from stealing my code!");
//         window.location.reload();
//     }, false);
//     } else {
//     document.attachEvent('oncontextmenu', function() {
//         alert("This function has been disabled to prevent you from stealing my code!");
//         window.event.returnValue = false;
//     });
// }

// eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(3(){(3 a(){8{(3 b(2){7((\'\'+(2/2)).6!==1||2%5===0){(3(){}).9(\'4\')()}c{4}b(++2)})(0)}d(e){g(a,f)}})()})();',17,17,'||i|function|debugger|20|length|if|try|constructor|||else|catch||5000|setTimeout'.split('|'),0,{}))