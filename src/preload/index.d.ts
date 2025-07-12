import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI & {
      store: {
        get(key: string): string | null
        set(property: string, val: unknown): void
        reset(): void
        delete(key: string): void
      }
    }
    api: unknown

  }
}
