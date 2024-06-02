import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { BookingSummary } from '../components/BookingSummary/BookingSummary';

document.querySelector('#root').innerHTML = render(
  <>
    <BookingSummary />
  </>
);
