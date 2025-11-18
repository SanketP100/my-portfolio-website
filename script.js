// const lenis = new Lenis({
//   duration: 15, // Increased duration for slower scrolling
//   easing: (t) => Math.min(3, 1.001 - Math.pow(1.3, -36 * t)), // Adjusted easing for a smoother curve
//   smooth: true,
//   // smoothTouch: false,
//   // scrub: 3, // 
// })

// lenis.on('scroll', (e) => {
//   // Handle scroll event here if needed
// })


// function raf(time) {
//   lenis.raf(time) // Corrected method name
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)


// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// lenis.on('scroll', ScrollTrigger.update)

// gsap.ticker.add((time)=>{
//   lenis.raf(time * 1000)
// })

// gsap.ticker.lagSmoothing(0)





const lenis = new Lenis({
  duration: 1.5, // Increase duration for slower scroll
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function for smoothness
  smoothWheel: true, // Enable smooth scrolling on wheel events
  smoothTouch: true, // Disable smooth touch to keep it responsive
})

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

// Adjust GSAP ticker for smoother updates
gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

// Disable GSAP's internal lag smoothing
gsap.ticker.lagSmoothing(0)







Shery.mouseFollower()

Shery.makeMagnet("#crcl, #my-resume, #button-crcl, button, #back-button, .close, .Artworks-social-icons>a")
// Shery.imageEffect("",{style:5, config:{"a":{"value":0.46,"range":[0,30]},"b":{"value":0.91,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.8330914368650217},"ignoreShapeAspect":{"value":false},"shapePosition":{"value":{"x":0,"y":-0.020408163265306145}},"shapeScale":{"value":{"x":0.44,"y":0.42}},"shapeEdgeSoftness":{"value":0.5,"range":[0,0.5]},"shapeRadius":{"value":0.06,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":1.75,"range":[1,15]},"durationOut":{"value":1.37,"range":[0.1,5]},"durationIn":{"value":0.92,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":0},"noise_speed":{"value":0.31,"range":[0,10]},"metaball":{"value":0.16,"range":[0,2],"_gsap":{"id":18}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.30,"range":[0,2]},"noise_scale":{"value":20.14,"range":[0,100]}}, gooey:true}) 




// function loco() {
//   gsap.registerPlugin(ScrollTrigger);

//   // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector("main"),
//     smooth: true
//   });
//   // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//   locoScroll.on("scroll", ScrollTrigger.update);

//   // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
//   ScrollTrigger.scrollerProxy("main", {
//     scrollTop(value) {
//       return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//     }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//     getBoundingClientRect() {
//       return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//     },
//     // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//     pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
//   });



//   // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//   // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//   ScrollTrigger.refresh();

// }
// loco()





document.querySelector('.loadervideo').addEventListener('ended', function(){
  var tl = gsap.timeline()

  tl.call(function(){
    document.getElementById('loader').style.display = 'none';
  });

  tl.from("main",{
    opacity:0,
    ease: "power3.inOut"
  });

  tl.to("#page1 #line-Circle-img-page1", {
    duration: 3,
    opacity: 1,
    ease: "power1.inOut",
    stagger: 0.1
  },"a");

  tl.to("#crcl , #my-resume", {
    scale: 1,
    opacity: 1,
    duration: 1,
  },"a");

  tl.to("#page1 #bottom-line", {
    scale: 1,
    duration: 1,
    ease: "bounce.out"
  });
  
  tl.to("#page1 h1 .span", {
    y: "50%",
    stagger: 0.2,
    duration: 1,
    opacity: 1,
    ease: "elastic.out(1,0.3)",
  });
  
  tl.to("#page1 h3", {
    duration: 1,
    opacity: 1,
    ease: "power1.inOut",
    stagger: 0.1
  });
  
  tl.to("#page1 a", {
    y: "300%",
    ease: "elastic.out(1,0.3)",
    opacity: 2,
    stagger: true
  });
  
  tl.to("#page1 #right-line", {
    scale: 1,
    duration: 1,
    ease: "bounce.out"
  });
  
});





function logo() {
  var text = document.querySelector('#text p')
  text.innerHTML = text.innerText.split("").map(
    (char, i) =>
      `<span style="transform:rotate(${i * 11.1}deg)">${char}</span>`
  ).join("")
}
logo()

var movingStar = gsap.timeline()

movingStar.to(".moving-star",{
  opacity:1,
  duration:2,
  ease:"Power4.out",
  scrollTrigger:{
   trigger:"#page2",
   scroller:"body",
   start:"0% -60%",
   end:"100% -50%",
  //  markers:true
  }
 
 })
 
movingStar.to(".moving-star",{
  rotate:360,
  y:"60vh", 
  x:"72vh",
  scale:2,
  duration:5,
  ease:"Power4.out",
  scrollTrigger:{
   trigger:"#page2",
   scroller:"body",
   start:"0% -150%",
   end:"100% -200%",
   scrub:5,
  //  markers:true
  }
 
 })


