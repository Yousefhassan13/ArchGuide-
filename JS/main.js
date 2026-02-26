/**
 * ArchGuide Main Script - Optimized Version
 */

// 1. إدارة أحداث التمرير بكفاءة
window.addEventListener('scroll', () => {
    // استخدام requestAnimationFrame لتحسين الأداء أثناء التمرير
    requestAnimationFrame(handleScrollEffects);
});

function handleScrollEffects() {
    const docElem = document.documentElement;
    const scrollPos = docElem.scrollTop || document.body.scrollTop;
    const height = docElem.scrollHeight - docElem.clientHeight;

    // أ. تحديث شريط التقدم
    const progressBar = document.getElementById("myBar");
    if (progressBar && height > 0) {
        const scrolled = (scrollPos / height) * 100;
        progressBar.style.width = `${scrolled}%`;
    }

    // ب. تأثير ظهور العناصر (Scroll Appear)
    const screenPosition = window.innerHeight / 1.2;
    
    // مصفوفة بالعناصر التي تريد تطبيق التأثير عليها لتجنب التكرار
    const elementsToAnimate = [
        { selector: '.side-text', className: 'side-text-appear' },
        { selector: '.sideImage', className: 'sideImage-appear' }
    ];

    elementsToAnimate.forEach(item => {
        const element = document.querySelector(item.selector);
        if (element && element.getBoundingClientRect().top < screenPosition) {
            element.classList.add(item.className);
        }
    });
}

// 2. التحكم في القائمة الجانبية (Side Menu)
function sideMenu(isOpen) {
    const menu = document.getElementById('side-menu');
    if (!menu) return;

    // تحسين: الاعتماد على Boolean (true/false) أو قيم مباشرة
    // 0 للفتح، 1 للإغلاق كما في كودك الأصلي
    menu.style.transform = (isOpen === 0) ? 'translateX(0)' : 'translateX(-100%)';
    
    // إدارة خاصية الـ Overflow لمنع التمرير عند فتح القائمة (اختياري)
    document.body.style.overflow = (isOpen === 0) ? 'hidden' : 'auto';
}

// 3. دالة التحقق من الشروط (Checkbox)
function goFurther() {
    const checkbox = document.getElementById("chkAgree");
    const submitBtn = document.getElementById('btnSubmit');
    
    if (!checkbox || !submitBtn) return;

    const isChecked = checkbox.checked;
    
    // تحسين: استخدام فئات CSS (Classes) بدلاً من تعديل الـ Style مباشرة لجعل الكود أنظف
    submitBtn.style.background = isChecked 
        ? 'linear-gradient(to right, #630404, #641616)' 
        : 'lightgray';
    
    submitBtn.style.cursor = isChecked ? 'pointer' : 'not-allowed';
    submitBtn.disabled = !isChecked; // إضافة خاصية disabled الفعلية
}

// 4. تسجيل الدخول
function loginWithGoogle() {
    // تصحيح: assign تأخذ معامل واحد فقط، إذا أردت نافذة جديدة استخدم window.open
    window.open("https://accounts.google.com", "_blank");
}




window.addEventListener('scroll', () => {
    handleScrollEffects();
});

function handleScrollEffects() {
    const docElem = document.documentElement;
    const scrollPos = docElem.scrollTop || document.body.scrollTop;
    const height = docElem.scrollHeight - docElem.clientHeight;

    // 1. شريط التقدم
    const progressBar = document.getElementById("myBar");
    if (progressBar && height > 0) {
        const scrolled = (scrollPos / height) * 100;
        progressBar.style.width = scrolled + "%";
    }

    // 2. تغيير لون الـ Nav عند التمرير (بديل لكود jQuery القديم)
    const nav = document.querySelector('nav');
    if (scrollPos > 50) {
        nav.classList.add('black');
    } else {
        nav.classList.remove('black');
    }

    // 3. ظهور العناصر تدريجياً
    const screenPosition = window.innerHeight / 1.3;
    const elements = [
        { sel: '.side-text', cls: 'side-text-appear' },
        { sel: '.sideImage', cls: 'sideImage-appear' }
    ];

    elements.forEach(item => {
        const el = document.querySelector(item.sel);
        if (el && el.getBoundingClientRect().top < screenPosition) {
            el.classList.add(item.cls);
        }
    });
}

// التحكم في القائمة الجانبية
function sideMenu(action) {
    const menu = document.getElementById('side-menu');
    if (!menu) return;
    // 0 فتح ، 1 إغلاق
    menu.style.transform = (action === 0) ? 'translateX(0)' : 'translateX(-100%)';
}
