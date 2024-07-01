interface AssetReference {
  _ref: string;
  _type: "reference";
}

interface Image {
  _type: "image";
  asset: AssetReference;
}

interface Tool {
  name: string;
  logo: Image;
  _key: string;
}

interface Skill {
  name: string;
  logo: Image;
  _key: string;
}

export interface SkillSet {
  _type: "skill";
  _id: string;
  _updatedAt: string;
  tools: Tool[];
  skills: Skill[];
  _createdAt: string;
  _rev: string;
}
