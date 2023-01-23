declare namespace Expert {
  interface ChatOffer {
    type: string;
    price: number;
    limit: number;
    limitIsExhausted: boolean;
    offer: null;
  }

  interface Language {
    code: string;
    name: string;
    nativeName: string;
  }

  interface Specialization {
    id: number;
    name: string;
  }

  interface Subscription {
    type: string;
  }

  interface Video {
    src: null;
  }

  interface Entity {
    id: string;
    name: string;
    astrologyType: string;
    image: string;
    imageMini: string;
    slogan: string;
    description: string;
    descriptionExperience: string;
    rating: number;
    experience: number;
    feedbackCount: number;
    totalOrders: number;
    sortOrder: number;
    joinedTime: number;
    languages: Language[];
    specializations: Specialization[];
    certificates: [];
    offers: [];
    video: Video;
    chat_offers: ChatOffer[];
    subscription: Subscription;
    isPersonal: boolean;
    isFollowed: boolean;
    status: 'online' | 'offline' | 'busy';
  }

  interface GetSingleResponse {
    data: Entity;
  }

  interface GetListResponse {
    data: Entity[];
    total: number;
  }

  type Picked = Pick<Expert.Entity,
    | 'id'
    | 'name'
    | 'status'
    | 'image'
    | 'specializations'
    | 'description'
    | 'experience'
    | 'totalOrders'
    >
}
