<template>
	<div class="flex flex-col min-h-screen bg-slate-50">
		<header>
			<AppNav />
		</header>

		<main class="flex-1">
			<slot></slot>
		</main>

		<footer>
			<AppFooter />
		</footer>
	</div>
</template>
