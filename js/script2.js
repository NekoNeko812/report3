const form = document.querySelector('#contact-submit');
form.addEventListener('submit', (e) => {//eは引数でイベントに関する情報を含んだオブジェクト
  e.preventDefault();//一回待つ
  console.log('送信されました');
  form.submit(); // 必要なら本当に送信も実行
});