<script setup lang="ts">
import ApplicationLogo from '@/app/Components/ApplicationLogo.vue';
import {Link} from '@inertiajs/vue3';
</script>

<template>
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        <div>
            <Link href="/public">
                <ApplicationLogo class="w-20 h-20 fill-current text-gray-300" />
            </Link>
        </div>

        <slot name="before-content" />

        <div
            class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"
        >
            <slot />
        </div>
    </div>
</template>
