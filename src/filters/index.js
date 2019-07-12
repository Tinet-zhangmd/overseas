export function parseTime(time, cFormat) {


  if (arguments.length === 0) {
    return null;
  }
  if (time === undefined || time === null)
    return '';

  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  let date;
  if (typeof time == 'object') {
    date = time;
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000;

    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1];
    if (result.length > 0 && value < 10) {
      value = '0' + value;
    }
    return value || 0;
  });
  return time_str;
}
export function formatMoney(value) {
  if (value) {
    return (value / 100).toFixed(2);
  } else {
    return '0.00';
  }
}
export function forma(value) {
  if (value) {
    return (value * 100).toFixed(2);
  } else {
    return '0.0';
  }
}
export function forma1(value) {
  // console.log("value==",value);
  if (value) {
    // console.log("1111");
    return value.toFixed(2);
  } else {
    // console.log("2222");
    return '0.00';
  }
}
// 银行卡返回后四位
export function formaBank(value) {
  if (value) {
    return value.substr(-4);
  }
}
export function formatTime(value, that, params, startName, endName) {
  if (value) {
    let start = value.match(/(\S*)至/)[1];
    let end = value.match(/至(\S*)/)[1];
    if (params) {
      that[params][startName] = start;
      that[params][endName] = end;
    } else {
      that[startName] = start;
      that[endName] = end;
    }
  } else {
    if (params) {
      that[params][startName] = '';
      that[params][endName] = '';
    } else {
      that[startName] = '';
      that[endName] = '';
    }
  }
}
export function formatDate(value) {
  if (value) {
    return value.split(" ")[0];
  }
}
export function getAge(identityCard) {
  if (identityCard) {
    var len = (identityCard + "").length;
    if (len == 0) {
      return 0;
    } else {
      if ((len != 15) && (len != 18)) //身份证号码只能为15位或18位其它不合法
      {
        return 0;
      }
    }
    var strBirthday = "";
    if (len == 18) //处理18位的身份证号码从号码中得到生日和性别代码
    {
      strBirthday = identityCard.substr(6, 4) + "/" + identityCard.substr(10, 2) + "/" + identityCard.substr(12, 2);
    }
    if (len == 15) {
      strBirthday = "19" + identityCard.substr(6, 2) + "/" + identityCard.substr(8, 2) + "/" + identityCard.substr(10, 2);
    }
    //时间字符串里，必须是“/”
    var birthDate = new Date(strBirthday);
    var nowDateTime = new Date();
    var age = nowDateTime.getFullYear() - birthDate.getFullYear();
    //再考虑月、天的因素;.getMonth()获取的是从0开始的，这里进行比较，不需要加1
    if (nowDateTime.getMonth() < birthDate.getMonth() || (nowDateTime.getMonth() == birthDate.getMonth() && nowDateTime.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  } else {
    return '';
  }

}

//手机号码脱敏显示
export function phoneFilter(val) {
  if (val) {
    let value = val.toString();
    return value.substr(0, 3) + '****' + value.substr(7);

  }
}
//手机号码脱敏显示
export function niceCommentRateFilter(val) {
  if (val) {
    let value = val.toString();
    return value.split('%')[0] / 10;

  }
}

//截取8位
export function hamp(val) {
  if (val) {
    let value = val.toString();
    return value.substr(0, 9)
  }
}

//截取时间
export function timeFilter(val) {
  if (val) {
    let value = val.toString();
    return value.substr(0, 10)
  }
}

// 分割规格
export function modifyString(value) {
  value = value.replace('<!--EndFragment-->', "");
  value = value.replace('<!--StartFragment-->', "");
  return value;
}

// 分割规格
// "2019-07-08T16:00:00.000Z"
export function modifyTime(time) {
  time = time.substr(0, 19)
  time = time.replace('T', " ");
  return time;
}
