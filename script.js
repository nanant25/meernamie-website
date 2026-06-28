// ฟังก์ชันกดขยายรูปภาพขนาดเต็มใน Modal
function openFullImage(element) {
    const imgElement = element.querySelector('img');
    if (imgElement) {
        const imgSrc = imgElement.src;
        const fullImg = document.getElementById('fullImage');
        if (fullImg) {
            fullImg.src = imgSrc;
            var myModal = new bootstrap.Modal(document.getElementById('imageModal'));
            myModal.show();
        }
    }
}

// ระบบจัดการแถบเมนู (Navbar) อัจฉริยะสำหรับโทรศัพท์มือถือ
document.addEventListener('DOMContentLoaded', function() {
    var menuCollapse = document.getElementById('navbar1');
    var navLinks = document.querySelectorAll('.nav-link');

    if (menuCollapse && typeof bootstrap !== 'undefined') {
        // ให้ Bootstrap จัดการระบบเปิด-ปิด แผงเมนูผ่าน Attribute ใน HTML ตามปกติ
        var bsCollapse = bootstrap.Collapse.getOrCreateInstance(menuCollapse, { toggle: false });

        // ปรับการดักจับการคลิกลิงก์เมนูให้ฉลาดขึ้น
        navLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                // เงื่อนไขสำคัญ: ถ้าลิงก์ที่ถูกกดเป็นปุ่มหัวข้อ Dropdown (เช่น Service, Performance)
                // จะปล่อยให้ระบบกางรายการย่อยออกมาเองตามปกติ โดยไม่สั่งให้หน้าต่างเมนูหดปิดหนีไปไหนเด็ดขาด
                if (link.classList.contains('dropdown-toggle')) {
                    return; 
                }

                // แต่ถ้าคลิกลิงก์เมนูทั่วไป (เช่น Home, About) หรือปุ่มเปิด Contact Modal
                // แผงเมนูจะค่อยๆ หดปิดตัวลงสวยๆ เพื่อให้หน้าเว็บสไลด์ไปยังตําแหน่งนั้น
                if (menuCollapse.classList.contains('show')) {
                    bsCollapse.hide();
                }
            });
        });

        // หลังจากกดเปิดรายการย่อยแล้ว เมื่อผู้ใช้จิ้มเลือกเมนูข้างใน Dropdown (คลาส .dropdown-item)
        // แถบเมนูใหญ่ทั้งหมดจะปิดตัวลงทันทีเพื่อความสะดวกในการเข้าถึงเนื้อหาเว็บ
        var dropdownItems = document.querySelectorAll('.dropdown-item');
        dropdownItems.forEach(function(item) {
            item.addEventListener('click', function() {
                if (menuCollapse.classList.contains('show')) {
                    bsCollapse.hide();
                }
            });
        });
    }
});