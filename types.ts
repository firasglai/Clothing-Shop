
export interface Image {
  data: {
    id: number;
    attributes: {
      name: string;
      createdAt: string;
      updatedAt: string;
      url: string;
    };
  };
}
export interface Billboard {
  data:{
    id: number;
    attributes: {
      label: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      imageUrl: Image;
    };
  }
}

export interface Category {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    billboard: Billboard;
  };
}
export interface CategoryResponse {
  data: Category[];
  meta: Meta;
}
//Fr
export interface ProductsResponse {
  data: Product[];
  meta: Meta;
}

export interface SingleCategoryResponse {
  data: {
    id: number;
    attributes: {
      name: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      billboard:Billboard;
  };
  meta: Meta;
}
}




export interface Size {
  data: {
    id: number;
    attributes: {
      name: string;
      value: string;
    };
  };
}
export interface Color {
  data: {
    id: number;
    attributes: {
      name: string;
      value: string;
    };
  };
}

export interface Product {
  id: number;
  attributes: {
    category: Category; // TODO: One To One
    description: string;
    name: string;
    price: string; // TODO: Decimal
    size: Size; // TODO: One To One
    color: Color; // TODO: One To One
    isFeatured: boolean;
    image1: Image;
  };
}
//? images.data[].attributes.url

export interface Meta {
  pagination: {
    start: number;
    limit: number;
    total: number;
  };
}