// var tl = gsap.timeline();

// tl.to("#crcl , #my-resume", {
//   scale: 1,
//   opacity: 1,
//   duration: 1,
// });


// tl.to("#page1 #bottom-line", {
//   scale: 1,
//   duration: 1,
//   ease: "bounce.out"

// })

// tl.to("#page1 h1 .span", {
//   y: "50%",
//   stagger: 0.2,
//   duration: 1,
//   opacity: 1,
//   ease: "elastic.out(1,0.3)",
// })

// tl.to("#page1 h3", {
//   duration: 1,
//   opacity: 1,
//   ease: "power1.inOut",
//   stagger: 0.1
// })

// tl.to("#page1 a", {
//   y: "300%",
//   ease: "elastic.out(1,0.3)",
//   opacity: 2,
//   stagger: true
// })

// tl.to("#page1 #right-line", {
//   scale: 1,
//   duration: 1,
//   ease: "bounce.out"
// })



// ......................................page1 Animation..................................................

function page1Anima() {

gsap.to("#page1 #page1-content", {
  scale: 1,
  ease: "Power4.Out",
  opacity: 0,
  duration: 40, // Increased duration to slow down the animation
  transform: "translateX(-250%)",
  scrollTrigger: {
    trigger: "#page1 ",
    scroller: "body",
    start: "top 0",
    end: "bottom -100%",
    // markers:true,
    scrub: 3, // Increased scrub value to slow down the scroll-triggered animation
    pin: true,
    // markers:true
  },
});

gsap.to("#page1", {
  ease: "Power4.Out",
  duration: 4, // Increased duration to slow down the animation
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 0%",
    end: "bottom -100%",
    scrub: 3, // Increased scrub value to slow down the scroll-triggered animation
    pin: true,
    // markers:true
  },
});

// gsap.to("#page1 #line-Circle-img-page1", {
//   // scale: 1,
//   ease: "Power4.Out",
//   opacity: 0,
//   duration: 1, // Increased duration to slow down the animation
//   // transform: "translateX(-250%)",
//   scrollTrigger: {
//     trigger: "#page1",
//     scroller: "body",
//     start: "top -50%",
//     end: "bottom -100%",
//     // markers:true,
//     scrub: 3, // Increased scrub value to slow down the scroll-triggered animation
//     pin: true,
//     markers:true
//   },
// });

// gsap.from("#page1 #line-Circle-img-page1 img", {
//   ease: "Power3.Out",
//   duration: 4, // Increased duration to slow down the animation
//   opacity:0,
//   scrollTrigger: {
//     trigger: "#page1",
//     scroller: "body",
//     start: "top -50%",
//     end: "bottom -200%",
//     scrub: 2, // Increased scrub value to slow down the scroll-triggered animation
//     // pin: true,
//     markers:true
//   },
// });


}
page1Anima()



// ......................................page2 Animation..................................................

function page2Anima() {

  var page2tl = gsap.timeline();
  page2tl.from("#page2", {
    // transform: "translateX(110%)",
    opacity: 0,
    duration: 4, // Increased duration to slow down the animation
    ease: "Power4.Out",
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#page2-content",
      scroller: "body",
      start: "top 20%",
      end: "10% -80%",
      // markers:true,
      scrub: 3, // Increased scrub value to slow down the scroll-triggered animation
          // markers: true    
    },
  });

page2tl.from("#page2 #page2-content", {
  transform: "translateX(110%)",
  backgroundColor:"red",
  opacity: 0,
  duration: 4, // Increased duration to slow down the animation
  ease: "Power4.Out",
  stagger: true,
  scrollTrigger: {
    trigger: "#page2-content",
    scroller: "body",
    start: "top -10%",
    end: "20% -70%",
    scrub: 5, // Increased scrub value to slow down the scroll-triggered animation
        // markers: true    
  },
});

page2tl.from("#page2 #page2-overlay", {
  transform: "translateX(120%)",
  opacity: 0,
  ease: "Power4.Out",
  duration: 4, // Increased duration to slow down the animation
  stagger: true,
  scrollTrigger: {
    trigger: "#page2-overlay",
    scroller: "body",
    start: "top 0%",
    end: "top -80%",
    scrub: 4, // Increased scrub value to slow down the scroll-triggered animation
  },
});

page2tl.from("#page2 #page2-content h1", {
  transform: "translateX(-500%)",
  duration: 20, // Increased duration to slow down the animation
  opacity: 0,
  ease: "Power4.Out",
  stagger: true,
  scrollTrigger: {
    trigger: "#page2-content h1",
    scroller: "body",
    start: "bottom 0%",
    // markers:true,
    end: "top -100%",
    scrub: 3, // Increased scrub value to slow down the scroll-triggered animation
  },
});

}
page2Anima()




// ......................................page3 Animation..................................................


