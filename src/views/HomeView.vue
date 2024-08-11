<template>

  <header></header>
  <!---->
  <div class="container py-5">
    <div class="row">
      <h1 class="mb-3">作業列表</h1>
      <div class="col-5">
        <ul class="list-group">
          <li class="list-group-item border-0">
            <!---->
            <div class="btn-group" role="group" aria-label="Basic outlined example">
              <RouterLink class="btn btn-outline-primary" :to="{ name: 'Resumes2024' }">
                2024-個人履歷
              </RouterLink>
              <a href="https://www.figma.com/design/eB5X8OYO4whPx3btCZdr3w/2023-%E5%88%87%E7%89%88%E5%A4%8F%E5%AD%A3%E7%8F%AD-W1---%E5%80%8B%E4%BA%BA%E5%B1%A5%E6%AD%B7?node-id=1-2&t=S19W1Dbf86wMDYes-0"
                class="btn btn-outline-primary">設計稿</a>
              <a href="https://github.com/hexschool/2022-web-layout-training/tree/main/2023week1"
                class="btn btn-outline-primary">圖片</a>
            </div>
            <!---->
          </li>
          <li class="list-group-item border-0">
            <!---->
            <div class="btn-group" role="group" aria-label="Basic outlined example">
              <RouterLink class="btn btn-outline-primary" :to="{ name: 'PersonalWeb2024' }">
                2024-個人網站
              </RouterLink>
              <a href="https://www.figma.com/design/7t6ft6HEHeWkpFs7OQrdKp/2023-%E5%88%87%E7%89%88%E5%A4%8F%E5%AD%A3%E7%8F%AD-W2---%E5%80%8B%E4%BA%BA%E7%B6%B2%E9%A0%81?node-id=0-1"
                class="btn btn-outline-primary">設計稿</a>
              <a href="https://github.com/hexschool/2022-web-layout-training/tree/main/2023week2"
                class="btn btn-outline-primary">圖片</a>
            </div>
            <!---->
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!---->
  <footer></footer>
</template>

<script setup>
  import { RouterLink } from "vue-router";
  import header from "@/components/Home/header.vue";
  import footer from "@/components/Home/footer.vue";
</script>

<style lang="scss" scoped>
</style>