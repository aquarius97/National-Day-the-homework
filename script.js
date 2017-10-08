// 1》实现深拷贝
var Chinese = {　　
    nation: '中国'
}
var Doctor = {　　
    career: '医生'
}　
function deepCopy(p, c) {　　　　
    var c = c || {};　　　　
    for (var i in p) {　　　　　　
        if (typeof p[i] === 'object') {　　　　　　　　
            c[i] = (p[i].constructor === Array) ? [] : {};　　　　　　　　
            deepCopy(p[i], c[i]);　　　　　　
        } else {　　　　　　　　　 c[i] = p[i];　　　　　　 }　　　　
    }　　　　
    return c;　　
}

Chinese.birthPlaces = ['北京', '上海', '香港'];
var Doctor = deepCopy(Chinese);
Doctor.birthPlaces.push('厦门');


alert(Chinese.birthPlaces); //北京, 上海, 香港
alert(Doctor.birthPlaces); //北京, 上海, 香港, 厦门