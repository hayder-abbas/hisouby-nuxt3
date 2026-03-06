<template>
  <NuxtLink
    :to="href"
    class="w-5 h-5 border-2 rounded-sm"
    :class="colorList[degree || ''] || 'border-gray-500'"
  ></NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  href: string;
  degree: string | undefined;
}>();

const colorList = reactive<any>({
  excellent: "bg-lime-500 border-lime-500",
  good: "bg-amber-500 border-amber-500",
  poor: "bg-rose-500 border-rose-500",
});
</script>
