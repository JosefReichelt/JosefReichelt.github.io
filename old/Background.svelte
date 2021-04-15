<script>
  import { getRandomBackgroundColor } from "src/utils/randomBackgroundColor";

  import { onMount } from "svelte";

  const blockHeight = 400;
  const isoScaleFactor = 86.062;

  let totalHeight = 0;
  let totalWidth = 0;
  let blockPadding = 0;
  let numOfBlocks = 0;
  let isoTopMargin = 2;

  function calculateBlocks() {
    numOfBlocks = Math.ceil((totalHeight + totalWidth) / blockHeight / 1.3) + 1;
    blockPadding = Math.max(
      ((totalWidth / blockHeight) *
        (blockHeight + blockHeight / isoScaleFactor)) /
        3,
      blockHeight / 3
    );
    isoTopMargin =
      (blockHeight / isoScaleFactor) * (100 - isoScaleFactor - 0.838);
  }

  function handleResize() {
    totalHeight = document.body.scrollHeight;
    totalWidth = Math.max(window.innerWidth, 1920);
    calculateBlocks();
  }

  onMount(() => {
    totalHeight = document.body.scrollHeight;
    totalWidth = Math.max(document.body.scrollWidth, 1920);
    calculateBlocks();
  });
</script>

<svelte:window on:resize={handleResize} />

<div
  class="backgroundContainer"
  style="height:{totalHeight}px; background-color: {getRandomBackgroundColor()};"
>
  {#each Array(numOfBlocks) as _, i}
    <div
      class="backgroundBlock"
      style="height: {blockHeight}px;
      background-color: rgba(255,255,255,{1 /
        (numOfBlocks /
          i)});
      margin-top: {isoTopMargin}px;
      top:-{blockPadding}px;
      "
    />
  {/each}
</div>

<style lang="scss">
  .backgroundContainer {
    z-index: -10;
    position: absolute;
    width: 100vw;
    height: 100%;
    overflow: hidden;
  }
  .backgroundBlock {
    pointer-events: none;
    box-sizing: border-box;
    position: relative;
    transform: rotateZ(-30deg) skewX(-30deg);
    width: 120%;
    left: -10%;
    top: 0;
    opacity: 0.3;
  }
</style>
