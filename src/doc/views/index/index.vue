<script>
import {
    translatable
} from '@/composables/index.mjs'

import langs from '@/doc/views/index/translate/index.mjs'
import jsonPackage from '@/../package.json'

export default {
    name: 'ViewIndex',
    computed: {
        version () {
            return jsonPackage.version
        }
    },
    created () {
        translatable(langs)
    }
}
</script>
<template>
    <div class="view-index">
        <h1>
            {{ $t('page.index.h1') }}
        </h1>
        <i class="fa-brands fa-vuejs" />
        <div class="description">
            <p>
                {{ $t('page.index.description') }}
            </p>
            <p>
                v{{ version }}
            </p>
        </div>
        <vui-button
            :route="{ name: 'ViewStart' }"
            class="vui-button--get-started"
        >
            <span class="vui-button-holder">
                <i class="vui-button-icon fa-solid fa-book-open-reader" />
                {{ $t('page.index.get-started') }}
            </span>
        </vui-button>
        <a
            class="vui-button vui-button--with-icon vui-button--github"
            href="https://github.com/e-xode/v-ui"
        >
            <span class="vui-button-holder">
                <i class="vui-button-icon fa-brands fa-github" />
                {{ $t('page.index.github') }}
            </span>
        </a>
    </div>
</template>

<style lang="scss">
@import "@/scss/import.scss";

.view-index {
    text-align: center;

    h1 {
        font-size: 2rem;
        text-transform: none;
    }

    .fa-brands.fa-vuejs {
        display: block;
        font-size: 15rem;
        color: $vui-color-green;
    }

    .description {
        p {
            max-width: 400px;
            margin: 0 auto;
            font-size: 1rem;
            line-height: 1.2rem;
        }
    }

    .vui-button {
        margin: 1rem;

        .vui-button-holder {
        }

        &.vui-button--get-started {
            @include animate('vui-button--get-started');
        }

        &.vui-button--github {
            @include animate('vui-button--get-started');
            background-color: lighten($vui-color-black, 5%);
            border-color: $vui-color-black;

            .vui-button-holder,
            .vui-button-icon {
                color: $vui-color-grey-light;
            }

            &:hover {
                background-color: lighten($vui-color-black, 30%);
            }
        }
    }
}
</style>
