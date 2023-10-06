<script>
  export let description
  export let KM
  export let img
  export let lastUpdate

  function formatDate (value) {
    const date =  new Date(Number(value.replace(/(\D+)/g, '')))
    return new Intl.DateTimeFormat('pt-BR', {
      year:'numeric',
      month:'2-digit',
      day:'2-digit',
      hour:'2-digit',
      minute:'2-digit'
    }).format(date)
  }
</script>

<div class="card">
  <img src={img} alt={description} />
  <p>{description}</p>
  <p>KM - {KM}</p>
  <p>Ultima atualização <br />
    {formatDate(lastUpdate)}
  </p>
</div>

<style>
  .card img {
    max-width: 250px;
    height: 250px;
  }

  .card p {
    margin: 10px 0;
    color: var(--textColor);
  }
</style>
