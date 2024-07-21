//! SINGLE CATEGRORY RESPONSE IS DEPRECATED
// export interface Image {
//   data: {
//     id: number;
//     attributes: {
//       name: string;
//       createdAt: string;
//       updatedAt: string;
//       url: string;
//     };
//   };
// }
export interface Image {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    url: string;
    formats: {
      small: Format;
      thumbnail: Format;
    };
  };
}

export interface Format {
  url: string;
}
export interface Billboard {
  data:{
    id: number;
    attributes: {
      label: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      imageUrl: {
        data: Image;
      };
    };  
  }
}

export interface Category {
  data:{
    id: number;
    attributes: {
      name: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      billboard: Billboard;
    };
  }
 
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

export interface Color {
  id: number;
  attributes: {
    name: string;
    value: string;
  };
}

export interface Size {
  id: number;
  attributes: {
    name: string;
    value: string;
  };
}

export interface Product {
  id: number;
  attributes: {
    category: Category; 
    description: string;
    name: string;
    price: string; 
    size: {
      data: Size;
    }; 
    color: {
      data: Color;
    };
    isFeatured: boolean;
    gallery: {
      data: Image[];
    };
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
