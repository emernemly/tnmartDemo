import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { FaQuestionCircle, FaHandsHelping } from 'react-icons/fa';
import { MdNotificationsActive, MdKeyboardArrowDown } from 'react-icons/md';
import { IoIosContact } from 'react-icons/io';
import { RiContactsFill } from 'react-icons/ri';
import { FiLogIn } from 'react-icons/fi';
import Link from 'next/link';
const Navbare = () => {
  const [drop, setdrop] = useState(false);
  const Router = useRouter();

  const searchRef = useRef();
  useEffect(() => {
    const closeSearch = (e) => {
      if (!searchRef.current.contains(e.target)) {
        setdrop(false);
      }
    };
    document.addEventListener('mousedown', closeSearch);
    return () => {
      document.removeEventListener('mousedown', closeSearch);
    };
  }, []);
  return (
    <div className="Navigation">
      <div className="inputs">
        <select name="categorie" className="slct">
          <option value="Shipments">Shipments</option>
          <option value="Parcels">Parcels</option>
          <option value="orders">Orders</option>
          <option value="products">Products</option>
          <option value="customers">Customers</option>
        </select>
        <input type="text" placeholder="Search Anything You Want..." />
        <button>
          <AiOutlineSearch />
        </button>
      </div>
      <div className="nav-contant">
        <div className="lg">
          {Router.locale === 'ar' ? (
            <Link
              href={Router.asPath}
              locale={`${Router.locale === 'ar' ? 'en' : 'ar'}`}
            >
              <a>
                <Image src="/img/eng.webp" alt="en" width={20} height={10} />
              </a>
            </Link>
          ) : (
            <Link
              href={Router.asPath}
              locale={`${Router.locale === 'ar' ? 'en' : 'ar'}`}
            >
              <a>
                <Image src="/img/sud.webp" alt="en" width={20} height={10} />
              </a>
            </Link>
          )}
        </div>
        <div className="balance">
          <p>
            Balance:<b>0 DT </b>
          </p>
          <button>Add Balance</button>
        </div>
        <div className="faq">
          <FaQuestionCircle />
        </div>
        <div className="note">
          {' '}
          <MdNotificationsActive />
        </div>
        <div className="compte">
          <div
            className="compte-svg"
            onClick={() => {
              setdrop(!drop);
            }}
          >
            <IoIosContact />
            <MdKeyboardArrowDown />
          </div>
          <div className={`compte-contant ${drop && 'drop'}`} ref={searchRef}>
            <a>
              <IoIosContact />
              <p>
                عبد اللهssssd
                <br></br>
                Seller Plan
              </p>
            </a>
            <a>
              {' '}
              <RiContactsFill /> <p>Profile</p>
            </a>
            <a>
              {' '}
              <FaHandsHelping />
              <p>Complaints And Suggestions </p>
            </a>
            <a>
              {' '}
              <FaQuestionCircle />
              <p>Help</p>
            </a>
            <a>
              {' '}
              <FiLogIn />
              <p>Log Out</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbare;
