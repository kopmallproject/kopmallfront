import DesktopNavBars from './components/DesktopNavBars';
import MobileNavBar from './components/MobileNavBar';

function NavBar() {
  return (
    <nav className="w-full">
      <MobileNavBar />
      <DesktopNavBars />
    </nav>
  );
}
export default NavBar;