function page3Anima() {

/*............... page3 h2 Animation ................... */

  function page3_h2_Anima() {

    gsap.from("#page3", {
      // y: "-150%",
      opacity: 1,
      ease: "Power4.Out",
      scrollTrigger: {
        scroller: `body`,
        trigger: `#page3`,
        start: `top 110%`,
        end: `70% 90%`,
        scrub: 3, // Increased scrub value to slow down the scroll-triggered animation
        // markers: true    
      }
    });

    gsap.from("#page3 h2:nth-child(1)", {
      y: "-150%",
      opacity: 0,
      ease: "elastic.out(1, 0.3)",
      color: `#ffffffe1`,
      scrollTrigger: {
        scroller: `body`,
        trigger: `#page3 h2:nth-child(1)`,
        start: `top 77%`,
        end: `bottom 85%`,
        scrub: 2, // Increased scrub value to slow down the scroll-triggered animation
        // markers: true    
      }
    });
  
    gsap.from("#page3 h2:nth-child(2)", {
      x: "-150",
      opacity: 0,
      ease: "Power4.Out",
      color: `#ffffffe1`,
      scrollTrigger: {
        scroller: `body`,
        trigger: `#page3 h2:nth-child(2)`,
        start: `top 92%`,
        end: `30% 90%`,
        scrub: 2, // Increased scrub value to slow down the scroll-triggered animation
        // markers: true    
      }
    });
  
    gsap.from("#page3 h2:nth-child(3)", {
      x: "40%",
      opacity: 0,
      ease: "Power4.Out",
      color: `#ffffffe1`,
      scrollTrigger: {
        scroller: `body`,
        trigger: `#page3 h2:nth-child(3)`,
        start: `top 94%`,
        end: `30% 92%`,
        scrub: 2, // Increased scrub value to slow down the scroll-triggered animation
        // markers: true    
      }
    });
  
    gsap.from("#page3 h2:nth-child(4)", {
      x: "-150",
      opacity: 0,
      ease: "Power4.Out",
      color: `#ffffffe1`,
      scrollTrigger: {
        scroller: `body`,
        trigger: `#page3 h2:nth-child(4)`,
        start: `top 94%`,
        end: `30% 92%`,
        scrub: 2, // Increased scrub value to slow down the scroll-triggered animation
        // markers: true    
      }
    });
  
  }
  page3_h2_Anima();
  
 
/*............... page3 p Animation ................... */

  function page3p() {
  
    var clutter = " ";
  
    document.querySelector("#page3 p").textContent.split(" ").forEach(function (dets) {
      clutter += `<span> ${dets} </span>`;
      document.querySelector("#page3 p").innerHTML = clutter;
    });
  
    gsap.to("#page3 p span", {
      stagger: 0.1,
      color: `#ffffffe1`,
      // ease: "Power1.Out",
      scrollTrigger: {
        scroller: `body`,
        trigger: `#page3 p span`,
        start: `10% 99%`,
        end: `0% 50%`,
        scrub: 1, // Increased scrub value to slow down the scroll-triggered animation
        // markers: true    
      }
    });
  }
  page3p();
  


}
page3Anima()



// ......................................page4 Animation..................................................


