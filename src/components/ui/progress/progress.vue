<template>
    <div
        :id="componentId"
        :class="[
            'vui-progress'
        ]"
    >
        <div class="vui-progress-bar">
            <div
                class="vui-progress-bar-cursor"
                :style="{ width: width }"
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
