// 每行一件東西 (名字 價格 數量 圖片路徑 描述)
// 同名無法區分 (取名要避開)       └─────┴──── 可以空著 ("")
// 每行結尾加 , (除了最後一樣不用)
let ITEMS = [
    { name: "電鍋", price: 20, stock: 1, image: "images/a.png", description: "呱" },
    { name: "平底鍋", price: 10, stock: 1, image: "", description: "" },
    { name: "吹風機", price: 10, stock: 1, image: "images/a.png", description: "呱瓜" },
    { name: "置物架", price: 10, stock: 1, image: "images/a.png", description: "呱呱" },
    { name: "鯊鯊", price: 99999, stock: -1, image: "images/c.jpg", description: "我愛鯊鯊" },
    { name: "路由器", price: 10, stock: 1, image: "images/a.png", description: "瓜呱" },
    { name: "濾水壺", price: 10, stock: 1, image: "images/a.png", description: "呱呱呱" },
    { name: "杯子", price: 10, stock: 1, image: "images/a.png", description: "瓜瓜呱" },
    { name: "鏡子", price: 10, stock: 1, image: "images/a.png", description: "瓜" },
    { name: "垃圾桶", price: 10, stock: 1, image: "images/a.png", description: "呱瓜呱" },
    { name: "檯燈", price: 10, stock: 1, image: "images/a.png", description: "瓜瓜" },
    { name: "熱水壺", price: 10, stock: 1, image: "images/c.jpg", description: "瓜瓜瓜" }
];

// 你的 Web3Forms Key
const myKey = "b5d75dd5-63b4-44df-b2b6-be85824c42dc";
// 1. https://web3forms.com 註冊
// 2. 建立一個 form
//    (隨便取名沒差)
//    (domain name 填 localhost 就好)
// 3. 就會拿到 Form Access Key 了

