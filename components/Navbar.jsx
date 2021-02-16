import Link from 'next/link';
import {auth} from '../config/fire-config';
import {useRouter} from 'next/router';

export default function Navbar() {
  const user = auth.currentUser;
  const router = useRouter();

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        console.log('logout');
        router.push('/');
      })
      .catch(err => {
        console.error(err);
      });
  };

  if (!user) {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container'>
          <Link href='/'>
            <a className='navbar-brand' rel='dofollow'>
              DEALER CAR
            </a>
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav ml-auto'>
              <Link href='/users/login'>
                <a className='nav-link' rel='nofollow'>
                  Login <span className='sr-only'>(current)</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container'>
          <Link href='/'>
            <a className='navbar-brand' rel='dofollow'>
              DEALER CAR
            </a>
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav ml-auto'>
              <Link href='/'>
                <a className='nav-link' rel='nofollow' onClick={handleLogout}>
                  Logout <span className='sr-only'></span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <style jsx>{`
          .navbar {
            height: 100%;
          }
        `}</style>
      </nav>
    );
  }
}
