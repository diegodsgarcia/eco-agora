<script>
  import Card from '../components/Card/index.svelte'
  export let data
</script>

<header>
  <h1>Eco agora</h1>
</header>

<main>
{#each data.cameras as descriptions}
  <div class="road">
    <h2 class="title">{descriptions.DisplayName}</h2>
    <div class="cameras">
    {#each descriptions.Cameras as camera}
      <Card
        description={camera.Description}
        KM={camera.KM}
        img={camera.Url}
        lastUpdate={camera.LastUpdate}
      />
    {/each}
    </div>
  </div>
{/each}
</main>

<style>
  :root {
    --main: rgb(170, 221, 68);
    --backgroundColor: rgb(35, 35, 35);
    --textColor: #fff;
  }

  :global(body) {
    background-color: var(--backgroundColor);
    margin: 16px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    scroll-behavior: smooth;
    font-family: 'Lato', sans-serif;
  }

  header {
    text-align: center;
    font-size: 1.8rem;
    color: var(--main);
  }

  .road {
    margin: 0 auto;
    max-width: 1000px;
  }

  .title {
    margin: 20px 0;
    color: var(--textColor);
  }

  .cameras {
    display: flex;
    width: 100%;
    overflow: auto;
    gap: 20px;
  }

</style>


