export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface IRegisterFormValues {
  name: string;
  email: string;
  password: string;
  confirmpassword?: string;
}

export interface ILoginFormValues {
  email: string;
  password: string;
}

export interface IUSerContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser | null;
  userRegister: (formData: IRegisterFormValues) => Promise<void>;
  userLogin: (formData: ILoginFormValues) => Promise<void>;
  userLogout: () => void;
}

export interface ICardContext {
  products: IProducts[];
  setProducts: React.Dispatch<React.SetStateAction<IProducts[]>>;
  productsCart: IProducts[];
  setProductsCart: React.Dispatch<React.SetStateAction<IProducts[]>>;
  searchProducts: string;
  setSearchProducts: React.Dispatch<React.SetStateAction<string>>;
  searchItemList: IProducts[];
  searchItem: (event: React.ChangeEvent | any) => void;
  addFood: (product: IProducts) => void;
  removeFood: (product: IProducts) => void;
  removeAllFood: () => void;
}

export interface IProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface IProductsProps {
  products: IProducts;
}

export interface ModalProps {
  onClose: () => void;
}
