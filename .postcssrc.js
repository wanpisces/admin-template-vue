// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    plugins: {
        "postcss-import": {},
        "postcss-url": {},
        // to edit target browsers: use "browserslist" field in package.json
        autoprefixer: {}
    },
    printWidth: 300, // 换行字符串阈值
    proseWrap: "never"
};