import { Outlet } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Logo from './components/Logo';

function App() {
  return (
    <div>
      <Logo />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </div>
  );
}

export default App;
