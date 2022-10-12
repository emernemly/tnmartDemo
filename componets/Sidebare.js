import React from 'react';
import { GrOverview } from 'react-icons/gr';
import {
  FaMoneyCheck,
  FaStore,
  FaBoxOpen,
  FaWarehouse,
  FaTshirt,
  FaDropbox,
  FaHandPointUp,
} from 'react-icons/fa';
import { RiMoneyDollarCircleFill, RiTeamFill } from 'react-icons/ri';
import { TbReportSearch, TbUserSearch } from 'react-icons/tb';
import {
  MdLocalGroceryStore,
  MdLocationOn,
  MdLocalShipping,
  MdOutlineConnectWithoutContact,
} from 'react-icons/md';
import { HiDocumentReport, HiShoppingBag } from 'react-icons/hi';
import {
  AiFillCalculator,
  AiFillSetting,
  AiTwotoneShopping,
} from 'react-icons/ai';
import { GoMegaphone } from 'react-icons/go';
import useTransition from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
const Sidebare = () => {
  const { t } = useTransition();
  const Router = useRouter();
  return (
    <div className={`sidebar ${Router.locale === 'ar' && 'rigth'}`}>
      <div className={`store-area ${Router.locale === 'ar' && 'h-ar'}`}>
        <div className="svg">
          <HiShoppingBag />
        </div>
        <div className="store-info">
          <p>{t('common:store')}</p>
          <p>
            <FaHandPointUp />
            <span> {t('common:visit')}</span>
          </p>
        </div>
      </div>
      <ul className={`${Router.locale === 'ar' && 'h-ar'}`}>
        <li className="sidebar-link path">
          <a>
            <GrOverview />
            <span> {t('common:Overview')}</span>
          </a>
        </li>
        <li className="sidebar-link">
          <a>
            <FaMoneyCheck />
            <span> {t('common:Package')}</span>
          </a>
        </li>{' '}
        <li className="sidebar-link">
          {' '}
          <a>
            <RiMoneyDollarCircleFill /> <span> {t('common:Finances')}</span>
          </a>{' '}
        </li>{' '}
        <li className="sidebar-link svg">
          {' '}
          <a>
            <TbReportSearch />
            <span> {t('common:Reports')}</span>
          </a>
        </li>{' '}
        <li className="sidebar-link clr">
          {' '}
          <span> {t('common:Purchase-And-Import')}</span>
        </li>{' '}
        <li className="sidebar-link">
          {' '}
          <a>
            <FaStore />
            <span>{t('common:Personal-Shopper')}</span>
          </a>
        </li>{' '}
        <li className="sidebar-link">
          <a>
            <MdLocalGroceryStore />
            <span>{t('common:Shopper-Orders')}</span>
          </a>
        </li>{' '}
        <li className="sidebar-link svg ">
          {' '}
          <a>
            <HiDocumentReport />
            <span>{t('common:Purchases-Reports')}</span>
          </a>
        </li>{' '}
        <li className="sidebar-link clr">
          <span>{t('common:Shipping-And-Storage')}</span>
        </li>{' '}
        <li className="sidebar-link">
          {' '}
          <a>
            <MdLocationOn /> <span>{t('common:Shipping-Addresses')}</span>
          </a>
        </li>{' '}
        <li className="sidebar-link">
          {' '}
          <a>
            <AiFillCalculator />
            <div>
              <span>{t('common:Shipping-Fee-Calculator')}</span>
            </div>
          </a>{' '}
        </li>{' '}
        <li className="sidebar-link">
          <a>
            <TbUserSearch />{' '}
            <div>
              <span>{t('common:Inquiry-About-A-Product')}</span>
            </div>
          </a>
        </li>{' '}
        <li className="sidebar-link">
          {' '}
          <a>
            <MdLocalShipping /> <span>{t('common:Shipments')}</span>
          </a>
        </li>{' '}
        <li className="sidebar-link">
          <a>
            <FaBoxOpen /> <span>{t('common:Parcels')}</span>
          </a>{' '}
        </li>{' '}
        <li className="sidebar-link">
          <a>
            <FaWarehouse />
            <span>{t('common:WareHouses')}</span>
          </a>{' '}
        </li>{' '}
        <li className="sidebar-link clr">
          <span>{t('common:Electronic-Store')}</span>
        </li>{' '}
        <li className="sidebar-link">
          <a>
            <AiFillSetting /> <span>{t('common:Store-Settings')}</span>
          </a>
        </li>{' '}
        <li className="sidebar-link">
          <a>
            <FaTshirt />
            <span>{t('common:Products')}</span>
          </a>{' '}
        </li>{' '}
        <li className="sidebar-link ">
          <a>
            <AiTwotoneShopping /> <span>{t('common:Orders')}</span>
          </a>{' '}
        </li>{' '}
        <li className="sidebar-link">
          <a>
            <FaDropbox /> <span>{t('common:Drop-Shipping')}</span>
          </a>{' '}
        </li>{' '}
        <li className="sidebar-link">
          <a>
            <GoMegaphone /> <span>{t('common:E-Marketing')}</span>
          </a>{' '}
        </li>{' '}
        <li className="sidebar-link clr">
          <span>{t('common:Others')}</span>
        </li>{' '}
        <li className="sidebar-link">
          {' '}
          <a>
            <MdOutlineConnectWithoutContact />{' '}
            <span>{t('common:Ambassador')}</span>
          </a>
        </li>{' '}
        <li className="sidebar-link">
          {' '}
          <a>
            <RiTeamFill />
            <span>{t('common:Staff')}</span>
          </a>{' '}
        </li>{' '}
      </ul>
    </div>
  );
};

export default Sidebare;
