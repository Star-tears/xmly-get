<template>
    <div class="my-auto">
        <div
            class="flex flex-row gap-4 px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out rounded-md">
            <div class="my-auto flex items-start">
                <div class="flex h-5 items-center">
                    <input id="atext" name="atext" type="checkbox" ref="checkBoxUnit"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                </div>

            </div>
            <div class="flex-grow my-auto w-full">
                <div class="ml-3 text-sm">
                    <label for="comments" class="font-semibold text-gray-700">{{ "Title: " + title }}</label>
                    <div class="flex">
                        <div class="px-2 text-xs text-blue-500 bg-gray-100 rounded-full sm:px-4 sm:py-1 dark:bg-gray-700 ">
                            标签
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-row-reverse">
                <button
                    class=" bg-gray-100 hover:bg-gray-300 text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center"
                    @click="downLoadFile">
                    <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                    <span>Download</span>
                </button>
            </div>

        </div>

    </div>
</template>

<script setup lang="ts">
interface Props {
    title?: string
    id?: string
    count?: string
    subtitle?: string
    update?: boolean
}

const props = defineProps<Props>();
const checkBoxUnit = ref(null);
const filename = props.id + "_" + props.count;
const title = ref(filename + ".m4a");
if (title.value.startsWith("undefined")) {
    title.value = "";
}
watch(() => props.update, () => {
    if ((checkBoxUnit.value! as HTMLInputElement).checked)
        downLoadFile();
})

function getFilePath() {
    return "/files/" + props.id + "/audio/" + props.count + ".m4a";
}

function downLoadFile() {
    let url = getFilePath();
    console.log(url);
    const ele = document.createElement('a');
    ele.setAttribute('href', url); //设置下载文件的url地址
    ele.setAttribute('download', filename.split('.').at(0)!);//用于设置下载文件的文件名
    ele.setAttribute('target', 'hiddenIframe');
    ele.click();
}


</script>

<style scoped></style>