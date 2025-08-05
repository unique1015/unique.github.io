// 当页面完全加载后执行
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有需要动画的区块（section元素）
    const sections = document.querySelectorAll('section');
    
    // 检查元素是否进入视口的函数
    function checkScroll() {
        sections.forEach(section => {
            // 获取元素相对于视口的位置
            const sectionTop = section.getBoundingClientRect().top;
            // 获取窗口高度
            const windowHeight = window.innerHeight;
            
            // 当元素顶部进入视口80%位置时触发
            if (sectionTop < windowHeight * 0.8) {
                section.classList.add('show');
            }
        });
    }
    
    // 页面加载时先检查一次
    checkScroll();
    
    // 滚动时实时检查
    window.addEventListener('scroll', checkScroll);
});