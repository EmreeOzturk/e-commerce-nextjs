import { Mongoose } from 'mongoose';
import { MongoClient } from 'mongodb';

/* eslint-disable no-var */

declare global {
  var mongoose: {
    promise: Promise<Mongoose> | null;
    conn: Mongoose | null;
  };
}

export type HeaderRightMenu = {
  label: string;
  icon: React.ReactNode;
};

export type SocialAccount = {
  label: string;
  icon: React.ReactNode;
  brandColor: string;
};

export type PaymentMethod = {
  label: string;
  icon: React.ReactNode;
  brandColor: string;
};


