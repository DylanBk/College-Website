window.onscroll = function() {
    if (document.body.scrollTop > 164 || document.documentElement.scrollTop > 164) {
        document.querySelector(".navBar").classList.add("navBarAlt");
      } else {
        document.querySelector(".navBar").classList.remove("navBarAlt");
      }
    };