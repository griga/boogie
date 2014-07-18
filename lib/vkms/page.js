window.onload = function (){
    process();
};

function process(){
    var audioContainers = document.querySelectorAll('.audio');

    for (var i = 0, count = audioContainers.length; i < count; i++) {
        var container = audioContainers[i], currentPlayBtn = container.querySelector('.play_btn'),
            link, href, title;
        if (currentPlayBtn && !currentPlayBtn.hasAttribute("data-muzzu")) {
            href = currentPlayBtn.querySelector('input').value;
            href = href.substr(0,(href.search(/\.mp3/)+4));
            title = container.querySelector(".title_wrap").innerText;

            link = document.createElement('a');
            link.innerText = " ";
            link.href = href;
            link.setAttribute("download",title);
            link.className = "muzzu-download-button";
            container.appendChild(link);
            currentPlayBtn.setAttribute("data-muzzu","muzzued");
        }
    }
}


