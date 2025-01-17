<template>
  <transition
    name="fade"
    mode="out-in">
    <div
      v-show="model"
      class="modal"
      :class="classNames"
      data-testid="modal"
      @click="closeOnBackdrop">
      <transition
        name="slide-up"
        mode="out-in">
        <div
          v-show="model"
          class="modal__dialog">
          <div
            class="modal__content"
            @click.stop>
            <span
              v-if="dismissable"
              data-testid="modal-dismiss"
              class="modal__dismiss"
              @click="close">
              <IconClose />
            </span>
            <div
              v-if="$slots.header || title"
              data-testid="modal-header"
              class="modal__header">
              <slot name="header">
                <Heading
                  v-if="title"
                  class="modal__title"
                  element="h6">
                  {{ title }}
                </Heading>
              </slot>
            </div>
            <div
              data-testid="modal-body"
              :class="[ { 'modal__body--scroll' : modalBodyScrollable }, 'modal__body' ]">
              <slot>
                {{ text }}
              </slot>
            </div>
            <div
              v-if="$slots.footer"
              data-testid="modal-footer"
              class="modal__footer">
              <slot
                name="footer"
                :close="close" />
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  nextTick,
  PropType,
  watch,
} from 'vue-demi'
import { onKeyStroke } from '@vueuse/core'
import Heading from '../heading/Heading.vue'
import IconClose from '@carbon/icons-vue/lib/close/16'
import { useVModel } from '../input'

export type SizeVariant = 'sm' | 'md' | 'lg' | 'xl'

export default defineComponent({
  components: { Heading, IconClose },
  props     : {
    title: {
      type   : String,
      default: undefined,
    },
    text: {
      type   : String,
      default: undefined,
    },
    modelValue: {
      type   : Boolean,
      default: false,
    },
    dismissable: {
      type   : Boolean,
      default: true,
    },
    size: {
      type   : String as PropType<SizeVariant>,
      default: 'md',
    },
    noCloseOnEsc: {
      type   : Boolean,
      default: false,
    },
    noCloseOnBackdrop: {
      type   : Boolean,
      default: false,
    },
    modalBodyScrollable: {
      type   : Boolean,
      default: false,
    },
    centered: {
      type   : Boolean,
      default: false,
    },
  },
  models: {
    prop : 'modelValue',
    event: 'update:modelValue',
  },
  emits: ['update:modelValue', 'close'],
  setup (props, { emit }) {
    const model      = useVModel(props)
    const classNames = computed(() => {
      const result: string[] = ['']

      // eslint-disable-next-line unicorn/explicit-length-check
      if (props.size)
        result.push(`modal--${props.size}`)

      if (props.centered)
        result.push('modal--centered')

      return result
    })

    function close (event: Event): void {
      emit('close', event)

      if (!event.defaultPrevented)
        model.value = false
    }

    function closeOnBackdrop (event: Event): void {
      if (!props.noCloseOnBackdrop)
        close(event)
    }

    onKeyStroke('Escape', (event) => {
      if (!props.noCloseOnEsc)
        close(event)
    }, { eventName: 'keydown' })

    watch(model, (value) => {
      if (value === false) {
        nextTick(() => {
          emit('close')
        })
      }
    })

    return {
      model,
      classNames,
      closeOnBackdrop,
      close,
    }
  },
})
</script>

<style lang="postcss">
/**
* Component Name: Modal
* Component URI : https://www.figma.com/file/JIYmbyRYZHc9bnVp6Npm9K/B-A-S-E-%2F-Components?node-id=336%3A10366
* Date Created  : June 07, 2022
* Last Update   : June 24, 2022
*/
.modal {
  /**
  * Set modal backdrop
  */
  @apply w-full h-full overflow-y-auto fixed left-0 top-0 bg-black bg-opacity-30 z-[1060] overscroll-contain;

  &--banner {
    .modal {
      &__content {
        @apply overflow-hidden;
      }

      &__body {
        @apply p-0;
      }
    }
  }

  &__dialog {
    @apply flex justify-center;
  }

  /**
  * Modal content are
  * in white
  */
  &__content {
    @apply my-8 bg-white rounded-md relative;

    .modal__dismiss {
      @apply absolute top-6 right-6 mt-1.5 hover:cursor-pointer z-[1061] text-black text-opacity-30;
    }
  }

  /**
  * Modal header is a container
  * of title and dismiss button
  */
  &__header {
    @apply flex items-start p-6;

    .modal__title {
      @apply grow pr-6;
    }

    + .modal__body {
      @apply pt-0;
    }
  }

  &__body,
  &__footer {
    @apply p-6;
  }

  &__body {
    &&--scroll {
      @apply max-h-64 overflow-y-auto overscroll-contain;
    }

    + .modal__footer {
      @apply pt-6;
    }

    &:not(&--scroll) {
      + .modal__footer {
        @apply pt-0;
      }
    }
  }

  /**
  * Modal has 4 different size
  * eg: small, medium, large
  * and extra large. default
  * size are medium
  */
  &&--xl {
    .modal__content {
      @apply w-[960px];
    }
  }

  &&--lg {
    .modal__content {
      @apply w-[800px];
    }
  }

  &&--md {
    .modal__content {
      @apply w-[600px];
    }
  }

  &&--sm {
    .modal__content {
      @apply w-[400px];
    }
  }

  /**
  * Modal vertically center
  * in the viewport
  */
  &&--centered {
    .modal__dialog {
      @apply flex items-center min-h-[calc(100%-4rem)] my-8;
    }
  }

}
</style>
