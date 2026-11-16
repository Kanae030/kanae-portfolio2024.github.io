const correctHash = "e95a6198e7b221064fc990b00b380ef5f31217c9b6827f44a9b243fedf2cea92";
const storageKey = "site_authenticated";

async function checkAuth() {
  // すでにこのタブで認証済みの場合は、そのままページを表示して終了
  if (sessionStorage.getItem(storageKey) === "true") {
    document.body.style.display = "block";
    return;
  }

  const password = prompt("Enter password::");
  if (!password) {
    location.href = "https://google.com";
    return;
  }

  // 入力された文字をSHA-256に変換して比較
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const inputHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  if (inputHash === correctHash) {
    // 認証成功の記録をブラウザに保存（タブを閉じるまで有効）
    sessionStorage.setItem(storageKey, "true");
    document.body.style.display = "block";
  } else {
    alert("Incorrect password");
    location.href = "https://google.com";
  }
}

// ページの読み込みが完了したら認証を実行
window.addEventListener("DOMContentLoaded", checkAuth);
