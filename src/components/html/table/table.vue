<script>
import { props } from './table.constant.mjs'
import langs from '@/components/html/table/translate/index.mjs'
import {
    animable,
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiTable',
    mixins: [
        animable,
        composable
    ],
    props,
    created () {
        translatable(langs)
    },
    methods: {
        leaf (value, path) {
            return path.split('.').reduce((v, e) => (
                v && v[e] ? v[e] : null
            ), value)
        }
    }
}
</script>

<template>
    <div
        :id="componentId"
        :class="['vui-table', $props.class]"
    >
        <slot name="prepend" />
        <table>
            <thead>
                <tr>
                    <th
                        v-for="(header, index) in headers"
                        :key="`table-${componentId}-header--${index}`"
                        :class="header.class"
                    >
                        <slot
                            :name="`header.${header[itemValue]}`"
                            :item="header"
                            :item-label="itemLabel"
                            :item-value="itemValue"
                            :index="index"
                        >
                            {{ header[itemLabel] }}
                        </slot>
                    </th>
                </tr>
            </thead>
            <tbody>
                <slot
                    v-for="(item, index) in items"
                    :key="`table-${componentId}-item--${index}`"
                    :index="index"
                    :item="item"
                    :item-label="itemLabel"
                    :item-value="itemValue"
                >
                    <tr>
                        <td
                            v-for="(header, i) in headers"
                            :key="`table-${componentId}-item-td--${i}`"
                            :data-label="header.label"
                            :class="header.class"
                        >
                            <slot
                                :name="`item.${header[itemValue]}`"
                                :index="i"
                                :item="item"
                                :item-label="itemLabel"
                                :item-value="itemValue"
                            >
                                {{ leaf(item, header.value) }}
                            </slot>
                        </td>
                    </tr>
                </slot>
            </tbody>
        </table>
        <slot name="append" />
    </div>
</template>

<style lang="scss">
@import "@/scss/import.scss";

.vui-table {
    table {
        border-collapse: collapse;

        thead {
            tr {
                background-color: $vui-color-grey-light;

                th {
                    padding: 1rem;
                    border: 1px solid $vui-color-grey;

                    &:not(.text-center, .text-right) {
                        text-align: left;
                    }
                }
            }
        }
        tbody {
            tr {
                td  {
                    padding: 1rem;
                    border: 1px solid $vui-color-grey;
                }
            }
        }
    }
}
@media (max-width: 550px) {
    .vui-table {

        table {
            thead {
                display: none;
            }

            tr {
                display: block;
                margin-bottom: 1rem;
            }

            td {
                display: block;
                text-align: right;
            }

            td::before {
                content: attr(data-label);
                float: left;
            }
        }
    }
}
</style>
