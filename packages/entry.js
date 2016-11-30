import button from '../packages/button'
import toast from '../packages/toast'
import tabbar from '../packages/tabbar'
import tabItem from '../packages/tabItem'
import buttonGroup from '../packages/buttonGroup'
import navbar from '../packages/navbar'
import listContainer from '../packages/listContainer'
import listItem from '../packages/listItem'

let Yun = {}

const install = function (Vue) {
    if (install.installed) return
    Vue.component(button.name, button)
    Vue.component(toast.name, toast)
    Vue.component(tabbar.name, tabbar)
    Vue.component(tabItem.name, tabItem)
    Vue.component(buttonGroup.name, buttonGroup)
    Vue.component(navbar.name, navbar)
    Vue.component(alert.name, alert)
    Vue.component(listContainer.name, listContainer)
    Vue.component(listItem.name, listItem)
}

Yun = {
    button,
    toast,
    tabbar,
    tabItem,
    buttonGroup,
    navbar,
    alert,
    listContainer,
    listItem
}

console.log(Yun)

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

module.exports = {
    install,
    button,
    toast,
    tabbar,
    tabItem,
    buttonGroup,
    navbar,
    alert,
    listContainer,
    listItem
}