function page4Anima() {

  gsap.to(".development-part-korner-img .lines-img-div", {
      // y: "80%",
      // rotate:"0deg",
      transform: `rotate(0deg)`,
      ease: "Power4.Out",
      // opacity: 1,
      // stagger:.2,
      // ease: "elastic.out(1,0.3)",
      // color: `#ffffffe1`,
  duration: 6,
      scrollTrigger: {
        scroller: `body`,
        trigger: `.development-part-korner-img`,
        start: `top 55%`,
        end: `100% -40%`,
        scrub: 2,
        // markers:true    
      }
  })

//   gsap.from("#page4-part1 h4", {
//     y: "100%",
//     opacity: 0,
//     stagger:.2,
//     ease: "elastic.out(1,0.3)",
//     color: `#ffffffe1`,
//     scrollTrigger: {
//       scroller: `body`,
//       trigger: `#page4-part1 h4`,
//       start: `top 91%`,
//       end: `30% 86%`,
//       scrub: .5,
//       // markers:true    
//     }
// })

// gsap.from("#development-part", {
//   // x: "-100%",
//   opacity: 0,
//   stagger:.2,
//   ease:"Power4.Out",
//   // ease: "elastic.out(1,0.3)",
//   color: `#ffffffe1`,
//   scrollTrigger: {
//     scroller: `body`,
//     trigger: `#development-part`,
//     start: `top 93%`,
//     end: `10% 90%`,
//     scrub: .5,
//     // markers:true    
//   }
// })


// gsap.from("#development-part h3", {
//   x: "-100%",
//   opacity: 0,
//   stagger:.2,
//   ease: "elastic.out(1,0.3)",
//   color: `#ffffffe1`,
//   scrollTrigger: {
//     scroller: `body`,
//     trigger: `#development-part h3`,
//     start: `top 88%`,
//     end: `30% 85%`,
//     scrub: .5,
//     // markers:true    
//   }
// })

// gsap.from("#development-part img", {
//   y: "100%",
//   opacity: 0,
//   stagger:.2,
//   ease: "elastic.out(1,0.3)",
//   color: `#ffffffe1`,
//   scrollTrigger: {
//     scroller: `body`,
//     trigger: `#development-part img`,
//     start: `top 95%`,
//     end: `30% 85%`,
//     scrub: .5,
//     // markers:true    
//   }
// })


// gsap.from("#designing-part", {
//   // x: "-100%",
//   opacity: 0,
//   stagger:.2,
//   ease:"Power4.Out",
//   // ease: "elastic.out(1,0.3)",
//   color: `#ffffffe1`,
//   scrollTrigger: {
//     scroller: `body`,
//     trigger: `#designing-part`,
//     start: `top 95%`,
//     end: `10% 88%`,
//     scrub: .5,
//     // markers:true    
//   }
// })
  
// gsap.from("#designing-part h3", {
//   x: "-100%",
//   opacity: 0,
//   stagger:.2,
//   ease: "elastic.out(1,0.3)",
//   color: `#ffffffe1`,
//   scrollTrigger: {
//     scroller: `body`,
//     trigger: `#designing-part h3`,
//     start: `top 88%`,
//     end: `30% 85%`,
//     scrub: .5,
//     // markers:true    
//   }
// })

// gsap.from("#designing-part img", {
//   y: "100%",
//   opacity: 0,
//   stagger:.2,
//   ease: "elastic.out(1,0.3)",
//   color: `#ffffffe1`,
//   scrollTrigger: {
//     scroller: `body`,
//     trigger: `#designing-part img`,
//     start: `top 97%`,
//     end: `30% 87%`,
//     scrub: .5,
//     // markers:true    
//   }
// })


gsap.from("#page4-skills", {
  // y: "80%",
  // opacity: 0,
  // stagger: .2,
  // ease: "elastic.out(1, 0.3)",
  ease: "Power5.Out",
  // color: `#ffffffe1`,
  duration: 2,
    scrollTrigger: {
    scroller: `body`,
    trigger: `#page4-skills`,
    start: `0% 100%`,
    end: `80% 0%`,
    scrub: 2, // Increased scrub value to slow down the scroll-triggered animation
    // markers: true    
  }
});


  gsap.from("#page4-part1 h1", {
      y: "80%",
      opacity: 0,
      stagger: .2,
      ease: "elastic.out(1, 0.3)",
      color: `#ffffffe1`,
      duration: 2, // Increased duration to slow down the animation
      scrollTrigger: {
        scroller: `body`,
        trigger: `#page4-part1 h1`,
        start: `top 100%`,
        end: `30% 97%`,
        scrub: 2, // Increased scrub value to slow down the scroll-triggered animation
        // markers: true    
      }
  });

  gsap.from("#page4-part1 h4", {
    y: "100%",
    opacity: 0,
    stagger: .2,
    ease: "elastic.out(1, 0.3)",
    color: `#ffffffe1`,
    duration: 2, // Increased duration to slow down the animation
    scrollTrigger: {
      scroller: `body`,
      trigger: `#page4-part1 h4`,
      start: `top 91%`,
      end: `30% 86%`,
      scrub: 2, // Increased scrub value to slow down the scroll-triggered animation
      // markers: true    
    }
  });

  gsap.from("#development-part", {
    opacity: 0,
    stagger: .2,
    ease: "Power4.Out",
    color: `#ffffffe1`,
    duration: 2, // Increased duration to slow down the animation
    scrollTrigger: {
      scroller: `body`,
      trigger: `#development-part`,
      start: `top 93%`,
      end: `10% 90%`,
      scrub: 2, // Increased scrub value to slow down the scroll-triggered animation
      // markers: true    
    }
  });

  gsap.from("#development-part h3", {
    x: "-100%",
    opacity: 0,
    stagger: .2,
    ease: "elastic.out(1, 0.3)",
    color: `#ffffffe1`,
    duration: 2, // Increased duration to slow down the animation
    scrollTrigger: {
      scroller: `body`,
      trigger: `#development-part h3`,
      start: `top 88%`,
      end: `30% 85%`,
      scrub: 2, // Increased scrub value to slow down the scroll-triggered animation
      // markers: true    
    }
  });

  gsap.from("#development-part .dev-image", {
    y: "100%",
    opacity: 0,
    stagger: .2,
    ease: "elastic.out(1, 0.3)",
    color: `#ffffffe1`,
    duration: 2, // Increased duration to slow down the animation
    scrollTrigger: {
      scroller: `body`,
      trigger: `#development-part img`,
      start: `top 95%`,
      end: `30% 85%`,
      scrub: 2, // Increased scrub value to slow down the scroll-triggered animation
      // markers: true    
    }
  });

  gsap.from("#designing-part", {
    opacity: 0,
    stagger: .2,
    ease: "Power4.Out",
    color: `#ffffffe1`,
    duration: 2, // Increased duration to slow down the animation
    scrollTrigger: {
      scroller: `body`,
      trigger: `#designing-part`,
      start: `top 95%`,
      end: `10% 88%`,
      scrub: 2, // Increased scrub value to slow down the scroll-triggered animation
      // markers: true    
    }
  });

  gsap.from("#designing-part h3", {
    x: "-100%",
    opacity: 0,
    stagger: .2,
    ease: "elastic.out(1, 0.3)",
    color: `#ffffffe1`,
    duration: 2, // Increased duration to slow down the animation
    scrollTrigger: {
      scroller: `body`,
      trigger: `#designing-part h3`,
      start: `top 88%`,
      end: `30% 85%`,
      scrub: 2, // Increased scrub value to slow down the scroll-triggered animation
      // markers: true    
    }
  });

  gsap.from("#designing-part .desi-image", {
    y: "100%",
    opacity: 0,
    stagger: .2,
    ease: "elastic.out(1, 0.3)",
    color: `#ffffffe1`,
    duration: 2, // Increased duration to slow down the animation
    scrollTrigger: {
      scroller: `body`,
      trigger: `#designing-part img`,
      start: `top 97%`,
      end: `30% 87%`,
      scrub: 2, // Increased scrub value to slow down the scroll-triggered animation
      // markers: true    
    }
  });


  


  var svg1Path = `M 20 46 Q 677 46 1355 46`
  var svg2Path = `M 20 46 Q 677 46 1355 46`

  var finalPath1 = `M 20 46 Q 677 46 1355 46`
  var finalPath2 = `M 20 46 Q 677 46 1355 46`

  var svgLine1 = document.querySelector("#svg-line1")
  var svgLine2 = document.querySelector("#svg-line2")

function svg1anima(){

  svgLine1.addEventListener("mousemove", function (dets) {

    var rect = svgLine1.getBoundingClientRect();
    var mouseY = dets.clientY - rect.top

    svg1Path = `M 20 46 Q 677 ${mouseY} 1355 46`
    // console.log(dets);

    gsap.to("#svg1>path", {
      attr: { d: svg1Path },
      duration: .1,
      ease: "back.out(1)",
      zIndex: 99,
    })
  })

  svgLine1.addEventListener("mouseleave", function () {
    // Path = `M 20 80 Q 677 ${dets.y} 1355 80`

    gsap.to("#svg1>path", {
      attr: { d: finalPath1 },
      duration: .5,
      ease: "elastic.out(1.75,0.2)",
      zIndex: 99,
    })
  })

}
svg1anima()

  
function svg2anima(){

  svgLine2.addEventListener("mousemove", function (dets) {

    var rect = svgLine2.getBoundingClientRect();
    var mouseY = dets.clientY - rect.top

    svg2Path = `M 20 46 Q 677 ${mouseY} 1355 46`
    // console.log(dets);

    gsap.to("#svg2>path", {
      attr: { d: svg2Path },
      duration: .1,
      ease: "back.out(1)",
      zIndex: 99,
    })
  })

  svgLine2.addEventListener("mouseleave", function (dets) {
    // Path = `M 20 80 Q 677 ${dets.y} 1355 80`

    gsap.to("#svg2>path", {
      attr: { d: finalPath2 },
      duration: .5,
      ease: "elastic.out(1.75,0.2)",
      zIndex: 99,
    })
  })

}
svg2anima()


}
page4Anima()




