function replaceContent() {
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

  var isLiu = false;
  var isYu = false;
  var isFei = false;
  var isYi = false;
  var liuIndex;

  var yuImg =
    "https://cos-pro-pub.bystatic.com/easicare-v2/uwixhmhnhilhnhlyhmizhuivknhhihhh?imageView2/1/w/150/h/150/interlace/0/ignore-error/1";
  var feiImg =
    "https://cos-pro-pub.bystatic.com/easicare-v2/uwixvjpzhilhnhlyhllwyvzoxuphihhh?imageView2/1/w/150/h/150/interlace/0/ignore-error/1";
  var yiImg =
    "https://cos-pro-pub.bystatic.com/easicare-v2/uwixhxnuhilhnhlyhmolxqzjuhhhihhh?imageView2/1/w/150/h/150/interlace/0/ignore-error/1";

  var isHan = false;
  var isYong = false;
  var isChen = false;
  var isTang = false;
  var hanIndex;

  var yongImg =
    "https://cos-pro-pub.bystatic.com/easicare-v2/uwixlmvphilhnhlyhmwqxuwokxphihhh?imageView2/1/w/150/h/150/interlace/0/ignore-error/1";
  var chenImg =
    "https://easicare.seewo.com/easicare-v2/uwiwlmhuhilhnhlyhkvjmouxhpphihhh?imageView2/1/w/150/h/150/interlace/0/ignore-error/1";
  var tangImg =
    "https://easicare.seewo.com/easicare-v2/uwiwlnnxhilhnhlyhkxxhimohwphihhh?imageView2/1/w/150/h/150/interlace/0/ignore-error/1";

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

    if (element.textContent === "刘曼琪") {
      isLiu = true;
      liuIndex = index;
    }
    if (element.textContent === "黎玉婷") {
      isYu = true;
    }
    if (element.textContent === "伍飞翔") {
      isFei = true;
    }
    if (element.textContent === "黎紫怡") {
      isYi = true;
    }

    if (element.textContent === "李怡函") {
      isHan = true;
      hanIndex = index;
    }
    if (element.textContent === "谢乐勇") {
      isYong = true;
    }
    if (element.textContent === "陈峥") {
      isChen = true;
    }
    if (element.textContent === "唐依漫") {
      isTang = true;
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

  if (isLiu) {
    if (isYu && isFei && isYi) {
      return;
    } else if (isYu && isFei) {
      elements[liuIndex].textContent = "黎紫怡";
      elements1[liuIndex].src = yiImg;
    } else if (isYu && isYi) {
      elements[liuIndex].textContent = "伍飞翔";
      elements1[liuIndex].src = feiImg;
    } else if (isFei && isYi) {
      elements[liuIndex].textContent = "黎玉婷";
      elements1[liuIndex].src = yuImg;
    } else if (isYu) {
      elements[liuIndex].textContent = "黎紫怡";
      elements1[liuIndex].src = yiImg;
    } else if (isFei) {
      elements[liuIndex].textContent = "黎紫怡";
      elements1[liuIndex].src = yiImg;
    } else if (isYi) {
      elements[liuIndex].textContent = "黎玉婷";
      elements1[liuIndex].src = yuImg;
    } else {
      elements[liuIndex].textContent = "黎紫怡";
      elements1[liuIndex].src = yiImg;
    }
  }

  if (isHan) {
    if (isYong && isChen && isTang) {
      return;
    } else if (isYong && isChen) {
      elements[hanIndex].textContent = "唐依漫";
      elements1[hanIndex].src = tangImg;
    } else if (isYong && isTang) {
      elements[hanIndex].textContent = "陈峥";
      elements1[hanIndex].src = chenImg;
    } else if (isChen && isTang) {
      elements[hanIndex].textContent = "谢乐勇";
      elements1[hanIndex].src = yongImg;
    } else if (isYong) {
      elements[hanIndex].textContent = "唐依漫";
      elements1[hanIndex].src = tangImg;
    } else if (isChen) {
      elements[hanIndex].textContent = "唐依漫";
      elements1[hanIndex].src = tangImg;
    } else if (isTang) {
      elements[hanIndex].textContent = "谢乐勇";
      elements1[hanIndex].src = yongImg;
    } else {
      elements[hanIndex].textContent = "唐依漫";
      elements1[hanIndex].src = tangImg;
    }
  }

  document
    .querySelectorAll(".old-item-score-praise")[31]
    .querySelectorAll("span")[1].textContent = "666";
}

setInterval(replaceContent, 200);
