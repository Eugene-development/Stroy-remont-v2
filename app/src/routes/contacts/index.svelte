<script>
	import axios from 'axios';
	import { buttonSendOffer } from '$stores/boolean';
	import { useVisible } from '$lib/functions/visible';

	const { invert } = useVisible;

	const changeVisibleButtonSend = () => buttonSendOffer.update(invert);
	let visibleButtonSendOffer;
	buttonSendOffer.subscribe((value) => (visibleButtonSendOffer = value));

	let name = '';
	let position = '';
	let email = '';
	let phone = '';
	let comment = '';

	const url = `/sendOffer`;
	const domain = import.meta.env.VITE_API_MAIL;
	const apiMAIL = {
		baseURL: `${domain}`,
		headers: {
			Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
		}
	};

	async function sendOffer() {
		try {
			const data = {
				name,
				position,
				email,
				phone,
				comment
			};
			await axios.post(url, data, apiMAIL);
			changeVisibleButtonSend();
		} catch (error) {
			console.error(error);
		}
	}
</script>

<svelte:head>
	<title>Контакты</title>
	<meta name="description" content="Контакты с нами" />
</svelte:head>

<div class="bg-slate-100">
	<div class="mx-auto w-full py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
		<div class="relative bg-white shadow-xl">
			<h2 class="sr-only">Контакты</h2>

			<div class="grid grid-cols-1 lg:grid-cols-3">
				<!-- Contact information -->
				<div class="relative overflow-hidden bg-cyan-900 py-10 px-6 sm:px-10 xl:p-12">
					<div class="pointer-events-none absolute inset-0 sm:hidden" aria-hidden="true">
						<svg
							class="absolute inset-0 h-full w-full"
							width="343"
							height="388"
							viewBox="0 0 343 388"
							fill="none"
							preserveAspectRatio="xMidYMid slice"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
								fill="url(#linear1)"
								fill-opacity=".1"
							/>
							<defs>
								<linearGradient
									id="linear1"
									x1="254.553"
									y1="107.554"
									x2="961.66"
									y2="814.66"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="#fff" />
									<stop offset="1" stop-color="#fff" stop-opacity="0" />
								</linearGradient>
							</defs>
						</svg>
					</div>
					<div
						class="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
						aria-hidden="true"
					>
						<svg
							class="absolute inset-0 h-full w-full"
							width="359"
							height="339"
							viewBox="0 0 359 339"
							fill="none"
							preserveAspectRatio="xMidYMid slice"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
								fill="url(#linear2)"
								fill-opacity=".1"
							/>
							<defs>
								<linearGradient
									id="linear2"
									x1="192.553"
									y1="28.553"
									x2="899.66"
									y2="735.66"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="#fff" />
									<stop offset="1" stop-color="#fff" stop-opacity="0" />
								</linearGradient>
							</defs>
						</svg>
					</div>
					<div
						class="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
						aria-hidden="true"
					>
						<svg
							class="absolute inset-0 h-full w-full"
							width="160"
							height="678"
							viewBox="0 0 160 678"
							fill="none"
							preserveAspectRatio="xMidYMid slice"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
								fill="url(#linear3)"
								fill-opacity=".1"
							/>
							<defs>
								<linearGradient
									id="linear3"
									x1="192.553"
									y1="325.553"
									x2="899.66"
									y2="1032.66"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="#fff" />
									<stop offset="1" stop-color="#fff" stop-opacity="0" />
								</linearGradient>
							</defs>
						</svg>
					</div>
					<h3 class="text-xl font-medium text-white">Контактная информация:</h3>
					<p class="mt-6 max-w-3xl text-base text-indigo-50">
						Нижний Новгород, Автозаводский район, <br /> ул. Зеленхозовская 4-а (пластиковые окна)
					</p>
					<p class="mt-6 max-w-3xl text-base text-indigo-50">
						Дзержинск, Зарёвская объездная, <br /> пр. Ленина, 121-В (строительные материалы)
					</p>
					<dl class="mt-8 space-y-6">
						<dt><span class="sr-only">Телефон</span></dt>
						<!--                            <dd class="flex text-base text-indigo-50">-->
						<!--                                <svg class="flex-shrink-0 w-6 h-6 text-indigo-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">-->
						<!--                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />-->
						<!--                                </svg>-->
						<!--                                <span class="ml-3">8 (800) 555-8-111 (звонок бесплатный)</span>-->
						<!--                            </dd>-->
						<dd class="flex text-base text-indigo-50">
							<svg
								class="h-6 w-6 flex-shrink-0 text-indigo-200"
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
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								/>
							</svg>
							<span class="ml-3">8 (495) 147-55-50 </span>
						</dd>
						<dt><span class="sr-only">Почта</span></dt>
						<dd class="flex text-base text-indigo-50">
							<svg
								class="h-6 w-6 flex-shrink-0 text-indigo-200"
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
							<span class="ml-3">info@orbita-stroy.com</span>
						</dd>
						<dt><span class="sr-only">Почта</span></dt>
						<dd class="flex text-base text-indigo-50">
							<a
								class="flex text-base text-indigo-50"
								href="https://vk.com/orbita_stroy"
								target="_blank"
							>
								<svg
									class="lex-shrink-0 mr-3 h-6 w-6 text-indigo-200"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
								vk.com/orbita_stroy
							</a>
						</dd>
					</dl>
				</div>

				<!-- Contact form -->
				<div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
					<h3 class="border-b pb-2 text-lg font-medium text-gray-900">
						Отправить запрос или коммерческое предложение:
					</h3>
					<form
						action="#"
						method="POST"
						class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
					>
						<div>
							<label for="first_name" class="block text-sm font-medium text-gray-900">Имя</label>
							<div class="mt-1">
								<input
									bind:value={name}
									type="text"
									name="first_name"
									id="first_name"
									autocomplete="given-name"
									class="block w-full rounded-md border border-gray-300 border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
								/>
							</div>
						</div>
						<div>
							<label for="position" class="block text-sm font-medium text-gray-900">Должность</label
							>
							<div class="mt-1">
								<input
									bind:value={position}
									type="text"
									name="position"
									id="position"
									autocomplete="family-name"
									class="block w-full rounded-md border border-gray-300 border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
								/>
							</div>
						</div>
						<div>
							<label for="email" class="block text-sm font-medium text-gray-900">Почта</label>
							<div class="mt-1">
								<input
									bind:value={email}
									id="email"
									name="email"
									type="email"
									autocomplete="email"
									class="block w-full rounded-md border border-gray-300 border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
								/>
							</div>
						</div>
						<div>
							<div class="flex justify-between">
								<label for="phone" class="block text-sm font-medium text-gray-900">Телефон</label>
							</div>
							<div class="mt-1">
								<input
									bind:value={phone}
									type="text"
									name="phone"
									id="phone"
									autocomplete="tel"
									class="block w-full rounded-md border border-gray-300 border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
									aria-describedby="phone-optional"
								/>
							</div>
						</div>
						<div class="sm:col-span-2">
							<div class="flex justify-between">
								<label for="message" class="block text-sm font-medium text-gray-900"
									>Комментарий</label
								>
								<span id="message-max" class="text-sm text-gray-500">Максимум 500 символов</span>
							</div>
							<div class="mt-1">
								<textarea
									bind:value={comment}
									id="message"
									name="message"
									rows="4"
									class="block w-full rounded-md border border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
									aria-describedby="message-max"
								/>
							</div>
						</div>
						<!--                            <div class="sm:col-span-2">-->
						<!--                                <div class="flex justify-between">-->
						<!--                                    <label for="file-upload" class="block text-sm font-medium text-gray-900">Загрузить файл</label>-->
						<!--                                </div>-->
						<!--                                <div class=" mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">-->
						<!--                                    <div class="space-y-1 text-center">-->
						<!--                                        <svg class="mx-auto h-12 w-48 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">-->
						<!--                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />-->
						<!--                                        </svg>-->
						<!--                                        <div class="flex text-sm text-gray-600">-->
						<!--                                            <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-red-800 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">-->
						<!--                                                <span>Загрузите файл</span>-->
						<!--                                                <input id="file-upload" name="file-upload" type="file" class="sr-only">-->
						<!--                                            </label>-->
						<!--                                            <p class="pl-1">или перетяните его в эту область</p>-->
						<!--                                        </div>-->
						<!--                                        <p class="text-xs text-gray-500">-->
						<!--                                            PNG, JPG, GIF up to 10MB-->
						<!--                                        </p>-->
						<!--                                    </div>-->
						<!--                                </div>-->
						<!--                            </div>-->

						<div class="sm:col-span-2 sm:flex sm:justify-end">
							{#if visibleButtonSendOffer}
								<button
									on:click={sendOffer}
									type="button"
									class="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 sm:w-auto"
								>
									Отправить
								</button>
							{:else}
								<p
									class="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-800 px-6 py-3 text-base font-medium text-white shadow-sm sm:w-auto"
								>
									Отправлено
								</p>
							{/if}
						</div>
						<!--                            <div class="sm:col-span-2 sm:flex sm:justify-end">-->
						<!--                                    <button on:click={ sendOffer } type="button" class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto">-->
						<!--                                        Отправить-->
						<!--                                    </button>-->
						<!--                            </div>-->
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
