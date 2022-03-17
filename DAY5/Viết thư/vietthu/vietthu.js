let content = " thương nhớ,<br/>"+
"Em không biết phải nói sao để anh hiểu rằng, em nhớ anh thật nhiều. Em yêu anh đến <br/> "+
"trái tim này tan thành nghìn mảnh. Tất cả những gì em yêu thương, em khát khao và cần <br/>"+
"đến, chính là anh, mãi mãi về sau. Em chỉ muốn ở bên anh, và anh yêu hỡi, em sẽ trở thành <br/>"+
"người phụ nữ như anh mong muốn.<br/>"+
"Có phải em thật tệ hại, khi cứ nghĩ đến anh thật nhiều, thật lâu và nhất là mỗi khi đêm<br/>"+
"xuống? Em hứa sẽ sẽ cố gắng triệu triệu lần hơn thế. Nhưng hơn tất cả, em chỉ mong một<br/>"+
"ngày nào đó, anh sẽ tự hào về em, như tự hào về vợ của anh, và mẹ của các con anh (ít<br/>"+
"nhất là 2 nhé, em vừa mới quyết định đấy!). Em nhớ thật nhiều cảm giác mỗi đêm anh ôm<br/>"+
"em và ru em ngủ trong vòng tay. Đêm nay, em chỉ muốn được gần bên anh… và anh biết<br/>"+
"không, trái tim em đang đau đớn đến nhường nào.<br/>"+
"Anh yêu thương, đừng bao giờ rời xa em nữa nhé. Yêu anh rất nhiều.<br/><br/>";
let receive = prompt("Nhập tên người nhận");
let place = prompt("Nhập địa điểm gửi");
let sendDate = parseInt(prompt("Nhập ngày gửi"));
let sendMonth = parseInt(prompt("Nhập ngày gửi"));
let sendYear = parseInt(prompt("Nhập năm gửi"));
let time = "Ngày "+sendDate+" tháng "+sendMonth+" năm "+sendYear;
let letture = receive + content + place+ time;
document.write(letture);