// 1.1 다음 값의 평균을 구하세요.
const arr = [10, 20, 30, 10, 20, 30, 40, 10];
function avg(){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    let avgResult = sum / arr.length;
    return avgResult;
}

// 1.2 다음 값의 분산를 구하세요.
const arr = [10, 20, 30, 10, 20, 30, 40, 10];
function disp(){
    let sum =0;
    for(let i = 0;i<arr.length;i++){
        sum+=(arr[i]-avg())**2
    }
    let dispResult = sum/arr.length;
        return dispResult;
}

// 2. 다음 string의 평균 값을 구하세요
// hint code : '5, 4, 10, 2, 5'.split(',')
let arr = '5, 4, 10, 2, 5'.split(',');
function strAvg(){
    let sum =0;
    for(let i=0;i<arr.length;i++){
        sum +=Number(arr[i].trim())
    }
    let result = sum/arr.length;
    return result;
}

// 3. 다음 array의 각 자리수의 합을 구하세요.
// hint 문자열로 변환해서 풀어주세요!
let arr = [11, 22, 33, 111, 2];

// 1+1, 2+2, 3+3, 1+1+1, 2
// 2, 4, 6, 3, 2
// 정답 : 17

function strSum(){
    for(let i=0;i<arr.length;i++){
        let str = String(arr[i])
        str[i]
    }
}
// 4. 연습문제 3
// - 반복문만 사용하여 숫자단위 콤마 찍기(예 - 1,000,000)
// - 반복문만 사용하여 숫자단위 콤마 없애기(예 - 1,000,000 → 1000000)
// - 문자열 뒤집기
function flip(){
    let sum = '';
    for(let i=str.length-1;i>=0;i--){
        sum+=str[i]
    }
    return sum;
}

// 5. 로또 만들기
// 로또번호를 추첨하는 코드를 작성해주세요.

function lotto(){
    let arr = [];
    for(let i = 0; i <6;i++){
        arr.push(parseInt(Math.random()*36+1))
    }
    return arr;
}

// 6. JSON 데이터 가공
// - 다음 데이터를 가지고 table을 생성해주세요.
// - 버튼을 눌렀을 때 나이의 평균을 구하는 기능을 구현해주세요.
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <style>
        table,
        thead,
        tbody,
        tr,
        th,
        td {
            border:  solid 1px black;
            border-collapse: collapse;
        }
    </style>
</head>
<body>
    <button onclick="renderTable(userData)">회원정보 로딩</button>
    <button onclick="ageAvg(userData)">age 평균</button>
    <table style="width: 100%" id = "infoTable">
        <thead>
            <th>id</th>
            <th>age</th>
            <th>eyeColor</th>
            <th>name</th>
            <th>gender</th>
            <th>email</th>
            <th>phone</th>
        </thead>
        <tbody></tbody>
    </table>
    <script>
        let userData = [
    {
      "_id": "5e80777f673acf89c007ff91",
      "age": 27,
      "eyeColor": "green",
      "name": "Angelina Chang",
      "gender": "female",
      "email": "angelinachang@kangle.com",
      "phone": "+1 (938) 477-2821"
    },
    {
      "_id": "5e80777feee717674b817fd2",
      "age": 25,
      "eyeColor": "green",
      "name": "Deidre Cobb",
      "gender": "female",
      "email": "deidrecobb@kangle.com",
      "phone": "+1 (938) 477-2824"
    },
    {
      "_id": "5e80777fac368a4578dda85d",
      "age": 25,
      "eyeColor": "blue",
      "name": "Jolene Franks",
      "gender": "female",
      "email": "jolenefranks@kangle.com",
      "phone": "+1 (985) 536-3981"
    },
    {
      "_id": "5e80777ff3717874cbc78e44",
      "age": 31,
      "eyeColor": "brown",
      "name": "Waters Hardin",
      "gender": "male",
      "email": "watershardin@kangle.com",
      "phone": "+1 (938) 559-2224"
    },
    {
      "_id": "5e80777fe36842ea9e024fcd",
      "age": 34,
      "eyeColor": "green",
      "name": "Jody Chaney",
      "gender": "female",
      "email": "jodychaney@kangle.com",
      "phone": "+1 (878) 587-2602"
    },
    {
      "_id": "5e80777fafd591f57344eb33",
      "age": 31,
      "eyeColor": "green",
      "name": "Ortiz Maldonado",
      "gender": "male",
      "email": "ortizmaldonado@kangle.com",
      "phone": "+1 (986) 509-2753"
    },
    {
      "_id": "5e80777f20e48e9ada226862",
      "age": 25,
      "eyeColor": "brown",
      "name": "Stacy Burris",
      "gender": "female",
      "email": "stacyburris@kangle.com",
      "phone": "+1 (864) 577-3500"
    },
    {
      "_id": "5e80777faf334f84a2c90595",
      "age": 33,
      "eyeColor": "brown",
      "name": "Davenport Levy",
      "gender": "male",
      "email": "davenportlevy@kangle.com",
      "phone": "+1 (990) 600-2700"
    }
];


function ageAvg(userData){
    let sum = 0;
    for (let i=0;i<userData.length;i++){
        sum += userData[i]['age'];
    }
    let result = sum/userData.length;
    console.log(result);
    return result;
}

var click = true;

function sort(key) {
    if (click) {
        click = false;
        let sortedData = userData.sort((a, b) =>
            a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0
        );
        renderTable(sortedData);
    } else {
        click = true;
        let sortedData = userData.sort((a, b) =>
            a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0
        );
        renderTable(sortedData);
    }
}


function renderTable(userData){
    let tableBodyData = [];

    for (const user of userData) {
        tableBodyData.push(`
        <tr>
            <td>${user._id}</td>
            <td>${user.age}</td>
            <td>${user.eyeColor}</td>
            <td>${user.name}</td>
            <td>${user.gender}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
        </tr>
        `);
    }

    console.log(tableBodyData.join(""));
    document.querySelector("#infoTable > tbody").innerHTML = tableBodyData.join("")
}
    </script>
</body>
</html>