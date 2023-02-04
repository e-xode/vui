<template>
    <div
        :id="componentId"
        :class="[
            'vui-list',
            { 'vui-list--flat': attr('flat') }
        ]"
    >
        <div
            v-if="title"
            class="vui-list-title"
        >
            <slot
                name="placeholder"
                :item="title"
            >
                {{ title }}
            </slot>
        </div>
        <div class="vui-list-items">
            <div
                v-for="(item, index) in filteredItems"
                :key="`list-item-${index}`"
                :class="[
                    { 'vui-list-items-item': !isGroup(item) },
                    { 'vui-list-items-group-item': isGroup(item) }
                ]"
            >
                <template v-if="!isGroup(item)">
                    <div
                        :class="[
                            { 'vui-list-items-item-label': !isGroup(item) },
                            { 'vui-list-items-item-label--selectable': selectable },
                            { 'vui-list-items-item-label--selected': isSelected(item) }
                        ]"
                        @click="() => onClick(item)"
                    >
                        <i
                            v-if="item.icon"
                            :class="[
                                'vui-list-items-item-label-icon',
                                item.icon
                            ]"
                        />
                        <slot
                            name="item"
                            :index="index"
                            :item="item"
                            :item-label="itemLabel"
                            :item-value="itemValue"
                        >
                            {{
                                itemValue
                                    ? item[itemLabel]
                                    : item
                            }}
                        </slot>
                    </div>
                </template>
                <template v-if="isGroup(item)">
                    <div
                        :class="[
                            'vui-list-items-item-group-label',
                            { 'vui-list-items-item-group-label--toggled': isToggled(index) },
                            { 'vui-list-items-item-group-label--animating': isAnimating(index) },
                            { 'vui-list-items-item-group-label--open': open[index] }
                        ]"
                        @click.stop="() => onToggle(index)"
                    >
                        <slot
                            name="group-item"
                            :index="index"
                            :item="item"
                            :item-label="itemLabel"
                            :item-value="itemValue"
                        >
                            {{
                                itemValue
                                    ? item[itemLabel]
                                    : item
                            }}
                        </slot>
                    </div>
                    <template v-if="open[index]">
                        <div
                            v-for="(childitem, j) in item[itemValue]"
                            :key="`list-group-item-${j}`"
                            :class="[
                                'vui-list-items-item-label',
                                { 'vui-list-items-item-label--selectable': selectable },
                                { 'vui-list-items-item-label--selected': isSelected(childitem) },
                            ]"
                            @click="() => onClick(childitem)"
                        >
                            <i
                                v-if="childitem.icon"
                                :class="[
                                    'vui-list-items-item-label-icon',
                                    childitem.icon
                                ]"
                            />
                            <slot
                                name="item"
                                :index="j"
                                :item="childitem"
                                :item-label="itemLabel"
                                :item-value="itemValue"
                            >
                                {{
                                    itemValue
                                        ? childitem[itemLabel]
                                        : childitem
                                }}
                            </slot>
                        </div>
                    </template>
                </template>
            </div>
        </div>
    </div>
</template>

<script
    src="./list.mjs"
/>

<style
    lang="scss"
    src="./list.scss"
/>
