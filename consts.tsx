import { IconUserCircle, IconShoppingBag, IconSearch, IconHeart, IconBrandVisa, IconBrandMastercard, IconBrandPaypal } from '@tabler/icons-react';
import { HeaderRightMenu,PaymentMethod,SocialAccount } from './types';
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconBrandYoutube, IconBrandPinterest, IconBrandSnapchat, IconBrandTiktok } from '@tabler/icons-react'



export const headerRightMenu: HeaderRightMenu[] = [
  {
    label: 'Account',
    icon: <IconUserCircle size={22} />,
  },
  {
    label: 'Wishlist',
    icon: <IconHeart size={22} />,
  },
  {
    label: 'Cart',
    icon: <IconShoppingBag size={22} />,
  },
  {
    label: 'Search',
    icon: <IconSearch size={22} />,
  },
];


export const socialAccounts:SocialAccount[] = [
  {
    label: 'Facebook',
    icon: <IconBrandFacebook size={32} />,
    brandColor: '#3b5998'
  },
  {
    label: 'Instagram',
    icon: <IconBrandInstagram size={32} />,
    brandColor: '#e4405f'
  },
  {
    label: 'Twitter',
    icon: <IconBrandTwitter size={32} />,
    brandColor: '#00acee'
  },
  {
    label: 'Youtube',
    icon: <IconBrandYoutube size={32} />,
    brandColor: '#c4302b'
  },
  {
    label: 'Pinterest',
    icon: <IconBrandPinterest size={32} />,
    brandColor: '#c4302b'
  },
  {
    label: 'Snapchat',
    icon: <IconBrandSnapchat size={32} />,
    brandColor: '#fffc00'
  },
  {
    label: 'Tiktok',
    icon: <IconBrandTiktok size={32} />,
    brandColor: '#000000'
  },
];

export const paymentMethods:PaymentMethod[] = [
  {
    label: 'Visa',
    icon: <IconBrandVisa size={32} />,
    brandColor: '#3b5998'
  },
  {
    label: 'Mastercard',
    icon: <IconBrandMastercard size={32} />,
    brandColor: '#e4405f'
  },
  {
    label: 'Paypal',
    icon: <IconBrandPaypal size={32} />,
    brandColor: '#00acee'
  },
];