
const ImageKit = require("imagekit");

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

// Debug
console.log("PUBLIC KEY:", process.env.IMAGEKIT_PUBLIC_KEY);
console.log("PRIVATE KEY:", process.env.IMAGEKIT_PRIVATE_KEY);


async function uploadfile(file, filename) {
    return await imagekit.upload({
        file,
        fileName: filename,
    });
}

module.exports = { uploadfile };
