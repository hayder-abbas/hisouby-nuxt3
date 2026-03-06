<script setup lang="ts">
	const { $authStore, $userStore } = useNuxtApp();
	const { userInfo } = storeToRefs($userStore);
	const isUserMenuOpen = ref(false);

	const avatar = computed(
		() => userInfo.value?.avatar || "/images/no-image.png",
	);
	const name = computed(
		() => userInfo.value?.name || userInfo.value?.email?.split("@")[0],
	);
	const email = computed(() => userInfo.value?.email || "yourEmail@mail");

	onUnmounted(() => {
		isUserMenuOpen.value = false;
	});

	function signOut() {
		$authStore.handleSignOut();
		isUserMenuOpen.value = false;
	}
</script>

<template>
	<nav class="bg-gradient-to-r from-blue-600 to-cyan-500 sticky top-0 z-50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between h-16">
				<!-- Logo -->
				<AppLogo />
				<!-- /Logo -->

				<!-- Signin -->
				<NuxtLink
					v-if="!$authStore.isLoggedIn"
					to="/auth/signin"
					class="inline-flex items-center px-4 py-2 rounded-lg font-medium text-blue-600 bg-white hover:bg-slate-100 transition-colors duration-200"
				>
					تسجيل الدخول
				</NuxtLink>
				<!-- /Signin -->

				<!-- User Dropdown Menu -->
				<div v-if="$authStore.isLoggedIn" class="relative flex items-center">
					<button
						@click="isUserMenuOpen = !isUserMenuOpen"
						class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-500 transition-colors duration-200"
					>
						<div class="w-10">
							<img class="w-full object-cover" :src="avatar" alt="user photo" />
						</div>
						<div class="text-sm font-medium text-white hidden sm:block">
							{{ name }}
						</div>
					</button>

					<!-- Dropdown Menu -->
					<transition
						enter-active-class="transition-all duration-200 ease-out"
						leave-active-class="transition-all duration-200 ease-in"
						enter-from-class="opacity-0 scale-95"
						enter-to-class="opacity-100 scale-100"
						leave-from-class="opacity-100 scale-100"
						leave-to-class="opacity-0 scale-95"
					>
						<div
							v-if="isUserMenuOpen"
							class="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden"
						>
							<div class="px-4 py-3 bg-blue-50 border-b border-slate-200">
								<p class="text-sm font-semibold text-slate-900">{{ name }}</p>
								<p class="text-xs text-slate-600 truncate">{{ email }}</p>
							</div>
							<ul class="divide-y divide-slate-100">
								<li>
									<NuxtLink
										@click="isUserMenuOpen = false"
										to="/profile"
										class="block px-4 py-3 text-sm text-slate-700 hover:bg-blue-50 transition-colors duration-200"
									>
										الصفحة الشخصية
									</NuxtLink>
								</li>
								<li>
									<button
										@click="signOut"
										class="w-full text-right px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
									>
										تسجيل خروج
									</button>
								</li>
							</ul>
						</div>
					</transition>
					<!-- /Dropdown Menu -->
				</div>
				<!-- /User Dropdown Menu -->
			</div>
		</div>
	</nav>
</template>
