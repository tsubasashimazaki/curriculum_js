// 【要件】
// ・クラス名：Taiyaki
// ・インスタンス化する度に「あんこ」「クリーム」「チーズ」等と中身を変えられるように実装してください。
// （コンストラクタで渡ってきた引数をセットする）
// ・「中身は〇〇です」と中身を出力する関数を作成してください。

class Taiyaki {

    constructor(material) {
        this.material = material;
    }

    createTaiyaki() {
        console.log(`中身は${this.material}です`);

    }
} 

let ankoTaiyaki = new Taiyaki('あんこ');
let creamTaiyaki = new Taiyaki('クリーム');
let cheezTaiyaki = new Taiyaki('チーズ');

ankoTaiyaki.createTaiyaki();
creamTaiyaki.createTaiyaki();
cheezTaiyaki.createTaiyaki();