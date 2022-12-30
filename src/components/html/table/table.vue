<template>
    <table
        :id="identifier"
        class="vui-table"
    >
        <thead>
            <tr>
                <th
                    v-for="(th, a) in headers"
                    :key="`table-${identifier}-header--${a}`"
                >
                    {{ th[itemLabel] }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="(td, b) in items"
                :key="`table-${identifier}-item--${b}`"
            >
                <td
                    v-for="(item, c) in headers"
                    :key="`table-${identifier}-item-td--${c}`"
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
