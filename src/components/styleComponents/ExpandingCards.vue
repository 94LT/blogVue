<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
    panels: Array
})
const panels = ref(props.panels);
// const panels = ref([
//     { id: 1, active: true, url: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', h3: 'Hello World' },
//     { id: 2, active: false, url: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', h3: 'Hello World' },
//     { id: 3, active: false, url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80', h3: 'Hello World' },
//     { id: 4, active: false, url: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80', h3: 'Hello World' },
//     { id: 5, active: false, url: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', h3: 'Hello World' }
// ])
function changeActive(panel){
    this.panels.forEach(element => {
       element.active = panel === element
    });
}

</script>

<template>
    <div class="container">
        <div v-for="panel in panels" :key="panel.id"
        @click="changeActive(panel)"
        :class="['panel', {active: panel.active}]"
        :style="{backgroundImage: 'url(' + panel.url + ')'}"
        >
            <h3>{{ panel.h3 }}</h3>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    width: 90vw;
}

.panel {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 80vh;
    border-radius: 50px;
    color: #fff;
    cursor: pointer;
    flex: 0.5;
    margin: 10px;
    position: relative;
    -webkit-transition: all 700ms ease-in;
}

.panel h3 {
    font-size: 24px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    margin: 0;
    opacity: 0;
}

.panel.active {
    flex: 5;
}

.panel.active h3 {
    opacity: 0.6;
    transition: opacity 0.3s ease-in 0.4s;
}

@media (max-width: 480px) {
    .container {
        width: 100vw;
    }

    .panel:nth-of-type(4),
    .panel:nth-of-type(5) {
        display: none;
    }
}
</style>