<template>
  <div class="-mt-[80px] min-h-screen w-full bg-center bg-cover flex" style="background-image: url(/apps.webp);">
    <div class="min-h-screen w-full flex flex-col justify-center items-center relative p-4">
      <div class="absolute w-full h-full bg-opacity-60 bg-neutral"></div>
      <div class="max-w-lg w-full flex flex-shrink">
        <div class="overflow-x-auto flex-shrink">
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
const ulogger = { name: 'ULogger', links: [{ name: "Web", url: "https://ulogger.mehmetuysal.dev" }, { name: "Types (Deprecated)", url: "https://github.com/uys2000-projects/Types-Ulogger" }, { name: "Github", url: "https://github.com/uys2000-projects/ULogger" }] }
const umorse = { name: 'UMorse', links: [{ name: "Web", url: "https://umorse.mehmetuysal.dev" }, { name: "Play Store", url: "https://play.google.com/store/apps/details?id=com.uys2000.umorse&pcampaignid=web_share" }, { name: "Extension", url: "https://chromewebstore.google.com/detail/umorse-morse-code/fgmklgmobnpdkeaohelamfccalnnkpbe" }, { name: "Github", url: "https://github.com/uys2000-projects/UMorse" }] }
const uplayer = { name: 'UPlayer', links: [{ name: "Web", url: "https://uplayer.mehmetuysal.dev" }, { name: "Play Store", url: "https://play.google.com/store/apps/details?id=com.uys2000.uplayer&pcampaignid=web_share" }, { name: "Desktop", url: "https://github.com/uys2000-projects/uplayer-mehmetuysal-dev-desktop/releases" }, { name: "Github", url: "https://github.com/uys2000-projects/uplayer-mehmetuysal-dev-desktop" }] }
const ulink = { name: 'ULink', links: [{ name: "Web", url: "https://ulink.mehmetuysal.dev" }, { name: "Github Functions", url: "https://github.com/uys2000-websites/ulink-mehmetuysal-dev-functions" }, { name: "Github", url: "https://github.com/uys2000-websites/ulink-mehmetuysal-dev" }] }
export default {
  data() {
    return {
      apps: [
        ulogger,
        umorse,
        uplayer,
        ulink
      ] as Array<{ name: string, links: Array<{ name: string, url: string }> }>
    }
  }
}
</script>