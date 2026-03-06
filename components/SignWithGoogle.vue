<template>
	<div class="w-full">
		<button
			class="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-lg border-2 border-slate-200 bg-white hover:bg-slate-50 hover:border-blue-400 transition-all duration-200 shadow-sm hover:shadow-md"
			@click="$emit('handleSignIn')"
		>
			<img src="/images/google.png" alt="google" class="w-5 h-5" />
			<span class="font-semibold text-slate-700">سجل الدخول بواسطة Google</span>
		</button>
	</div>
</template>
