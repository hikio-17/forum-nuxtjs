<script>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import TalksList from '@/components/TalksList.vue';
import TalkInput from '@/components/TalkInput.vue';

export default {
    setup() {
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

        return {
            talkList
        }
    }
}



</script>

<template>
    <div>
        <section class="home-page">
            <TalkInput />
            <TalksList :talks="talkList()" />
        </section>
    </div>
</template>