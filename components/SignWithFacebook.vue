<template>
  <div class="w-full">
    <button
      disabled
      class="disabled:cursor-not-allowed disabled:bg-blue-300 bg-blue-500 text-gray-50 rounded-lg text-sm px-5 py-2.5 flex justify-evenly items-center hover:bg-blue-400 w-full cursor-pointer"
      @click="$emit('handleSignIn')"
    >
        <img src="/images/facebook.png" alt="" class="w-6 h-6">
      <span class="">سجل الدخول بواسطة فيسبوك</span>
    </button>
  </div>
</template>
