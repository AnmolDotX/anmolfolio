interface ImageAsset {
    _ref: string;
    _type: string;
  }
  
  interface Thumbnail {
    _type: string;
    asset: ImageAsset;
  }
  
  export interface ProjectResponseInterface {
    _type: string;
    description: string;
    _id: string;
    _updatedAt: string;
    deployedLink: string;
    thumbnail: Thumbnail;
    githubLink: string;
    _createdAt: string;
    _rev: string;
    projectName: string;
  }