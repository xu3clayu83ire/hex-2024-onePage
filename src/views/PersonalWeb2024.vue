<template>
  <div class="personalWeb2024">
    <prHeader />
    <prBanner />
    <prIntroduction />
    <prAboutMe />
    <prContactMe />
    <prProjects />
    <prFooter />
  </div>
</template>

<script setup>
  import prHeader from "@/components/PersonalWeb2024/header.vue";
  import prBanner from "@/components/PersonalWeb2024/banner.vue";
  import prIntroduction from "@/components/PersonalWeb2024/introduction.vue";
  import prAboutMe from "@/components/PersonalWeb2024/aboutme.vue";
  import prContactMe from "@/components/PersonalWeb2024/contactme.vue";
  import prProjects from "@/components/PersonalWeb2024/projects.vue";
  import prFooter from "@/components/PersonalWeb2024/footer.vue";
</script>

<style scoped>
  .personalWeb2024 {
    font-family: "Bruno Ace SC", sans-serif;
  }
</style>