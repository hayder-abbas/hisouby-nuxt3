<template>
  <div class="grow flex justify-end items-center">
    <div class="grid grid-cols-4 gap-1">
      <span
        class="p-0.5"
        v-for="(q, index) in quiz"
        :key="index"
      >
        <IconCircle v-if="q === 0" class="w-2.5 mx-0.5 text-gray-900" />
        <IconCheck v-if="q === 1" class="w-3.5 text-lime-700" />
        <IconClose v-if="q === -1" class="w-3.5 text-rose-700" />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  quiz: any;
}>();
</script>
