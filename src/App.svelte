<script>
  import Background from "./components/Background.svelte";
  import Layout from "./components/Layout.svelte";
</script>

<Background />
<Layout>
  {#each Array(20) as _, i}
    <div style="height:400px">CONTENT</div>
  {/each}
</Layout>