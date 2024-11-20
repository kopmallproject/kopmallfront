import DesktopNavBar from './components/DesktopNavBar';
import MobileNavBar from './components/MobileNavBar';

function NavBar() {
  return (
    <nav className="w-full">
      <MobileNavBar />
      <DesktopNavBar />
    </nav>
  );
}
export default NavBar;
