<template>
    <label>
        Offset:
        <input type="number" v-model="offset">
    </label>
    <label>
        Limit:
        <input type="number" v-model="limit">
    </label>
    <button @click="loadPokemonList(offset, limit)">Load</button>
    <p v-if="loading">Loading...</p>
    <div v-else>
        <table class="table">
            <tr v-for="(row, index) in data" :key="index">
                <td v-for="(item, i) in row" :key="i">
                    <p>{{ item.name }}</p>
                    <img :src="item.img" alt="Image">
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
import Service from "../services/service.js"
export default {
    data() {
        return {
            loading: false,
            offset: 0,
            limit: 0,
            data: []
        }
    },
    methods: {
        async loadPokemonList(offset, limit) {
            this.loading = true
            let data = await Service.getPokemon(offset, limit)
            let rows = []
            for (let i = 0; i < data.length; i += 5) {
                rows.push(data.slice(i, i + 5));
            }
            this.data = rows
            this.loading = false
        },
    },
}
</script>
<style></style>