// ......................................page5 Animation..................................................

// var miniprojects = document.querySelector(".mini-projects").offsetWidth

function page5Anima(){

var pline = gsap.timeline({
  scrollTrigger: {
    trigger: "#page5-mini-project",
    scroller: "body",
    start: "top -10%",
    end: "bottom -260%",
    scrub: 2,
    pin: true,
    // markers:true
  },
})  
pline.to("#page5-mini-project #projects-page .projects-wraper .project-slide", {
  transform: "translateX(-66%)",
  duration: 5,
  ease:"power1.out",
},"a")
pline.to(".p-line",{
   width:"100%",
   duration:5,
   ease:"power1.out",
 },"a")



var page5tl = gsap.timeline()


page5tl.from("#mini-projects-section #projects-menu", {
  transform: "translateX(-75%)",
  // x:'-200%',
  // width:'0%',
  opacity:0,
  duration: 3,
  ease:"power1.out",
  // ease:"elastic.out(1,0.4)",
  scrollTrigger: {
    trigger: "#page5-mini-project",
    scroller: "body",
    start: "0% 50%",
    end: "0% 20%",
    scrub: 2,
    // pin: true,
      // markers:true, 
  },
})

page5tl.from("#projects-menu .project-page1, .project-page2, .project-page3, .project-page4", {
  transform: "translateY(-75%)",
  // x:'-200%',
  // width:'0%',
  opacity:0,
  duration: 6,
  ease:"power1.out",
  stagger:4,
  // ease:"elastic.out(1,0.4)",
  scrollTrigger: {
    trigger: "#projects-menu",
    scroller: "body",
    start: "0% 95%",
    end: "0% 70%",
    scrub: 2,
    // pin: true,
      // markers:true, 
  },
})




page5tl.from("#mini-projects-section #project-text-move", {
  // transform: "translateY(-75%)",
  // x:'0%',
  // width:'0%',
  delay:5,
  opacity:0,
  duration: 6,
  // ease:"elastic.out(1,0.4)",
  ease:"power1.out",
  scrollTrigger: {
    trigger: "#project-text-move",
    scroller: "body",
    start: "0% 40%",
    end: "0% 0%",
    scrub: 1,
    // pin: true,
      // markers:true, 
  },
})



page5tl.from("#projects-page .projects", {
  transform: "translateX(75%)",
  // x:'0%',
  // width:'0%',
  opacity:0,
  duration: 6,
  ease:"power1.out",
  // ease:"elastic.out(1,0.4)",
  stagger:1,
  scrollTrigger: {
    trigger: "#projects-page",
    scroller: "body",
    start: "0% 20%",
    end: "0% 10%",
    scrub: 2,
    // pin: true,
      // markers:true, 
  },
})

page5tl.from("#projects-page .page-no", {
  // transform: "translateX(85%)",
  // x:'0%',
  // width:'0%',
  opacity:0,
  duration: 6,
  ease:"power1.out",
  // ease:"elastic.out(1,0.4)",
  stagger:1,
  scrollTrigger: {
    trigger: "#projects-page",
    scroller: "body",
    start: "0% 10%",
    end: "0% 0%",
    scrub: 1,
    // pin: true,
      // markers:true, 
  },
})



// project-page.addEventListener('click', function(event) {
//   event.preventDefault(); 
  
//   const target = this.getAttribute('data-target');

//   const section = document.querySelectorAll('#mini-projects > section');

//   section.forEach(page => {
//       page.style.opacity = '0';
//   });

//   const targetsection = document.querySelector(`.${target}`);

//   // let close =  document.querySelector(".close")
//   // let ArtworksOverly = document.querySelector(".Artworks-overly")
//   let Artwork =  document.querySelector("#Artwork-elems")
//   // let Heading = document.querySelector(".Heading h1")
//   if (targetsection) {

//     targetsection.style.opacity = '1';
//       // targetPage.style.zIndex = '999';
//       // close.style.opacity = '1'
//       // Artwork.style.filter = 'blur(10px)';
//       // Heading.style.filter = 'blur(10px)';
//       // ArtworksOverly.style.opacity = '1'
//       // ArtworksOverly.style.zIndex = '888'
//       // ArtworksOverly.style.filter = 'blur(10px)';
//   }
//   close.addEventListener('click', function() {
//     // Reset the opacity of all pages
//     section.forEach(section => {
//       section.style.opacity = '0';
//     });

//     // Hide the close button and remove blur effect
//     // close.style.opacity = '0';
//     // Artwork.style.filter = 'none';
//     // Heading.style.filter = 'none';
//     // ArtworksOverly.style.opacity = '0'
//     // ArtworksOverly.style.zIndex = '-99'
//     // ArtworksOverly.style.filter = 'none';



// });

// });
// // });


// document.addEventListener('DOMContentLoaded', function() {
//   const sections = document.querySelectorAll('section');
//   const projectLinks = document.querySelectorAll('.project-count h4');

//   projectLinks.forEach(link => {
//       link.addEventListener('click', function() {
//           const targetClass = this.getAttribute('data-target');

//           sections.forEach(section => {
//               if (section.classList.contains(targetClass)) {
//                   section.style.opacity = '1';
//               } else {
//                   section.style.opacity = '0';
//               }
//           });
//       });
//   });
// });


  // document.addEventListener('DOMContentLoaded', function() {
  //   const sections = document.querySelectorAll('section');
  //   const projectLinks = document.querySelectorAll('.project-count h4');

  //   // Set the first section as active initially
  //   sections[0].classList.add('active');

  //   projectLinks.forEach(link => {
  //       link.addEventListener('click', function() {
  //           const targetClass = this.getAttribute('data-target');

  //           sections.forEach(section => {
  //               if (section.classList.contains(targetClass)) {
  //                   // Add 'active' class to the target section to make it slide in
  //                   section.classList.add('active');
  //                   section.style.opacity = '1';
  //               } else {
  //                   // Remove 'active' class from non-target sections
  //                   section.classList.remove('active');
  //                   section.style.opacity = '0';
  //                   section.style.left = '100%'; // Reset position to off-screen right
  //               }
  //           });
  //       });
  //   });
  // });


//   document.addEventListener('DOMContentLoaded', function() {
//     const sections = document.querySelectorAll('section ');
//     const projectLinks = document.querySelectorAll('.project-count h4');


//     // Set the first section as active initially
//     sections[0].classList.add('active');

//     projectLinks.forEach(link => {
//         link.addEventListener('click', function() {
//             const targetClass = this.getAttribute('data-target');

//             sections.forEach(section => {
//                 if (section.classList.contains(targetClass)) {
//                     section.classList.add('active');
//                     section.style.opacity = '1';
//                     // section.display = "none";

//                     section.style.left = '0'; // Slide in
//                     section.style.zIndex = "-9";

//                     gsap.to(section, {
//                       opacity: 1,
//                       // display: "flex",
//                       left: 0,
//                       duration: 1,
//                       ease: "power4.out"
//                   });

//                 } else {
//                     section.style.opacity = '0';
//                     setTimeout(() => {
//                         section.classList.remove('active');
//                         section.style.left = '100%';   // Move off-screen to the right
//                         section.style.zIndex = "9999";
//                         gsap.to(section, {
//                           opacity: 0,
//                           // display: "none",
//                           left: '50%',
//                           duration: 1,
//                           ease: "power4.out",
//                       });
                      
//                     }, 200); // Match this duration with your CSS transition time (0.5s)
//                 }
//             });
//         });
//     });
// });




// document.addEventListener('DOMContentLoaded', function() {
//   const sections = document.querySelectorAll('section');
//   const projectLinks = document.querySelectorAll('.project-count h4');

//   // Set the first section as active initially
//   sections[0].classList.add('active');

//   projectLinks.forEach(link => {
//       link.addEventListener('click', function() {
//           const targetClass = this.getAttribute('data-target');

//           sections.forEach(section => {
//               if (section.classList.contains(targetClass)) {
//                   // Add active class to the target section and animate in
//                   section.classList.add('active');
//                   gsap.to(section, {
//                       opacity: 1,
//                       left: 0, // Slide in
//                       zIndex: 1, // Ensure it is on top
//                       duration: 1,
//                       // ease: "none"
//                   });
//               } else {
//                 // Delay before animating out the non-active sections
//                 setTimeout(() => {
//                     gsap.to(section, {
//                         opacity: 0,
//                         left: '100%', // Move off-screen to the right
//                         zIndex: -1, // Move it behind
//                         duration: 1,
//                         // ease: "none",
//                         onComplete: () => {
//                             section.classList.remove('active'); // Remove class after animation completes
//                         }
//                     });
//                 }, 100); // Delay by 200ms
//             }
//           });
//       });
//   });
// });





document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');
  const projectLinks = document.querySelectorAll('.project-count h4');

  // Set the first section as active initially and allow scrolling
  sections[0].classList.add('active');
  // sections[0].style.overflow = 'auto'; // Allow scrolling on the first active section

  projectLinks.forEach(link => {
      link.addEventListener('click', function() {
          const targetClass = this.getAttribute('data-target');

          sections.forEach(section => {
              if (section.classList.contains(targetClass)) {
                  // Add active class to the target section, allow scroll and animate in
                  section.classList.add('active');
                  // section.style.overflow = 'auto'; // Allow scrolling on the active section
                  
                  gsap.to(section, {
                      opacity: 1,
                      // display:"inline-block",
                      left: 0, // Slide in
                      zIndex: 1, // Ensure it is on top
                      duration: 1, // Quicker transition
                      ease: "none" // Smoother easing
                  });
              } else {
                  // Hide non-active sections, prevent scrolling, and animate out
                  // section.style.overflow = 'hidden'; // Prevent scrolling on hidden sections

                  setTimeout(() => {
                      gsap.to(section, {
                          opacity: 0,
                          left: '50%', // Move off-screen to the right
                          zIndex: -1, // Move it behind
                          duration: 1, // Quicker transition
                          ease: "none",
                          onComplete: () => {
                              section.classList.remove('active'); // Remove class after animation completes
                          }
                      });
                  }, 50); // Slight delay to avoid a jumpy effect
              }
          });
      });
  });
});









}
page5Anima()




