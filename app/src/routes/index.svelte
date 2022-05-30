<script>

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="bg-white">
	<main>
		<!-- Hero section -->
		<div class="relative">
			<div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
			<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
				<div class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
					<div class="absolute inset-0">
						<img class="h-full w-full object-cover" src="https://умс24.рф/wp-content/uploads/2020/01/1-9.jpg" alt="People working on laptops">
						<div class="absolute inset-0 bg-slate-700 mix-blend-multiply"></div>
<!--						<div class="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply"></div>-->
					</div>
					<div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
						<h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
							<span class="block text-white">Все ремонтно-строительные</span>
							<span class="block text-indigo-200">компании вашего региона</span>
						</h1>
						<p class="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-4xl">В нашем каталоге представлены проверенные компании с хорошей репутацией, которые ведут деятельность по ремонту помещений, строительству зданий и сооружений, а также осуществляют продажу строительных и отделочных материалов и их перевозку.</p>
						<div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
							<div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
								<!--								<a href="#" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"> Каталог компаний </a>-->
								<a href="#" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-slate-900 bg-indigo-100 bg-opacity-90 hover:bg-opacity-80 sm:px-8 transition ease-in-out delay-100 hover:scale-110 duration-500"> Каталог компаний </a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Logo Cloud -->
		<div class="bg-gray-100">
			<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
				<p class="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">Нам доверяют производители</p>
				<div class="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5 grayscale opacity-70">
					<div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
						<img class="h-12" src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/brands/1.png" alt="Tuple">
					</div>
					<div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
						<img class="h-12" src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/brands/2.png" alt="Mirage">
					</div>
					<div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
						<img class="h-12" src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/brands/3.png" alt="StaticKit">
					</div>
					<div class="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
						<img class="h-12" src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/brands/4.png" alt="Transistor">
					</div>
					<div class="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
						<img class="h-12" src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/brands/5.png" alt="Workcation">
					</div>
				</div>
			</div>
		</div>


<!--		&lt;!&ndash; This example requires Tailwind CSS v2.0+ &ndash;&gt;-->
<!--		<div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">-->
<!--			<div class="absolute inset-0">-->
<!--				<div class="bg-white h-1/3 sm:h-2/3"></div>-->
<!--			</div>-->
<!--			<div class="relative max-w-7xl mx-auto">-->
<!--				<div class="text-center">-->
<!--					<h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">From the blog</h2>-->
<!--					<p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.</p>-->
<!--				</div>-->
<!--				<div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">-->
<!--					<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">-->
<!--						<div class="flex-shrink-0">-->
<!--							<img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="">-->
<!--						</div>-->
<!--						<div class="flex-1 bg-white p-6 flex flex-col justify-between">-->
<!--							<div class="flex-1">-->
<!--								<p class="text-sm font-medium text-indigo-600">-->
<!--									<a href="#" class="hover:underline"> Article </a>-->
<!--								</p>-->
<!--								<a href="#" class="block mt-2">-->
<!--									<p class="text-xl font-semibold text-gray-900">Boost your conversion rate</p>-->
<!--									<p class="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.</p>-->
<!--								</a>-->
<!--							</div>-->
<!--							<div class="mt-6 flex items-center">-->
<!--								<div class="flex-shrink-0">-->
<!--									<a href="#">-->
<!--										<span class="sr-only">Roel Aufderehar</span>-->
<!--										<img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">-->
<!--									</a>-->
<!--								</div>-->
<!--								<div class="ml-3">-->
<!--									<p class="text-sm font-medium text-gray-900">-->
<!--										<a href="#" class="hover:underline"> Roel Aufderehar </a>-->
<!--									</p>-->
<!--									<div class="flex space-x-1 text-sm text-gray-500">-->
<!--										<time datetime="2020-03-16"> Mar 16, 2020 </time>-->
<!--										<span aria-hidden="true"> &middot; </span>-->
<!--										<span> 6 min read </span>-->
<!--									</div>-->
<!--								</div>-->
<!--							</div>-->
<!--						</div>-->
<!--					</div>-->

<!--					<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">-->
<!--						<div class="flex-shrink-0">-->
<!--							<img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="">-->
<!--						</div>-->
<!--						<div class="flex-1 bg-white p-6 flex flex-col justify-between">-->
<!--							<div class="flex-1">-->
<!--								<p class="text-sm font-medium text-indigo-600">-->
<!--									<a href="#" class="hover:underline"> Video </a>-->
<!--								</p>-->
<!--								<a href="#" class="block mt-2">-->
<!--									<p class="text-xl font-semibold text-gray-900">How to use search engine optimization to drive sales</p>-->
<!--									<p class="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.</p>-->
<!--								</a>-->
<!--							</div>-->
<!--							<div class="mt-6 flex items-center">-->
<!--								<div class="flex-shrink-0">-->
<!--									<a href="#">-->
<!--										<span class="sr-only">Brenna Goyette</span>-->
<!--										<img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">-->
<!--									</a>-->
<!--								</div>-->
<!--								<div class="ml-3">-->
<!--									<p class="text-sm font-medium text-gray-900">-->
<!--										<a href="#" class="hover:underline"> Brenna Goyette </a>-->
<!--									</p>-->
<!--									<div class="flex space-x-1 text-sm text-gray-500">-->
<!--										<time datetime="2020-03-10"> Mar 10, 2020 </time>-->
<!--										<span aria-hidden="true"> &middot; </span>-->
<!--										<span> 4 min read </span>-->
<!--									</div>-->
<!--								</div>-->
<!--							</div>-->
<!--						</div>-->
<!--					</div>-->

