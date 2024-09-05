<template>
  <div class="hero min-h-screen -mt-[80px]" style="background-image: url(/apps.webp);">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-neutral-content text-center">
      <div class="max-w-lg">
        <div class="overflow-x-auto w-full">
          <table class="table bg-black bg-opacity-40">
            <thead>
              <tr>
                <th class="text-neutral-content">#</th>
                <th class="text-neutral-content">App Name</th>
                <th class="text-neutral-content" colspan="3">Links</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="app, index in apps">
                <tr>
                  <th>{{ index + 1 }}</th>
                  <td>{{ app.name }}</td>
                  <template v-for="link in app.links">
                    <td><a class="link" :href="link.url" target="_blank">{{ link.name }}</a></td>
                  </template>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
const ulogger = { name: 'ULogger', links: [{ name: "Web", url: "https://ulogger.mehmetuysal.dev" }, { name: "Types", url: "https://github.com/uys2000-projects/Types-Ulogger" }, { name: "Github", url: "https://github.com/uys2000-projects/ULogger" }] }
const umorse = { name: 'UMorse', links: [{ name: "Web", url: "https://umorse.mehmetuysal.dev" }, { name: "Play Store", url: "https://play.google.com/store/apps/details?id=com.uys2000.umorse&hl=tr&pli=1" }, { name: "Extension", url: "https://chromewebstore.google.com/detail/umorse-morse-code/fgmklgmobnpdkeaohelamfccalnnkpbe" }, { name: "Github", url: "https://github.com/uys2000-projects/UMorse" }] }
const uplayer = { name: 'UPlayer', links: [{ name: "Web", url: "https://uplayer.mehmetuysal.dev" }, { name: "Windows", url: "https://github.com/uys2000-projects/UPlayer/releases" }, { name: "Linux", url: "https://github.com/uys2000-projects/UPlayer/releases" }, { name: "Github", url: "https://github.com/uys2000-projects/UPlayer" }] }
export default {
  data() {
    return {
      apps: [
        ulogger,
        umorse, uplayer
      ] as Array<{ name: string, links: Array<{ name: string, url: string }> }>
    }
  }
}
</script>