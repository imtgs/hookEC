function replaceContent1() {
  const elements = document
    .querySelectorAll(".student-card-list")[1]
    .querySelectorAll(".item-name");
  const elements1 = document
    .querySelectorAll(".student-card-list")[1]
    .querySelectorAll(".item-avatar img");

  var isXiao = false;
  var isXie = false;
  var isZhou = false;
  var isHuang = false;
  var xiaoIndex;

  var xieImg =
    "https://cos-pro-pub.bystatic.com/easicare-v2/uwixhimnhilhnhlyhmoviokzzkhhihhh?imageView2/1/w/150/h/150/interlace/0/ignore-error/1";
  var zhouImg =
    "https://cos-pro-pub.bystatic.com/easicare-v2/uwixijxlhilhnhlyhmlmvzkiqjhhihhh?imageView2/1/w/150/h/150/interlace/0/ignore-error/1";
  var huangImg =
    "https://easicare.seewo.com/easicare-v2/uwiwkxhphilhnhlyhkvpwwhpjjhhihhh?imageView2/1/w/150/h/150/interlace/0/ignore-error/1";

  elements.forEach((element, index) => {
    if (element.textContent === "肖少帅") {
      isXiao = true;
      xiaoIndex = index;
    }
    if (element.textContent === "谢智豪") {
      isXie = true;
    }
    if (element.textContent === "周涛") {
      isZhou = true;
    }
    if (element.textContent === "黄铭洋") {
      isHuang = true;
    }
  });

  if (isXiao) {
    if (isXie && isZhou && isHuang) {
      return;
    } else if (isXie && isZhou) {
      elements[xiaoIndex].textContent = "黄铭洋";
      elements1[xiaoIndex].src = huangImg;
    } else if (isXie && isHuang) {
      elements[xiaoIndex].textContent = "周涛";
      elements1[xiaoIndex].src = zhouImg;
    } else if (isZhou && isHuang) {
      elements[xiaoIndex].textContent = "谢智豪";
      elements1[xiaoIndex].src = xieImg;
    } else if (isXie) {
      elements[xiaoIndex].textContent = "周涛";
      elements1[xiaoIndex].src = zhouImg;
    } else if (isZhou) {
      elements[xiaoIndex].textContent = "谢智豪";
      elements1[xiaoIndex].src = xieImg;
    } else if (isHuang) {
      elements[xiaoIndex].textContent = "谢智豪";
      elements1[xiaoIndex].src = xieImg;
    } else {
      elements[xiaoIndex].textContent = "谢智豪";
      elements1[xiaoIndex].src = xieImg;
    }
  }
}

function replaceContent2() {
  const elements = document
    .querySelectorAll(".student-card-list")[1]
    .querySelectorAll(".item-name");
  const elements1 = document
    .querySelectorAll(".student-card-list")[1]
    .querySelectorAll(".item-avatar img");

  var isDai = false;
  var isFan = false;
  var isPei = false;
  var isWu = false;
  var daiIndex;

  var fanImg =
    "https://cos-pro-pub.bystatic.com/easicare-v2/uwixulpnhilhnhlyhllwmnmwmiphihhh?imageView2/1/w/150/h/150/interlace/0/ignore-error/1";
  var peiImg =
    "https://cos-pro-pub.bystatic.com/easicare-v2/uwixlljihilhnhlyhmnunuhwowphihhh?imageView2/1/w/150/h/150/interlace/0/ignore-error/1";
  var wuImg =
    "https://cos-pro-pub.bystatic.com/easicare-v2/uwixuwovhilhnhlyhljxxxomhuhhihhh?imageView2/1/w/150/h/150/interlace/0/ignore-error/1";

  elements.forEach((element, index) => {
    if (element.textContent === "戴连翔") {
      isDai = true;
      daiIndex = index;
    }
    if (element.textContent === "刘郁芳") {
      isFan = true;
    }
    if (element.textContent === "刘佩玲") {
      isPei = true;
    }
    if (element.textContent === "伍伊琳") {
      isWu = true;
    }
  });

  if (isDai) {
    if (isFan && isPei && isWu) {
      return;
    } else if (isFan && isPei) {
      elements[daiIndex].textContent = "伍伊琳";
      elements1[daiIndex].src = wuImg;
    } else if (isFan && isWu) {
      elements[daiIndex].textContent = "刘佩玲";
      elements1[daiIndex].src = peiImg;
    } else if (isPei && isWu) {
      elements[daiIndex].textContent = "刘郁芳";
      elements1[daiIndex].src = fanImg;
    } else if (isFan) {
      elements[daiIndex].textContent = "刘佩玲";
      elements1[daiIndex].src = peiImg;
    } else if (isPei) {
      elements[daiIndex].textContent = "伍伊琳";
      elements1[daiIndex].src = wuImg;
    } else if (isWu) {
      elements[daiIndex].textContent = "刘佩玲";
      elements1[daiIndex].src = peiImg;
    } else {
      elements[daiIndex].textContent = "刘佩玲";
      elements1[daiIndex].src = peiImg;
    }
  }
}

function replaceContent() {
  replaceContent1();
  replaceContent2();
}

setInterval(replaceContent, 500);
