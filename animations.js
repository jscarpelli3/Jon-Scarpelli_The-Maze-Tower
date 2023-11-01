const spikeAnimation = [
  {
    src: "pics/spike_frames/spike1.png",
    frameMult: 2,
  },
  {
    src: "pics/spike_frames/spike2.png",
    sfx: null,
    frameMult: 11,
    sfx: spikeReady,
  },
  {
    src: "pics/spike_frames/spike3.png",
    sfx: null,
    frameMult: 1,
  },
  {
    src: "pics/spike_frames/spike2.png",
    sfx: null,
    frameMult: 1,
  },
  {
    src: "pics/spike_frames/spike3.png",
    sfx: null,
    frameMult: 1,
  },
  {
    src: "pics/spike_frames/spike2.png",
    sfx: null,
    frameMult: 1,
  },
  {
    src: "pics/spike_frames/spike3.png",
    sfx: null,
    frameMult: 1,
  },
  {
    src: "pics/spike_frames/spike2.png",
    sfx: null,
    frameMult: 1,
    addClass: "spikeHit",
  },
  {
    src: "pics/spike_frames/spike5.png",
    sfx: spikeHit,
    frameMult: 10,
  },
  {
    src: "pics/spike_frames/spike6.png",
    sfx: null,
    frameMult: 1,
  },
  {
    src: "pics/spike_frames/spike7.png",
    sfx: fallFloorfx,
    frameMult: 1,
  },
  {
    src: "pics/spike_frames/spike8.png",
    sfx: null,
    frameMult: 2,
    removeClass: "spikeHit",
  },
  {
    src: "pics/spike_frames/spike1.png",
    sfx: null,
    frameMult: 2,
    endFunction: (spikeRef) => {
      ///stop checking for collission
      clearInterval(spikeCollissionID)
      ///remove spike from dom
      spikeRef.remove()
      spikeOn=false
      }
    }
];

  export { spikeAnimation }