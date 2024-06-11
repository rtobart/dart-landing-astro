export function handleDOMContentLoaded(blocks: any) {
    let indexActiveBlock = 0;
    function activateBlock() {
        blocks.forEach(function(block: any, index: any) {
            if (isInViewport(block) && indexActiveBlock !== index) {
                const list = [0, 1, 2, 3, 4]
                console.log('####### agrega active a ', index);
                block.classList.add('active');
                indexActiveBlock = index;
                list.forEach((item) => {
                    if (indexActiveBlock !== item) {
                        blocks[item].classList.remove('active');
                    }
                });
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
    window.addEventListener('scroll', activateBlock);
}