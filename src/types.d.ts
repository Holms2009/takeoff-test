type TInputHandler = (arg0: string) => void;
type TClickHandler = (arg0: React.MouseEvent) => void;

type TFetchState = 'idle' | 'loading' | 'finished' | 'failed';

type TDataToSend = { [index: string]: string | number };

type TAuthData = {
  email: string;
  password: string;
}

type TContactData = {
  id: number;
  name: string;
  phone: string;
  email: string;
  avatar: string;
}