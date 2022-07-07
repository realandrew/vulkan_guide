<script setup>
import DefaultTheme from 'vitepress/theme'
import Giscus from '@giscus/vue';

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-after>
      <div class="comments">
        <Giscus
          repo="realandrew/vulkan_guide"
          repoId="R_kgDOHcMQSw"
          category="Posts"
          categoryId="DIC_kwDOHcMQS84CPcCm"
          mapping="pathname"
          term="Welcome to giscus!"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="preferred_color_scheme"
          lang="en"
          loading="lazy"
        />
      </div>
    </template>
  </Layout>
</template>

<style>
.comments {
  margin-top: 20px;
}
</style>