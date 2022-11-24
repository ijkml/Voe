// on side-nav state...
const [navIsOpen, toggleSideNav] = useToggle();

function closeSideNav() {
  navIsOpen.value = false;
}

function showSideNav() {
  navIsOpen.value = true;
}

// one ring to rule them all...
export { navIsOpen, toggleSideNav, showSideNav, closeSideNav };
