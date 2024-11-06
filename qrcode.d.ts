declare module 'qrcode' {
  export function toDataURL(
    text: string,
    options?: any
  ): Promise<string>;
  export function toCanvas(
    canvas: HTMLCanvasElement,
    text: string,
    options?: any
  ): Promise<void>;
  // Add more exports if needed, based on the qrcode module API
}
