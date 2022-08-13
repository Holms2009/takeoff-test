type TInputHandler = (arg0: string) => void;
type TClickHandler = (arg0: React.MouseEvent) => void;

type TFetchState = 'idle' | 'loading' | 'finished' | 'failed';

type TAuthData = {
  email: string;
  password: string;
}