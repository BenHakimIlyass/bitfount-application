import React from 'react';

const purgeByValue = (obj: any, value: any) => {
  const newObj = { ...obj };

  Object.keys(newObj).map((key) => {
    if (newObj[key] === value) delete newObj[key];
  });
  return newObj;
};
/**
 *
 * @param {React.RefObject<HTMLElement> | null} ref - Target ref
 * @param {function} onView - callback which will be executed onView
 * @param {string} rootMargin - This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections
 * @param {fucntion} onNonSupport - Callback which will be executed when browser does not support intersectionObserver
 * @param {HTMLElement} root - Root viewport
 * @param {number|Array<number>} threshold - Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed, ranges from 0 to 1.0, where 1.0 means every pixel is visible in the viewport.
 *
 */

type Props = {
  ref: React.RefObject<HTMLElement> | null;
  onView: () => void;
  rootMargin?: string;
  onNonSupport?: () => void;
  root?: HTMLElement;
  threshold?: number | Array<number>;
};

const useOnScreen = (
  {
    ref,
    rootMargin = '0px',
    onView,
    onNonSupport,
    root,
    threshold = 1.0,
  }: Props,
  deps = []
) => {
  const isNotSupported = () =>
    !('IntersectionObserver' in window) ||
    !('IntersectionObserverEntry' in window) ||
    !('intersectionRatio' in window.IntersectionObserverEntry.prototype);

  React.useEffect(() => {
    if (isNotSupported()) {
      if (onNonSupport) onNonSupport();
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        onView();
      }
    }, purgeByValue({ rootMargin, threshold, root }, undefined));
    if (ref?.current) observer.observe(ref.current);

    return () => {
      if (ref?.current) observer.unobserve(ref.current);
    };
  }, [...deps, root]);
};
export default useOnScreen;
