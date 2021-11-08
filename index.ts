import './style.css';

import { fromEvent, map, Observable } from 'rxjs';

const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');

const span = document.querySelector('span');

const observable1 = Rx.Observable.fromEvent(input1, 'input');

const observable2 = Rx.Observable.fromEvent(input2, 'input');

observable1
  .mergeMap((event1) => {
    return observable2.map(
      (event2) => event1.target.value + ' ' + event2.target.value
    );
  })
  .subscribe((combinedValue) => (span.textContent = combinedValue));
