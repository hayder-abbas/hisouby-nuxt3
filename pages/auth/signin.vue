<template>
	<div
		class="min-h-dvh bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-100 flex items-center justify-center p-4"
	>
		<div class="w-full max-w-md">
			<!-- Card Container -->
			<div
				class="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
			>
				<!-- Header Section -->
				<div
					class="bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-12 text-center"
				>
					<AppLogo class="text-4xl text-white mb-4 flex justify-center" />
					<h1 class="text-3xl font-bold text-white mb-2">مرحباً</h1>
					<p class="text-blue-100 text-sm">منصة حيسوبي التعليمية</p>
				</div>

				<!-- Content Section -->
				<div class="px-8 py-10">
					<p class="text-center text-slate-600 text-lg leading-relaxed mb-8">
						قم بتسجيل الدخول كي تتمكن من<br />
						<span class="font-semibold text-slate-900"
							>حفظ تقدمك ومتابعة دراستك</span
						>
					</p>

					<!-- Signin with Google -->
					<div class="space-y-4">
						<SignWithGoogle @handleSignIn="handleSignInWithGoogle" />
						<!-- /Signin with Google -->

						<!-- Signin with Facebook (Commented) -->
						<!-- <SignWithFacebook @handleSignIn="handleSignInWithFacebook" /> -->
						<!-- /Signin with Facebook -->
					</div>
				</div>
			</div>

			<!-- Helper Text -->
			<p class="text-center text-slate-600 text-sm mt-6">
				هل تواجه مشكلة؟
				<NuxtLink
					href="/"
					class="text-blue-600 hover:text-blue-700 font-semibold"
				>
					العودة للرئيسية
				</NuxtLink>
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
	useHead({
		title: "تسجيل الدخول - حيسوبي",
	});

	definePageMeta({
		layout: "auth",
	});

	const { $authStore } = useNuxtApp();

	function handleSignInWithGoogle() {
		$authStore.signInWithGoogle();
	}

	// function handleSignInWithFacebook() {
	// 	console.log("Log in with facebook");
	// }
</script>
