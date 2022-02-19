export interface StrapiRes {
  data: ClientData[];
  meta: any;
}

export interface ClientData {
  id: number;
  attributes: ClientAttribute;
}
export interface ClientAttribute {
  firstName: string;
  lastName: string;
  role: string;
}
