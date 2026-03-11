var path = require("node:path");

var image_outDir = "./app/images";
var image_local_dir = "./nodejs/images";

module.exports = [
    {
        name: "logo",
        imagePath: path.join(image_local_dir, "logo.png"),
        outDir: image_outDir,
        size: {
            large: {
                w: 660,
                h: 660,
            },
            medium: {
                w: 495,
                h: 495,
            },
            small: {
                w: 330,
                h: 330,
            },
        },
    },
];
