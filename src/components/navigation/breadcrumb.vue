<template>
  <div class="xy-breadcrumb">
    <a-breadcrumb :routes="routes">
      <template slot="itemRender" slot-scope="{route}">
        <router-link v-if="route.path" :to="route.path">
          {{ route.multilingual ? $t(route.multilingual) : route.breadcrumbName }}
        </router-link>
        <template v-else>
          {{ route.multilingual ? $t(route.multilingual) : route.breadcrumbName }}
        </template>
      </template>
    </a-breadcrumb>
    <p v-if="tips" class="bc-tips" v-html="tips"></p>
    <slot />
  </div>
</template>

<script>
export default {
  props: ['routes', 'tips']
}
</script>

<style lang="scss">
.xy-breadcrumb{
  background-color: #fff;
  margin: -20px -20px 20px;
  padding: 20px;
  .bc-tips{
    color: #999;
    font-size: 12px;
    margin: 10px 0 0;
  }
}
</style>