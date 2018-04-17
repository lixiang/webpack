export const timeout = 10000

const isProduction = process.env.NODE_ENV === 'production'
export const baseURL = isProduction ? '生产url' : '测试url'
