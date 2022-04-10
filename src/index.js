import path from 'path';
import clipboard from 'clipboardy';
import Kuroshiro from "kuroshiro";
import KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji";

(async () => {
    const kuroshiro = new Kuroshiro();
    await kuroshiro.init(new KuromojiAnalyzer({dictPath: path.join(__dirname, "dict")}));

    let txt = process.argv[2];
    const result = await kuroshiro.convert(txt, {mode: "furigana", to: "hiragana"});

    console.log(result);

    try {
        clipboard.writeSync(result);
    } catch (e) {
        console.error("Invalid Clipboard Access: ");
        console.error(e);
    }
})()
