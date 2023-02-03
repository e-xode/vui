<template>
    <div class="view-form">
        <vui-grid
            col-sm="1"
            col-md="2"
        >
            <vui-grid-unit
                class="examples"
            >
                <template
                    v-for="example in examples"
                    :key="`example-${example.props.id}`"
                >
                    <vui-form>
                        <section>
                            <fieldset>
                                <div class="fieldset-item">
                                    <label for="email">
                                        {{ $t('page.component.form.email') }}
                                    </label>
                                    <div class="input">
                                        <vui-input
                                            id="email"
                                            v-model="form.email"
                                            type="email"
                                            name="email"
                                            required
                                        />
                                        <p>
                                            {{ $t('page.component.form.email.v-model') }}:
                                            {{ form.email }}
                                        </p>
                                    </div>
                                </div>
                            </fieldset>
                        </section>
                        <section>
                            <fieldset>
                                <div class="fieldset-item">
                                    <label for="password">
                                        {{ $t('page.component.form.password') }}
                                    </label>
                                    <div class="input">
                                        <vui-input
                                            id="password"
                                            v-model="form.password"
                                            type="password"
                                            name="password"
                                            required
                                        />
                                        <p>
                                            {{ $t('page.component.form.password.v-model') }}:
                                            {{ form.password }}
                                        </p>
                                    </div>
                                </div>
                            </fieldset>
                        </section>
                        <section class="section--submit">
                            <vui-button
                                type="button"
                                @click.prevent="submit"
                            >
                                {{ $t('page.component.form.submit') }}
                            </vui-button>
                        </section>
                    </vui-form>
                    <div
                        class="highlighted-code"
                        v-html="example.highlighted"
                    />
                </template>
            </vui-grid-unit>
            <vui-grid-unit class="api-options">
                <h2 class="title">
                    {{ $t('page.component.h2.api') }}
                </h2>
                <vui-table
                    item-label="label"
                    item-value="value"
                    :headers="docPropsHeaders"
                    :items="docProps"
                />
            </vui-grid-unit>
        </vui-grid>
    </div>
</template>

<script
    src="./form.mjs"
/>

<style
    lang="scss"
    src="./form.scss"
/>
