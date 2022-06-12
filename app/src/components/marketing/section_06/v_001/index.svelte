<script>
	export let mainText;
	export let company;
</script>

<div class="bg-gray-900">
	<div class="pt-12 sm:pt-16 lg:pt-24">
		<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
			<div class="mx-auto max-w-3xl space-y-2 lg:max-w-none">
				<h2 class="text-lg font-semibold uppercase leading-6 tracking-wider text-gray-300">
					Категория
				</h2>
				<p class="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
					{mainText.titleCategory}
				</p>
				<p class="text-xl text-gray-300">
					{mainText.descriptionCategory}
				</p>
			</div>
		</div>
	</div>
	<div class="mt-8 bg-gray-50 pb-12 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
		<div class="relative">
			<div class="absolute inset-0 h-3/4 bg-gray-900" />
			<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div
					class="mx-auto max-w-md space-y-4 lg:grid lg:max-w-5xl lg:grid-cols-2 lg:gap-5 lg:space-y-0"
				>
					{#each company as { city, name, address, phone1, phone2, email, products, site }}
						<div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
							<div class="bg-white px-6 py-10 sm:p-10 sm:pb-6">
								<div>
									<span
										class="inline-flex rounded-full bg-cyan-50 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-cyan-600"
										>{city}</span
									>
								</div>
								<div class="my-4 flex items-baseline text-3xl font-extrabold">{name}</div>

								<div class="my-3 flex text-base text-gray-500">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6 flex-shrink-0"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
										/>
									</svg>
									<span class="ml-3">{address}</span>
								</div>
								<div class="my-3 flex text-base text-gray-500">
									<svg
										class="h-6 w-6 flex-shrink-0"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
									<span class="ml-3">{phone1}</span>
								</div>
								{#if phone2}
									<div class="my-3 flex text-base text-gray-500">
										<svg
											class="h-6 w-6 flex-shrink-0"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
										<span class="ml-3">{phone2}</span>
									</div>
								{/if}
								<div class="my-3 flex text-base text-gray-500">
									<svg
										class="h-6 w-6 flex-shrink-0"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
									<span class="ml-3">{email}</span>
								</div>
							</div>
							<div
								class="flex flex-1 flex-col justify-between space-y-6 bg-gray-100 px-6 pt-6 pb-8 sm:p-10 sm:pt-6"
							>
								<ul role="list" class="space-y-4">
									{#each products as { name }}
										<li class="flex items-start">
											<div class="flex-shrink-0">
												<!-- Heroicon name: outline/check -->
												<svg
													class="h-6 w-6 text-cyan-500"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="2"
													stroke="currentColor"
													aria-hidden="true"
												>
													<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
												</svg>
											</div>
											<p class="ml-3 text-base text-gray-800">{name}</p>
										</li>
									{/each}
								</ul>
								<div class="rounded-md shadow">
									<a
										href="https://orbita-stroy.com/"
										target="_blank"
										class="flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium text-white hover:bg-gray-900"
										aria-describedby="tier-standard"
									>
										Сайт компании
									</a>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div class="relative mx-auto mt-4 max-w-7xl px-4 sm:px-6 lg:mt-5 lg:px-8">
			<div class="mx-auto max-w-md lg:max-w-5xl">
				<div class="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
					<div class="flex-1">
						<div>
							<h3
								class="inline-flex rounded-full bg-white px-4 py-1 text-sm font-semibold uppercase tracking-wide text-gray-800"
							>
								Скидки и акции
							</h3>
						</div>
						<div class="mt-4 text-lg text-gray-600">
							При заказе через корзину сайта <span class="font-semibold text-gray-900"
								>скидка 5%</span
							> от компании "Орбита-Строй".
						</div>
					</div>
					<div class="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
						<a
							href="https://orbita-stroy.com/"
							class="flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
						>
							Перейти на сайт компании
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
