<template>
	<footer
		class="bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 mt-16"
	>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
			<div class="flex flex-col items-center gap-6 text-slate-300">
				<NuxtLink
					to="/"
					class="text-2xl font-bold text-white hover:text-slate-200 transition-colors duration-200"
				>
					حيسوبي
				</NuxtLink>

				<div class="text-sm text-slate-300 text-center">
					منصة تعليمية حديثة للرياضيات
				</div>

				<div>
					<a
						href="https://hayderabbasdev.web.app"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm"
					>
						<IconExternalLink class="w-4 h-4" />
						hayderabbasdev.web.app
					</a>
				</div>

				<div class="text-xs text-slate-400 text-center">
					صنع بحب بواسطة حيدر عباس - <bdi>&copy; 2025</bdi>
				</div>
			</div>
		</div>
	</footer>
</template>
