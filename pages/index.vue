<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useTalksStore } from '@/store/talks';
import { useUserStore } from '@/store/users';
import { useIsPreload } from '@/store/isPreload'
import TalksList from '@/components/TalksList.vue';
import TalkInput from '@/components/TalkInput.vue';

const talksStore = useTalksStore();
const userStore = useUserStore();
const preloadStore = useIsPreload();
const { talks } = storeToRefs(talksStore);
const { users } = storeToRefs(userStore);

onMounted(() => {
    talksStore.receiveTalks();
    userStore.getUsers();
    preloadStore.preloadProcess();
});

function talkList() {
    return talks.value.map((talk) => ({
        ...talk,
        user: users.value.find((user) => user.id == talk.user)
    }));
}

function handleAddTalk(text) {
    talksStore.addTalk({ text });
}

</script>

<template>
    <div>
        <section class="home-page">
            <TalkInput @add-talk="handleAddTalk" />
            <TalksList :talks="talkList()" />
        </section>
    </div>
</template>