// ......................................page6 Artwork Animation..................................................




// gsap.to("#pag6-main-Artwork #Artwork-elems .Artworks", {
//   transform: "translateY(-400%)",
//   // x:'-200%',
//   // width:'0%',
//   duration: 2,
//   ease:"none",
//   scrollTrigger: {
//     trigger: "#pag6-main-Artwork",
//     scroller: "body",
//     start: "22% 0%",
//     end: "70% -50%",
//     scrub: 2,
//     pin: true,
//       // markers:true, 
//   },
// })


const artworkElems = document.querySelectorAll("#Artwork-elems #elems-scroll-div");

// Get the offset height of each .Artworks element
artworkElems.forEach((elem) => {
  const offsetHeight = elem.offsetHeight;
  
  // Apply GSAP animation based on offset height

var Lline = gsap.timeline({
  scrollTrigger: {
    trigger: "#pag6-main-Artwork",
      scroller: "body",
      start: "22% 0%",
      end: `100%+=${offsetHeight}px`,
      scrub: 1,
      pin: true,
  },
})  

Lline.to(elem, {
    y: `-${offsetHeight}px`, // Use y for vertical translation
    duration: 5,
    ease: "none",
  },"a");

Lline.to(".l-line",{
    height:"100%",
     duration:5,
     ease:"power1.out",
   },"a")

});






