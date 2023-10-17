import { Outlet, Link } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import { AiOutlineCalendar } from 'react-icons/ai';

function App() {
  return (
    <div>
      <div className='absolute top-10 left-1/2 transform -translate-x-1/2'>
        <Link to='/'>
          <span className='flex items-center font-LogoFont text-4xl text-orange-500'>
            내일어때
            <AiOutlineCalendar />
          </span>
        </Link>
      </div>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </div>
  );
}

export default App;
