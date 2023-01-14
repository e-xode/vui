<template>
    <table
        :id="componentId"
        class="vui-table"
    >
        <thead>
            <tr>
                <th
                    v-for="(th, a) in headers"
                    :key="`table-${componentId}-header--${a}`"
                >
                    {{ th[itemLabel] }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="(td, b) in items"
                :key="`table-${componentId}-item--${b}`"
            >
                <td
                    v-for="(item, c) in headers"
                    :key="`table-${componentId}-item-td--${c}`"
                >
                    {{ td[headers[c][itemValue]] }}
                </td>
            </tr>
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
