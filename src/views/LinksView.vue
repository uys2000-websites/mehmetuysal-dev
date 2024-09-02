<template>
  <div class="hero min-h-screen -mt-[80px]" style="background-image: url(/links.webp);">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-neutral-content text-center">
      <div class="max-w-lg">
        <div class="overflow-x-auto w-full">
          <table class="table bg-black bg-opacity-40">
            <thead>
              <tr>
                <th class="text-neutral-content">#</th>
                <th class="text-neutral-content">Name</th>
                <th class="text-neutral-content" colspan="3">Link</th>
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
const linkedin = { name: 'LinkedIn', links: [{ name: "link", url: "https://www.linkedin.com/in/uys2000" }] }
const github = { name: 'Github', links: [{ name: "link", url: "https://github.com/uys2000" },] }
const githubp = { name: 'Github Projects', links: [{ name: "link", url: "https://github.com/uys2000-projects" },] }
const githubw = { name: 'Github Web Sites', links: [{ name: "link", url: "https://github.com/uys2000-website" },] }
const githubt = { name: 'Github Templates', links: [{ name: "link", url: "https://github.com/uys2000-templates" },] }
export default {
  data() {
    return {
      apps: [
        linkedin,
        github,
        githubp,
        githubw,
        githubt
      ] as Array<{ name: string, links: Array<{ name: string, url: string }> }>
    }
  }
}
</script>