// for(i=0;i<5;i++) {
//     for(j=0;j<=i;j++) {
//         document.writeln(" * ")
//     }
//     document.writeln("<br/>")
// }
// document.writeln("<br/>");
// document.writeln("<br/>");
// document.writeln("<br/>");
// 	for(i=4;i>=0;i--) {
// 		for(j=0;j<=i;j++) {
// 			document.writeln(" * ")
// 		}
// 		document.writeln("<br/>")
// 	}
//     document.writeln("<br/>");
//     document.writeln("<br/>");
//     document.writeln("<br/>");
//     for(i=0;i<5;i++) {
//         for(m=5;m>0;m--){
//             document.writeln("&nbsp&nbsp")
//         }
//         for(j=0;j<=i;j++) {
//             document.writeln(" * ")
//         }
//         document.writeln("<br/>")
//     }
//     document.writeln("<br/>");
//     document.writeln("<br/>");
//     document.writeln("<br/>");
//     for(i=4;i>=0;i--) {
// 		for(j=0;j<=i;j++) {
// 			document.write(" * ")
// 		}
// 		document.write("<br/>")
// 	}
//     document.writeln("<br/>");
//     document.writeln("<br/>");
//     document.writeln("<br/>");
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (i > num) {
            document.write("*");
        } else {
            document.write("&nbsp;&nbsp;");
        }
    }
    document.write("<br>");
}