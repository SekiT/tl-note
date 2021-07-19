# TL-Note

マダミスとかのタイムライン整理に使えると嬉しいやつ

## 機能

- 登場人物の追加/編集/削除
  - 登場人物それぞれに背景色、名前を設定します
- 行動の追加/編集/削除
  - 時刻、人物、内容を記述します
  - 人物は複数指定可能です
  - タイムライン上の空の部分をクリックするとその時刻、人物を対象として行動を追加できます
- 時刻プロットの追加/編集/削除
  - 開始時刻から終了時刻までn分ごとに行を追加表示するプロットを作れます
  - 特定の時刻だけ行を削除する事はできません。除外したい時刻より前のプロットと後のプロットをそれぞれ作ってください
  - プロットを削除しても行動がある時刻の行は消えません
- 独自のJSONファイルとしてエクスポート/インポート