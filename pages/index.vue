<script setup lang="ts">
	useHead({
		title: "الرئيسية - حيسوبي",
	});
</script>

<template>
	<div
		class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50"
	>
		<!-- Header -->
		<div
			class="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10"
		>
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
				<h1 class="text-3xl font-bold text-slate-900">مستويات الدراسة</h1>
				<p class="text-slate-600 mt-2">اختر المستوى الدراسي لبدء التعلم</p>
			</div>
		</div>

		<!-- Main Content -->
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<!-- Elementary School -->
			<section class="mb-16">
				<h2
					class="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-3"
				>
					<span class="w-1 h-8 bg-blue-500 rounded-full"></span>
					الابتدائية
				</h2>

				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					<GradeCard
						to="/grade/_1st"
						title="الصف الأول"
						icon="1"
						color="bg-blue-500"
					/>
					<GradeCard
						to="/grade/_2nd"
						title="الصف الثاني"
						icon="2"
						color="bg-blue-500"
					/>
					<GradeCard
						to="/grade/_3rd"
						title="الصف الثالث"
						icon="3"
						color="bg-blue-500"
					/>
					<GradeCard
						to="/grade/_4th"
						title="الصف الرابع"
						icon="4"
						color="bg-blue-500"
					/>
					<GradeCard
						to="/grade/_5th"
						title="الصف الخامس"
						icon="5"
						color="bg-blue-500"
					/>
					<GradeCard
						to="/grade/_6th"
						title="الصف السادس"
						icon="6"
						color="bg-blue-500"
					/>
				</div>
			</section>

			<!-- Middle School -->
			<section class="mb-16">
				<h2
					class="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-3"
				>
					<span class="w-1 h-8 bg-emerald-500 rounded-full"></span>
					المتوسطة
				</h2>
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					<GradeCard
						to="/grade/_7th"
						title="الصف الأول"
						icon="1"
						color="bg-emerald-500"
					/>
					<GradeCard
						to="/grade/_8th"
						title="الصف الثاني"
						icon="2"
						color="bg-emerald-500"
					/>
					<GradeCard
						to="/grade/_9th"
						title="الصف الثالث"
						icon="3"
						color="bg-emerald-500"
					/>
				</div>
			</section>

			<!-- High School -->
			<section>
				<h2
					class="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-3"
				>
					<span class="w-1 h-8 bg-purple-500 rounded-full"></span>
					الإعدادية
				</h2>
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					<GradeCard
						to="/grade/_4th-hs"
						title="الرابع"
						icon="4"
						color="bg-purple-500"
					/>
					<GradeCard
						to="/grade/_5th-hs"
						title="الخامس"
						icon="5"
						color="bg-purple-500"
					/>
					<GradeCard
						to="/grade/_6th-hs"
						title="السادس"
						icon="6"
						color="bg-purple-500"
					/>
				</div>
			</section>
		</div>
	</div>
</template>
