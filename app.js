const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");

ffmpeg.setFfmpegPath(ffmpegPath);

ffmpeg("video.mp4")
    .setStartTime("00:00:00")
    .setDuration("00:01:50")
    .output("after_trim.mp4")
    .on("end", (err) => {
        if (!err) {
            console.log("Convertion Done");
        }
    })
    .on("error", (err) => {
        console.log("error: ", err);
    }).run();