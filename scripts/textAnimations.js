$(document).ready(function () {
  $(".title").fadeTo("slow", 0.5);
  $(".autoplay").textition({
    speed: 1,
    animation: "ease-out",
    map: { x: 200, y: 100, z: 0 },
    autoplay: true,
    interval: 3,
  });
});
