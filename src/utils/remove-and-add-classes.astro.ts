export const addAndRemoveClasses = (blocks:any, classesToAdd:[], classesToRemove:[]) => {
    blocks.forEach(function (block:any) {
        classesToAdd.forEach(function (classToAdd) {
            block.classList.add(classToAdd);
        });
    });
    blocks.forEach(function (block:any) {
        classesToRemove.forEach(function (classToRemove) {
            block.classList.remove(classToRemove);
        });
    });
}