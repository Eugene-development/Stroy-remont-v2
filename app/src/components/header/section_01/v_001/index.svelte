<script>
    import MobileMenu from '../../mobile/v_001/index.svelte'
    import {categoryMenu} from '$stores/boolean';
    import {useVisible} from '$lib/functions/visible';

    const {invert} = useVisible;

    const changeVisibleCategoryMenu = () => {
        categoryMenu.update(invert);
    };
</script>

<div class="relative mx-auto max-w-7xl bg-white">
    <div class="flex items-center justify-between px-4 py-2 sm:px-6  md:space-x-10">
        <div>
            <a class="flex" href="/">
                <span class="sr-only">Логотип</span>
                <img
                        alt="logo"
                        class="h-8 w-auto sm:h-16"
                        src="https://storage.yandexcloud.net/brand-logo/rem-stroy/logo/logomain.png"
                />
            </a>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
            <button
                    aria-expanded="false"
                    class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    type="button"
            >
                <span class="sr-only">Open menu</span>
                <!-- Heroicon name: outline/menu -->
                <svg
                        aria-hidden="true"
                        class="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
        <div class="hidden md:flex md:flex-1 md:items-center md:justify-between">
            <nav class=" flex space-x-10">
                <a class="text-base font-medium text-gray-500 hover:text-gray-900" href="/"> Главная </a>

                <div class="relative">
                    <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
                    <button
                            aria-expanded="false"
                            class="group inline-flex items-center rounded-md bg-white text-base font-medium text-gray-500 hover:text-gray-900"
                            on:click={changeVisibleCategoryMenu}
                            type="button"
                    >
                        <span>Каталог</span>
                        <!--
                          Heroicon name: solid/chevron-down

                          Item active: "text-gray-600", Item inactive: "text-gray-400"
                        -->
                        <svg
                                aria-hidden="true"
                                class="ml-2 h-5 w-5 animate-bounce text-gray-400 group-hover:text-gray-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                    clip-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    fill-rule="evenodd"
                            />
                        </svg>
                    </button>

                    <!--
                      'Solutions' flyout menu, show/hide based on flyout menu state.

                      Entering: "transition ease-out duration-200"
                        From: "opacity-0 translate-y-1"
                        To: "opacity-100 translate-y-0"
                      Leaving: "transition ease-in duration-150"
                        From: "opacity-100 translate-y-0"
                        To: "opacity-0 translate-y-1"
                    -->
                    {#if $categoryMenu}
                        <div class="absolute z-20 -ml-4 mt-3 w-screen max-w-md transform lg:max-w-3xl">
                            <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                                    <a
                                            on:click={changeVisibleCategoryMenu}
                                            href="/category/remontpomeshenii"
                                            class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                    >
                                        <div
                                                class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-cyan-500 text-white sm:h-12 sm:w-12"
                                        >
                                            <svg
                                                    class="h-6 w-6"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="2"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                            >
                                                <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                                />
                                            </svg>
                                        </div>
                                        <div class="ml-4">
                                            <p class="text-base font-medium text-gray-900">Ремонт помещений</p>
                                            <p class="mt-1 text-sm text-gray-500">
                                                Ремонт квартир и иных помещений под нужды заказчика
                                            </p>
                                        </div>
                                    </a>
                                    <a
                                            on:click={changeVisibleCategoryMenu}
                                            href="/category/stroitelstvodomov"
                                            class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                    >
                                        <div
                                                class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-cyan-500 text-white sm:h-12 sm:w-12"
                                        >
                                            <svg
                                                    class="h-6 w-6"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="2"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                            >
                                                <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                                />
                                            </svg>
                                        </div>
                                        <div class="ml-4">
                                            <p class="text-base font-medium text-gray-900">Строительство домов</p>
                                            <p class="mt-1 text-sm text-gray-500">
                                                Строительство малоэтажных зданий и сооружений различной архитектуры
                                            </p>
                                        </div>
                                    </a>
                                    <a
                                            on:click={changeVisibleCategoryMenu}
                                            href="/category/prodazhamaterialov"
                                            class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                    >
                                        <div
                                                class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-cyan-500 text-white sm:h-12 sm:w-12"
                                        >
                                            <!-- Heroicon name: outline/cursor-click -->
                                            <svg
                                                    class="h-6 w-6"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="2"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                            >
                                                <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                                />
                                            </svg>
                                        </div>
                                        <div class="ml-4">
                                            <p class="text-base font-medium text-gray-900">Продажа стройматериалов</p>
                                            <p class="mt-1 text-sm text-gray-500">
                                                Строительные и отделочные материалы оптом и в розницу
                                            </p>
                                        </div>
                                    </a>
                                    <a
                                            on:click={changeVisibleCategoryMenu}
                                            href="/category/gruzoperevozki"
                                            class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                    >
                                        <div
                                                class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-cyan-500 text-white sm:h-12 sm:w-12"
                                        >
                                            <!-- Heroicon name: outline/cursor-click -->
                                            <svg
                                                    class="h-6 w-6"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="2"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                            >
                                                <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                                />
                                            </svg>
                                        </div>
                                        <div class="ml-4">
                                            <p class="text-base font-medium text-gray-900">Грузоперевозки материалов</p>
                                            <p class="mt-1 text-sm text-gray-500">
                                                Перевозки материалов специальным транспортом и услуги грузчиков
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div class="bg-gray-50 p-5 sm:p-8">
                                    <a href="#" class="-m-3 flow-root rounded-md p-3 hover:bg-gray-100">
                                        <div class="flex items-center">
                                            <div class="text-base font-medium text-gray-900">Консультации</div>
                                            <span
                                                    class="ml-3 inline-flex items-center rounded-full bg-cyan-100 px-3 py-0.5 text-xs font-medium leading-5 text-cyan-800"
                                            >
												New
											</span>
                                        </div>
                                        <p class="mt-1 text-sm text-gray-500">
                                            Свяжитесь с нашим менеджером и получите консультацию по лучшим вариантам.
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    {/if}
                </div>

                <a class="text-base font-medium text-gray-500 hover:text-gray-900" href="#"> Размещение </a>
                <a class="text-base font-medium text-gray-500 hover:text-gray-900" href="#"> Новости </a>
                <a class="text-base font-medium text-gray-500 hover:text-gray-900" href="/contacts">
                    Контакты
                </a>

                {#if false}
                    <div class="relative">
                        <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
                        <button
                                type="button"
                                class="group inline-flex items-center rounded-md bg-white text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                aria-expanded="false"
                        >
                            <span>More</span>
                            <!--
                              Heroicon name: solid/chevron-down

                              Item active: "text-gray-600", Item inactive: "text-gray-400"
                            -->
                            <svg
                                    class="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                            >
                                <path
                                        fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                />
                            </svg>
                        </button>

                        <!--
                          'More' flyout menu, show/hide based on flyout menu state.

                          Entering: "transition ease-out duration-200"
                            From: "opacity-0 translate-y-1"
                            To: "opacity-100 translate-y-0"
                          Leaving: "transition ease-in duration-150"
                            From: "opacity-100 translate-y-0"
                            To: "opacity-0 translate-y-1"
                        -->
                        <div
                                class="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0"
                        >
                            <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                    <a href="#" class="-m-3 block rounded-md p-3 hover:bg-gray-50">
                                        <p class="text-base font-medium text-gray-900">Help Center</p>
                                        <p class="mt-1 text-sm text-gray-500">
                                            Get all of your questions answered in our forums or contact support.
                                        </p>
                                    </a>

                                    <a href="#" class="-m-3 block rounded-md p-3 hover:bg-gray-50">
                                        <p class="text-base font-medium text-gray-900">Guides</p>
                                        <p class="mt-1 text-sm text-gray-500">
                                            Learn how to maximize our platform to get the most out of it.
                                        </p>
                                    </a>

                                    <a href="#" class="-m-3 block rounded-md p-3 hover:bg-gray-50">
                                        <p class="text-base font-medium text-gray-900">Events</p>
                                        <p class="mt-1 text-sm text-gray-500">
                                            See what meet-ups and other events we might be planning near you.
                                        </p>
                                    </a>

                                    <a href="#" class="-m-3 block rounded-md p-3 hover:bg-gray-50">
                                        <p class="text-base font-medium text-gray-900">Security</p>
                                        <p class="mt-1 text-sm text-gray-500">
                                            Understand how we take your privacy seriously.
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                {/if}
            </nav>
            <div class="flex items-center md:ml-12">
                <svg
                        class="mr-4 h-7 w-7 text-slate-500 "
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

                <a
                        class="text-2xl font-medium font-semibold text-slate-500 hover:text-slate-600"
                        href="tel:+74951475550"
                >
                    8 (495) 147-55-50
                </a>
            </div>
        </div>
    </div>

    <MobileMenu/>
</div>
