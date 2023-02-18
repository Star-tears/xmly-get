<template>
    <div class="flex flex-col rounded-3xl bg-slate-50 p-6">
        <div ref="myMap" class="w-full h-96"></div>
        <div class="flex flex-col rounded-2xl gap-3">
            <div v-for="item in data.subChannels">
                <SubChannel :subchannel="item" />
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    channel?: Object
}>();
let data: any = prop.channel;
const { $eChart } = useNuxtApp()
const myMap = ref<HTMLElement>()
onMounted(() => {
    const myChart = $eChart.init(myMap.value!);
    // console.log(data);
    let dict1 = [];
    let dict0 = [];
    for (let item of data.subChannels) {
        // console.log(item);
        let tmpdict: any = {};
        dict1.push(item.channelName);
        tmpdict["value"] = item.albumCount;
        tmpdict["tooltip"] = {};
        tmpdict["tooltip"]["formatter"] = "专辑数: {c}<br />" + "vip本率: " + item.vipRate + "<br />" + "完本率: " + item.endState;
        dict0.push(tmpdict);
    }
    // 指定图表的配置项和数据
    const option = {
        title: {
            text: data.channelName,
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b} 专辑数: {c} '
        },
        xAxis: { data: dict1 },
        yAxis: {},
        series: [
            {
                type: 'bar',
                data: dict0
            },
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
});
</script>

<style scoped></style>