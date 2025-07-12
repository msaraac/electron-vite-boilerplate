import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', {
      ...electronAPI,
      store: {
        get(key: string) {
          return ipcRenderer.sendSync('electron-store-get', key)
        },
        set(property: string, val: never) {
          ipcRenderer.send('electron-store-set', property, val)
        },
        reset() {
          ipcRenderer.send('electron-store-reset')
        },
        delete(key: string) {
          ipcRenderer.send('electron-store-delete', key)
        }
      }
    })
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
