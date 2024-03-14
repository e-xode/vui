<script>
import langs from '@/components/html/form/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiForm',
    mixins: [
        composable
    ],
    created () {
        translatable(langs)
    }
}
</script>

<template>
    <form
        :id="componentId"
        :class="['vui-form', $props.class]"
    >
        <slot name="prepend" />
        <slot />
        <slot name="append" />
    </form>
</template>

<style lang="scss">
@import "@/scss/import.scss";

.vui-form {
    section {
        border: 1px solid $vui-color-grey-light;
        border-radius: .25rem;

        &:not(:first-of-type) {
            margin-top: 1rem;
        }

        &.section--submit {
            border: none;
            padding: 1rem 0;
            text-align: center;
        }

        fieldset {
            padding: 1rem;

            .fieldset-item {
                display: flex;

                label {
                    flex: 0 0 50%;
                    line-height: 2rem;
                }

                .input {
                    flex: 0 0 50%;

                    input {
                        width: 100%;
                    }
                }
            }
        }
    }
}
</style>
