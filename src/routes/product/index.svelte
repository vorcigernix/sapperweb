<script context="module">
  export async function preload(page, session) {
    const data = await this.fetch('product.json');
    console.log(data);
    return { data };
  }
</script>