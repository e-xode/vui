<template>
    <table
        :id="componentId"
        class="vui-table"
    >
        <thead>
            <tr>
                <slot
                    v-for="(th, a) in headers"
                    :key="`table-${componentId}-header--${a}`"
                    :name="`header.${th[itemValue]}`"
                    :item="th"
                    :item-label="itemLabel"
                    :item-value="itemValue"
                    :index="a"
                >
                    <th>
                        {{ th[itemLabel] }}
                    </th>
                </slot>
            </tr>
        </thead>
        <tbody>
            <slot
                v-for="(tr, b) in rows"
                :key="tr.$$id"
                :index="b"
                :item="tr"
                :item-label="itemLabel"
                :item-value="itemValue"
                name="item"
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
                            :data-label="headers[c].label"
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
