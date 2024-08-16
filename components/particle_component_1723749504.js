<template>
	<span>{{ count }}</span>
	<button @click="count++">Increment</button>
</template>

<script setup>
import {ref} from 'vue';
const count = ref(0);
</script>