export default {
    attrs: [
    ],
    examples: [
        {
            markup: `
                <vui-form>
                    <section>
                        <fieldset>
                            <div class="fieldset-item">
                                <label for="email">
                                    Email
                                </label>
                                <div class="input">
                                    <vui-input
                                        id="email"
                                        v-model="form.email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </div>
                            </div>
                        </fieldset>
                    </section>
                    <section>
                        <fieldset>
                            <div class="fieldset-item">
                                <label for="password">
                                    Password
                                </label>
                                <div class="input">
                                    <vui-input
                                        id="password"
                                        v-model="form.password"
                                        type="password"
                                        name="password"
                                        required
                                    />
                                </div>
                            </div>
                        </fieldset>
                    </section>
                    <section class="section--submit">
                        <vui-button
                            type="button"
                            @click.prevent="submit"
                        >
                            Submit
                        </vui-button>
                    </section>
                </vui-form>
            `,
            props: {
                id: 'form-1'
            }
        }
    ],
    props: [
    ],
    slots: [
    ]
}
