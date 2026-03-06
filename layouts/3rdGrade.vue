<template>
	<div>
		<!-- Header -->
		<header>
			<AppNav />
		</header>
		<!-- /Header -->

		<main
			class="w-full flex flex-col-reverse lg:flex-row xl:w-6xl mx-auto p-4 md:p-0"
		>
			<!-- Sidebar -->
			<GradeAside
				title="الصف الثالث الابتدائية"
				units="٩"
				tests="٥٧"
				link="/grade/_3rd"
			>
				<GradeAsideLink
					link="/grade/_3rd/unit1"
					title="الفصل الاول"
					topic="الأعداد حتى ٩٩٩٩"
				/>
				<GradeAsideLink link="#" title="الفصل الثاني" topic="الجمع حتى ٩٩٩٩" />
				<GradeAsideLink link="#" title="الفصل الثالث" topic="الطرح حتى ٩٩٩٩" />
				<GradeAsideLink
					link="#"
					title="الفصل الرابع"
					topic="تمثيل البيانات وتفسيرها"
				/>
				<GradeAsideLink link="#" title="الفصل الخامس" topic="القياس" />
				<GradeAsideLink link="#" title="الفصل السادس" topic="الهندسة" />
				<GradeAsideLink link="#" title="الفصل السابع" topic="الكسور" />
				<GradeAsideLink link="#" title="الفصل الثامن" topic="الضرب" />
				<GradeAsideLink link="#" title="الفصل التاسع" topic="القسمة" />
			</GradeAside>
			<!-- /Sidebar -->
			<slot></slot>
		</main>

		<!-- Footer -->
		<footer>
			<AppFooter />
		</footer>
		<!-- /Footer -->
	</div>
</template>
