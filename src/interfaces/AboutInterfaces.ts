interface ImageAsset {
  _type: string;
  _ref: string;
}

interface Logo {
  _type: string;
  asset: ImageAsset;
}

interface Social {
  _key: string;
  url: string;
  name: string;
  logo: Logo;
}

export interface AboutInterfaces {
  bio: string;
  _id: string;
  socials: Social[];
  _rev: string;
  _type: string;
  name: string;
  _updatedAt: string;
  currentPosition: string;
  _createdAt: string;
  currentCompany: string;
}
