<script>
  import { onMount } from "svelte";

  let totalHeight = window.innerHeight;
  let totalWidth = window.innerWidth;
  let blockPadding = 2;
  let numOfBlocks = 2;
  const blockHeight = 400;
  const isoScaleFactor = 86.062;
  const isoScaleFactorRemainder = 13.938;
  let isoTopMargin = 2;

  function calculateBlocks() {
    numOfBlocks = Math.ceil(((totalHeight + totalWidth) / blockHeight) / 1.3) + 1;
    blockPadding = Math.max(
      ((totalWidth / blockHeight) *
        (blockHeight + blockHeight / isoScaleFactor)) /
        3,
      blockHeight / 3
    );
    isoTopMargin = (blockHeight / isoScaleFactor) * (100 - isoScaleFactor - 0.838);
  }

  function handleResize() {
    totalHeight = window.innerHeight;
    totalWidth = window.innerWidth;
    calculateBlocks();
  }
  onMount(() => {
    calculateBlocks();
  });
</script>

<svelte:window on:resize={handleResize} />

<div class="backgroundContainer">
  {#each Array(numOfBlocks) as _, i}
    <div
      class="backgroundBlock"
      style="height: {blockHeight}px;
      background-color: rgba(255,255,255,{1 /
        (numOfBlocks /
          i)});
      margin-top: {isoTopMargin}px;
      top:-{blockPadding}px
      "
    >
      {i + 1}
    </div>
  {/each}
</div>

<style lang="scss">
  .backgroundContainer {
    background-color: #23235C;
    position: absolute;
    width: 100vw;
    height: 100vh;
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
    opacity: 0.5;
  }
</style>
