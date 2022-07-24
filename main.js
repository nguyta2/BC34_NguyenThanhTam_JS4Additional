// 1. Ngày, tháng năm
var day = 0;
var month = 0;
var year = 0;
var lastDay = 0;

function getInput() {
  day = document.getElementById("day").value * 1;
  month = document.getElementById("month").value * 1;
  year = document.getElementById("year").value * 1;
}

function findLastDay(day_in, month_in) {
  if (day_in === 1) {
    if (month_in != 1) {
      month--;
    } else {
      month = 12;
    }

    if (getDaysInMonth(month_in) === 31 && month_in != 1 && month_in != 8) {
      day = 30;
    } else {
      day = 31;
    }

    if (month_in === 1) {
      year--;
    }
  } else {
    day--;
  }
}

function findNextDay(day_in, month_in) {
  if (month_in === 2) {
    if (day_in === 28) {
      month++;
      day = 1;
    } else {
      day++;
    }
  } else {
    if (day_in === getDaysInMonth(month_in)) {
      month++;
      day = 1;

      if (month_in === 12) {
        month = 1;
        day = 1;
        year++;
      }
    } else {
      day++;
    }
  }
}

function getDaysInMonth(month_in) {
  if (
    month_in === 1 ||
    month_in === 3 ||
    month_in === 5 ||
    month_in === 7 ||
    month_in === 8 ||
    month_in === 10 ||
    month_in === 12
  ) {
    return 31;
  } else if (month_in === 2) {
    return 28;
  } else {
    return 30;
  }
}

document.getElementById("btnLastDay").onclick = function () {
  // input
  getInput();

  // process
  findLastDay(day, month);

  // output
  var output = "";
  output = day + "/" + month + "/" + year;
  document.getElementById("announce").innerHTML = output;
};

document.getElementById("btnNextDay").onclick = function () {
  // input
  getInput();

  // process
  findNextDay(day, month);

  // output
  var output = "";
  output = day + "/" + month + "/" + year;
  document.getElementById("announce").innerHTML = output;
};

// 2. Viết chương trình nhập vào tháng, năm. Cho biết tháng đó có bao nhiêu ngày
function checkLeapYear(year_in) {
  var isLeapYear = false;
  if ((year_in % 4 === 0 && year_in % 100 != 0) || year_in % 400 === 0) {
    isLeapYear = true;
  }
  return isLeapYear;
}
document.getElementById("btnCalcDay").onclick = function () {
  // input
  var month_2 = document.getElementById("month_2").value * 1;
  var year_2 = document.getElementById("year_2").value * 1;
  var days = 0;
  // process
  days = getDaysInMonth(month_2);
  if (month_2 === 2 && checkLeapYear(year_2)) {
    days = 29;
  }

  // output
  var output =
    "<p>Tháng " + month_2 + " năm " + year_2 + " có " + days + " ngày</p>";
  document.getElementById("announceDays").innerHTML = output;
};

// 3. Viết chương trình nhập vào số nguyên có 3 chữ số. In ra cách đọc nó.
function readNumber(num_in) {
  switch (num_in) {
    case 1:
      return "một";
    case 2:
      return "hai";
    case 3:
      return "ba";
    case 4:
      return "bốn";
    case 5:
      return "năm";
    case 6:
      return "sáu";
    case 7:
      return "bảy";
    case 8:
      return "tám";
    case 9:
      return "chín";
    default:
      alert("invalid");
  }
}
document.getElementById("btnReadNumber").onclick = function () {
  // input
  var number = document.getElementById("num_3").value * 1;

  // process
  var hundreds = Math.floor(number / 100);
  var tens = Math.floor((number % 100) / 10);
  var units = number % 10;

  // output
  var output = "";
  ouput =
    readNumber(hundreds) +
    " trăm " +
    readNumber(tens) +
    " mươi " +
    readNumber(units);
  document.getElementById("announceNumber").innerHTML = ouput;
};

// 4. Cho biết tên và tọa độ nhà của 3 sinh viên. Cho biết tọa độ của trường đại học. Viết chương
//trình in tên sinh viên xa trường nhất.
function calcDistance(x_in, y_in, xSchool_in, ySchool_in) {
  return Math.sqrt(
    Math.pow(xSchool_in - x_in, 2) + Math.pow(ySchool_in - y_in, 2)
  );
}

function findBiggest(a, b, c, name1_in, name2_in, name3_in) {
  var biggest = a;
  var result = name1_in;

  if (b > a) {
    biggest = b;
    result = name2_in;
  }

  if (c > biggest) {
    biggest = c;
    result = name3_in;
  }
  return result;
}
document.getElementById("btnCalcDistance").onclick = function () {
  // input
  var name1 = document.getElementById("name1").value;
  var x1 = document.getElementById("x1").value * 1;
  var y1 = document.getElementById("y1").value * 1;
  var name2 = document.getElementById("name2").value;
  var x2 = document.getElementById("x2").value * 1;
  var y2 = document.getElementById("y2").value * 1;
  var name3 = document.getElementById("name3").value;
  var x3 = document.getElementById("x3").value * 1;
  var y3 = document.getElementById("y3").value * 1;
  var xSchool = document.getElementById("xSchool").value * 1;
  var ySchool = document.getElementById("ySchool").value * 1;
  // process
  var distance1 = calcDistance(x1, y1, xSchool, ySchool);
  var distance2 = calcDistance(x2, y2, xSchool, ySchool);
  var distance3 = calcDistance(x3, y3, xSchool, ySchool);
  var farest = findBiggest(
    distance1,
    distance2,
    distance3,
    name1,
    name2,
    name3
  );

  // output
  var output = "Sinh viên xa trường nhất: " + farest;
  document.getElementById("announceDistance").innerHTML = output;
};
