<template>
    <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css" />
    <div class="lg:mx-24 m-4 rounded-lg">
        <div class="flex flex-col gap-6">
            <div class="bg-teal-50 rounded-2xl">
                <div ref="myMap" class="w-9/12 h-96 m-4"></div>
            </div>
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
                                placeholder="请输入查询页数d..." required>
                            <button type='button'
                                class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                @click="onClickSearchBtn">Search</button>
                        </div>
                    </form>

                    <p class="mt-5 opacity-80">{{ "可查询0 ~ " + max_size + "页" }}</p>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <div v-for="item in items">
                    <Channel :channel="item" :key="new Date().getTime()" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import analyjson from '~/assets/json/analyze.json'
const data: any = analyjson;
const max_size = data.length - 1;
const { $eChart } = useNuxtApp()
const myMap = ref<HTMLElement>();
const index_num = ref(0);
const items = ref([data[0]]);
const searchbox = ref(null);
const form1 = ref(null);
onMounted(() => {
    const myChart = $eChart.init(myMap.value!);
    let dict0 = [];
    for (let item of data) {
        // console.log(item);
        let tmpdict: any = {};
        tmpdict["name"] = item.channelName;
        tmpdict["value"] = item.subChannelSize;
        tmpdict["tooltip"] = {};
        tmpdict["tooltip"]["formatter"] = "{b}<br />子栏目: {c} ({d}%)<br />" + "vip本率: " + item.vipRate + "<br />" + "完本率: " + item.endState;
        dict0.push(tmpdict);
    }
    // console.log(dict0);
    // 指定图表的配置项和数据
    const option = {
        title: {
            text: '栏目情况'
        },
        legend: {
            // Try 'horizontal'
            orient: 'vertical',
            right: 10,
            top: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} 子栏目: {c} ({d}%)'
        },
        series: [
            {
                type: 'pie',
                data: dict0,
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
});

function onClickSearchBtn() {
    let inputstr = (searchbox.value! as HTMLInputElement).value;
    if (inputstr.length > 0 && Number(inputstr))
        if (Number(inputstr) >= 0 && Number(inputstr) < data.length) {
            index_num.value = Number(inputstr);
            items.value = [data[index_num.value]];
        }
        else
            (form1.value! as HTMLFormElement).requestSubmit();
    console.log(index_num.value);
}
</script>

<style scoped></style>