<!--					<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">-->
<!--						<div class="flex-shrink-0">-->
<!--							<img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="">-->
<!--						</div>-->
<!--						<div class="flex-1 bg-white p-6 flex flex-col justify-between">-->
<!--							<div class="flex-1">-->
<!--								<p class="text-sm font-medium text-indigo-600">-->
<!--									<a href="#" class="hover:underline"> Case Study </a>-->
<!--								</p>-->
<!--								<a href="#" class="block mt-2">-->
<!--									<p class="text-xl font-semibold text-gray-900">Improve your customer experience</p>-->
<!--									<p class="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.</p>-->
<!--								</a>-->
<!--							</div>-->
<!--							<div class="mt-6 flex items-center">-->
<!--								<div class="flex-shrink-0">-->
<!--									<a href="#">-->
<!--										<span class="sr-only">Daniela Metz</span>-->
<!--										<img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">-->
<!--									</a>-->
<!--								</div>-->
<!--								<div class="ml-3">-->
<!--									<p class="text-sm font-medium text-gray-900">-->
<!--										<a href="#" class="hover:underline"> Daniela Metz </a>-->
<!--									</p>-->
<!--									<div class="flex space-x-1 text-sm text-gray-500">-->
<!--										<time datetime="2020-02-12"> Feb 12, 2020 </time>-->
<!--										<span aria-hidden="true"> &middot; </span>-->
<!--										<span> 11 min read </span>-->
<!--									</div>-->
<!--								</div>-->
<!--							</div>-->
<!--						</div>-->
<!--					</div>-->
<!--				</div>-->
<!--			</div>-->
<!--		</div>-->


		<!-- Stats section -->
<!--		<div class="relative bg-gray-900">-->
<!--			<div class="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">-->
<!--				<div class="h-full w-full xl:grid xl:grid-cols-2">-->
<!--					<div class="h-full xl:relative xl:col-start-2">-->
<!--						<img class="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0" src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100" alt="People working on laptops">-->
<!--						<div aria-hidden="true" class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"></div>-->
<!--					</div>-->
<!--				</div>-->
<!--			</div>-->
<!--			<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">-->
<!--				<div class="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">-->
<!--					<h2 class="text-sm font-semibold tracking-wide uppercase">-->
<!--						<span class="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">Valuable Metrics</span>-->
<!--					</h2>-->
<!--					<p class="mt-3 text-3xl font-extrabold text-white">Get actionable data that will help grow your business</p>-->
<!--					<p class="mt-5 text-lg text-gray-300">Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in viverra tristique sem. Ornare feugiat viverra eleifend fusce orci in quis amet. Sit in et vitae tortor, massa. Dapibus laoreet amet lacus nibh integer quis. Eu vulputate diam sit tellus quis at.</p>-->
<!--					<div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">-->
<!--						<p>-->
<!--							<span class="block text-2xl font-bold text-white">8K+</span>-->
<!--							<span class="mt-1 block text-base text-gray-300"><span class="font-medium text-white">Companies</span> use laoreet amet lacus nibh integer quis.</span>-->
<!--						</p>-->

<!--						<p>-->
<!--							<span class="block text-2xl font-bold text-white">25K+</span>-->
<!--							<span class="mt-1 block text-base text-gray-300"><span class="font-medium text-white">Countries around the globe</span> lacus nibh integer quis.</span>-->
<!--						</p>-->

<!--						<p>-->
<!--							<span class="block text-2xl font-bold text-white">98%</span>-->
<!--							<span class="mt-1 block text-base text-gray-300"><span class="font-medium text-white">Customer satisfaction</span> laoreet amet lacus nibh integer quis.</span>-->
<!--						</p>-->

<!--						<p>-->
<!--							<span class="block text-2xl font-bold text-white">12M+</span>-->
<!--							<span class="mt-1 block text-base text-gray-300"><span class="font-medium text-white">Issues resolved</span> lacus nibh integer quis.</span>-->
<!--						</p>-->
<!--					</div>-->
<!--				</div>-->
<!--			</div>-->
<!--		</div>-->

		<!-- CTA Section -->
		<div class="bg-white">
			<div class="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
				<h2 class="text-4xl font-extrabold tracking-tight sm:text-4xl text-indigo-800">
					<span class="block">Готовы присоединиться?</span>
					<span class="-mb-1 pb-1 block">Отправьте форму на рассмотрение.</span>
<!--					<span class="-mb-1 pb-1 block bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent">Отправьте форму на рассмотрение.</span>-->
				</h2>
				<div class="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
					<a href="#" class="flex items-center justify-center bg-gradient-to-br from-indigo-600 to-indigo-800 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-gray-700 hover:to-slate-900 "> Форма заявки </a>
					<a href="#" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-slate-800 bg-slate-100 hover:bg-slate-200"> Условия размещения</a>
				</div>
			</div>
		</div>
	</main>
</div>
