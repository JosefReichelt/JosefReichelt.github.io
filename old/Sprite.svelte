<script lang="ts">
  export const sprite: BrowserSprite | null = null;
  console.log(sprite);
</script>

{#if sprite}
  <svg viewBox="${sprite.viewBox}">
    <use href="#${sprite.url}" />
  </svg>
{/if}
