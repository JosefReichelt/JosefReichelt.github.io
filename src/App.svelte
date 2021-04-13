<script>
import Background from './components/Background.svelte';

</script>

<Background />
<div>Hello There</div>
{#each Array(20) as _, i}
<div style="height:400px">
    CONTENT
</div>
{/each}

<style lang="scss">

</style>