const favorite = document.querySelector('#favorite');

const lists = [
      {
      img:'youkann.jpg',
    name:'悪霊の家',
    writer:'クトゥルフ神話公式',
    system:'クトゥルフ神話TRPG',
    about:'「探索者たちは不気味な屋敷の調査を依頼され、その屋敷の真相を明らかにする。」<br>クトゥルフ神話TRPGといえばこの作品。クトゥルフ神話TRPGの何たるかを知ることができる名作。',
    url:'このシナリオはクトゥルフ神話TRPGルールブックに付属しているシナリオです。',
  },
  {
    img:'raiu.jpg',
    name:'カタシロ',
    writer:'ディズム',
    system:'クトゥルフ神話TRPG',
    about:'「目が覚めると病院にいた。」<br>有観客での講演も行っているTRPGを知っているなら知らない人はいないであろう名作。自分にに似た探索者で通ることをオススメします。',
    url:'https://booth.pm/ja/items/2274429?srsltid=AfmBOor4AZk_uFm1_rpXJXNWVoNVErgOsjZ7WPqF8gUfHeQL-GJhwMTq',
  },
    {
      img:'mountain.jpg',
    name:'狂気山脈 ～邪神の山嶺～',
    writer:'まだら牛',
    system:'クトゥルフ神話TRPG',
    about:'「前人未到のその山脈は、海抜1万メートルを超える。」<br>現在進行形でアニメ映画化が進んでいる未来の金字塔。山が好きな人にはぜひ通っていただきたい。',
    url:'https://booth.pm/ja/items/1071516?srsltid=ARcRdnqiJUqNP6I0fVpsFlF-AbbQfpLJp47HBLDB8jSCs-bisy2H5Zho',
  },
      {
        img:'rainy.jpg',
    name:'変葬',
    writer:'さんとなな',
    system:'エモクロアTRPG',
    about:'「―これは一体誰なのだろう。」<br>個人的にこれぞエモクロアTRPGという一作。雨のにおいが好きな人はハマると思います。',
    url:'https://booth.pm/ja/items/3129552?srsltid=AfmBOor9C5tyHX2YPk0FSQ7KFRksFd-qpeXDXtYFck-2J-Nuambra-EP',
  },
      {
        img:'school.jpg',
    name:'彼方からの幻燈',
    writer:'ディズム',
    system:'エモクロアTRPG',
    about:'「―学校の七不思議、ブラックホール情報パラドックス、誰かの日記」<br>カタシロを作られたディズムさんによるシナリオ。高校生に戻りたい人や、なりたい人にオススメです',
    url:'https://booth.pm/ja/items/6860713?srsltid=AfmBOorcuG3cVoWiAoMv7r5Lm4OFWv9vjm4YaiGVJgY8gSvKHEfy8ov1',
  },
];

for(let i = 0; i < lists.length; i++) {
  const { img, name, writer, system, about, url } = lists[i];

  // i が 0 のときはリンクなしテキスト、そうでなければリンク
  const urlContent = (i !== 0)
    ? `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`//?は条件演算子：条件が真のときの値 : 条件が偽のときの値
    : url;
 
    // 表を作成
  const content = `
    <div class="favorite-layout">
      <div class="image-layout">
        <div class="image"><img src="img/${img}" alt="${name}の画像"></div>
        <p>画像はイメージです</p>
      </div>
      <dl>
        <dt><h3>シナリオ名</h3></dt><dd><h3>${name}</h3></dd>
        <dt>作者</dt><dd>${writer}</dd>
        <dt>URL</dt><dd>${urlContent}</dd>
        <dt>ゲームシステム</dt><dd>${system}</dd>
        <dt>シナリオについて</dt><dd>${about}</dd>
      </dl>
    </div>
  `;

  favorite.insertAdjacentHTML('beforeend', content);
  console.log(i);
}
