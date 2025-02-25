// server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
// 使用 process.env.PORT || 8080，這樣如果環境中設定了 PORT 就用它，否則預設使用 8080
const PORT = process.env.PORT || 8080;
const RECORD_FILE = path.join(__dirname, 'record.json');

// 全域錯誤處理
process.on('uncaughtException', (err) => {
  console.error('未捕獲的例外:', err);
});
process.on('unhandledRejection', (reason, promise) => {
  console.error('未處理的拒絕:', promise, '原因:', reason);
});

// 使用 JSON 解析中介軟體
app.use(bodyParser.json());
// 設定靜態檔案目錄，假設 index.html 放在 public 資料夾中
app.use(express.static('public'));

// GET /record.json - 讀取伺服器上的記錄檔
app.get('/record.json', (req, res) => {
  fs.readFile(RECORD_FILE, 'utf8', (err, data) => {
    if (err) {
      // 檔案不存在或讀取錯誤時，回傳預設的空記錄結構
      const defaultData = {
        solveRecords: { "3x3": [], "4x4": [], "5x5": [] },
        entryRecords: { "3x3": [], "4x4": [], "5x5": [] }
      };
      res.json(defaultData);
    } else {
      try {
        const jsonData = JSON.parse(data);
        res.json(jsonData);
      } catch (e) {
        console.error("解析 record.json 失敗:", e);
        res.status(500).send('Error parsing record.json');
      }
    }
  });
});

// POST /record.json - 儲存記錄到伺服器（覆蓋 record.json）
app.post('/record.json', (req, res) => {
  const newData = req.body;
  fs.writeFile(RECORD_FILE, JSON.stringify(newData, null, 2), 'utf8', (err) => {
    if (err) {
      console.error("儲存檔案錯誤:", err);
      res.status(500).send('Error saving record.json');
    } else {
      res.send('Record saved successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
