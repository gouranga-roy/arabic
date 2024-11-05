(function($){

    /*
        1. Data Background Function
        2. Scroll top button
        3. Offcanvus toggle
        4. Theme Slider Functions
        5. Pricing Range Slider
        6. Nice Select
        7. Checkout Toggle
        8. Header Sticky
        9. Mobile Menu
        10. Header Search 
        11. Preloader
        12. Fancybox
        13. Countdown
        14. Cart Drawer
        15. Wow Js
        16. Count Down
        17. Accordion Boxs
    */

    // Pricing Tab
    const tab = document.querySelector('.tabs');
    const tabButtons = tab.querySelectorAll('[role="tab"]');
    const tabPanels = Array.from(tab.querySelectorAll('[role="tabpanel"]'));

    function tabClickHandler(e) {
        //Hide All Tabpane
        tabPanels.forEach(panel => {
            panel.hidden = 'true';
        });
        
        //Deselect Tab Button
        tabButtons.forEach( button => {
            button.setAttribute('aria-selected', 'false');
        });
        
        //Mark New Tab
        e.currentTarget.setAttribute('aria-selected', 'true');
        
        //Show New Tab
        const { id } = e.currentTarget;
        
        const currentTab = tabPanels.find(
            panel => panel.getAttribute('aria-labelledby') === id
        );
        
        currentTab.hidden = false;
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', tabClickHandler);
    });

    const buttons = document.querySelectorAll('.price-filter-buttons .prFilterBtn');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });


})(jQuery)

