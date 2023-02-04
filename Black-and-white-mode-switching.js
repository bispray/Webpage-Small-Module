const themeButton = document.getElementById('theme-button')// 黑白切换按钮
const darkTheme = 'dark-theme'// 黑夜主题
const iconTheme = 'ri-sun-line'// 黑夜主题下展示的图标(太阳、月亮的切换)

// 获取本地存储
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// 获得当前主题
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// 判断本地存储内是否选定了主题，并根据本地存储的內容更换主题
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// 通过黑白切换按钮更换主题
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // 更新本地存储
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



//在页面上需要有一个id为theme-button的模块
//theme-button模块下有图表样式，比如<i class="ri-moon-line change-theme" id="theme-button"></i>