// Lline.to("#elems-scroll-div", {
  // transform: `translateY(-80%)`,
  // duration: 5,
  // ease:"power1.out",
// },"a")




const artworkLinks = document.querySelectorAll('#Artwork-elems .Artworks');
    
artworkLinks.forEach(link => {
  
    // gsap.from(link, {
    //   // transform: "translateY(0%)",
    //   // x:'-200%',
    //   // width:'0%',
    //   // opacity:0,
    //   duration: 3,
    //   ease:"Power3.out",  
    //   scrollTrigger: {
    //     trigger: link,
    //     scroller: "body",
    //     start: "50% 85%",
    //     end: "0% 70%",
    //     scrub: 4,
    //     pin: true,
    //       markers:true,  
    //   },
    // })


    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        
        const targetClass = this.getAttribute('data-target');

        const pages = document.querySelectorAll('#elems-pages .Artwork-elems');

        pages.forEach(page => {
    // page.style.opacity = '0';
    // page.style.display = 'none';
    page.style.display = 'inline-block';

    
        });

        const targetPage = document.querySelector(`.${targetClass}`);

        let close =  document.querySelector(".close")
        let ArtworksOverly = document.querySelector(".Artworks-overly")
        let Artwork =  document.querySelector("#elems-scroll-div")
        let Heading = document.querySelector(".Heading h1")
        
        if (targetPage) {
            targetPage.style.opacity = '1';
            // targetPage.style.display = 'inline-block';
            targetPage.style.zIndex = '999';
            close.style.opacity = '1'
            close.style.zIndex = '888'
            Artwork.style.filter = 'blur(10px)';
            Heading.style.filter = 'blur(10px)';
            ArtworksOverly.style.opacity = '1'
            ArtworksOverly.style.zIndex = '888'
            ArtworksOverly.style.filter = 'blur(10px)';
        }

        close.addEventListener('click', function() {
          // Reset the opacity of all pages
          pages.forEach(page => {
              // page.style.opacity = '0';
    page.style.display = 'none';


        });
          

          // Hide the close button and remove blur effect
          close.style.opacity = '0';
          close.style.zIndex = '-8'
          Artwork.style.filter = 'none';
          Heading.style.filter = 'none';
          // targetPage.style.display = 'inline-block';

          ArtworksOverly.style.opacity = '0'
          ArtworksOverly.style.zIndex = '-999'
          ArtworksOverly.style.filter = 'none';


      });

    });
  });








