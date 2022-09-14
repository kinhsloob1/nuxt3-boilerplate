<template>
  <div>
    <NuxtLoadingIndicator
      color="#FF623C"
      :duration="6000"
      :height="4"
    />
    <NuxtLayout />
    <div id="afterApp" />
  </div>
</template>

<style lang="scss">
* {
  font-family: Campton, Verdana, Helvetica, sans-serif, Arial;
  box-sizing: border-box;
}
</style>
