// 每行一件東西　(名字, 價格, 數量, 圖片路徑, 描述)
// 同名無法區分　(取名要避開)　 　　　　└───────┴──── 可以空著 ("")
// 每行結尾加 ,　(除了最後一樣不用)
// 描述換行: <br>
let ITEMS = [
    // 廚房相關
    { name: "1. 濾水壺 + 濾心x1", price: 16, stock: 1, image: "images/default.png", description: "Brita, 盒子淹水泡爛丟了<br>去年九月才買的<br>濾心未拆封 (記得一個大概五歐)" },
    { name: "2. 熱水壺", price: 6, stock: 1, image: "images/default.png", description: "底座、壺, 去年十月才買, 不是很常用" },
    { name: "3. 電鍋(1L)", price: 20, stock: 1, image: "images/default.png", description: "掙扎一個多月還是買了 :)<br>電鍋本體(非外鍋, 不可加水)、<br>鍋子(水只能加這邊)、<br>鍋蓋、量杯、勺子" },
    { name: "4. 湯鍋 + 鍋蓋", price: 4, stock: 1, image: "images/default.png", description: "直徑 20cm" },
    { name: "5. 平底鍋 + 鍋蓋", price: 6, stock: 1, image: "images/default.png", description: "上上週剛買的, 直徑 28cm" },
    { name: "6. 鍋蓋", price: 1.5, stock: 1, image: "images/default.png", description: "直徑 24cm<br>(對應的鍋子suck, 丟掉了)" },
    { name: "7. 鍋子隔熱墊(咖啡)", price: 0.25, stock: 2, image: "images/default.png", description: "軟木材質, 狀態良好<br>公用的通常都燒焦超噁" },
    { name: "8. 鍋子隔熱墊(灰)", price: 0.35, stock: 1, image: "images/default.png", description: "塑膠" },
    { name: "9. 湯勺", price: 1, stock: 1, image: "images/default.png", description: "金屬" },
    { name: "10. 砧板(大)", price: 3, stock: 1, image: "images/default.png", description: "木" },
    { name: "11. 砧板(小)", price: 1, stock: 1, image: "images/default.png", description: "塑膠" },
    { name: "12. 中式菜刀", price: 4, stock: 1, image: "images/default.png", description: "" },
    { name: "13. 廚房剪刀", price: 3, stock: 1, image: "images/default.png", description: "(沒有很常用)" },
    { name: "14. 刨絲板(一組)", price: 1.75, stock: 1, image: "images/default.png", description: "孔徑大中小各一" },
    { name: "15. 玻璃碗(大)", price: 1.5, stock: 1, image: "images/default.png", description: "厚" },
    { name: "16. 鐵碗(中)", price: 1, stock: 1, image: "images/default.png", description: "薄, 不隔熱, 可蒸東西用" },
    { name: "17. 玻璃碗(小)", price: 0.5, stock: 1, image: "images/default.png", description: "厚" },
    { name: "18. 飯碗(白)", price: 0.5, stock: 1, image: "images/default.png", description: "厚" },
    { name: "19. 大盤子", price: 1, stock: 1, image: "images/default.png", description: "" },
    { name: "20. 玻璃杯(無握把)", price: 0.7, stock: 1, image: "images/default.png", description: "" },
    { name: "21. 玻璃杯(有握把)", price: 0.7, stock: 1, image: "images/default.png", description: "" },
    { name: "22. 塑膠杯(灰)", price: 0.4, stock: 1, image: "images/default.png", description: "480 ml" },
    { name: "23. 塑膠杯(白)", price: 0.4, stock: 1, image: "images/default.png", description: "480 ml" },
    { name: "24. 保鮮盒(白)", price: 2, stock: 1, image: "images/default.png", description: "" },
    { name: "25. 大盒子(淺藍)", price: 1.3, stock: 1, image: "images/default.png", description: "比淺灰的小一點" },
    { name: "26. 大盒子(淺灰)", price: 1.5, stock: 1, image: "images/default.png", description: "比淺藍的大一點" },
    { name: "27. 小盒子(淺灰)", price: 0.75, stock: 1, image: "images/default.png", description: "14x14 cm" },
    { name: "28. 小小盒子", price: 0.25, stock: 2, image: "images/default.png", description: "8x11x4.5 cm, 裝藍莓葡萄之類的小水果~" },
    { name: "29. 玻璃大吸管 + 刷子", price: 0.9, stock: 1, image: "images/default.png", description: "商店找不到, 網購的<br>喝飲料很讚" },
    { name: "30. 玻璃大水壺", price: 1.4, stock: 1, image: "images/default.png", description: "本來想把濾過的水裝到這<br>但我好懶所以沒在用" },
    { name: "31. 玻璃大罐子", price: 3, stock: 1, image: "images/default.png", description: "超大 也許可當米罐?" },
    { name: "32. 湯匙(大)", price: 0.3, stock: 2, image: "images/default.png", description: "" },
    { name: "33. 湯匙(大, 較薄一點)", price: 0.25, stock: 2, image: "images/default.png", description: "" },
    { name: "34. 叉子(大)", price: 0.3, stock: 2, image: "images/default.png", description: "" },
    { name: "35. 叉子(小)", price: 0.15, stock: 5, image: "images/default.png", description: "水果叉" },
    { name: "36. 蒸架(小)", price: 0.3, stock: 1, image: "images/default.png", description: "小的, 英國買的<br>但我電鍋小 -> 上方空間小<br>(德國看到的都更大)" },
    // 房間電器
    { name: "37. 電風扇", price: 12, stock: 1, image: "images/default.png", description: "夏天會很熱<br>九月還有用到" },
    { name: "38. 可充電檯燈 + 兩種燈泡", price: 15, stock: 1, image: "images/default.png", description: "檯燈有一個 USB 孔 可以給手機充電~<br>燈泡有 warm/cool white (cool white 是稀有物品)<br>原價6歐 還要找特別地方買...<br>依使用時數來看, 理論上很難燒掉" },
    { name: "39. 吹風機", price: 4, stock: 1, image: "images/default.png", description: "" },
    { name: "40. 路由器 + 網路線", price: 16, stock: 1, image: "images/default.png", description: "附設定說明(我寫的呦)" },
    { name: "41. 延長線(無開關)", price: 2, stock: 2, image: "images/default.png", description: "3孔" },
    { name: "42. 延長線(有開關)", price: 2, stock: 1, image: "images/default.png", description: "3孔, 全開/全關" },
    // 其他雜物
    { name: "43. 打算去冰島的鞋子 買來總共只穿出去一天 因為生病行程取消嗚嗚", price: 35, stock: 1, image: "images/default.png", description: "保暖 防水 抓地力<br>想去冰島的話一般鞋子不太行~<br>嗚嗚嗚嗚嗚商品訊息連結在這<br>https://www.decathlon.de/p/wanderschuhe-herren-halbhoch-warm-wasserdicht-nh500-braun/307054/c392c392m8928701" },
    { name: "44. 置物架(大)", price: 6.5, stock: 1, image: "images/default.png", description: "3層, 每層可承重 25kg<br>整體 30x60x100 cm" },
    { name: "45. 置物架(小)", price: 2, stock: 1, image: "images/default.png", description: "3層, 不大<br>路由器的家, 蠻剛好的xd" },
    { name: "46. 收納盒", price: 1, stock: 1, image: "images/default.png", description: "約 17x25x14 cm" },
    { name: "47. 遮光窗簾 x1.5", price: 6, stock: 1, image: "images/default.png", description: ".5 是有原因的 :)<br>完整的那個全新未拆封<br>這裡窗戶超大 而且常常不附窗簾<br>前面運動區設施剛好朝著我房間超尷尬:)" },
    { name: "48. 垃圾桶(含蓋子)", price: 1.5, stock: 1, image: "images/default.png", description: "蓋子可分離" },
    { name: "49. 鏡子", price: 1, stock: 1, image: "images/default.png", description: "15x20 cm, 角度固定" },
    { name: "50. 小剪刀", price: 0.15, stock: 2, image: "images/default.png", description: "不要剪結凍的肉 : )<br>大把的被我炸掉了" },
    { name: "51. 掛勾架", price: 1, stock: 1, image: "images/default.png", description: "6個鉤, 我掛衣櫃門上" },
    { name: "52. 桌球拍 x2 + 球 x4", price: 99, stock: 1, image: "images/default.png", description: "共同持有, 價格待定<br>有些宿舍區有桌球桌" },
    { name: "53. 拖把(兼關燈棍棍)", price: 0.1, stock: 1, image: "images/default.png", description: "我都拆開當棍子關燈" },
    { name: "54. 德文課本 + 文法書", price: 30, stock: 1, image: "images/default.png", description: "認真學習~~" },
    // 睡覺和衣物
    { name: "55. 小鯊鯊", price: 99999, stock: 1, image: "images/blahaj.jpg", description: "我愛鯊鯊" },
    { name: "56. 大枕頭", price: 6, stock: 1, image: "images/default.png", description: "ikea" },
    { name: "57. 小靠枕", price: 1, stock: 1, image: "images/default.png", description: "" },
    { name: "58. 椅墊", price: 1, stock: 1, image: "images/default.png", description: "扁" },
    { name: "59. 毯毯", price: 5, stock: 1, image: "images/default.png", description: "有暖氣的世界 四季皆能蓋" },
    { name: "60. 床包", price: 1, stock: 1, image: "images/default.png", description: "這裡沒附 有包就好<br>床墊弄髒要罰錢錢" },
    { name: "61. 瑜珈墊", price: 5, stock: 1, image: "images/default.png", description: "" },
    { name: "62. 晾衣夾架", price: 1.5, stock: 1, image: "images/default.png", description: "8個夾子" },
    { name: "63. 衣架(小) x8", price: 0.85, stock: 1, image: "images/default.png", description: "稍小 小件衣物可用" },
    { name: "64. 衣架(大, 黑) x5", price: 0.75, stock: 1, image: "images/default.png", description: "" },
    { name: "65. 衣架(大, 灰) x10", price: 1.5, stock: 1, image: "images/default.png", description: "全新" },
    { name: "66. 夾子 x5", price: 0.2, stock: 1, image: "images/default.png", description: "夾住衣架上的衣服" }
];

// 1. https://web3forms.com 註冊
// 2. 建立一個 form
// 　　(隨便取名沒差)
// 　　(domain name 填 localhost 就好)
// 3. 就會拿到 Form Access Key 了 -> 填到底下
const myKey = "b5d75dd5-63b4-44df-b2b6-be85824c42dc";


