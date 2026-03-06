<template>
	<div class="w-full p-2 mt-4">
		<div
			class="flex flex-col p-2 md:px-0 lg:w-2xl mx-auto bg-gray-100 rounded-xl"
		>
			<slot name="progress_bar"></slot>
		</div>

		<slot></slot>
	</div>
</template>
