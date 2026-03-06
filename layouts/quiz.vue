<template>
	<div>
		<header>
			<AppNav />
		</header>

		<main class="bg-gray-50">
			<article
				class="min-h-[calc(100dvh-176px)] w-full md:w-2xl lg:w-4xl xl:w-6xl mx-auto"
			>
				<slot name="quiz_article"></slot>
			</article>

			<slot name="quiz_footer"></slot>
		</main>
	</div>
</template>