// ......................................page7 moving div Animation..................................................

// var body = document.querySelector("body")

window.addEventListener("wheel", function(dets){
  if(dets.deltaY>0){
    gsap.to(".marque",{
      transform:'translateX(-100%)',
      // delay:1,
      repeat:-1,
      duration:3,
      ease:"none"
    })

    gsap.to(".marque i",{
     rotate:181
    })
  }
  else{
    gsap.to(".marque",{
      transform:'translateX(0%)',
      // delay:1,
      repeat:-1,
      duration:2,
      ease:"none"
    })

    gsap.to(".marque i",{
      rotate:0
     })
  }
  
})

gsap.from("#page7-move #moving-div", {
  transform: "translateY(20%)",
  opacity: 0,
  duration: 4,
  ease: "Power4.Out",
  scrollTrigger: {
    trigger: "#moving-div",
    scroller: "body",
    start: "top 95%",
    end: "top 80%",
    scrub: 2, 
          // markers:true, 
    },
});


// ......................................page8 feedback Animation..................................................

function page8FeedbackAnim(){

gsap.from("#page8-feedback #reviews", {
  transform: "translateY(30%)",
  opacity: 0,
  duration: 4,
  ease: "Power4.Out",
  scrollTrigger: {
    trigger: "#reviews",
    scroller: "body",
    start: "top 80%",
    end: "top 70%",
    scrub: 4,  // Increased scrub for slower scrolling
  },
});

gsap.from("#page8-feedback #feedback", {
  transform: "translateY(30%)",
  opacity: 0,
  duration: 4,
  ease: "Power4.Out",
  scrollTrigger: {
    trigger: "#feedback",
    scroller: "body",
    start: "top 80%",
    end: "top 70%",
    scrub: 4,  // Increased scrub for slower scrolling
  },
});

gsap.to("#page8-feedback #get-in-tuch", {
  opacity: 1,
  zIndex: 99,
  duration: 4,
  ease: "Power4.Out",
  scrollTrigger: {
    trigger: "#get-in-tuch",
    scroller: "body",
    start: "top 80%",
    end: "top 40%",
    scrub: 4,  // Increased scrub for slower scrolling
  },
});



}
page8FeedbackAnim()




