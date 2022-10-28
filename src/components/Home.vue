<template>
    <div class="h-screen">
        <div class="h-screen uk-section uk-background-cover uk-background-top-center relative"
            data-src="/img/car_banner.webp" uk-img="loading:eager">
            <!-- <div class="absolute inset-0 bg-black opacity-40 h-[858px] content-['']"></div> -->
            <div class="uk-overlay uk-overlay-primary uk-position-cover opacity-60"></div>

            <div class="uk-container md:mt-28">
                <div class="flex items-center justify-between uk-grid-grid-small" uk-grid>
                    <div class="uk-width-1-1 uk-width-1-2@s z-10 uk-light">
                        <div class="text-white/90">
                            <h1 class="text-6xl font-[200] leading-[1.1] ">
                                MSUS CAR PRICING.
                            
                            </h1>
                            <p class="text-lg">
                                Une petit application aidant à évaluer le prix de sa voiture, en se basant sur 
                                certains paramètres fournies. Merci de vous inscrire pour avoir accès.
                            </p>
                            <p>
                                Developpé avec les technologies <a href="https://nestjs.com/" class="!text-[#fb9b3b]/90">Nestjs</a> pour le backend et <a class="!text-[#fb9b3b]/90 " href="https://vuejs.org/">Vuejs</a> pour le front.
                            </p>
                            <div class="uk-margin">
                                <p class="">
                                    Developpé par <span class="text-[#fb9b3b]/90 underline">Mbouna Ulrich</span> - Fullstack Web Developper.
                                </p>
                               <p class="space-x-2">
                                <a target="_blank" href="https://twitter.com/MbounaU" class="uk-icon-button !bg-[#fb9b3b]/90 hover:!bg-[#1678ce] hover:animate-spin !text-white" uk-icon="twitter"></a>
                                <a target="_blank" href="https://www.facebook.com/ulrich.mbouna" class="uk-icon-button !bg-[#fb9b3b]/90 hover:!bg-[#206edb] hover:animate-spin !text-white" uk-icon="facebook"></a>
                                <a target="_blank" href="https://www.linkedin.com/in/ulrich-mbouna/" class="uk-icon-button !bg-[#fb9b3b]/90 hover:!bg-[#1f5fc5] hover:animate-spin !text-white" uk-icon="linkedin"></a>
                               </p>
                            </div>
                        </div>
                    </div>

                    <div class="uk-width-1-1 uk-width-1-2@m uk-width-1-3@l z-10">
                        <div class="bg-white p-5 rounded-md">
                            <div class="">
                                <ul class="uk-flex-center" uk-tab="animation: uk-animation-fade; duration:300">
                                    <li class="uk-active"><a href="#">S'Inscrire</a></li>
                                    <li><a href="#">Se Connecter</a></li>
                                </ul>
                                <ul class="uk-switcher uk-margin">
                                    <li>
                                        <div class="">
                                            <form action="">
                                                <h1 class="text-black font-bold text-3xl">Inscrivez vous</h1>
                                                <div class="uk-margin">
                                                    <label class="upppercase font-semibold">Email</label>
                                                    <input type="text"
                                                        class="uk-input rounded focus:border-none focus:ring-1 focus:ring-[#fb9b3b] placeholder:text-gray-400"
                                                        placeholder="Email">
                                                </div>
                                                <div class="uk-margin">
                                                    <label class="upppercase font-semibold">Mot de passe</label>
                                                    <input type="text"
                                                        class="uk-input rounded focus:border-none focus:ring-1 focus:ring-[#fb9b3b] placeholder:text-gray-400"
                                                        placeholder="Mot de passe">
                                                </div>

                                                <div class="uk-margin">
                                                    <button
                                                        class="uk-button w-full text-lg leading-[53px] rounded uk-button-large capitalize bg-[#fb9b3b] text-white">

                                                        S'inscrire</button>
                                                </div>
                                            </form>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="">
                                            <form action="">
                                                <h1 class="text-black font-bold text-3xl">Connectez-vous</h1>
                                                <div class="uk-margin">
                                                    <label class="upppercase font-semibold">Email</label>
                                                    <input type="text"
                                                        class="uk-input rounded placeholder:text-gray-400"
                                                        placeholder="Email">
                                                </div>
                                                <div class="uk-margin">
                                                    <label class="upppercase font-semibold">Mot de passe</label>
                                                    <input type="text"
                                                        class="uk-input focus:border-none focus:ring-1 focus:ring-[#fb9b3b] rounded placeholder:text-gray-400"
                                                        placeholder="Mot de passe">
                                                </div>

                                                <div class="uk-margin">
                                                    <button
                                                        class="uk-button w-full focus:border-none focus:ring-1 focus:ring-[#fb9b3b] text-lg leading-[53px] rounded uk-button-large capitalize bg-[#fb9b3b] text-white">

                                                        Se connecter</button>
                                                </div>
                                            </form>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>