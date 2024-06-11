export function handleDOMContentLoaded() {
    const blocks = document.querySelectorAll('.centered-block');
    function activateBlock() {
        blocks.forEach(function(block) {
            if (isInViewport(block)) {
                block.classList.add('active');
            } else {
                block.classList.remove('active');
            }
        });
    }
    function isInViewport(item: any) {
        const rect = item.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    activateBlock();
    window.addEventListener('scroll', function() {
        activateBlock();
    });
}
