// 배열에 알파벳 대문자 저장
let alphabet = new Array(26);
let char = 'A';

// 아스키 코드를 찾는 함수 - 객체.charCodeAt()
// char = char.charCodeAt(0); // 0번 인덱스에 저장
// console.log(char); // code - 65(ASCII-아스키코드)

// char++; // char = char + 1
// console.log(char); // 66

// // 문자로 출력해주는 함수 String.fromCharCode(ch)
// console.log(String.fromCharCode(char))

// 배열에 저장(입력)
/*
   alphabet[0] = ch
   alphabet[1] = ch+1
   alphabet[2] = ch+2
*/
for(var i=0; i<alphabet.length; i++){
     alphabet[i] = char;
     char++;
     console.log(alphabet[i]);
}

// 출력
for(var i=0; i<alphabet.length; i++){
     document.write(alphabet[i] + ", " + StringCharCode(alphabet[i]));
}
