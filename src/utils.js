// 精确判断对象的类型
export const getType = (v) => {
  return Object.prototype.toString.call(v);
}

// 格式化字符串 fontSize => font-size
export const toKebab = (v) => v.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

// 判断数组
export const isArray = (v) => {
  return getType(v) === '[object Array]';
}

// 判断对象
export const isObject = (v) => {
  return getType(v) === '[object Object]';
}

export const numberFormat = (val, digits = 2) => {
  if (isNaN(+val)) return val

  let symbolMap = [
    { value: 1E18, symbol: 'E' },
    { value: 1E15, symbol: 'P' },
    { value: 1E12, symbol: 'T' },
    { value: 1E9, symbol: 'B' },
    { value: 1E6, symbol: 'M' },
    { value: 1E3, symbol: 'k' }
  ]

  for (let i = 0; i < symbolMap.length; i++) {
    if (Math.abs(val) >= symbolMap[i].value) {
      return (val / symbolMap[i].value).toFixed(digits) + symbolMap[i].symbol
    }
  }

  return val.toString()
}

export const formatTausends = (num) => {
  return String(num).replace(/^(\s+|-)?\d+(?=.?\d*($|\s))/g, (m) => {
    return m.replace(/(?=(?!\b)(\d{3})+$)/g, ',')
  })
}

export const getFormated = (val, type, digit = 2, defaultVal = '-') => {
  if (val == null || isNaN(val)) return defaultVal
  switch (type) {
    case 'KMB': return numberFormat(val)
    case 'percent': return `${parseFloat((val * 100).toFixed(digit))}%`
    case 'normal': return formatTausends(val)
    default: return val
  }
}

export const getLineKB = (s, v) => {
  const result = []
  result[0] = (s[1] - s[0]) / (v[1] - v[0])
  result[1] = s[0] - result[0] * v[0]
  return result
}

export const getStackMap = (stack) => {
  const stackMap = {}
  Object.keys(stack).forEach(item => {
    stack[item].forEach(name => {
      stackMap[name] = item
    })
  })
  return stackMap
}

export const $get = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.send(null)
    xhr.onload = () => {
      resolve(JSON.parse(xhr.responseText))
    }
    xhr.onerror = () => {
      reject(JSON.parse(xhr.responseText))
    }
  })
}

const mapPromise = {}

export const getMapJSON = ({
  position,
  positionJsonLink,
  beforeRegisterMapOnce,
  mapURLProfix
}) => {
  const link = positionJsonLink || `${mapURLProfix}${position}.json`
  if (!mapPromise[link]) {
    mapPromise[link] = $get(link).then(res => {
      if (beforeRegisterMapOnce) res = beforeRegisterMapOnce(res)
      return res
    })
  }
  return mapPromise[link]
}

let bmapPromise = null
let amapPromise = null

export const getBmap = (key, v) => {
  if (!bmapPromise) {
    bmapPromise = new Promise((resolve, reject) => {
      const callbackName = `bmap${Date.now()}`
      window[callbackName] = resolve
      const script = document.createElement('script')
      script.src = [
        `https://api.map.baidu.com/api?v=${v || '2.0'}`,
        `ak=${key}`,
        `callback=${callbackName}`
      ].join('&')

      document.body.appendChild(script)
    })
  }
  return bmapPromise
}

export const getAmap = (key, v) => {
  if (!amapPromise) {
    amapPromise = new Promise((resolve, reject) => {
      const callbackName = `amap${Date.now()}`
      window[callbackName] = resolve
      const script = document.createElement('script')
      script.src = [
        `https://webapi.amap.com/maps?v=${v || '1.4.3'}`,
        `key=${key}`,
        `callback=${callbackName}`
      ].join('&')

      document.body.appendChild(script)
    })
  }
  return amapPromise
}

export const clone = (v) => JSON.parse(JSON.stringify(v))