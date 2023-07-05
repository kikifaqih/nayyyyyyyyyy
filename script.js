    
    //instagram
        var ig = document.getElementById("instagram");
        function handleClick1() {
            var targetURL1 = "https://www.instagram.com/rstywniaurlli/";
            window.open(targetURL1, "_blank");
        }
        ig.addEventListener("click", handleClick1);

    //twitter
        var tktok = document.getElementById("twitter");
        function handleClick2() {
            var targetURL2 = "https://twitter.com/beautifulrellia";
            window.open(targetURL2, "_blank");
        }
        tktok.addEventListener("click", handleClick2);
    
    //tiktok
        var yt = document.getElementById("tiktok");
        function handleClick3() {
            var targetURL3 = "https://www.tiktok.com/@rstywniaurelli";
            window.open(targetURL3, "_blank");
        }
        yt.addEventListener("click", handleClick3);
    
    //spotify
        var sptfy = document.getElementById("spotify");
        function handleClick4() {
            var targetURL4 = "https://spotify.link/UoSAGZbKbBb";
            window.open(targetURL4, "_blank");
        }
        sptfy.addEventListener("click", handleClick4);

        AOS.init();