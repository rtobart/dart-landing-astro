import { addAndRemoveClasses } from "./remove-and-add-classes.astro";

export function handleMediaQueryChange (blocks:any, mediaQuery: MediaQueryList, desktopClasses: any, mobileClasses: any) {
  if (mediaQuery.matches) {
    addAndRemoveClasses(blocks, desktopClasses, mobileClasses);
  } else {
    addAndRemoveClasses(blocks, mobileClasses, desktopClasses);
  }
};
