/* === script.js === */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 实现预加载动画效果 (Loading Screen)
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    
    // 模拟资源加载时间（例如 1.5 秒），增强科技感
    setTimeout(() => {
        // 隐藏加载屏幕
        loadingScreen.style.opacity = '0';
        loadingScreen.addEventListener('transitionend', () => {
            loadingScreen.style.display = 'none';
        });

        // 淡入显示主体内容
        mainContent.style.opacity = '1';

        // 立即触发 Hero Section 的动画（无须等待滚动）
        document.querySelectorAll('.hero .fade-in-up').forEach(el => {
            el.classList.add('is-visible');
        });
    }, 1500); // 1.5秒后隐藏

    
    // 2. 实现滚动视差动画 (Fade-in-on-scroll)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 元素进入视口时，添加 is-visible 类触发 CSS 动画
                entry.target.classList.add('is-visible');
                // 停止观察，避免重复触发
                observer.unobserve(entry.target); 
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1 // 当元素 10% 进入视口时触发
    });

    // 观察所有带有 fade-in-on-scroll 类的元素
    document.querySelectorAll('.fade-in-on-scroll').forEach(section => {
        observer.observe(section);
    });


    // 3. 实现交互区圆圈动画（高科技感动态效果）
    const interactiveVisual = document.querySelector('.interactive-visual');
    const circles = document.querySelectorAll('.circle');
    
    // 监听交互区进入视口，并启动动画
    const interactiveObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 启动圆圈动画
                circles.forEach((circle, index) => {
                    // 模拟呼吸和波动效果
                    circle.style.animation = `pulse ${2 + index * 0.5}s ease-in-out infinite alternate`;
                });
                interactiveObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    if (interactiveVisual) {
        interactiveObserver.observe(interactiveVisual);
    }
    
    // CSS Keyframes for pulse animation (需要动态注入或写入 CSS)
    const styleSheet = document.createElement("style");
    styleSheet.innerHTML = `
        @keyframes pulse {
            0% { transform: scale(1); opacity: 0.5; }
            100% { transform: scale(1.1); opacity: 0.8; }
        }
    `;
    document.head.appendChild(styleSheet);
});