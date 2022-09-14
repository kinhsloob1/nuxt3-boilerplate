<template>
  <div class="pages entry privacy-policy">
    <SnippetSpaceY height="50px" />
    <div class="wrapper">
      <LegalButtons class="legal-buttons" />
      <div class="data">
        <h1 class="heading">Privacy Policy</h1>
        <div class="info">Last Updated: September 21,2022</div>
        <div class="policies">
          <div v-for="index in 6" :key="index" class="policy">
            <h3 class="header">
              <span class="number"> {{ index }}. </span>
              <span class="text"> Lorem Ipsum </span>
            </h3>
            <span class="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Quam id leo in vitae turpis massa sed
              elementum. Nec tincidunt praesent semper feugiat nibh
              sed pulvinar proin. Ipsum dolor sit amet consectetur
              adipiscing. Amet porttitor eget dolor morbi non.
              Volutpat blandit aliquam etiam erat velit scelerisque.
              Volutpat sed cras ornare arcu dui vivamus arcu. Risus
              sed vulputate odio ut enim blandit volutpat maecenas
              volutpat. Tellus elementum sagittis vitae et leo duis
              ut. Leo a diam sollicitudin tempor. Nec feugiat nisl
              pretium fusce. Adipiscing tristique risus nec feugiat in
              fermentum posuere.
            </span>
          </div>
        </div>
      </div>
    </div>
    <SnippetSpaceY height="100px" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({});

useHead({
  title: 'Privacy Policy',
});
</script>

<style lang="scss" scoped>
@use '@/assets/scss/_breakpoints.scss' as breakpoint;
@use '@/assets/scss/_colors.scss' as color;

.pages.entry.privacy-policy {
  display: flex;
  width: 100%;
  max-width: breakpoint.$xl;
  background-color: color.$white-1;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 20px;

  :deep() {
    > .wrapper {
      display: flex;
      align-items: flex-start;

      @include breakpoint.respond-below(md) {
        flex-wrap: wrap;
      }

      > .legal-buttons {
        flex-shrink: 0;

        @include breakpoint.respond-below(md) {
          width: 100%;
        }
      }

      > .data {
        display: flex;
        margin-left: 50px;
        flex-direction: column;
        align-content: flex-start;
        max-width: 70%;

        > .heading {
          margin: 0;
          font-family: CamptonBold, Campton, Verdana, Geneva, Tahoma,
            sans-serif;
          font-size: 40px;
        }

        > .info {
          margin-top: 10px;
          font-family: CamptonLight, Verdana, Geneva, Tahoma,
            sans-serif;
          max-width: 80%;
          margin-bottom: 25px;
        }

        > .policies {
          display: flex;
          flex-direction: column;
          margin-top: 30px;
          align-items: flex-start;

          > .policy {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            &:not(:first-child) {
              margin-top: 20px;
            }

            > .header {
              font-family: CamptonBold, Campton, Verdana, Geneva,
                Tahoma, sans-serif;
              font-size: 25px;
              margin-bottom: 12px;
            }

            > .body {
              padding-left: 27px;
              font-family: CamptonLight, Campton, Verdana, Geneva,
                Tahoma, sans-serif;
              font-size: 14px;
            }
          }
        }

        @include breakpoint.respond-below(md) {
          width: 100%;
          max-width: 100%;
          margin-left: initial;
          margin-top: 40px;
        }
      }
    }
  }
}
</style>
