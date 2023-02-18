<template>
    <div class="flex flex-col mx-4 lg:mx-12 my-1">

        <div class="flex flex-col gap-2 x-8">
            <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                <div class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                </div>

                <div class="ml-4">
                    <h2 class="font-semibold">{{ title }}</h2>
                    <p class="mt-2 text-sm text-gray-500">...</p>
                </div>
            </div>

            <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                <div class="flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>

                <div class="ml-4">
                    <h2 class="font-semibold">{{ "书籍id: " + id }}</h2>
                    <p class="mt-2 text-sm text-gray-500">...</p>
                </div>
            </div>
            <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                <div class="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                </div>

                <div class="ml-4">
                    <h2 class="font-semibold">{{ "评分: " + mark }}</h2>
                    <p class="mt-2 text-sm text-gray-500">{{ "订阅数: " + subscribe }}</p>
                </div>
            </div>
            <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                <div class="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                </div>

                <div class="ml-4">
                    <h2 class="font-semibold">描述</h2>
                    <p class="mt-2 text-sm text-gray-500">{{ desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    showitem?: Object
}>();
const showitem: any = prop.showitem;
// console.log(showitem);
const title = ref(showitem.title);
const id = ref(showitem.id);
const mark = ref(showitem.mark);
const subscribe = ref(showitem.subscribe);
const desc = ref(showitem.desc);

</script>

<style scoped></style>