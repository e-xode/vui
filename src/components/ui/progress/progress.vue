<template>
    <div
        :id="componentId"
        :class="['vui-progress',$attrs.class]"
    >
        <div
            :class="[
                'vui-progress-bar',
                `vui-progress-bar--${layout}`
            ]"
        >
            <div
                class="vui-progress-bar-cursor"
                :style="{ width }"
            />
        </div>
    </div>
</template>

<script
    src="./progress.mjs"
/>

<style
    lang="scss"
    src="./progress.scss"
/>
