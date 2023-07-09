let stopBtn = document.querySelector("#stop");
let startBtn = document.querySelector("#start");
let video = document.querySelector("video");

// navigator.getUserMedia(
//   {
//     video: true,
//     audio: true,
//   },
//   (stream) => {

//     video.onloadedmetadata = (e) => {};
//     startBtn.addEventListener("click", () => {
//       video.srcObject = stream;
//       // video.stop();
//       video.play();
//     });
//     stopBtn.addEventListener("click", () => {
//       // video.stop();
//       //   video.pause();
//       video.srcObject = null;
//     });
//   },
//   (e) => {
//     console.log(e);
//   }
// );

// navigator.webkitGetUserMedia(
//   {
//     video: {
//       mandatory: {
//         chromeMediaSource: "screen",
//       },
//     },
//   },
//   (stream) => {
//     let video = document.querySelector("video");
//     video.onloadedmetadata = (e) => {};
//     startBtn.addEventListener("click", () => {
//       video.srcObject = stream;
//       // video.stop();
//       video.play();
//     });
//     stopBtn.addEventListener("click", () => {
//       // video.stop();
//       //   video.pause();
//       video.srcObject = null;
//     });
//   },
//   (e) => {
//     console.log(e);
//   }
// );
// function initialize() {
//   saveFile = window.document.querySelector("#saveFile");
//   video = window.document.querySelector("video");

let errorCallback = (error) => {
  console.log("There was an error connecting to the video stream:", error);
};

window.navigator.webkitGetUserMedia(
  { video: true },
  (localMediaStream) => {
    // video.src = window.URL.createObjectURL(localMediaStream);
    video.srcObject = localMediaStream;
    video.onloadedmetadata = bindSavingPhoto;
  },
  errorCallback
);
// }
