<template>
    <div
        :id="componentId"
        :class="['vui-tabs', $props.class]"
    >
        <div class="vui-tabs-tabs">
            <div
                v-for="tab in tabs"
                :key="tab.$$id"
                :class="[
                    'vui-tabs-tabs-tab',
                    { 'vui-tabs-tabs-tab--with-icon': icon },
                    { 'vui-tabs-tabs-tab--active': tab[itemValue] === active }
                ]"
                @click="() => toggle(tab[itemValue])"
            >
                <i
                    v-if="icon"
                    :class="['vui-tabs-tabs-tab-icon', icon]"
                />
                <span class="label">
                    {{ tab[itemLabel] }}
                </span>
            </div>
        </div>
        <div class="vui-tabs-slots">
            <template
                v-for="(tab, index) in items"
                :key="`slot-${tab.$$id}`"
            >
                <slot
                    v-if="tab[itemValue] === active"
                    :name="tab[itemValue]"
                    :index="index"
                />
            </template>
        </div>
    </div>
</template>

<script
    src="./tabs.mjs"
/>

<style
    lang="scss"
    src="./tabs.scss"
/>
