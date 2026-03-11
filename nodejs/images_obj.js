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
                w: 600,
                h: 600,
            },
            medium: {
                w: 450,
                h: 450,
            },
            small: {
                w: 300,
                h: 300,
            },
        },
    },
];
