export const isBoolean = val => typeof val === 'boolean'

export const isEmpty = val => val == null || !(Object.keys(val) || val).length

export const isFunction = val => typeof val === 'function'

export const isNil = val => val === undefined || val === null

export const isNull = val => val === null

export const isNumber = val => typeof val === 'number'

export const isObject = obj => obj === Object(obj)

export const isString = val => typeof val === 'string'

export const isSymbol = val => typeof val === 'symbol'

export const isUndefined = val => val === undefined

export const isValidJSON = obj => {
  try {
    JSON.parse(obj)
    return true
  } catch (e) {
    return false
  }
}
