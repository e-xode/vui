<script>
import {
    translatable
} from '@/composables/index.mjs'

import langs from '@/doc/views/start/translate/index.mjs'
import components from '@/components.json'

export default {
    name: 'ViewStart',
    computed: {
        components () {
            return components.reduce((array, component) => {
                const index = array.findIndex((item) => item.label === component.type)
                if (index === -1) {
                    array.push({
                        label: component.type,
                        value: [component]
                    })
                } else {
                    array[index].value.push(component)
                }
                return array
            }, [])
        }
    },
    created () {
        translatable(langs)
    }
}
</script>
<template>
    <div class="view-start">
        <vui-list
            flat
            :autoclose="false"
            :expanded="true"
            :items="components"
            item-label="label"
            item-value="value"
        >
            <template #group-item="{ item }">
                {{ item.label }}
            </template>
            <template #item="{ item }">
                <router-link :to="{ name: item.doc.name }">
                    {{ item.label }}
                </router-link>
            </template>
        </vui-list>
    </div>
</template>

<style lang="scss">
@import "@/scss/import.scss";

.view-start {

    h1 {
        font-size: 2rem;
        text-transform: none;
    }

    .vui-list {
        .vui-list-items {
            .vui-list-items-group-item {
                .vui-list-items-item-group-label {
                    font-weight: bold;
                    text-transform: uppercase;
                }

                .vui-list-items-item-label {
                    padding: 0 .75rem;

                    * {
                        line-height: 2.5em;
                    }

                    a {
                        flex: 1 1 auto;
                        color: darken($vui-color-green, 10%);
                    }
                }
            }
        }
    }
}

</style>
