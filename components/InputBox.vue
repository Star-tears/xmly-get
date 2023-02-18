<template>
    <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css" />
    <div>
        <div class="lg:mx-16">

            <form ref="form1">
                <label for="default-search"
                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                <div class="relative">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <input type="search" ref="searchbox"
                        class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="请输入有声小说id..." required>
                    <button type='button'
                        class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        @click="onClickSearchBtn">Search</button>
                </div>
            </form>

            <p class="mt-5 opacity-80">搜索喜马拉雅对应有声小说id，下载内容。<a class="text-blue-600 hover:underline"
                    href="https://www.ximalaya.com/" target="_blank">喜马拉雅官网</a>.
                <a class="text-blue-600 hover:underline" href="/datagraph" target="_blank">数据分析</a>.
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
    (e: 'searchid', search_id: string): void
}>();
const searchbox = ref(null);
const form1 = ref(null);
function onClickSearchBtn() {
    let inputstr = (searchbox.value! as HTMLInputElement).value;
    if (inputstr.length > 0)
        emit("searchid", inputstr);
    else
        (form1.value! as HTMLFormElement).requestSubmit();
}
</script>

<style scoped></style>