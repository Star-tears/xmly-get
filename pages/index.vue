<template>
    <div class="lg:mx-24 m-4 rounded-lg">
        <div class="grid grid-row-2 gap-4">
            <div class="bg-emerald-50 p-4 rounded-2xl">
                <div class="lg:ml-16 my-8">
                    <h1 class="font-bold text-gray-700 text-4xl sm:text-2xl md:text-5xl leading-tight mb-6">
                        XMLY-GET
                    </h1>
                </div>

                <InputBox @searchid="getIdContent" />
            </div>
            <div class="flex flex-col bg-emerald-50 p-4 rounded-2xl">
                <h1 class="mx-6 opacity-90 font-mono font-semibold">搜索书籍id: {{ searchid }}</h1>
                <div class="flex flex-row-reverse m-4 gap-4">
                    <button class=" bg-purple-100 hover:bg-purple-300 text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center"
                        @click="downLoadFiles">
                        <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                        </svg>
                        <span>下载打包文件.zip</span>
                    </button>
                    <button
                        class=" bg-pink-100 hover:bg-pink-300 text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center"
                        @click="downLoadFiles">
                        <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                        </svg>
                        <span>下载所选文件</span>
                    </button>
                </div>
                <div ref="parentOfFileItem">
                    <div v-for="item in items" class="my-1">
                        <FileItem :update="downLoadFilesclick" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const searchid = ref("");
let downLoadFilesclick = ref(false);
const parentOfFileItem = ref(null);

const items = ref([{}, {}, {}])
function getIdContent(search_id: string) {
    // console.log(search_id);
    searchid.value = search_id;
}
function downLoadFiles() {
    downLoadFilesclick.value = !downLoadFilesclick.value;
}
</script>

<style scoped>

</style>