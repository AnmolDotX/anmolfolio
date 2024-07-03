export interface ContactData {
    socials: {
      logo: {
        _type: string;
        asset: {
          _ref: string;
          _type: string;
        };
      };
      _key: string;
      platform: string;
      url: string;
    }[];
    _updatedAt: string;
    email: string;
    _createdAt: string;
    _rev: string;
    _type: string;
    contactNumber: string;
    _id: string;
  }