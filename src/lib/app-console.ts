/* eslint-disable no-console */
const isDev = process.env.NODE_ENV !== 'production'

export const appConsole = {
  log(...messages: any[]) {
    if (isDev) {
      console.log(...messages)
    }
  },
  warn(...messages: any[]) {
    if (isDev) {
      console.warn(...messages)
    }
  },
  error(...messages: any[]) {
    if (isDev) {
      console.error(...messages)
    }
  },
}
