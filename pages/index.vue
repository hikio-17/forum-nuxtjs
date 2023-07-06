<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useTalksStore } from '@/store/talks';
import { useUserStore } from '@/store/users';
import { useIsPreload } from '@/store/isPreload'
import { useAuthUser } from '@/store/authUser';
import TalksList from '@/components/TalksList.vue';
import TalkInput from '@/components/TalkInput.vue';

const talksStore = useTalksStore();
const userStore = useUserStore();
const preloadStore = useIsPreload();
const authUserStore = useAuthUser();
const { talks } = storeToRefs(talksStore);
const { users } = storeToRefs(userStore);
const { authUser } = storeToRefs(authUserStore);

onMounted(() => {
    talksStore.receiveTalks();
    userStore.getUsers();
    preloadStore.preloadProcess();
});

function talkList() {
    return talks.value.map((talk) => ({
        ...talk,
        user: users.value.find((user) => user.id == talk.user),
    }));
}

function handleAddTalk(text) {
    talksStore.addTalk({ text });
}

function onLike(id) {
    talksStore.toggleLikeTalk(id);
}

</script>

<template>
    <div>
        <section class="home-page">
            <TalkInput @add-talk="handleAddTalk" />
            <TalksList 
                :talks="talkList()" 
                :authUser="authUser?.id" 
                @on-like="onLike"
            />
        </section>
    </div>
</template>