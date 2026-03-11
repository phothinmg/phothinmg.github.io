var ptimage = require("ptimage");
var path = require("node:path");
var resolves = require("@phothinmaung/resolves");
var images = require("./images_obj.js");

// _data
var image_yaml = "./app/_data/images.yml";
var image_asset_path = "/images";
var yml_text = images
    .map((i) => {
        var n = i.name.split(".").slice(0, 1).join("") + ".webp";
        var p = path.join(image_asset_path, n);
        return `- url: ${p}`;
    })
    .join("\n");

// images
async function transformImages() {
    var funs = [];

    for (var image of images) {
        funs.push([
            ptimage.transform({
                imagePath: image.imagePath,
                outDir: image.outDir,
                width: image.size.large.w,
                height: image.size.large.h,
                outFileName: `${image.name}-large`,
            }),
            "webp",
        ]);
        funs.push([
            ptimage.transform({
                imagePath: image.imagePath,
                outDir: image.outDir,
                width: image.size.medium.w,
                height: image.size.medium.h,
                outFileName: `${image.name}-medium`,
            }),
            "webp",
        ]);
        funs.push([
            ptimage.transform({
                imagePath: image.imagePath,
                outDir: image.outDir,
                width: image.size.small.w,
                height: image.size.small.h,
                outFileName: `${image.name}-small`,
            }),
            "webp",
        ]);
    }
    var rit = resolves([...funs]);
    await rit.series();
}

//ptimage.writeFile({ filePath: image_yaml, data: yml_text });
transformImages();
