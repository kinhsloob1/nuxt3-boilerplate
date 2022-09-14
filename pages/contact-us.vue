<template>
  <div class="pages entry contact-us">
    <SnippetSpaceY height="100px" />
    <h1 class="heading">Questions For Us?</h1>
    <div class="form-wrapper">
      <div class="details">
        <div class="instruction">
          Fill the form to send us a message or ask a question and we
          will get back to you ASAP!
        </div>
        <a href="mailto:hello@mydecortrade.com" class="contact">
          <icon
            data="~assets/svgs/icons/message.svg"
            class="icon"
            original
          />
          <span class="text"> hello@mydecortrade.com </span>
        </a>
        <a href="tel:+234901617821" class="contact">
          <icon
            data="~assets/svgs/icons/phone.svg"
            class="icon"
            original
          />
          <span class="text">+234901617821</span>
        </a>

        <icon class="faded-logo" data="~assets/svgs/icons/logo.svg" />
      </div>
      <form action="" class="form" @submit="null">
        <div class="form-group">
          <label for="fullname"> Full Name </label>
          <input
            id="fullname"
            type="text"
            required
            name="name"
            placeholder="Enter Full Name"
          />
        </div>
        <div class="form-group">
          <label for="email"> Email Address </label>
          <input
            id="email"
            type="email"
            required
            name="email"
            placeholder="Enter Email Address"
          />
        </div>
        <div class="form-group">
          <label for="subject"> Subject </label>
          <v-select
            v-model="selectedSubject"
            class="select"
            input-id="subject"
            :options="subjects"
            placeholder="Select Subject"
            taggable
            :clearable="false"
            :select-on-key-codes="[188, 13]"
            label="label"
          />
        </div>
        <div class="form-group">
          <label for="message"> Message </label>
          <textarea
            id="message"
            type="text"
            required
            name="message"
            placeholder="Enter Message"
          />
        </div>
        <button class="submit" type="submit">Send Message</button>
      </form>
    </div>
    <SnippetSpaceY height="100px" />
  </div>
</template>

<script setup lang="ts">
export type Subject = {
  label: string;
  value: string;
};

definePageMeta({});

useHead({
  title: 'Contact Us',
});

const subjects = ref<Subject[]>([
  {
    label: 'General Enquiry',
    value: 'general',
  },
  { label: 'Partnership', value: 'partnership' },
  { label: 'Complaint', value: 'complaint' },
]);

const selectedSubject = ref<Subject | undefined>(undefined);
</script>

<style lang="scss" scoped>
@use '@/assets/scss/_breakpoints.scss' as breakpoint;
@use '@/assets/scss/_colors.scss' as color;

.pages.entry.contact-us {
  display: flex;
  width: 100%;
  max-width: breakpoint.$xl;
  background-color: color.$white-1;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 20px;

  :deep() {
    > * {
      display: flex;
      width: 100%;
      justify-content: flex-start;
      max-width: breakpoint.$xl;
    }

    > .heading {
      display: flex;
      width: 80%;
      font-size: 40px;
      font-family: CamptonBold, Campton, Verdana, Geneva, Tahoma,
        sans-serif;
    }

    > .form-wrapper {
      @include breakpoint.respond-below(md) {
        flex-wrap: wrap;
      }

      > * {
        display: inline-flex;
        justify-content: flex-start;
        align-content: flex-start;
      }

      > .details {
        width: 48%;
        flex-direction: column;
        position: relative;

        > * {
          display: flex;
          width: 100%;
          justify-content: flex-start;
          align-items: center;
        }

        > .instruction {
          margin-top: 10px;
          font-family: CamptonLight, Verdana, Geneva, Tahoma,
            sans-serif;
          max-width: 80%;
          margin-bottom: 25px;
        }

        > .contact {
          color: color.$ash-2;
          text-decoration: initial;
          transition: all 0.3s ease-in-out;

          &:hover {
            color: color.$black-1;
          }

          > .icon {
            width: 25px;
            height: 25px;
            margin-right: 15px;
          }

          &:not(:first-child) {
            margin-top: 20px;
          }
        }

        > .faded-logo {
          width: 200px;
          height: 200px;
          color: rgba(color.$main, 0.1);
          transform: rotate(-60deg);
          position: absolute;
          right: 120px;
          top: 80px;
          z-index: 1;
        }

        @include breakpoint.respond-below(md) {
          width: 100%;
        }
      }

      > .form {
        margin: 0;
        display: inline-flex;
        flex-direction: column;
        width: 400px;
        margin-left: 50px;

        @include breakpoint.respond-below(md) {
          width: 100%;
          margin-left: initial;
          margin-top: 30px;
        }

        > .form-group {
          display: flex;
          width: 100%;
          flex-direction: column;

          > label {
            color: color.$black-1;
            margin-bottom: 8px;
          }

          > input {
            height: 40px;
            border-radius: 10px;
            border: 1px solid color.$ash-2;
            padding: 12px 15px;
            color: color.$ash-2;
            transition: all 0.3s ease-in-out;

            &::placeholder {
              color: color.$ash-2;
              transition: all 0.3s ease-in-out;
            }
          }

          > textarea {
            min-height: 150px;
            border-radius: 10px;
            border: 1px solid color.$ash-2;
            padding: 12px 15px;
            color: color.$ash-2;
            transition: all 0.3s ease-in-out;

            &::placeholder {
              color: color.$ash-2;
              transition: all 0.3s ease-in-out;
            }
          }

          > .select {
            > * {
              --vs-line-height: 2;
              --vs-border-color: #{color.$ash-2};
            }

            .vs__search {
              &::placeholder {
                color: color.$ash-2;
                transition: all 0.3s ease-in-out;
              }
            }
          }

          &:not(:first-child) {
            margin-top: 25px;
          }
        }

        > .submit {
          display: flex;
          padding: 15px 30px;
          justify-content: center;
          text-align: center;
          background-color: color.$main;
          border-radius: 7px;
          color: color.$white-1;
          border: none;
          margin-top: 30px;
          cursor: pointer;
          outline: initial;
          transition: all 0.3s ease-in-out;

          &:hover {
            background-color: rgba(color.$main, 0.5);
          }
        }
      }
    }
  }
}
</style>
