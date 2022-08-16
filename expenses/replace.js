const replaceTable = [
  { search: 'ＩＨＥＲＢ', replace: 'iHerb' },
  { search: 'アサヒコウツウカブシキガイシヤ', replace: 'タクシー' },
  { search: 'ＡＭＡＺＯＮ．ＣＯ．ＪＰ', replace: 'amazon' },
  { search: 'AMAZON.CO.JP', replace: 'amazon' },
  { search: 'アマゾンドツトシーオードツトジエイピ', replace: 'amazon' },
  { search: 'アマゾンデジタル', replace: 'amazon（Kindle？）' },
  { search: 'イオンモ－ルサツポロヒラ', replace: 'イオン' },
  { search: 'イト－ヨ－カド－　ネツトス－パ－', replace: 'net ヨーカドー' },
  { search: 'イト－ヨ－カド－　フク', replace: 'ヨーカドー' },
  { search: 'イト－ヨ－カド－ フク', replace: 'ヨーカドー' },
  { search: 'イトーヨーカドー フクズミテン', replace: 'ヨーカドー' },
  { search: 'エヌテイテイヒガシニホンサツポロビ', replace: 'NTT病院' },

  { search: 'ＷＩＫＩＰＥＤＩＡ', replace: 'Wikipedia' },
  { search: 'オムニセブン（イト－ヨ－カド－）', replace: 'ヨーカドー' },
  { search: 'オロシウリス－パ－　キヨ', replace: '卸売スーパー' },

  { search: 'カフェクロワッサン', replace: 'カフェクロワッサン' },
  { search: 'キノトヤ', replace: 'きのとや' },
  { search: 'キタビシハイヤーカブシキガイシヤ', replace: 'タクシー' },
  { search: 'キヨウワコウツウカブシキガイシヤ', replace: 'タクシー' },
  { search: 'キンセイジドウシヤ（カ', replace: 'タクシー' },
  { search: 'キンセイジドウシヤ（カ/ID', replace: 'タクシー' },
  { search: 'ＫＤＤＩ', replace: 'KDDI' },
  { search: 'KDDIゴリヨウリヨウキン', replace: 'KDDI' },
  { search: 'ケイオウプラザホテルサツポロ', replace: '京王プラザホテル札幌' },
  { search: 'ケイユウカイサツポロビヨウイン', replace: '恵佑会札幌病院' },
  { search: 'コカ．コ－ラシ－モ－ドジハンキ', replace: '自販機' },
  { search: 'コ－チヤンフオ－', replace: 'コーチャンフォー' },

  { search: 'サツポロコウセイビヨウイン', replace: '厚生病院' },
  { search: 'サツポロシスイドウキヨク', replace: '水道局' },
  { search: 'サツポロシスイドウリヨウキン', replace: '水道局' },
  { search: 'サツポロドウシンブンカセンタ－', replace: '道新文化センター' },
  { search: 'サンチヨクセイセンイチハ', replace: '生鮮市場' },
  { search: 'サンワコウツウカブシキガイシヤ', replace: 'タクシー' },
  { search: 'シンセツコウツウカブシキガイシヤ', replace: 'タクシー' },
  { search: 'ス－パ－ア－クス', replace: 'ARCS' },
  { search: 'ス-パ-ア-クス キタノテン/ID', replace: 'ARCS' },
  { search: 'セイコ－マ－ト', replace: 'セイコ－マ－ト' },
  { search: 'セイユウネツトス－パ－', replace: 'net 西友' },
  { search: 'セイユウ　キヨ', replace: '西友' },
  { search: 'セブン－イレブン', replace: 'セブンイレブン' },
  { search: 'セブンイレブン', replace: 'セブンイレブン' },
  { search: 'ダイマルフジイセントラル', replace: '大丸藤井セントラル' },
  { search: 'ツバメジドウシヤカブシキガイシ', replace: 'タクシー' },
  { search: 'ツルハ', replace: 'ツルハ' },
  { search: 'デイ-シ-エム', replace: 'ホーマック' },
  { search: 'デイ－シ－エムホ－マツク', replace: 'ホーマック' },
  { search: 'デンシシヨウトリヒキヨドバシカメラ', replace: 'ヨドバシ' },
  { search: 'ドト－ルコ－ヒ－', replace: 'ドトール' },

  { search: 'ニシマツヤチエ－ン', replace: '西松屋' },
  { search: 'ニツポンユウビンユウビンキヨク', replace: '郵便局' },
  { search: 'ニトリ　ネツト', replace: 'ニトリ' },
  { search: 'ニトリ ネツト', replace: 'ニトリ' },

  { search: 'パセオテン', replace: 'パセオ' },
  { search: 'ヒガシコウツカブシキガイシヤ', replace: 'タクシー' },
  { search: 'ビヨウプラ－ジユ', replace: 'プラージュ' },
  { search: 'ヒラギシハイヤ－', replace: 'タクシー' },
  { search: 'フアツシヨンセンターシマムラ', replace: 'しまむら' },
  { search: 'フアミリ－マ－ト', replace: 'ファミリーマート' },
  { search: 'フアミリ-マ-ト', replace: 'ファミリーマート' },
  { search: 'フラワ－シヨツプイシザカ', replace: 'フラワーショップ' },
  { search: 'ブンキヨウドウ　キタ', replace: '文教堂' },
  { search: '北海道電力', replace: '北海道電力' },
  { search: 'ホテルオ－クラサツポロ　レストラン', replace: 'ホテルオークラ札幌' },

  { search: 'マクドナルド', replace: 'マクドナルド' },
  { search: 'マルイイマイ', replace: '丸井今井' },
  { search: 'ミヨウジヨウジドウシヤカブシキ', replace: 'タクシー' },
  { search: 'モスバーガー', replace: 'モスバーガー' },
  { search: 'モスバ－ガ－', replace: 'モスバーガー' },

  { search: 'ユニクロ　ジ－ユ－　オ', replace: 'ユニクロ・GU' },
  { search: 'ヨドバシカメラ　ツウシンハンバイ', replace: 'ヨドバシ' },

  { search: 'ラクタクビンシンサツ', replace: 'net AEON' },
  { search: '（ラクテン', replace: '楽天' },
  { search: 'ラツキー　キヨ', replace: 'ラッキー' },
  { search: 'ロツカテイ', replace: '六花亭' },
  { search: 'ロ－ソン', replace: 'ローソン' },
];

/**
 * 
 * @param {String} shop 
 * @param {Array} table
 * @returns {String}
 */
function convertShop(shop, table) {
  for (let i = 0; i < table.length; i++) {
    const re = new RegExp(table[i].search);
    if (re.test(shop)) {
      return table[i].replace;
    }
  }
  return shop;
}
