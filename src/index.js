import "./styles.css";
const onClickAdd = () => {
  // テキストボックスの値を取得し。初期化する
  const inputText = document.getElementById("input-text").value;
  document.getElementById("input-text").value = "";

  // div生成
  const div = document.createElement("div");
  div.className = "list-low";

  // li生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // divタグの子要素に各要素を設定
  div.appendChild(li);

  // 未完了リストの追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
