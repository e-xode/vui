<template>
    <table
        :id="componentId"
        class="vui-table"
    >
        <thead>
            <tr>
                <slot
                    v-for="(header, a) in headers"
                    :key="`table-${componentId}-header--${a}`"
                    :name="`header.${header[itemValue]}`"
                    :item="header"
                    :item-label="itemLabel"
                    :item-value="itemValue"
                    :index="a"
                >
                    <th>
                        {{ header[itemLabel] }}
                    </th>
                </slot>
            </tr>
        </thead>
        <tbody>
            <slot
                v-for="(tr, b) in items"
                :key="`table-${componentId}-item--${b}`"
                name="item"
                :index="b"
                :item="tr"
                :item-label="itemLabel"
                :item-value="itemValue"
            >
                <tr>
                    <slot
                        v-for="(td, c) in headers"
                        :key="`table-${componentId}-item-td--${c}`"
                        :name="`item.${td[itemValue]}`"
                        :index="c"
                        :item="tr"
                        :item-label="itemLabel"
                        :item-value="itemValue"
                    >
                        <td
                            :class="td.class"
                        >
                            {{ tr[td[itemValue]] }}
                        </td>
                    </slot>
                </tr>
            </slot>
        </tbody>
    </table>
</template>

<script
    src="./table.mjs"
/>

<style
    lang="scss"
    src="./table.scss"
/>
