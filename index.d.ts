declare module '#app' {
  interface NuxtApp {
    $print (msg: string): string
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $paring (msg: string): string
  }
}

export {}