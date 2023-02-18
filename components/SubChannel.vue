<template>
    <div class="w-full h-auto m-1 rounded-3xl bg-slate-50">
        <div class="flex flex-col">
            <div class="font-semibold">{{ channelname }}</div>
            <div class="flex flex-row gap-2">
                <div class="flex flex-row font-medium">
                    <span>专辑数:</span>
                    <span>{{ albumCount }}</span>
                </div>
                <div class="flex flex-row font-medium">
                    <span>vip本率:</span>
                    <span>{{ vipRate }}</span>
                </div>
                <div class="flex flex-row font-medium">
                    <span>完本率:</span>
                    <span>{{ endState }}</span>
                </div>
            </div>
            <div class="grid grid-cols-2 my-2">
                <div class="flex flex-col m-2">
                    <div class="text-xl font-serif mb-1">节目Top3</div>
                    <div class="flex flex-col rounded-2xl bg-gray-300 gap-3">
                        <div v-for="item in subchannel.showTop3">
                            <SingleShowItem :showitem="item" />
                        </div>
                    </div>

                </div>
                <div class="flex flex-col m-2">
                    <div class="text-xl font-serif mb-1">音频Top3</div>
                    <div class="flex flex-col rounded-2xl bg-gray-300 gap-3">
                        <div v-for="item in subchannel.audioTop3">
                            <SingleAudioItem :audioitem="item" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    subchannel?: Object
}>();

const subchannel: any = prop.subchannel;
const channelname = ref(subchannel.channelName);
const albumCount = ref(subchannel.albumCount);
const vipRate = ref(subchannel.vipRate);
const endState = ref(subchannel.endState);

</script>

<style scoped></style>