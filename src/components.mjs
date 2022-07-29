import vbtn from '@/components/button/button.vue'
import vcard from '@/components/card/card.vue'
import vcode from '@/components/code/code.vue'
import vcol from '@/components/col/col.vue'
import vcols from '@/components/cols/cols.vue'
import vdropdown from '@/components/dropdown/dropdown.vue'
import vfooter from '@/components/footer/footer.vue'
import vheader from '@/components/header/header.vue'
import vinput from '@/components/input/input.vue'
import vlist from '@/components/list/list.vue'
import vpage from '@/components/page/page.vue'
import vnav from '@/components/nav/nav.vue'
import vtab from '@/components/tab/tab.vue'
import vtabs from '@/components/tabs/tabs.vue'
import vtag from '@/components/tag/tag.vue'
import vtags from '@/components/tags/tags.vue'

const vui = {
    install(vue) {
        [
            vbtn,
            vcard,
            vcode,
            vcol,
            vcols,
            vdropdown,
            vfooter,
            vheader,
            vinput,
            vlist,
            vnav,
            vpage,
            vtab,
            vtabs,
            vtag,
            vtags
        ].forEach(component => {
            vue.component(component.name, component)
        })
    }
}

export default vui
