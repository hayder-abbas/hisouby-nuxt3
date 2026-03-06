<template>
	<div
		class="flex justify-center items-center text-gray-700 py-3 px-4 bg-blue-50 border border-blue-200 rounded-md cursor-grab"
	>
		<IconArrowUpDown class="w-5 h-5 text-blue-500" />
		<div class="flex-1 text-xl">
			<slot></slot>
		</div>
	</div>
</template>
