<template>
    <div class="view-form">
        <vui-form>
            <section class="section">
                <fieldset class="fieldset">
                    <div class="fieldset-item">
                        <label
                            class="label"
                            for="email"
                        >
                            {{ $t('page.component.form.email') }}
                        </label>
                        <div class="input">
                            <vui-input
                                id="email"
                                v-model="form.email"
                                type="email"
                                name="email"
                                class="input"
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
            <section class="section">
                <fieldset class="fieldset">
                    <div class="fieldset-item">
                        <label
                            class="label"
                            for="password"
                        >
                            {{ $t('page.component.form.password') }}
                        </label>
                        <div class="input">
                            <vui-input
                                id="password"
                                v-model="form.password"
                                type="password"
                                name="password"
                                class="input"
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
            <section class="section section-submit">
                <vui-button
                    type="button"
                    @click.prevent="submit"
                >
                    {{ $t('page.component.form.submit') }}
                </vui-button>
            </section>
        </vui-form>
    </div>
</template>

<script
    src="./form.mjs"
/>

<style
    lang="scss"
    src="./form.scss"
/>
