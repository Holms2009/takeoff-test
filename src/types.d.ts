type TInputHandler = (arg0: string) => void;

type TFetchState = 'idle' | 'loading' | 'finished' | 'failed';

type TAuthData = {
  email: string;
  password: string;
}