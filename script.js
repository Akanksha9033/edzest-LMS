function loadVideo(videoUrl) {
    document.getElementById('videoPlayer').src = videoUrl;
}

function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
}
